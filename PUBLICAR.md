# Cómo publicar Leganés Claro en GitHub Pages (gratis)

## ¿Qué es GitHub Pages?
Es un servicio gratuito de GitHub que convierte tu repositorio en una web pública.
Tu web quedará en una URL como: `https://tu-usuario.github.io/leganes-claro`

---

## Paso 1 — Crea una cuenta en GitHub
Si no tienes, regístrate en https://github.com/signup (es gratis).

---

## Paso 2 — Crea un repositorio nuevo en GitHub
1. Ve a https://github.com/new
2. Nombre del repositorio: `leganes-claro`
3. Descripción: "Portal ciudadano del Ayuntamiento de Leganés en lenguaje sencillo"
4. Marca **Public** (debe ser público para GitHub Pages gratuito)
5. NO marques "Add a README" (ya tienes uno)
6. Pulsa **Create repository**

---

## Paso 3 — Sube el código desde tu ordenador

Abre PowerShell o Símbolo del sistema en la carpeta del proyecto y ejecuta:

```bash
# Sustituye TU-USUARIO por tu nombre de usuario de GitHub
git remote add origin https://github.com/TU-USUARIO/leganes-claro.git
git branch -M main
git push -u origin main
```

Si te pide usuario y contraseña:
- Usuario: tu nombre de usuario de GitHub
- Contraseña: un "Personal Access Token" (no tu contraseña real)
  → Créalo en: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic) → Generate new token → marca "repo" → Generate

---

## Paso 4 — Activa GitHub Pages
1. En tu repositorio de GitHub, ve a **Settings** (arriba a la derecha)
2. En el menú izquierdo, haz clic en **Pages**
3. En "Source", selecciona **Deploy from a branch**
4. Branch: **main** / Folder: **/ (root)**
5. Pulsa **Save**

En 1-2 minutos tu web estará en:
`https://TU-USUARIO.github.io/leganes-claro`

---

## Paso 5 — Actualizar la web en el futuro

Cada vez que cambies los datos en `data.js` y quieras publicarlo:

```bash
cd "C:\Users\mario\CLAUDE SPACE\AYTO"
git add data.js
git commit -m "Actualización de datos - [fecha]"
git push
```

GitHub Pages se actualiza automáticamente en 1-2 minutos.

---

## Opcional — Dominio personalizado

Si quieres una URL como `www.legalnesclaro.es`:
1. Compra el dominio (ej. en Namecheap, ~10€/año)
2. En GitHub Pages → Custom domain → escribe tu dominio
3. Configura los DNS según las instrucciones de GitHub

---

## Añadir la URL a las redes sociales

Una vez tengas la URL definitiva, actualiza:
- El enlace en bio de Instagram
- El enlace en bio de X
- El `index.html` (línea donde pone "leganes-claro.github.io")
