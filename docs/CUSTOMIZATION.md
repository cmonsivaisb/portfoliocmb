# 🎨 Guía de Personalización

Esta guía te ayudará a personalizar completamente el portafolio para adaptarlo a tu perfil profesional.

## 📝 Datos Personales

### Archivo Principal: `src/data/portfolioData.ts`

Este archivo contiene toda tu información profesional:

```typescript
export const personalInfo = {
  name: 'Tu Nombre Completo',
  title: 'Tu Título Profesional',
  experience: '+X años de experiencia',
  email: 'tu.email@gmail.com',
  location: 'Tu Ciudad, País',
  bio: 'Tu descripción profesional...',
  profileImage: '/images/tu-foto-perfil.jpg',
  cvPath: '/assets/tu-cv.pdf'
};
```

### Experiencia Laboral

```typescript
export const experience = [
  {
    id: 1,
    company: 'Nombre de la Empresa',
    position: 'Tu Posición',
    period: 'Mes YYYY – Mes YYYY',
    description: 'Descripción de responsabilidades...',
    technologies: ['Tech1', 'Tech2', 'Tech3'],
    projects: ['proyecto1.com', 'proyecto2.com']
  },
  // ... más experiencias
];
```

### Proyectos

```typescript
export const projects = [
  {
    id: 1,
    title: 'Nombre del Proyecto',
    description: 'Descripción del proyecto...',
    image: '/images/proyecto-imagen.jpg',
    url: 'https://tu-proyecto.com',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'Web App',
    features: ['Característica 1', 'Característica 2']
  },
  // ... más proyectos
];
```

### Habilidades

```typescript
export const skills = {
  programming: ['JavaScript', 'TypeScript', 'Python'],
  frontend: ['React', 'Vue.js', 'Angular'],
  backend: ['Node.js', 'Express', 'Django'],
  databases: ['MongoDB', 'PostgreSQL', 'MySQL'],
  cms: ['WordPress', 'Strapi', 'Contentful'],
  tools: ['Git', 'Docker', 'AWS']
};
```

## 🖼️ Imágenes

### Foto de Perfil

1. **Ubicación**: `public/images/tu-foto-perfil.jpg`
2. **Tamaño recomendado**: 400x400px mínimo
3. **Formato**: JPG o PNG
4. **Peso**: Menor a 500KB

**Consejos**:
- Foto profesional con fondo neutro
- Buena iluminación
- Vestimenta profesional
- Sonrisa natural

### Imágenes de Proyectos

1. **Ubicación**: `public/images/proyecto-nombre.jpg`
2. **Tamaño**: 800x500px (16:10)
3. **Formato**: JPG optimizado
4. **Peso**: Menor a 200KB cada una

**Tipos de imágenes**:
- Screenshots de la aplicación
- Mockups en dispositivos
- Diagramas de arquitectura
- Interfaces de usuario

### Optimización de Imágenes

```bash
# Usando ImageOptim (macOS)
# O TinyPNG online
# O herramientas CLI:

# Convertir a WebP
npx @squoosh/cli --webp '{quality:80}' images/*.jpg

# Redimensionar
npx @squoosh/cli --resize '{width:800}' images/*.jpg
```

## 🎨 Colores y Tema

### Archivo: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Tu color primario
        500: '#0ea5e9', // Azul por defecto
        600: '#0284c7',
        700: '#0369a1',
      },
      accent: {
        // Tu color de acento
        500: '#10b981', // Verde por defecto
        600: '#059669',
        700: '#047857',
      }
    }
  }
}
```

### Paletas de Color Populares

**Tech/Profesional**:
```javascript
primary: '#2563eb', // Azul
accent: '#10b981',  // Verde
```

**Creativo/Diseño**:
```javascript
primary: '#8b5cf6', // Púrpura
accent: '#f59e0b',  // Naranja
```

**Minimalista**:
```javascript
primary: '#374151', // Gris oscuro
accent: '#6b7280',  // Gris medio
```

**Energético**:
```javascript
primary: '#ef4444', // Rojo
accent: '#f97316',  // Naranja
```

## 🔤 Tipografía

### Cambiar Fuente Principal

1. **En `index.html`**:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

2. **En `tailwind.config.js`**:
```javascript
fontFamily: {
  inter: ['Inter', 'sans-serif'],
  // Agrega nuevas fuentes:
  roboto: ['Roboto', 'sans-serif'],
  poppins: ['Poppins', 'sans-serif'],
},
```

3. **En `index.css`**:
```css
body {
  @apply font-roboto; /* Cambia por tu fuente */
}
```

### Fuentes Recomendadas

**Profesionales**:
- Inter
- Roboto
- Open Sans
- Source Sans Pro

**Modernas**:
- Poppins
- Nunito
- Manrope
- DM Sans

**Elegantes**:
- Playfair Display
- Crimson Text
- Libre Baskerville

## ⚙️ Configuración SEO

### Archivo: `index.html`

```html
<head>
  <title>Tu Nombre - Tu Título Profesional</title>
  <meta name="description" content="Tu descripción profesional optimizada para SEO" />
  <meta name="keywords" content="tus, palabras, clave, profesionales" />
  <meta name="author" content="Tu Nombre Completo" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="Tu Nombre - Tu Título" />
  <meta property="og:description" content="Tu descripción" />
  <meta property="og:image" content="/images/tu-foto-perfil.jpg" />
  <meta property="og:url" content="https://tu-dominio.com" />
  
  <!-- Twitter -->
  <meta name="twitter:title" content="Tu Nombre - Tu Título" />
  <meta name="twitter:description" content="Tu descripción" />
  <meta name="twitter:image" content="/images/tu-foto-perfil.jpg" />
