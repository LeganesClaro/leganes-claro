"""Aplica los resultados de procesar_pdfs.py a data.js, reemplazando los plenos correspondientes."""
import json, re
from pathlib import Path

DATA_JS = Path(__file__).parent.parent / 'data.js'
RESULTADOS = Path(__file__).parent / 'cache' / 'resultados_pdfs.json'

resultados = json.loads(RESULTADOS.read_text(encoding='utf-8'))
contenido = DATA_JS.read_text(encoding='utf-8')

# Para cada pleno del JSON, busca su entrada en data.js por (dia, mes, año) y la reemplaza
orden_mes = {"ENE":1,"FEB":2,"MAR":3,"ABR":4,"MAY":5,"JUN":6,
             "JUL":7,"AGO":8,"SEP":9,"OCT":10,"NOV":11,"DIC":12}

for pleno in resultados:
    dia  = pleno["dia"]
    mes  = pleno["mes"]
    año  = pleno["año"]
    print(f"Aplicando {pleno['titulo']} ({len(pleno['acuerdos'])} puntos)...")

    # Genera el bloque JSON del pleno
    bloque = json.dumps(pleno, ensure_ascii=False, indent=4)

    # Busca el pleno existente en data.js por dia+mes+año (acepta tanto JS como JSON)
    patron = (
        r'\{[^{}]*?(?:dia|"dia")\s*:\s*' + str(dia) +
        r'[^{}]*?(?:mes|"mes")\s*:\s*"' + mes + r'"' +
        r'.*?\}(?:\s*,)?'
    )
    # Búsqueda más amplia: encuentra el bloque completo del pleno
    # Buscamos desde {year: año ... mes: "MES"} hasta el cierre que incluye linkVideo
    patron_bloque = (
        r'\{(?:[^{}]|\{[^{}]*\})*?'
        r'(?:año|"año")\s*:\s*' + str(año) +
        r'(?:[^{}]|\{[^{}]*\}|\[[^\[\]]*\])*?'
        r'(?:mes|"mes")\s*:\s*"' + mes + r'"'
        r'(?:[^{}]|\{[^{}]*\}|\[[^\[\]]*(?:\{[^{}]*\}[^\[\]]*)*\])*?\}'
    )

    match = re.search(patron_bloque, contenido, re.DOTALL)
    if match:
        contenido = contenido[:match.start()] + bloque + contenido[match.end():]
        print(f"  ✅ Reemplazado en data.js")
    else:
        print(f"  ⚠️  No encontrado en data.js — se añade al principio del array")
        contenido = contenido.replace('plenos: [', 'plenos: [\n    ' + bloque + ',', 1)

DATA_JS.write_text(contenido, encoding='utf-8')
print(f"\n✅ data.js actualizado con {len(resultados)} plenos desde PDFs oficiales.")
