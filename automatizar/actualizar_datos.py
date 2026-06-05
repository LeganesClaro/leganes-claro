"""
Leganés Claro — Script de actualización automática
====================================================
Monitoriza el portal de transparencia de Leganés diariamente.
Solo llama a Claude cuando detecta contenido genuinamente nuevo.

Qué vigila:
  - Actas de plenos (PDF desde sede electrónica con Playwright,
    y artículos de medios locales como respaldo)
  - Contratos y licitaciones
  - Subvenciones y convenios

REQUISITOS:
  pip install anthropic requests beautifulsoup4 pypdf2 playwright
  playwright install chromium

USO:
  python actualizar_datos.py                  # revisa todo
  python actualizar_datos.py --solo-plenos
  python actualizar_datos.py --solo-contratos
  python actualizar_datos.py --forzar         # re-procesa aunque ya esté en caché

CONFIGURACIÓN:
  Archivo .env en esta carpeta:
    ANTHROPIC_API_KEY=sk-ant-...
"""

import os, sys, json, re, hashlib, argparse
from pathlib import Path
from datetime import datetime

import requests
from bs4 import BeautifulSoup

# Playwright es opcional: si no está instalado se usan solo fuentes web
try:
    from playwright.sync_api import sync_playwright
    PLAYWRIGHT_OK = True
except ImportError:
    PLAYWRIGHT_OK = False

try:
    import anthropic
except ImportError:
    sys.exit("Instala las dependencias: pip install anthropic requests beautifulsoup4 pypdf2")

try:
    import PyPDF2
except ImportError:
    sys.exit("Instala las dependencias: pip install anthropic requests beautifulsoup4 pypdf2")

# ── Configuración ──────────────────────────────────────────────

def cargar_api_key():
    key = os.environ.get("ANTHROPIC_API_KEY", "")
    if not key:
        env_file = Path(__file__).parent / ".env"
        if env_file.exists():
            for line in env_file.read_text(encoding="utf-8-sig", errors="ignore").splitlines():
                if line.startswith("ANTHROPIC_API_KEY="):
                    key = line.split("=", 1)[1].strip()
    if not key:
        sys.exit(
            "Necesitas una API key de Anthropic.\n"
            "Crea un archivo .env en esta carpeta con:\n"
            "  ANTHROPIC_API_KEY=sk-ant-tu-clave-aqui\n"
            "Consíguela en: https://console.anthropic.com"
        )
    return key

ROOT         = Path(__file__).parent.parent
DATA_JS      = ROOT / "data.js"
CACHE_DIR    = Path(__file__).parent / "cache"
ESTADO_FILE  = Path(__file__).parent / "estado.json"   # registra qué ya se procesó
CACHE_DIR.mkdir(exist_ok=True)

PORTAL = "https://www.leganes.org"
URLS = {
    "plenos":         f"{PORTAL}/actas-de-los-plenos",
    "plenos_sede":    "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
    "contratos":      f"{PORTAL}/web/transparencia/contratos-abiertos-y-negociados",
    "contratos_obra": f"{PORTAL}/web/transparencia/licitacion-e-informacion-de-obras-publicas",
    "subvenciones":   f"{PORTAL}/web/transparencia/convocatoria-anual-local-subvenciones",
    "subvenciones2":  f"{PORTAL}/web/transparencia/sistema-nacional-de-publicidad-de-subvenciones",
    "convenios":      f"{PORTAL}/web/transparencia/convenios",
    "presupuesto":    f"{PORTAL}/web/transparencia/presupuestos-anuales",
}

HEADERS = {
    "User-Agent": "LeganesClaroBot/1.0 (portal ciudadano; contacto: leganes.claro@gmail.com)"
}

# ── Estado: qué ya hemos procesado ────────────────────────────

def cargar_estado() -> dict:
    if ESTADO_FILE.exists():
        return json.loads(ESTADO_FILE.read_text(encoding="utf-8"))
    return {"procesados": [], "ultima_revision": {}}

def guardar_estado(estado: dict):
    ESTADO_FILE.write_text(json.dumps(estado, ensure_ascii=False, indent=2), encoding="utf-8")

def ya_procesado(estado: dict, identificador: str) -> bool:
    return identificador in estado.get("procesados", [])

def marcar_procesado(estado: dict, identificador: str):
    estado.setdefault("procesados", []).append(identificador)

