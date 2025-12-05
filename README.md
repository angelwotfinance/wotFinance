# React Landing Page

Una landing page moderna creada con React y Vite, inspirada en la estructura de winefi.co pero con diseño y contenido únicos.

## 🎨 Características

- **Diseño Moderno**: Gradientes vibrantes, efectos de glassmorfismo y animaciones suaves
- **Totalmente Responsive**: Optimizado para dispositivos móviles, tablets y escritorio
- **Componentes Modulares**: Arquitectura de componentes React reutilizables
- **Animaciones Premium**: Efectos fade-in, hover y transiciones suaves
- **SEO Optimizado**: Meta tags y estructura HTML semántica

## 📋 Estructura de Secciones

La landing page incluye las siguientes secciones en orden:

1. **Navbar** - Barra de navegación fija con scroll suave
2. **Hero** - Sección principal con CTA buttons y trust indicators
3. **How It Works** - Proceso de 3 pasos con tarjetas numeradas
4. **Testimonials** - Carrusel infinito de testimonios de clientes
5. **Benefits** - Grid de 4 beneficios principales
6. **Stats** - Métricas animadas con contadores
7. **Footer** - Footer multi-columna con enlaces y redes sociales

## 🚀 Instalación

### Prerrequisitos

- Node.js (v14 o superior)
- npm o yarn

### Pasos de Instalación

1. Navega al directorio del proyecto:
```bash
cd C:\Users\carpe\.gemini\antigravity\scratch\react-landing-page
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Crea la versión de producción
- `npm run preview` - Preview de la build de producción

## 🎨 Sistema de Diseño

El proyecto utiliza un sistema de diseño completo con:

- **Paleta de Colores**: Gradientes modernos (púrpura, rosa, cyan)
- **Tipografía**: Google Font 'Inter' para una apariencia moderna
- **Espaciado**: Sistema de espaciado consistente con variables CSS
- **Animaciones**: Keyframes personalizados (fadeInUp, float, scroll)
- **Efectos**: Glassmorfismo, sombras, y transiciones suaves

## 📁 Estructura del Proyecto

```
react-landing-page/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Navbar.css
        ├── Hero.jsx
        ├── Hero.css
        ├── HowItWorks.jsx
        ├── HowItWorks.css
        ├── Testimonials.jsx
        ├── Testimonials.css
        ├── Benefits.jsx
        ├── Benefits.css
        ├── Stats.jsx
        ├── Stats.css
        ├── Footer.jsx
        └── Footer.css
```

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite 5** - Build tool y dev server
- **CSS3** - Estilos con variables CSS y animaciones
- **Google Fonts** - Tipografía Inter

## 🎯 Personalización

### Colores

Los colores se definen como variables CSS en `src/index.css`. Puedes personalizarlos modificando:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  --accent-gradient: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}
```

### Contenido

Para personalizar el contenido, edita los componentes individuales en `src/components/`:

- Textos del Hero: `Hero.jsx`
- Pasos del proceso: `HowItWorks.jsx`
- Testimonios: `Testimonials.jsx`
- Beneficios: `Benefits.jsx`
- Estadísticas: `Stats.jsx`

## 📱 Responsive Design

El sitio está optimizado para los siguientes breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 968px
- **Desktop**: > 968px

## ⚡ Características de Rendimiento

- Hot Module Replacement (HMR) con Vite
- CSS optimizado sin frameworks pesados
- Componentes React eficientes
- Animaciones con CSS (GPU accelerated)

## 📝 Notas

- El proyecto está configurado para usar Vite como bundler
- Todos los estilos son CSS vanilla, sin dependencias de frameworks CSS
- Las animaciones están optimizadas para 60fps
- El diseño sigue principios de web design moderno

## 🤝 Próximos Pasos

Para poner en producción:

1. Ejecuta `npm run build`
2. Los archivos generados estarán en `dist/`
3. Despliega la carpeta `dist/` en tu hosting preferido (Vercel, Netlify, etc.)

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.
