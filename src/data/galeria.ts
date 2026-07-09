// Recursos visuales provisionales (ilustraciones SVG locales, sin fotos externas).
// Pensados para sustituirse por fotografías reales del puesto, producto y reparto
// en cuanto estén disponibles. El campo "src" apunta siempre a public/images/galeria.
export const galeria = [
  {
    id: 'fruta-surtida',
    src: '/images/galeria/fruta-surtida.svg',
    alt: 'Ilustración de una caja con fruta variada: manzanas, naranjas, plátano y uvas',
    titulo: 'Fruta fresca de temporada',
    caption: 'Selección diaria de fruta en el puesto según mercado y temporada.',
    categoria: 'producto',
  },
  {
    id: 'verduras-frescas',
    src: '/images/galeria/verduras-frescas.svg',
    alt: 'Ilustración de una caja con verduras: lechuga, tomates, zanahorias y pimiento',
    titulo: 'Verdura y hortaliza fresca',
    caption: 'Verdura fresca seleccionada cada día según la temporada y el mercado.',
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
    caption: 'Preparamos cada encargo con atención antes de la recogida o de una entrega a consultar.',
    categoria: 'puesto',
  },
  {
    id: 'reparto-vehiculo-1',
    src: '/images/galeria/reparto-vehiculo-1.svg',
    alt: 'Ilustración de apoyo logístico para pedidos con una furgoneta vista de lado',
    titulo: 'Entregas a consultar',
    caption: 'La entrega de pedidos se valora caso por caso y está sujeta a disponibilidad.',
    categoria: 'logistica',
  },
  {
    id: 'reparto-vehiculo-2',
    src: '/images/galeria/reparto-vehiculo-2.svg',
    alt: 'Ilustración de un triciclo de carga con caja de producto',
    titulo: 'Logística y transporte',
    caption: 'Apoyo visual para explicar recogidas y entregas a consultar por teléfono.',
    categoria: 'logistica',
  },
  {
    id: 'equipo-negocio',
    src: '/images/galeria/equipo-negocio.svg',
    alt: 'Ilustración del equipo de Frutería Salud tras el mostrador del puesto',
    titulo: 'Equipo de Frutería Salud',
    caption: 'Detrás del puesto, un equipo familiar dedicado al mercado cada día.',
    categoria: 'equipo',
  },
] as const;

export type GaleriaItem = (typeof galeria)[number];

export const getGaleria = (categoria: GaleriaItem['categoria']) => galeria.filter((item) => item.categoria === categoria);
