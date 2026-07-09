// Bloques de temporada. Los productos listados son orientativos:
// la disponibilidad real depende del mercado y debe confirmarse en tienda.
export const temporadas = [
  {
    id: 'primavera',
    nombre: 'Primavera',
    icono: '🌱',
    texto: 'Época de recambio, con las primeras piezas de fruta de hueso y verduras tiernas.',
    productos: ['fruta-temporada', 'lechuga', 'zanahorias', 'tomates'],
  },
  {
    id: 'verano',
    nombre: 'Verano',
    icono: '🍑',
    texto: 'Más variedad de fruta fresca para el calor y hortalizas de ensalada.',
    productos: ['fruta-temporada', 'tomates', 'pimientos', 'calabacin'],
  },
  {
    id: 'otono',
    nombre: 'Otoño',
    icono: '🍂',
    texto: 'Llega el producto de cuchara: verdura de guiso y fruta de recolección.',
    productos: ['fruta-temporada', 'patatas', 'cebollas', 'peras'],
  },
  {
    id: 'invierno',
    nombre: 'Invierno',
    icono: '🍊',
    texto: 'Cítricos en su mejor momento y hortalizas de raíz para platos de cuchara.',
    productos: ['naranjas', 'zanahorias', 'patatas', 'fruta-temporada'],
  },
] as const;
