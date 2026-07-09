export const productos = [
  {
    nombre: 'Frutas de temporada',
    descripcion: 'Selección diaria de fruta fresca. La disponibilidad puede variar.',
    categoria: 'frutas',
    destacado: true,
  },
  {
    nombre: 'Verduras frescas',
    descripcion: 'Verduras y hortalizas para comprar producto fresco de mercado.',
    categoria: 'verduras',
    destacado: true,
  },
  {
    nombre: 'Producto para cocina diaria',
    descripcion: 'Básicos frescos para preparar comidas de casa con producto de temporada.',
    categoria: 'mercado',
    destacado: false,
  },
  {
    nombre: 'Producto sujeto a temporada',
    descripcion: 'La selección cambia durante el año y debe confirmarse en tienda.',
    categoria: 'temporada',
    destacado: false,
  },
] as const;
