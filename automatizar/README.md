# Automatización — Leganés Claro

## Instalación (una sola vez)

### 1. Instala Python
Ve a https://www.python.org/downloads/ → descarga la última versión → instala (marca "Add Python to PATH")

### 2. Instala las dependencias
```bash
pip install anthropic requests beautifulsoup4 PyPDF2
```

### 3. Consigue tu API key de Anthropic
1. Regístrate en https://console.anthropic.com
2. Ve a "API Keys" → "Create Key"
3. Crea un archivo `.env` en esta carpeta:
```
ANTHROPIC_API_KEY=sk-ant-tu-clave-aqui
```

## Uso

```bash
# Actualiza todo (plenos + contratos)
python actualizar_datos.py

# Solo los plenos
python actualizar_datos.py --solo-plenos

# Solo los contratos
python actualizar_datos.py --solo-contratos
```

## ¿Qué hace?

1. **Entra al portal de transparencia** de Leganés y busca las actas más recientes
2. **Descarga los PDFs** de las actas (los guarda en `cache/` para no descargarlos dos veces)
3. **Envía el texto a Claude** para que resuma cada acuerdo en lenguaje sencillo
4. **Actualiza `data.js`** con los nuevos plenos y contratos

## Automatización periódica (Windows)

Puedes configurar una tarea programada para que se ejecute automáticamente tras cada pleno (último jueves de cada mes):

1. Abre "Programador de tareas" de Windows
2. "Crear tarea básica"
3. Desencadenador: mensual, último jueves
4. Acción: `python C:\ruta\al\proyecto\automatizar\actualizar_datos.py`