def hash_contenido(texto: str) -> str:
    return hashlib.md5(texto.encode()).hexdigest()[:12]

# ── HTTP helpers ───────────────────────────────────────────────

def get_page(url: str) -> BeautifulSoup | None:
    try:
        r = requests.get(url, headers=HEADERS, timeout=20)
        r.raise_for_status()
        return BeautifulSoup(r.text, "html.parser")
    except Exception as e:
        print(f"  [error] {url}: {e}")
        return None

def descargar_pdf(url: str, nombre: str) -> Path | None:
    path = CACHE_DIR / nombre
    if path.exists():
        return path
    try:
        r = requests.get(url, headers=HEADERS, timeout=30)
        r.raise_for_status()
        path.write_bytes(r.content)
        print(f"  [descargado] {nombre}")
        return path
    except Exception as e:
        print(f"  [error descarga] {url}: {e}")
        return None

def extraer_texto_pdf(path: Path) -> str:
    try:
        reader = PyPDF2.PdfReader(str(path))
        return "\n".join(p.extract_text() or "" for p in reader.pages)[:15000]
    except Exception as e:
        print(f"  [error PDF] {path.name}: {e}")
        return ""

# ── data.js: leer/escribir secciones ──────────────────────────

def leer_datajs() -> str:
    return DATA_JS.read_text(encoding="utf-8")

def escribir_datajs(contenido: str):
    DATA_JS.write_text(contenido, encoding="utf-8")

def reemplazar_array(contenido: str, nombre_array: str, nuevo_valor: list) -> str:
    """Sustituye el array `nombre_array` en data.js preservando el resto del archivo."""
    nuevo_json = json.dumps(nuevo_valor, ensure_ascii=False, indent=4)
    patron = rf'({re.escape(nombre_array)}:\s*)\[.*?\]'
    reemplazado, n = re.subn(patron, rf'\g<1>{nuevo_json}', contenido, flags=re.DOTALL)
    if n == 0:
        print(f"  [aviso] No se encontró el array '{nombre_array}' en data.js")
    return reemplazado

def extraer_array(contenido: str, nombre_array: str) -> list:
    """Extrae un array de data.js como lista Python."""
    match = re.search(rf'{re.escape(nombre_array)}:\s*(\[.*?\])', contenido, re.DOTALL)
    if match:
        try:
            return json.loads(match.group(1))
        except json.JSONDecodeError:
            pass
    return []

# ── Claude: prompts ────────────────────────────────────────────

PROMPT_ACTA = """\
Eres un periodista ciudadano que explica las decisiones del Ayuntamiento de Leganés
a vecinos sin formación jurídica ni económica.

A continuación tienes el texto de un acta o crónica de un pleno municipal de Leganés.

INSTRUCCIONES:
1. Extrae: día (número), mes (3 letras mayúsculas, ej: ABR), año, tipo (Ordinario/Extraordinario).
2. Lista ABSOLUTAMENTE TODOS los puntos del orden del día tratados, sin omitir ninguno:
   - icono: "✅" aprobado, "❌" rechazado, "🔄" retirado o dejado sobre la mesa, "ℹ️" informativo
   - texto: "<strong>APROBADO/RECHAZADO/RETIRADO/INFORMADO</strong> — descripción clara en lenguaje sencillo"
   - incluye siempre el resultado de la votación por partido entre paréntesis: (PP y ULEG a favor; PSOE en contra; VOX se abstiene)
   - NO resumas ni agrupes puntos: cada punto del orden del día debe ser una entrada separada

Devuelve SOLO JSON válido, sin texto antes ni después:
{{
  "dia": 30, "mes": "ABR", "año": 2026,
  "tipo": "Ordinario", "titulo": "Pleno de abril 2026",
  "acuerdos": [
    {{"icono": "✅", "texto": "<strong>APROBADO</strong> — descripción en lenguaje sencillo. (PP y ULEG a favor; PSOE en contra)"}},
    {{"icono": "❌", "texto": "<strong>RECHAZADO</strong> — descripción. (PP a favor; PSOE, Más Madrid, Podemos y VOX en contra)"}}
  ]
}}

TEXTO:
{{texto}}
"""

