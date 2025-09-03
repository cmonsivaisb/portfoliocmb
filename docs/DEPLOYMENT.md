# 📋 Guía de Deployment

Esta guía te ayudará a deployar tu portafolio en diferentes plataformas de hosting.

## 🌟 Netlify (Recomendado)

Netifly es perfecto para sitios estáticos con deploy automático desde Git.

### Método 1: Drag & Drop (Más Fácil)

1. **Build local**
   ```bash
   npm run build
   ```

2. **Accede a Netlify**
   - Ve a [netlify.com](https://netlify.com)
   - Crea una cuenta gratuita

3. **Deploy**
   - Arrastra la carpeta `dist/` al área de deploy
   - ¡Tu sitio estará en línea en segundos!

### Método 2: Desde Git (Recomendado)

1. **Sube a GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <tu-repo-url>
   git push -u origin main
   ```

2. **Conecta con Netlify**
   - En Netlify: "New site from Git"
   - Conecta tu repositorio de GitHub
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Configuración automática**
   - Cada push activará un nuevo deploy
   - URLs de preview para pull requests

### Configuración Netlify

Crea `netlify.toml` en la raíz:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

## ⚡ Vercel

Excelente opción con integración perfecta para proyectos React.

### Deploy desde Git

1. **Sube a GitHub** (igual que Netlify)

2. **Conecta con Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - "New Project" → Import desde GitHub
   - Vercel detectará automáticamente que es un proyecto Vite

3. **Configuración automática**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Configuración Vercel

Crea `vercel.json` (opcional):

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

## 🐙 GitHub Pages

Hosting gratuito directo desde tu repositorio de GitHub.

### Configuración

1. **Modifica `vite.config.ts`**
   ```typescript
   export default defineConfig({
     base: '/nombre-de-tu-repo/',
     // ... resto de configuración
   });
   ```

2. **Crea workflow**
   
   Archivo: `.github/workflows/deploy.yml`
   
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       
       steps:
       - name: Checkout
         uses: actions/checkout@v3
       
       - name: Setup Node.js
         uses: actions/setup-node@v3
         with:
           node-version: '18'
           cache: 'npm'
       
       - name: Install dependencies
         run: npm ci
       
       - name: Build
         run: npm run build
       
       - name: Deploy
         uses: peaceiris/actions-gh-pages@v3
         with:
           github_token: ${{ secrets.GITHUB_TOKEN }}
           publish_dir: ./dist
   ```

3. **Activa GitHub Pages**
   - Repositorio → Settings → Pages
   - Source: "GitHub Actions"

## 🔥 Firebase Hosting

Hosting rápido y confiable de Google.

### Setup

1. **Instala Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login y configuración**
   ```bash
   firebase login
   firebase init hosting
   ```

3. **Configuración**
   - Public directory: `dist`
   - Single-page app: `Yes`
   - GitHub integration: `Optional`

4. **Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

### Configuración Firebase

Archivo: `firebase.json`

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [{
      "source": "**",
      "destination": "/index.html"
    }]
  }
}
```

## 🌐 Hosting Tradicional (cPanel, FTP)

Para hostings tradicionales como GoDaddy, Hostinger, etc.

### Pasos

1. **Build local**
   ```bash
   npm run build
   ```

2. **Subir archivos**
   - Comprime la carpeta `dist/`
   - Sube vía FTP o File Manager
   - Extrae en la carpeta `public_html/` o `www/`

3. **Configuración .htaccess**
   
   Crea `.htaccess` en la raíz:
   
   ```apache
   RewriteEngine On
   RewriteBase /
   
   # Handle client-side routing
   RewriteCond %{REQUEST_FILENAME} !-f
   RewriteCond %{REQUEST_FILENAME} !-d
   RewriteRule . /index.html [L]
   
   # Gzip compression
   <IfModule mod_deflate.c>
       AddOutputFilterByType DEFLATE text/plain
       AddOutputFilterByType DEFLATE text/html
       AddOutputFilterByType DEFLATE text/xml
       AddOutputFilterByType DEFLATE text/css
       AddOutputFilterByType DEFLATE application/xml
       AddOutputFilterByType DEFLATE application/xhtml+xml
       AddOutputFilterByType DEFLATE application/rss+xml
       AddOutputFilterByType DEFLATE application/javascript
       AddOutputFilterByType DEFLATE application/x-javascript
   </IfModule>
   
   # Cache headers
   <IfModule mod_expires.c>
       ExpiresActive on
       ExpiresByType text/css "access plus 1 year"
       ExpiresByType application/javascript "access plus 1 year"
       ExpiresByType image/png "access plus 1 year"
       ExpiresByType image/jpg "access plus 1 year"
       ExpiresByType image/jpeg "access plus 1 year"
   </IfModule>
   ```

## ☁️ Surge.sh

Deploy rápido desde línea de comandos.

```bash
# Instalar
npm install -g surge

# Build
npm run build

# Deploy
cd dist
surge
```

## 📦 Preparación para Deploy

### Checklist Pre-Deploy

- [ ] **Datos actualizados** en `portfolioData.ts`
- [ ] **Imágenes optimizadas** y en formato web
- [ ] **CV actualizado** en PDF
- [ ] **Links verificados** a proyectos y redes sociales
- [ ] **Meta tags actualizados** en `index.html`
- [ ] **Favicon personalizado**
- [ ] **Build exitoso** localmente
- [ ] **Pruebas en diferentes dispositivos**

### Optimizaciones

1. **Compresión de imágenes**
   ```bash
   # Usando imagemin
   npm install -g imagemin-cli imagemin-webp
   imagemin public/images/* --out-dir=public/images --plugin=webp
   ```

2. **Análisis del bundle**
   ```bash
   npm run build -- --mode analyze
   ```

3. **Lighthouse audit**
   - Performance
   - SEO
   - Accesibilidad
   - Mejores prácticas

## 🔧 Solución de Problemas

### Deploy Falla

1. **Verifica Node.js version** (18+)
2. **Limpia cache**
   ```bash
   rm -rf node_modules dist
   npm install
   npm run build
   ```

### Rutas no funcionan

1. **Configura redirects** (cada plataforma es diferente)
2. **Verifica base URL** en `vite.config.ts`

### Imágenes no cargan

1. **Rutas absolutas** desde `/images/`
2. **Verifica que existan** en `public/images/`
3. **Nombres correctos** sin espacios ni caracteres especiales

## 🎯 Dominios Personalizados

Cada plataforma permite dominios personalizados:

- **Netlify**: DNS settings o nameservers
- **Vercel**: Domains section
- **GitHub Pages**: CNAME file
- **Firebase**: Firebase console

---

¿Preguntas sobre deployment? Contacta directamente para soporte.

**¡Tu portafolio estará en línea en minutos!** 🚀