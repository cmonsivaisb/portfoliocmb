# 🚀 INSTRUCCIONES DE USO - PORTAFOLIO FULLSTACK DEVELOPER

## 📱 ¿Qué incluye este paquete?

✅ **Proyecto React completo** con TypeScript y Tailwind CSS
✅ **Imágenes optimizadas** para todos los proyectos
✅ **CV en PDF** incluido y funcional
✅ **Configuraciones de deploy** para 5+ plataformas
✅ **Documentación completa** en español
✅ **Diseño responsivo** con modo oscuro/claro
✅ **SEO optimizado** y listo para producción

---

## ⚡ INICIO RÁPIDO (5 minutos)

### 1. 💻 Requisitos
- Node.js 18+ ([descargar](https://nodejs.org))
- Navegador moderno
- Editor de código (VS Code recomendado)

### 2. 🚀 Instalación
```bash
# Opción A: Con npm
npm install
npm run dev

# Opción B: Con script automático (Linux/Mac)
./quick-start.sh

# Opción C: Con pnpm (recomendado)
pnpm install
pnpm dev
```

### 3. 🌍 Abrir navegador
```
http://localhost:3000
```

---

## 📋 PERSONALIZACIÓN (10 minutos)

### 📝 Paso 1: Tus Datos
Edita: `src/data/portfolioData.ts`
- Nombre y título profesional
- Email de contacto
- Experiencia laboral
- Proyectos
- Habilidades

### 🖼️ Paso 2: Tus Imágenes
Reemplaza en `public/images/`:
- `carlos-profile.jpg` → Tu foto profesional
- `proyecto-*.jpg` → Screenshots de tus proyectos

### 📄 Paso 3: Tu CV
Reemplaza: `public/assets/cv-carlos-monsivais.pdf`

### 🎨 Paso 4: Colores (Opcional)
Modifica: `tailwind.config.js`
- Cambia colores primarios y de acento
- Personaliza fuentes

---

## 🌐 DEPLOYMENT (1 clic)

### 🌟 NETLIFY (Recomendado - GRATIS)
1. Ejecuta: `npm run build`
2. Ve a [netlify.com](https://netlify.com)
3. Arrastra carpeta `dist/` al área de deploy
4. ¡Listo! Tu portafolio estará online

### ⚡ VERCEL (Alternativa premium)
1. Sube proyecto a GitHub
2. Conecta repositorio en [vercel.com](https://vercel.com)
3. Deploy automático configurado

### 🐙 GITHUB PAGES (Gratis con GitHub)
1. Sube a GitHub
2. Activa GitHub Actions (archivo ya incluido)
3. Deploy automático en cada push

### 🌐 HOSTING TRADICIONAL
1. Ejecuta: `npm run build`
2. Sube contenido de `dist/` vía FTP
3. Archivo `.htaccess` ya incluido

---

## 📂 ESTRUCTURA DE ARCHIVOS

```
tu-portafolio/
├── 📁 src/
│   ├── 📁 components/     # Componentes React
│   ├── 📁 data/          # 🔴 TUS DATOS AQUÍ
│   └── 📁 hooks/         # Lógica reutilizable
├── 📁 public/
│   ├── 📁 images/        # 🔴 TUS IMÁGENES AQUÍ
│   └── 📁 assets/        # 🔴 TU CV AQUÍ
├── 📁 docs/           # Documentación
└── 📁 .github/        # Deploy automático
```

---

## 🐛 SOLUCIÓN DE PROBLEMAS

### ❌ Error al instalar
```bash
# Limpiar cache
rm -rf node_modules package-lock.json
npm install
```

### ❌ Error al hacer build
```bash
# Verificar tipos
npm run type-check

# Build con logs
npm run build --verbose
```

### ❌ Imágenes no cargan
- Verifica nombres de archivos (sin espacios)
- Revisa rutas en `portfolioData.ts`
- Confirma que estén en `public/images/`

### ❌ Deploy falla
- Verifica Node.js 18+
- Revisa configuración en `netlify.toml`
- Consulta logs de la plataforma

---

## 📚 DOCUMENTACIÓN COMPLETA

- 📄 **README.md** - Guía completa
- 🚀 **docs/DEPLOYMENT.md** - Deploy detallado
- 🎨 **docs/CUSTOMIZATION.md** - Personalización avanzada
- 🔄 **CHANGELOG.md** - Historial de cambios

---

## ✨ CARACTERÍSTICAS DESTACADAS

✅ **Modo Oscuro/Claro** - Toggle con persistencia
✅ **100% Responsivo** - Mobile, tablet, desktop
✅ **SEO Optimizado** - Meta tags, sitemap, performance
✅ **Animaciones Sutiles** - Profesionales y elegantes
✅ **Descarga de CV** - Botón directo funcionando
✅ **Email Directo** - Sin formularios complejos
✅ **Carga Rápida** - Optimizado y comprimido
✅ **Accesible** - Estándares WCAG

---

## 📞 SOPORTE

¿Necesitas ayuda?

- 📧 **Email**: carlos.monsivais@email.com
- 📁 **Documentación**: Ver carpeta `docs/`
- 🎯 **Personalización**: Servicio disponible

---

## 🏆 RESULTADO FINAL

Tendrás un portafolio profesional:
- ⚡ **Rápido**: Carga en <2 segundos
- 📱 **Moderno**: Diseño 2025
- 🎯 **Efectivo**: Optimizado para conversiones
- 🔍 **Visible**: SEO optimizado
- 🚀 **Escalable**: Fácil de mantener

---

**¡Disfruta tu nuevo portafolio profesional!** 🎆

*Desarrollado con ❤️ por Carlos Monsivais*