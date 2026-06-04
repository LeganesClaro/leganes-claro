"""
Leganés Claro — Script de actualización automática
====================================================
Descarga las actas de plenos en PDF del portal de transparencia
de Leganés, las envía a Claude para resumirlas en lenguaje sencillo,
y actualiza data.js automáticamente.

REQUISITOS:
  pip install anthropic requests beautifulsoup4 pypdf2

USO:
  python actualizar_datos.py                  # actualiza todo
  python actualizar_datos.py --solo-plenos    # solo plenos
  python actualizar_datos.py --solo-contratos # solo contratos

CONFIGURACIÓN:
  Crea un archivo .env en esta carpeta con:
    ANTHROPIC_API_KEY=sk-ant-...
"""

import os, sys, json, re, datetime, textwrap, argparse
import requests
from pathlib import Path
from bs4 import BeautifulSoup

try:
    import anthropic
except ImportError:
    sys.exit("Instala las dependencias: pip install anthropic requests beautifulsoup4 pypdf2")

try:
    import PyPDF2
except ImportError:
    sys.exit("Instala las dependencias: pip install anthropic requests beautifulsoup4 pypdf2")

# ── Configuración ─────────────────────────────────────────────

API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")
if not API_KEY:
    # Intenta leer de .env
    env_file = Path(__file__).parent / ".env"
    if env_file.exists():
        for line in env_file.read_text().splitlines():
            if line.startswith("ANTHROPIC_API_KEY="):
                API_KEY = line.split("=", 1)[1].strip()
                break

if not API_KEY:
    sys.exit(
        "Necesitas una API key de Anthropic.\n"
        "1. Regístrate en https://console.anthropic.com\n"
        "2. Crea un archivo .env en esta carpeta con:\n"
        "   ANTHROPIC_API_KEY=sk-ant-tu-clave-aqui"
    )

client = anthropic.Anthropic(api_key=API_KEY)

DATA_JS_PATH = Path(__file__).parent.parent / "data.js"
CACHE_DIR    = Path(__file__).parent / "cache"
CACHE_DIR.mkdir(exist_ok=True)

PORTAL_BASE     = "https://www.leganes.org"
ACTAS_URL       = "https://www.leganes.org/actas-de-los-plenos"
CONTRATOS_URL   = "https://www.leganes.org/web/transparencia/licitacion-e-informacion-de-obras-publicas"
PRESUPUESTO_URL = "https://www.leganes.org/web/transparencia/presupuestos-anuales"

HEADERS = {"User-Agent": "LeganesClaroBot/1.0 (iniciativa ciudadana; contacto: leganes.claro@gmail.com)"}

# ── Descarga y parseo de PDFs ─────────────────────────────────

def descargar_pdf(url: str, nombre: str) -> Path | None:
    """Descarga un PDF y lo guarda en cache. Devuelve la ruta local."""
    cache_path = CACHE_DIR / nombre
    if cache_path.exists():
        print(f"  [cache] {nombre}")
        return cache_path
    try:
        r = requests.get(url, headers=HEADERS, timeout=30)
        r.raise_for_status()
        cache_path.write_bytes(r.content)
        print(f"  [descargado] {nombre}")
        return cache_path
    except Exception as e:
        print(f"  [error] No se pudo descargar {url}: {e}")
        return None


def extraer_texto_pdf(path: Path) -> str:
    """Extrae el texto de un PDF."""
    try:
        reader = PyPDF2.PdfReader(str(path))
        texto = "\n".join(page.extract_text() or "" for page in reader.pages)
        return texto[:15000]  # límite para no saturar el contexto
    except Exception as e:
        print(f"  [error] No se pudo leer {path.name}: {e}")
        return ""


# ── Claude: resumir actas ──────────────────────────────────────

