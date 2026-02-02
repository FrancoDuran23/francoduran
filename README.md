# Dev Polyglot — Portfolio

Portfolio estático de una sola página. Sin build tools, sin frameworks.

## Personalización

Abrí `index.html` y editá el objeto `SITE_DATA` al inicio del archivo. Ahí están todos los textos, links y proyectos.

## Deploy en GitHub Pages

1. Creá un repo en GitHub (puede ser `tu-usuario.github.io` para dominio raíz, o cualquier nombre).
2. Subí los archivos:
   ```bash
   git init
   git add index.html README.md
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
   git push -u origin main
   ```
3. En el repo, andá a **Settings → Pages**.
4. En **Source**, elegí la rama `main` y la carpeta `/ (root)`.
5. Hacé clic en **Save**. En unos segundos tu sitio estará en:
   - `https://TU_USUARIO.github.io/TU_REPO/`
   - o `https://TU_USUARIO.github.io/` si el repo se llama `tu-usuario.github.io`

## Dominio custom (opcional)

1. En **Settings → Pages → Custom domain**, poné tu dominio.
2. Configurá los DNS de tu dominio apuntando a GitHub (ver [docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)).
3. Activá **Enforce HTTPS**.

## Stack

- HTML semántico
- Tailwind CSS (CDN)
- Vanilla JS (sin dependencias)