PROMPT_CONTRATOS = """\
Extrae los contratos y licitaciones del Ayuntamiento de Leganés del siguiente texto.
Para cada uno devuelve:
- nombre: título sencillo (sin jerga)
- detalle: una frase explicando para qué sirve
- importe: con € y puntos de miles, ej: "1.200.000 €"
- tipo: "Obras", "Servicios", "Suministros" o "Tecnología"
- estado: "licitacion", "adjudicado", "ejecucion" o "finalizado"

Devuelve SOLO un array JSON válido, sin texto antes ni después.
Incluye solo los 8-12 más relevantes por importe o interés ciudadano.

TEXTO:
{texto}
"""

PROMPT_SUBVENCIONES = """\
Extrae las subvenciones y ayudas públicas del Ayuntamiento de Leganés del siguiente texto.
Para cada una devuelve:
- nombre: a quién va dirigida (ej: "Asociaciones deportivas", "Familias en riesgo de exclusión")
- detalle: para qué sirve, en una frase sencilla
- importe: total con €
- beneficiarios: número de entidades o personas beneficiadas (si aparece)
- estado: "convocada", "resuelta" o "cerrada"

Devuelve SOLO un array JSON válido. Incluye máximo 10 subvenciones.

TEXTO:
{texto}
"""

def llamar_claude(client, prompt: str) -> str:
    msg = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=2048,
        messages=[{"role": "user", "content": prompt}]
    )
    return msg.content[0].text.strip()

def extraer_json_objeto(texto: str) -> dict | None:
    m = re.search(r'\{.*\}', texto, re.DOTALL)
    if m:
        try: return json.loads(m.group())
        except: pass
    return None

def extraer_json_array(texto: str) -> list | None:
    m = re.search(r'\[.*\]', texto, re.DOTALL)
    if m:
        try: return json.loads(m.group())
        except: pass
    return None

# ── Sede electrónica con Playwright ──────────────────────────

SEDE_PLENOS = "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO"

def obtener_pdfs_sede_electronica() -> list[dict]:
    """
    Abre la sede electrónica con un navegador real (Playwright),
    espera a que cargue el JS y extrae los enlaces a PDFs de actas.
    """
    if not PLAYWRIGHT_OK:
        print("  [info] Playwright no instalado — usando solo fuentes web.")
        return []

    print("  Abriendo sede electrónica con navegador...")
    enlaces = []
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch(headless=True)
            page = browser.new_page()
            page.goto(SEDE_PLENOS, timeout=30000)
            page.wait_for_timeout(4000)

            def recoger_pdfs():
                for a in page.query_selector_all("a[href]"):
                    href = a.get_attribute("href") or ""
                    texto = a.inner_text().strip()
                    if ".pdf" in href.lower():
                        url = href if href.startswith("http") else "https://sede.leganes.org" + href
                        if url not in [e["url"] for e in enlaces]:
                            enlaces.append({"url": url, "texto": texto or href.split("/")[-1]})

            recoger_pdfs()

            # Intenta expandir secciones de actas (la sede carga contenido al hacer clic)
            secciones = ["Actas de Plenos", "Actas", "Ver más", "2026", "2025", "2024"]
            for seccion in secciones:
                try:
                    btn = page.locator(f"text={seccion}").first
                    if btn.is_visible(timeout=1000):
                        btn.click()
                        page.wait_for_timeout(2000)
                        recoger_pdfs()
                except:
                    pass

            browser.close()
    except Exception as e:
        print(f"  [error Playwright] {e}")

    print(f"  {len(enlaces)} PDF(s) encontrado(s) en la sede electrónica.")
    return enlaces

# ── Fuentes de noticias de plenos ────────────────────────────

def buscar_articulos_plenos() -> list[dict]:
    """
    Busca actas y convocatorias de plenos en el portal oficial del Ayuntamiento.
    Fuentes: leganes.org y sede.leganes.org únicamente.
    """
    articulos = []
    fuentes_oficiales = [
        URLS["plenos"],                  # leganes.org/actas-de-los-plenos
        URLS["plenos_sede"],             # sede.leganes.org
        f"{PORTAL}/plenos-2026",
        f"{PORTAL}/plenos-2025",
        f"{PORTAL}/web/transparencia/transparencia-actas-plenos",
        f"{PORTAL}/web/transparencia/transparencia-convocatorias-plenos",
    ]
    for url in fuentes_oficiales:
        soup = get_page(url)
        if not soup:
            continue
        for a in soup.find_all("a", href=True):
            href = a["href"]
            texto = a.get_text(strip=True)
            # Solo PDFs o páginas del dominio oficial
            if not ("leganes.org" in href or href.startswith("/")):
                continue
            if ".pdf" in href.lower() or any(k in texto.lower() for k in ["acta", "pleno", "orden del día"]):
                url_art = href if href.startswith("http") else PORTAL + href
                if url_art not in [x["url"] for x in articulos] and len(texto) > 5:
                    es_pdf = ".pdf" in href.lower()
                    articulos.append({"url": url_art, "texto": texto, "es_pdf": es_pdf})
    return articulos

