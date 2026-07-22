// Bloques de temporada. Los productos listados son orientativos:
// la disponibilidad real depende del mercado y debe confirmarse en tienda.
export const temporadas = [
  {
    id: 'primavera',
    nombre: 'Primavera',
    icono: '🌱',
    texto: 'Llegan las fresas y las primeras verduras tiernas de la huerta, con las que arranca la temporada fuerte.',
    productos: ['fresas', 'esparragos', 'habas', 'guisantes'],
  },
  {
    id: 'verano',
    nombre: 'Verano',
    icono: '🍉',
    texto: 'Fruta jugosa para combatir el calor y hortalizas de ensalada en su mejor momento.',
    productos: ['sandia', 'melon', 'tomates', 'pimientos'],
  },
  {
    id: 'otono',
    nombre: 'Otoño',
    icono: '🍂',
    texto: 'Producto de recolección y los primeros platos de cuchara, con la uva y la granada como protagonistas.',
    productos: ['uvas', 'granadas', 'peras', 'calabaza'],
  },
  {
    id: 'invierno',
    nombre: 'Invierno',
    icono: '🍊',
    texto: 'Cítricos en su mejor punto y verdura de hoja para los guisos de cuchara del frío.',
    productos: ['naranjas', 'mandarinas', 'limones', 'acelgas'],
  },
] as const;
