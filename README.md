# Blog Emprendimiento

Blog sobre emprendimiento y desarrollo empresarial, construido con React + Vite + Tailwind CSS.

## Descripcion

Plataforma de contenido enfocada en emprendedores de habla hispana. Incluye articulos sobre finanzas, productividad, marketing digital e ideas de negocio, con busqueda y filtrado por categorias, formulario de contacto y enlaces a redes sociales.

## Stack tecnologico

| Tecnologia | Version | Uso |
|---|---|---|
| React | 18.3.1 | Framework UI |
| Vite | 5.3.1 | Build tool + HMR |
| Tailwind CSS | 3.4.4 | Estilos utilitarios |
| React Icons | 5.5.0 | Iconos (WhatsApp, LinkedIn, Facebook) |
| PostCSS + Autoprefixer | — | Procesamiento CSS |

## Estructura del proyecto

```
blog-emprendimiento/
├── public/
│   ├── emprenfactorico.ico         # Favicon del sitio
│   ├── google9373939301eb96bc.html # Verificacion Google Search Console
│   ├── lider.webp                  # Imagen del autor
│   └── logo.png                    # Logo principal
├── src/
│   ├── components/
│   │   ├── HomeSection.jsx         # Hero section
│   │   ├── BlogArticlesSection.jsx # Listado con busqueda y filtros
│   │   ├── PostCard.jsx            # Tarjeta de articulo
│   │   ├── AboutUsSection.jsx      # Seccion del autor
│   │   ├── ContactSection.jsx      # Formulario y redes sociales
│   │   └── Footer.jsx              # Pie de pagina
│   ├── data/
│   │   └── blogPosts.js            # Datos de los articulos
│   ├── App.jsx                     # Componente raiz + navegacion
│   ├── main.jsx                    # Punto de entrada React
│   └── index.css                   # Estilos globales + Tailwind
├── vite.config.js
├── tailwind.config.js
└── package.json
```

## Instalacion y uso

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd blog-emprendimiento

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de produccion
npm run build

# Vista previa del build
npm run preview

# Linting
npm run lint
```

## Funcionalidades

- **Navegacion responsiva** con menu hamburguesa en mobile
- **Hero section** con CTA hacia los articulos
- **Articulos destacados** (top 3) en la pagina principal
- **Busqueda** de articulos por titulo en tiempo real
- **Filtrado por categorias**: Finanzas, Productividad, Marketing Digital, Ideas de Negocio
- **Seccion del autor** con bio y foto
- **Formulario de contacto** con validacion
- **Redes sociales**: WhatsApp, LinkedIn, Facebook

## Paleta de colores

| Color | Hex | Uso |
|---|---|---|
| Naranja principal | `#f89831` | Acento de marca, botones, badges |
| Naranja hover | `#d67419` | Estados hover |
| Negro | `#000000` | Fondo header, textos principales |
| Gris oscuro | `#333333` | Fondos secundarios |
| Blanco | `#ffffff` | Fondo principal |
| Gris claro | `#f5f5f5` | Fondos sutiles |

## Agregar articulos

Los articulos se gestionan en `src/data/blogPosts.js`. Cada entrada sigue esta estructura:

```js
{
  id: 7,
  title: "Titulo del articulo",
  category: "Finanzas", // Finanzas | Productividad | Marketing Digital | Ideas de Negocio
  date: "23 de marzo, 2026",
  excerpt: "Descripcion breve del articulo...",
  imageUrl: "https://url-de-la-imagen.jpg"
}
```

## SEO

El sitio esta verificado en **Google Search Console** mediante el archivo `public/google9373939301eb96bc.html`.
