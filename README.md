# 🚀 Portafolio Carlos Monsivais - FullStack Developer

![Portafolio Preview](./docs/preview.png)

Portafolio profesional y minimalista desarrollado con React, TypeScript y Tailwind CSS. Diseño moderno con modo oscuro/claro y animaciones sutiles.

## ✨ Características

- 🌙 **Modo Oscuro/Claro**: Toggle con persistencia local
- 📱 **Completamente Responsivo**: Diseño mobile-first
- ⚡ **Optimizado**: Build estático optimizado para máximo rendimiento
- 🎨 **Animaciones Sutiles**: Efectos profesionales y elegantes
- 📄 **CV Descargable**: Descarga directa del CV en PDF
- 🔗 **Enlaces Funcionales**: Enlaces a proyectos reales
- 🎯 **SEO Optimizado**: Meta tags completos para mejor posicionamiento
- 📧 **Contacto Directo**: Email directo sin formularios complejos

## 🛠️ Tecnologías

- **Frontend**: React 18, TypeScript
- **Estilos**: Tailwind CSS
- **Build Tool**: Vite
- **Iconos**: Lucide React
- **Fuentes**: Google Fonts (Inter)

## 📂 Estructura del Proyecto

```
carlos-monsivais-portfolio/
├── public/
│   ├── images/
│   │   ├── carlos-profile.jpg     # Foto profesional
│   │   ├── emwa-project.jpg       # Imagen proyecto EMWA
│   │   ├── desego-project.jpg     # Imagen proyecto DeseGo
│   │   ├── papeleria-project.jpg  # Imagen proyecto Papelería
│   │   ├── tucsa-project.jpg      # Imagen proyecto Tucsa
│   │   └── score-project.jpg      # Imagen proyecto Score
│   ├── assets/
│   │   └── cv-carlos-monsivais.pdf # CV en PDF
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx             # Navegación principal
│   │   ├── Hero.tsx               # Sección principal
│   │   ├── About.tsx              # Sobre mí
│   │   ├── Experience.tsx         # Experiencia profesional
│   │   ├── Projects.tsx           # Proyectos destacados
│   │   ├── Skills.tsx             # Habilidades técnicas
│   │   ├── Contact.tsx            # Información de contacto
│   │   └── Footer.tsx             # Pie de página
│   ├── data/
│   │   └── portfolioData.ts       # Datos del portafolio
│   ├── hooks/
│   │   ├── useTheme.tsx           # Hook para tema oscuro/claro
│   │   ├── useScrollAnimation.tsx # Hook para animaciones
│   │   └── useSmoothScroll.tsx    # Hook para navegación suave
│   ├── App.tsx                    # Componente principal
│   ├── main.tsx                   # Punto de entrada
│   └── index.css                  # Estilos globales
├── docs/
│   ├── DEPLOYMENT.md              # Guías de deployment
│   └── CUSTOMIZATION.md           # Guía de personalización
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm, yarn o pnpm

### Instalación

1. **Clona o descarga el proyecto**
```bash
git clone <tu-repositorio>
cd carlos-monsivais-portfolio
```

2. **Instala dependencias**
```bash
# Con npm
npm install

# Con yarn
yarn install

# Con pnpm
pnpm install
```

3. **Inicia el servidor de desarrollo**
```bash
# Con npm
npm run dev

# Con yarn
yarn dev

# Con pnpm
pnpm dev
```

4. **Abre tu navegador**
```
http://localhost:3000
```

## 🏗️ Build para Producción

```bash
# Con npm
npm run build

# Con yarn
yarn build

# Con pnpm
pnpm build
```

Esto generará la carpeta `dist/` con los archivos optimizados para producción.

## 🌐 Deployment

Ver [DEPLOYMENT.md](./docs/DEPLOYMENT.md) para instrucciones detalladas de deployment en:

- **Netlify** (Recomendado)
- **Vercel**
- **GitHub Pages**
- **Hosting Tradicional**
- **Firebase Hosting**

## 🎨 Personalización

### Datos Personales

Edita el archivo `src/data/portfolioData.ts` para actualizar:

- Información personal
- Experiencia laboral
- Proyectos
- Habilidades
- Educación
- Certificaciones

### Imágenes

1. **Foto de perfil**: Reemplaza `public/images/carlos-profile.jpg`
2. **Proyectos**: Reemplaza las imágenes en `public/images/`
3. **CV**: Reemplaza `public/assets/cv-carlos-monsivais.pdf`

### Colores y Estilos

Modifica `tailwind.config.js` para cambiar:

- Paleta de colores
- Fuentes
- Animaciones
- Espaciados

Ver [CUSTOMIZATION.md](./docs/CUSTOMIZATION.md) para más detalles.

## 📝 Scripts Disponibles

- `dev`: Inicia servidor de desarrollo
- `build`: Construye para producción
- `preview`: Previsualiza build de producción
- `lint`: Ejecuta ESLint
- `type-check`: Verifica tipos TypeScript

## 🔧 Configuración

### Variables de Entorno

No se requieren variables de entorno. Todo está configurado para funcionar sin servicios externos.

### SEO

Actualiza los meta tags en `index.html`:

- Title
- Description
- Keywords
- Open Graph tags
- Twitter cards

## 📱 Responsive Design

El diseño es completamente responsivo con breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ⚡ Optimizaciones

- **Lazy Loading**: Imágenes cargadas bajo demanda
- **Code Splitting**: Chunks separados para vendor y componentes
- **Minificación**: CSS y JavaScript optimizados
- **Compresión**: Archivos comprimidos para mejor rendimiento
- **Caching**: Headers apropiados para cache del navegador

## 🐛 Solución de Problemas

### Build Falla

1. Verifica que todas las dependencias estén instaladas
2. Asegúrate de usar Node.js 18+
3. Limpia cache: `rm -rf node_modules dist && npm install`

### Imágenes No Cargan

1. Verifica que las rutas en `portfolioData.ts` sean correctas
2. Asegúrate de que las imágenes existan en `public/images/`

### Tema No Persiste

1. Verifica que localStorage esté habilitado en el navegador
2. Revisa la configuración de cookies del sitio

## 📄 Licencia

Este proyecto es de uso personal. Puedes usarlo como base para tu propio portafolio.

## 🤝 Contribuciones

Si encuentras algún error o tienes sugerencias de mejora, no dudes en:

1. Crear un issue
2. Enviar un pull request
3. Contactar directamente

## 📞 Contacto

**Carlos Iván Monsivais Bravo**
- 📧 Email: carlos.monsivais@email.com
- 📍 Ubicación: Saltillo, Coahuila, México
- 💼 LinkedIn: [carlosmonsivaisbra](https://linkedin.com/in/carlosmonsivaisbra)
- 🐱 GitHub: [carlosmonsivaisbra](https://github.com/carlosmonsivaisbra)

---

⭐ Si este proyecto te fue útil, ¡considera darle una estrella!

**Desarrollado con ❤️ por Carlos Monsivais**