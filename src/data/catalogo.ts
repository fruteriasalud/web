// Catálogo base de productos habituales del puesto.
// Sin precios ni fotos reales todavía: estructura lista para sustituir
// el campo "icono" por una fotografía cuando esté disponible.
export const catalogo = [
  {
    id: 'manzanas',
    nombre: 'Manzanas',
    icono: '🍎',
    categoria: 'frutas',
    descripcion: 'Ideales para picar entre horas o para un postre casero rápido.',
  },
  {
    id: 'platanos',
    nombre: 'Plátanos',
    icono: '🍌',
    categoria: 'frutas',
    descripcion: 'Un clásico de la fruta de cada día, siempre entre los más pedidos.',
  },
  {
    id: 'naranjas',
    nombre: 'Naranjas',
    icono: '🍊',
    categoria: 'frutas',
    descripcion: 'Perfectas para zumo recién exprimido o para comer a mordiscos.',
  },
  {
    id: 'peras',
    nombre: 'Peras',
    icono: '🍐',
    categoria: 'frutas',
    descripcion: 'Dulces y jugosas, buena opción para la fruta de sobremesa.',
  },
  {
    id: 'tomates',
    nombre: 'Tomates',
    icono: '🍅',
    categoria: 'verduras',
    descripcion: 'Para ensalada, salsa o el pan con tomate de cada mañana.',
  },
  {
    id: 'lechuga',
    nombre: 'Lechuga',
    icono: '🥬',
    categoria: 'verduras',
    descripcion: 'Base fresca para ensaladas, siempre con hoja crujiente.',
  },
  {
    id: 'calabacin',
    nombre: 'Calabacín',
    icono: '🥒',
    categoria: 'verduras',
    descripcion: 'Socorrido para salteados, cremas y platos al horno.',
  },
  {
    id: 'patatas',
    nombre: 'Patatas',
    icono: '🥔',
    categoria: 'verduras',
    descripcion: 'El básico que no puede faltar en la cesta de la compra semanal.',
  },
  {
    id: 'cebollas',
    nombre: 'Cebollas',
    icono: '🧅',
    categoria: 'verduras',
    descripcion: 'El punto de partida de la mayoría de los guisos de casa.',
  },
  {
    id: 'zanahorias',
    nombre: 'Zanahorias',
    icono: '🥕',
    categoria: 'verduras',
    descripcion: 'Crujientes para picar, cocinar o añadir a caldos y purés.',
  },
  {
    id: 'pimientos',
    nombre: 'Pimientos',
    icono: '🫑',
    categoria: 'verduras',
    descripcion: 'Color y sabor para freír, asar o tomar en tiras crudas.',
  },
  {
    id: 'fruta-temporada',
    nombre: 'Fruta de temporada',
    icono: '🍇',
    categoria: 'temporada',
    descripcion: 'La selección cambia con el año; te contamos qué hay al llegar al puesto.',
  },
] as const;

export type ProductoCatalogo = (typeof catalogo)[number];