</head>
```

## 📱 Responsive Breakpoints

### Personalizar en `tailwind.config.js`

```javascript
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

## ✨ Animaciones

### Crear Nuevas Animaciones

En `tailwind.config.js`:

```javascript
animation: {
  'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
  'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
  'pulse-slow': 'pulse 3s infinite',
},
keyframes: {
  slideInLeft: {
    '0%': { opacity: '0', transform: 'translateX(-50px)' },
    '100%': { opacity: '1', transform: 'translateX(0)' }
  }
}
```

### Usar en Componentes

```jsx
<div className="animate-slide-in-left">
  Contenido animado
</div>
```

## 🎯 Secciones Personalizadas

### Agregar Nueva Sección

1. **Crear componente**: `src/components/NuevaSeccion.tsx`

```tsx
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const NuevaSeccion: React.FC = () => {
  const ref = useScrollAnimation();

  return (
    <section
      id="nueva-seccion"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      {/* Tu contenido */}
    </section>
  );
};

export default NuevaSeccion;
```

2. **Agregar a App.tsx**:

```tsx
import NuevaSeccion from './components/NuevaSeccion';

function App() {
  return (
    <div>
      {/* ... otras secciones */}
      <NuevaSeccion />
    </div>
  );
}
```

3. **Agregar navegación** en `Header.tsx`:

```tsx
const navItems = [
  // ... otros items
  { label: 'Nueva Sección', id: 'nueva-seccion' }
];
```

## 🌐 Idiomas

### Configurar para Inglés

1. **Cambiar HTML lang**:
```html
<html lang="en" class="dark">
```

2. **Actualizar textos** en todos los componentes
3. **Actualizar meta tags** en inglés
4. **Cambiar datos** en `portfolioData.ts`

### Soporte Multi-idioma

Para soporte completo, considera usar:
- `react-i18next`
- Archivos de traducción JSON
- Hook para cambio de idioma

## 📊 Analytics

### Google Analytics

1. **En `index.html`**:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Eventos Personalizados

```tsx
// En botones importantes
const handleDownloadCV = () => {
  // Analytics
  gtag('event', 'download', {
    event_category: 'engagement',
    event_label: 'CV Download'
  });
  
  // Descarga normal
  // ...
};
```

## 🔗 Enlaces y Redes Sociales

### Actualizar en `Contact.tsx`

```tsx
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/tu-usuario',
    icon: Github
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tu-perfil',
    icon: Linkedin
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/tu-usuario',
    icon: Twitter
  }
];
```

## ⚡ Optimizaciones

### Performance

1. **Lazy loading automático** ya configurado
2. **Code splitting** por chunks
3. **Compresión** en build
4. **Cache headers** en deployment

### SEO

1. **Sitemap** automático
2. **Meta tags** optimizados
3. **Structured data** (opcional)
4. **URLs amigables**

## 🎪 Modo Demo

Para crear una versión demo:

1. **Datos ficticios** en `portfolioData.ts`
2. **Imágenes placeholder**
3. **Enlaces demo**
4. **Watermark opcional**

---

## 📞 Soporte

¿Necesitas ayuda personalizando? 

- 📧 Email: carlos.monsivais@email.com
- 💬 Consultas directas por email
- 🎯 Personalización profesional disponible

**¡Haz que el portafolio sea único y refleje tu personalidad profesional!** ✨