PROMPT_ACTA = """Eres un periodista ciudadano que explica las decisiones del Ayuntamiento de Leganés
a los vecinos de a pie. Tu objetivo es que cualquier persona, sin formación jurídica ni económica,
entienda qué se decidió en el pleno.

A continuación tienes el texto de un acta de pleno municipal. Por favor:

1. Identifica la FECHA del pleno (día, mes en español abreviado 3 letras en mayúsculas, año).
2. Identifica si fue ORDINARIO o EXTRAORDINARIO.
3. Lista los ACUERDOS más importantes (entre 4 y 8), cada uno con:
   - Un emoji: ✅ si se aprobó, ❌ si se rechazó, ℹ️ si es solo informativo
   - Texto en negrita: "APROBADO", "RECHAZADO" o "INFORMADO"
   - Explicación breve (máx 1 frase, lenguaje sencillo, sin jerga)
   - Si hay votos, inclúyelos al final entre paréntesis: (14 sí / 11 no / 0 abs)

Devuelve SOLO un objeto JSON válido con esta estructura exacta (sin texto antes ni después):
{
  "dia": 30,
  "mes": "ABR",
  "año": 2026,
  "tipo": "Ordinario",
  "titulo": "Pleno de abril 2026",
  "acuerdos": [
    {"icono": "✅", "texto": "<strong>APROBADO</strong> — Descripción clara en lenguaje sencillo."},
    {"icono": "❌", "texto": "<strong>RECHAZADO</strong> — Descripción. (10 sí / 15 no / 0 abs)"}
  ]
}

TEXTO DEL ACTA:
{texto}
"""

def resumir_acta_con_claude(texto_pdf: str) -> dict | None:
    """Envía el texto del acta a Claude y devuelve el JSON del pleno."""
    if not texto_pdf.strip():
        return None
    try:
        message = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=2048,
            messages=[{
                "role": "user",
                "content": PROMPT_ACTA.format(texto=texto_pdf)
            }]
        )
        raw = message.content[0].text.strip()
        # Extrae el JSON aunque Claude añada texto extra
        match = re.search(r'\{.*\}', raw, re.DOTALL)
        if match:
            return json.loads(match.group())
    except Exception as e:
        print(f"  [error Claude] {e}")
    return None


# ── Obtener lista de actas del portal ─────────────────────────

def obtener_enlaces_actas() -> list[dict]:
    """Scraping del portal para obtener los PDFs de actas disponibles."""
    try:
        r = requests.get(ACTAS_URL, headers=HEADERS, timeout=20)
        soup = BeautifulSoup(r.text, "html.parser")
        enlaces = []
        for a in soup.find_all("a", href=True):
            href = a["href"]
            texto = a.get_text(strip=True)
            if ".pdf" in href.lower() and ("acta" in texto.lower() or "pleno" in texto.lower()):
                url = href if href.startswith("http") else PORTAL_BASE + href
                enlaces.append({"url": url, "nombre": texto})
        return enlaces
    except Exception as e:
        print(f"[error] No se pudo acceder al portal: {e}")
        return []


# ── Leer y escribir data.js ───────────────────────────────────

def leer_datos_actuales() -> dict:
    """Lee data.js y extrae los arrays como Python dicts."""
    contenido = DATA_JS_PATH.read_text(encoding="utf-8")
    # Extrae el objeto DATA con una regex básica
    match = re.search(r'const DATA\s*=\s*(\{.*\});', contenido, re.DOTALL)
    if match:
        try:
            return json.loads(match.group(1))
        except json.JSONDecodeError:
            pass
    return {}


def escribir_datos(data: dict):
    """Actualiza data.js con los datos nuevos."""
    contenido_original = DATA_JS_PATH.read_text(encoding="utf-8")
    # Sustituye solo el array de plenos en el archivo
    plenos_json = json.dumps(data["plenos"], ensure_ascii=False, indent=4)
    nuevo_contenido = re.sub(
        r'(plenos:\s*)\[.*?\](,\s*\n\s*//\s*──\s*PRESUPUESTO)',
        rf'\g<1>{plenos_json}\g<2>',
        contenido_original,
        flags=re.DOTALL
    )
    DATA_JS_PATH.write_text(nuevo_contenido, encoding="utf-8")
    print(f"[✓] data.js actualizado con {len(data['plenos'])} plenos.")


# ── Contratos: scraping básico ────────────────────────────────

PROMPT_CONTRATOS = """Eres un periodista ciudadano. Tienes el listado de contratos y licitaciones
del Ayuntamiento de Leganés. Extrae los contratos más relevantes y resúmelos en lenguaje sencillo.

Para cada contrato devuelve:
- nombre: título sencillo (sin jerga técnica)
- detalle: una frase explicando para qué sirve
- importe: el importe con €, ej: "1.200.000 €"
- tipo: "Obras", "Servicios", "Suministros" o "Tecnología"
- estado: "licitacion", "adjudicado", "ejecucion" o "finalizado"

Devuelve SOLO un array JSON válido (sin texto antes ni después).

TEXTO:
{texto}
"""

