import { NextResponse } from 'next/server';

export const config = {
  matcher: '/articulos/:slug*',
};

export default async function middleware(request) {
  const url = new URL(request.url);
  const slug = url.pathname.replace('/articulos/', '');

  // Importar los posts directamente en el middleware no funciona en Edge,
  // así que definimos un mapa estático generado desde tu blogPosts
  const posts = {
    'el-emprendedor-nace-o-se-hace': {
      title: '¿El emprendedor nace o se hace?',
      description: 'El debate sobre si el emprendedor nace o se hace ha estado presente durante años. Con 11 años trabajando con jóvenes en educación técnica, mi respuesta es clara: el emprendedor se hace en el camino.',
      image: 'https://emprenfactor.vercel.app/ImgArt/EmprendedorNace.webp',
    },
    'emprendimiento-femenino-en-nicaragua': {
      title: 'Emprendimiento femenino en Nicaragua: de la necesidad al impacto económico',
      description: 'En Nicaragua, el emprendimiento tiene rostro femenino. Más del 70% de los emprendimientos surgen por necesidad y cerca del 47% del trabajo por cuenta propia es realizado por mujeres.',
      image: 'https://emprenfactor.vercel.app/ImgArt/EmprendedorFemenino.webp',
    },
  };

  const post = posts[slug];

  // Si no existe el slug, dejar pasar normalmente
  if (!post) return NextResponse.next();

  const canonicalUrl = `https://emprenfactor.vercel.app/articulos/${slug}`;

  // Detectar si la petición viene de un bot/crawler (Facebook, Twitter, etc.)
  const ua = request.headers.get('user-agent') || '';
  const isCrawler = /facebookexternalhit|Twitterbot|LinkedInBot|WhatsApp|Slackbot|TelegramBot|Googlebot|bingbot/i.test(ua);

  if (!isCrawler) return NextResponse.next();

  // Servir HTML con OG tags solo a crawlers
  const html = `<!doctype html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <title>${post.title} — EmprenFactor</title>
  <meta name="description" content="${post.description}" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="EmprenFactor" />
  <meta property="og:title" content="${post.title}" />
  <meta property="og:description" content="${post.description}" />
  <meta property="og:image" content="${post.image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content="${canonicalUrl}" />
  <meta property="og:locale" content="es_NI" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${post.title}" />
  <meta name="twitter:description" content="${post.description}" />
  <meta name="twitter:image" content="${post.image}" />
</head>
<body>
  <p>Cargando artículo...</p>
  <script>window.location.href = "${canonicalUrl}";</script>
</body>
</html>`;

  return new NextResponse(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}