# ── Módulo: plenos ─────────────────────────────────────────────

def actualizar_plenos(client, estado: dict, forzar: bool) -> list[dict] | None:
    print("\n📄 Revisando plenos en sede electrónica y medios locales...")

    # 1. Sede electrónica (PDFs oficiales, más completos) — requiere Playwright
    pdfs_sede = obtener_pdfs_sede_electronica()
    articulos = [{"url": e["url"], "texto": e["texto"], "es_pdf": True} for e in pdfs_sede]

    # 2. Medios locales (como respaldo o complemento)
    articulos += buscar_articulos_plenos()

    # 3. PDFs del portal web antiguo (actas pre-2024)
    soup_portal = get_page(URLS["plenos"])
    if soup_portal:
        for a in soup_portal.find_all("a", href=True):
            href = a["href"]
            texto = a.get_text(strip=True)
            if ".pdf" in href.lower() and any(k in texto.lower() for k in ["acta", "pleno"]):
                url = href if href.startswith("http") else PORTAL + href
                articulos.append({"url": url, "texto": texto, "es_pdf": True})

    if not articulos:
        print("  No se encontraron fuentes de plenos.")
        return None

    print(f"  {len(articulos)} fuente(s) encontrada(s).")
    nuevos_plenos = []

    for art in articulos[:10]:
        id_art = hash_contenido(art["url"])
        if not forzar and ya_procesado(estado, f"pleno_{id_art}"):
            continue

        es_pdf = art.get("es_pdf", False)
        if es_pdf:
            nombre_cache = re.sub(r'[^\w]', '_', art['texto'])[:60] + ".pdf"
            pdf = descargar_pdf(art["url"], nombre_cache)
            if not pdf:
                continue
            texto = extraer_texto_pdf(pdf)
        else:
            soup_art = get_page(art["url"])
            if not soup_art:
                continue
            texto = soup_art.get_text(separator="\n", strip=True)

        if not texto.strip() or len(texto) < 200:
            continue

        # Solo procesa si parece un artículo de pleno con contenido real
        texto_lower = texto.lower()
        if not any(p in texto_lower for p in ["aprobado", "rechazado", "orden del día", "pleno ordinario", "pleno extraordinario"]):
            continue

        print(f"  Procesando con Claude: {art['texto'][:60]}...")
        try:
            prompt = PROMPT_ACTA.format(texto=texto[:12000])
            respuesta = llamar_claude(client, prompt)
            pleno = extraer_json_objeto(respuesta)
            if pleno and pleno.get("acuerdos") and len(pleno["acuerdos"]) >= 2:
                pleno["linkActa"]  = URLS["plenos_sede"]
                pleno["linkVideo"] = (
                    f"https://www.youtube.com/results?search_query="
                    f"pleno+leganes+{pleno.get('mes','').lower()}+{pleno.get('año','')}"
                )
                nuevos_plenos.append(pleno)
                marcar_procesado(estado, f"pleno_{id_art}")
                print(f"  ✅ {pleno.get('titulo','Pleno')} — {len(pleno['acuerdos'])} puntos")
        except Exception as e:
            print(f"  [error Claude] {e}")

    return nuevos_plenos if nuevos_plenos else None

# ── Módulo: contratos ──────────────────────────────────────────

