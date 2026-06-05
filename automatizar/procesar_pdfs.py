"""Procesa todos los PDFs de la carpeta cache con Claude Opus y guarda los resultados."""
import PyPDF2, json, re
from pathlib import Path

# Cargar API key
api_key = ''
env_file = Path('.env')
if env_file.exists():
    for line in env_file.read_text(encoding='utf-8-sig').splitlines():
        if line.startswith('ANTHROPIC_API_KEY='):
            api_key = line.split('=', 1)[1].strip()

import anthropic
client = anthropic.Anthropic(api_key=api_key)

PROMPT = """Eres un periodista ciudadano experto en municipios. Tienes el acta oficial completa de un pleno del Ayuntamiento de Leganés.

Extrae ABSOLUTAMENTE TODOS los puntos del orden del día sin excepción, incluyendo:
- Aprobación de actas de sesiones anteriores
- Dictámenes de la Comisión Informativa
- Mociones de todos los grupos municipales (PP, ULEG, PSOE, Más Madrid, Podemos-IU-AV, VOX)
- Puntos de urgencia
- Cualquier otro punto votado formalmente

Para cada punto indica:
- icono: ✅ aprobado, ❌ rechazado, 🔄 retirado o dejado sobre la mesa, ℹ️ solo informativo
- texto: <strong>APROBADO/RECHAZADO/RETIRADO/INFORMADO</strong> — explicación clara y detallada
  en lenguaje ciudadano (sin jerga jurídica): qué se decide, por qué importa a los vecinos,
  importes si los hay. Al final entre paréntesis la votación por partido.

IMPORTANTE: No omitas ningún punto. Si el acta tiene 20 puntos, devuelve 20 entradas.

Devuelve SOLO este JSON válido (sin texto antes ni después):
{"dia": 15, "mes": "ENE", "año": 2026, "tipo": "Ordinario", "titulo": "Pleno Ordinario de enero 2026",
 "acuerdos": [
   {"icono": "✅", "texto": "<strong>APROBADO</strong> — descripción detallada para el ciudadano. (PP y ULEG a favor; PSOE en contra; VOX se abstiene)"}
 ]
}

ACTA COMPLETA:
"""

DATA_JS = Path(__file__).parent.parent / 'data.js'

def leer_datajs():
    return DATA_JS.read_text(encoding='utf-8')

def normalizar_mes(mes):
    mapa = {'ENERO':'ENE','FEBRERO':'FEB','MARZO':'MAR','ABRIL':'ABR','MAYO':'MAY',
            'JUNIO':'JUN','JULIO':'JUL','AGOSTO':'AGO','SEPTIEMBRE':'SEP',
            'OCTUBRE':'OCT','NOVIEMBRE':'NOV','DICIEMBRE':'DIC'}
    return mapa.get(str(mes).upper(), str(mes).upper()[:3])

pdfs = sorted(Path('cache').glob('[0-9]*.pdf'))
print(f"\nProcesando {len(pdfs)} PDF(s)...\n")

resultados = []

for pdf_path in pdfs:
    reader = PyPDF2.PdfReader(str(pdf_path))
    texto = '\n'.join(page.extract_text() or '' for page in reader.pages)
    print(f"{'='*60}")
    print(f"PDF: {pdf_path.name} ({len(reader.pages)} págs, {len(texto):,} chars)")
    print(f"{'='*60}")

    msg = client.messages.create(
        model="claude-opus-4-5",
        max_tokens=8000,
        messages=[{"role": "user", "content": PROMPT + texto}]
    )
    respuesta = msg.content[0].text.strip()
    match = re.search(r'\{.*\}', respuesta, re.DOTALL)
    if match:
        pleno = json.loads(match.group())
        pleno["mes"] = normalizar_mes(pleno.get("mes", ""))
        pleno["linkActa"] = "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO"
        pleno["linkVideo"] = f"https://www.youtube.com/results?search_query=pleno+leganes+{pleno.get('mes','').lower()}+{pleno.get('año','')}"
        resultados.append(pleno)
        print(f"✅ {pleno['titulo']} — {len(pleno['acuerdos'])} puntos")
        for a in pleno['acuerdos']:
            print(f"   {a['icono']} {a['texto'][:80]}...")
    else:
        print(f"❌ Error parseando JSON")
        print(respuesta[:400])
    print()

# Guarda resultados para revisión
Path('cache/resultados_pdfs.json').write_text(
    json.dumps(resultados, ensure_ascii=False, indent=2), encoding='utf-8'
)
print(f"\nResultados guardados en cache/resultados_pdfs.json")
print(f"Revisa y ejecuta: py aplicar_resultados.py")
