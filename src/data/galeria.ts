// Recursos visuales provisionales (ilustraciones SVG locales, sin fotos externas).
// Pensados para sustituirse por fotografías reales del puesto y del producto
// en cuanto estén disponibles. El campo "src" apunta siempre a public/images/galeria.
export const galeria = [
  {
    id: 'fruta-surtida',
    src: '/images/galeria/fruta-surtida.svg',
    alt: 'Ilustración de una caja con fruta variada: manzanas, naranjas, plátano y uvas',
    titulo: 'Fruta fresca de temporada',
    caption: 'Lo que hay hoy puede no ser lo mismo que mañana.',
    categoria: 'producto',
  },
  {
    id: 'verduras-frescas',
    src: '/images/galeria/verduras-frescas.svg',
    alt: 'Ilustración de una caja con verduras: lechuga, tomates, zanahorias y pimiento',
    titulo: 'Verdura y hortaliza fresca',
    caption: 'Verdura para el puchero, la ensalada o lo que toque esa semana.',
    categoria: 'producto',
  },
  {
    id: 'puesto-mercado',
    src: '/images/galeria/puesto-mercado.svg',
    alt: 'Ilustración del puesto de mercado con toldo a rayas y estanterías de producto',
    titulo: 'Nuestro puesto en el mercado',
    caption: 'Puestos 47, 48 y 49 del Mercado de Abastos Tiro de Línea.',
    categoria: 'puesto',
  },
  {
    id: 'preparacion-pedidos',
    src: '/images/galeria/preparacion-pedidos.svg',
    alt: 'Ilustración de una caja de encargo preparándose junto a una lista de comprobación',
    titulo: 'Preparación de encargos',
    caption: 'Preparamos tu encargo para que solo tengas que pasar a recogerlo.',
    categoria: 'puesto',
  },
  {
    id: 'equipo-negocio',
    src: '/images/galeria/equipo-negocio.svg',
    alt: 'Ilustración del equipo de Frutería Salud tras el mostrador del puesto',
    titulo: 'Equipo de Frutería Salud',
    caption: 'Detrás del puesto, un equipo familiar cada día del año.',
    categoria: 'equipo',
  },
] as const;

export type GaleriaItem = (typeof galeria)[number];

export const getGaleria = (categoria: GaleriaItem['categoria']) => galeria.filter((item) => item.categoria === categoria);