def actualizar_contratos(client, estado: dict, forzar: bool) -> list[dict] | None:
    print("\n📋 Revisando contratos y licitaciones...")
    # Combina contratos abiertos + obras públicas
    texto = ""
    for url_key in ["contratos", "contratos_obra"]:
        soup = get_page(URLS[url_key])
        if soup:
            texto += soup.get_text(separator="\n", strip=True) + "\n"
    if not texto.strip():
        return None
    id_hash = hash_contenido(texto)

    if not forzar and ya_procesado(estado, f"contratos_{id_hash}"):
        print("  Sin cambios desde la última revisión.")
        return None

    print("  Cambios detectados. Actualizando con Claude...")
    try:
        respuesta = llamar_claude(client, PROMPT_CONTRATOS.format(texto=texto[:12000]))
        contratos = extraer_json_array(respuesta)
        if contratos:
            marcar_procesado(estado, f"contratos_{id_hash}")
            print(f"  ✅ {len(contratos)} contratos actualizados.")
            return contratos
    except Exception as e:
        print(f"  [error Claude] {e}")
    return None

# ── Módulo: subvenciones ───────────────────────────────────────

def actualizar_subvenciones(client, estado: dict, forzar: bool) -> list[dict] | None:
    print("\n🤝 Revisando subvenciones y ayudas...")
    # Combina texto de las dos páginas de subvenciones
    texto = ""
    for url_key in ["subvenciones", "subvenciones2"]:
        soup = get_page(URLS[url_key])
        if soup:
            texto += soup.get_text(separator="\n", strip=True) + "\n"
    if not texto.strip():
        return None
    id_hash = hash_contenido(texto)

    if not forzar and ya_procesado(estado, f"subvenciones_{id_hash}"):
        print("  Sin cambios desde la última revisión.")
        return None

    print("  Cambios detectados. Actualizando con Claude...")
    try:
        respuesta = llamar_claude(client, PROMPT_SUBVENCIONES.format(texto=texto[:12000]))
        subvenciones = extraer_json_array(respuesta)
        if subvenciones:
            marcar_procesado(estado, f"subvenciones_{id_hash}")
            print(f"  ✅ {len(subvenciones)} subvenciones actualizadas.")
            return subvenciones
    except Exception as e:
        print(f"  [error Claude] {e}")
    return None

# ── Main ───────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--solo-plenos",    action="store_true")
    parser.add_argument("--solo-contratos", action="store_true")
    parser.add_argument("--forzar",         action="store_true",
                        help="Re-procesa aunque ya esté en caché")
    args = parser.parse_args()

    hacer_plenos       = not args.solo_contratos
    hacer_contratos    = not args.solo_plenos
    hacer_subvenciones = not args.solo_plenos and not args.solo_contratos

    print(f"\n🏛️  Leganés Claro — Actualización {datetime.now().strftime('%d/%m/%Y %H:%M')}")
    print("=" * 52)

    client = anthropic.Anthropic(api_key=cargar_api_key())
    estado = cargar_estado()
    contenido = leer_datajs()
    hubo_cambios = False

    # ── Plenos
    if hacer_plenos:
        nuevos = actualizar_plenos(client, estado, args.forzar)
        if nuevos:
            plenos_actuales = extraer_array(contenido, "plenos")
            existentes = {(p["dia"], p["mes"], p["año"]) for p in plenos_actuales}
            añadidos = 0
            for p in nuevos:
                if (p["dia"], p["mes"], p["año"]) not in existentes:
                    plenos_actuales.insert(0, p)
                    existentes.add((p["dia"], p["mes"], p["año"]))
                    añadidos += 1
            if añadidos:
                contenido = reemplazar_array(contenido, "plenos", plenos_actuales)
                hubo_cambios = True
                print(f"\n  → {añadidos} pleno(s) nuevo(s) añadido(s) a data.js")

    # ── Contratos
    if hacer_contratos:
        nuevos = actualizar_contratos(client, estado, args.forzar)
        if nuevos:
            contenido = reemplazar_array(contenido, "contratos", nuevos)
            hubo_cambios = True

    # ── Subvenciones
    if hacer_subvenciones:
        nuevas = actualizar_subvenciones(client, estado, args.forzar)
        if nuevas:
            contenido = reemplazar_array(contenido, "subvenciones", nuevas)
            hubo_cambios = True

    # ── Guardar
    if hubo_cambios:
        escribir_datajs(contenido)
        guardar_estado(estado)
        print("\n✅ data.js actualizado con las novedades.")
    else:
        guardar_estado(estado)
        print("\nℹ️  No hay novedades hoy.")

    print()

if __name__ == "__main__":
    main()
