// Catálogo base de productos habituales del puesto.
// Sin precios ni fotos reales todavía: estructura lista para sustituir
// el campo "icono" por una fotografía cuando esté disponible.
export const catalogo = [
  {
    id: 'manzanas',
    nombre: 'Manzanas',
    icono: '🍎',
    categoria: 'frutas',
    descripcion: 'Para picar entre horas o para una tarta casera.',
  },
  {
    id: 'platanos',
    nombre: 'Plátanos',
    icono: '🍌',
    categoria: 'frutas',
    descripcion: 'Fruta para cada día, de las más pedidas en el puesto.',
  },
  {
    id: 'naranjas',
    nombre: 'Naranjas',
    icono: '🍊',
    categoria: 'frutas',
    descripcion: 'Naranjas de zumo, también buenas para comer a mordiscos.',
  },
  {
    id: 'peras',
    nombre: 'Peras',
    icono: '🍐',
    categoria: 'frutas',
    descripcion: 'Peras para la fruta de sobremesa.',
  },
  {
    id: 'tomates',
    nombre: 'Tomates',
    icono: '🍅',
    categoria: 'verduras',
    descripcion: 'Tomate para gazpacho, ensalada o el pan de cada mañana.',
  },
  {
    id: 'lechuga',
    nombre: 'Lechuga',
    icono: '🥬',
    categoria: 'verduras',
    descripcion: 'Lechuga para ensalada de diario.',
  },
  {
    id: 'calabacin',
    nombre: 'Calabacín',
    icono: '🥒',
    categoria: 'verduras',
    descripcion: 'Calabacín para salteados, cremas o al horno.',
  },
  {
    id: 'patatas',
    nombre: 'Patatas',
    icono: '🥔',
    categoria: 'verduras',
    descripcion: 'Patata para guiso o para freír.',
  },
  {
    id: 'cebollas',
    nombre: 'Cebollas',
    icono: '🧅',
    categoria: 'verduras',
    descripcion: 'Cebolla para el sofrito de casi cualquier plato.',
  },
  {
    id: 'zanahorias',
    nombre: 'Zanahorias',
    icono: '🥕',
    categoria: 'verduras',
    descripcion: 'Zanahoria para picar, cocinar o para el caldo.',
  },
  {
    id: 'pimientos',
    nombre: 'Pimientos',
    icono: '🫑',
    categoria: 'verduras',
    descripcion: 'Pimientos para freír o asar.',
  },
  {
    id: 'fruta-temporada',
    nombre: 'Fruta de temporada',
    icono: '🍇',
    categoria: 'temporada',
    descripcion: 'Lo que esté mejor esta semana: pregúntanos al llegar al puesto.',
  },
] as const;

export type ProductoCatalogo = (typeof catalogo)[number];
