#!/bin/bash

# =============================================================================
# Script de Inicio Rápido - Portafolio FullStack Developer
# =============================================================================

echo "🚀 Iniciando configuración del portafolio..."
echo ""

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado"
    echo "Por favor instala Node.js 18+ desde: https://nodejs.org"
    exit 1
fi

# Verificar versión de Node.js
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "⚠️ Versión de Node.js muy antigua: $(node -v)"
    echo "Se requiere Node.js 18+"
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Detectar gestor de paquetes
PM="npm"
if command -v pnpm &> /dev/null; then
    PM="pnpm"
    echo "✅ Usando pnpm"
elif command -v yarn &> /dev/null; then
    PM="yarn"
    echo "✅ Usando yarn"
else
    echo "✅ Usando npm"
fi

# Instalar dependencias
echo ""
echo "📦 Instalando dependencias..."
$PM install

if [ $? -ne 0 ]; then
    echo "❌ Error instalando dependencias"
    exit 1
fi

# Verificar build
echo ""
echo "🔨 Verificando build..."
$PM run type-check

if [ $? -ne 0 ]; then
    echo "⚠️ Advertencia: Errores de tipos detectados"
fi

# Mostrar próximos pasos
echo ""
echo "✨ ¡Configuración completada!"
echo ""
echo "📄 Próximos pasos:"
echo "1. Personaliza tus datos en: src/data/portfolioData.ts"
echo "2. Reemplaza tu foto en: public/images/carlos-profile.jpg"
echo "3. Actualiza tu CV en: public/assets/cv-carlos-monsivais.pdf"
echo "4. Modifica colores en: tailwind.config.js"
echo ""
echo "🚀 Comandos disponibles:"
echo "  $PM run dev      - Servidor de desarrollo"
echo "  $PM run build    - Build para producción"
echo "  $PM run preview  - Preview del build"
echo ""
echo "🌐 Deploy rápido:"
echo "  - Netlify: Arrastra carpeta 'dist' a netlify.com"
echo "  - Vercel: Conecta repositorio en vercel.com"
echo "  - Ver docs/DEPLOYMENT.md para más opciones"
echo ""
echo "📚 Documentación:"
echo "  - README.md - Guía completa"
echo "  - docs/DEPLOYMENT.md - Guías de deploy"
echo "  - docs/CUSTOMIZATION.md - Personalización"
echo ""
echo "¡Disfruta creando tu portafolio! 🎆"