def actualizar_contratos(texto_html: str) -> list[dict]:
    """Usa Claude para extraer contratos del HTML de la página."""
    try:
        message = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=3000,
            messages=[{"role": "user", "content": PROMPT_CONTRATOS.format(texto=texto_html[:12000])}]
        )
        raw = message.content[0].text.strip()
        match = re.search(r'\[.*\]', raw, re.DOTALL)
        if match:
            return json.loads(match.group())
    except Exception as e:
        print(f"  [error Claude contratos] {e}")
    return []


# ── Main ──────────────────────────────────────────────────────

def main():
    parser = argparse.ArgumentParser(description="Actualiza Leganés Claro con datos del portal de transparencia")
    parser.add_argument("--solo-plenos",    action="store_true")
    parser.add_argument("--solo-contratos", action="store_true")
    args = parser.parse_args()

    hacer_plenos    = not args.solo_contratos
    hacer_contratos = not args.solo_plenos

    print("\n🏛️  Leganés Claro — Actualizador automático")
    print("=" * 48)

    # ── Plenos ──
    if hacer_plenos:
        print("\n📄 Buscando actas de plenos en el portal...")
        enlaces = obtener_enlaces_actas()
        if not enlaces:
            print("  No se encontraron actas. Comprueba la conexión o que el portal esté accesible.")
        else:
            print(f"  Encontradas {len(enlaces)} actas.")
            plenos_nuevos = []
            for enlace in enlaces[:6]:  # máx 6 plenos más recientes
                print(f"\n  Procesando: {enlace['nombre']}")
                nombre_cache = re.sub(r'[^\w]', '_', enlace['nombre']) + ".pdf"
                pdf_path = descargar_pdf(enlace["url"], nombre_cache)
                if not pdf_path:
                    continue
                texto = extraer_texto_pdf(pdf_path)
                if not texto:
                    continue
                print("  Resumiendo con Claude...")
                pleno = resumir_acta_con_claude(texto)
                if pleno:
                    # Añade links
                    pleno["linkActa"]  = enlace["url"]
                    pleno["linkVideo"] = f"https://www.youtube.com/results?search_query=pleno+leganes+{pleno.get('mes','').lower()}+{pleno.get('año','')}"
                    plenos_nuevos.append(pleno)
                    print(f"  ✅ {pleno.get('titulo', 'Pleno')}")

            if plenos_nuevos:
                datos = leer_datos_actuales()
                # Añade los nuevos evitando duplicados por fecha
                existentes = {(p["dia"], p["mes"], p["año"]) for p in datos.get("plenos", [])}
                añadidos = 0
                for p in plenos_nuevos:
                    clave = (p["dia"], p["mes"], p["año"])
                    if clave not in existentes:
                        datos.setdefault("plenos", []).insert(0, p)
                        existentes.add(clave)
                        añadidos += 1
                if añadidos:
                    escribir_datos(datos)
                    print(f"\n✅ {añadidos} plenos nuevos añadidos a data.js")
                else:
                    print("\nℹ️  No hay plenos nuevos (todos ya estaban en data.js)")

    # ── Contratos ──
    if hacer_contratos:
        print("\n📋 Actualizando contratos...")
        try:
            r = requests.get(CONTRATOS_URL, headers=HEADERS, timeout=20)
            soup = BeautifulSoup(r.text, "html.parser")
            texto_limpio = soup.get_text(separator="\n", strip=True)
            contratos = actualizar_contratos(texto_limpio)
            if contratos:
                datos = leer_datos_actuales()
                datos["contratos"] = contratos
                # Reescribe solo los contratos en data.js
                contenido = DATA_JS_PATH.read_text(encoding="utf-8")
                contratos_json = json.dumps(contratos, ensure_ascii=False, indent=4)
                nuevo = re.sub(
                    r'(contratos:\s*)\[.*?\](\s*\n\s*\})',
                    rf'\g<1>{contratos_json}\g<2>',
                    contenido,
                    flags=re.DOTALL
                )
                DATA_JS_PATH.write_text(nuevo, encoding="utf-8")
                print(f"✅ {len(contratos)} contratos actualizados en data.js")
        except Exception as e:
            print(f"  [error contratos] {e}")

    print("\n🏁 Actualización completada.\n")


if __name__ == "__main__":
    main()
