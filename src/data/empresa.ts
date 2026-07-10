// Contenido de la página /empresa ("Quiénes somos"). Copy prudente: no afirma
// reparto a domicilio confirmado ni datos que no constan en negocio.ts (ver
// negocio.pendienteConfirmar).
export const empresa = {
  hero: {
    eyebrow: 'Quiénes somos',
    titulo: 'El puesto de siempre en el mercado',
    descripcion:
      'Frutería Salud es un negocio familiar en los puestos 47, 48 y 49 del Mercado de Abastos Tiro de Línea. Aquí te contamos cómo trabajamos y cómo hacer un encargo.',
  },
  quienesSomos: {
    texto:
      'Somos una frutería familiar en los puestos 47, 48 y 49 del Mercado de Abastos Tiro de Línea, en Sevilla. Atendemos tanto a quien compra aquí desde hace años como a quien se acerca por primera vez, con el género que hay cada mañana.',
  },
  comoTrabajamos: [
    {
      icono: '🌅',
      titulo: 'Cada mañana',
      texto: 'Revisamos qué ha llegado bueno al mercado antes de abrir el puesto.',
    },
    {
      icono: '🧺',
      titulo: 'En el puesto',
      texto: 'Colocamos la fruta y la verdura para que la veas y la elijas con calma.',
    },
    {
      icono: '📞',
      titulo: 'Si buscas algo',
      texto: 'Llámanos antes y te decimos si lo tenemos ese día.',
    },
    {
      icono: '🧾',
      titulo: 'Tu encargo',
      texto: 'Lo dejamos preparado para que solo tengas que pasar a recogerlo.',
    },
  ],
  elPuesto: [
    {
      icono: '🏪',
      titulo: 'Puestos 47, 48 y 49',
      texto: 'Tres puestos contiguos dentro del mercado, con más variedad de producto expuesto.',
    },
    {
      icono: '👨‍👩‍👧',
      titulo: 'Negocio familiar',
      texto: 'Frutería Salud lo llevamos en familia, con la cercanía del comercio de mercado de siempre.',
    },
    {
      icono: '📍',
      titulo: 'Mercado de Abastos Tiro de Línea',
      texto: 'Estamos en Calle Puebla de las Mujeres, junto a otros comercios de producto fresco.',
    },
  ],
  pedidos: {
    eyebrow: 'Encargos',
    titulo: 'Cómo hacemos un encargo',
    texto:
      'Atendemos encargos de clientes habituales y también de algún negocio de la zona que necesita producto con cierta regularidad. Llámanos o pásate por el puesto y te decimos qué podemos hacer ese día.',
  },
  encargosEspeciales: {
    titulo: '¿Necesitas algo especial?',
    texto: 'De momento, los encargos se recogen en el puesto. Si necesitas algo especial, llámanos y lo vemos.',
  },
  ctaFinal: {
    eyebrow: 'Hablemos de tu pedido',
    titulo: '¿Necesitas producto fresco de forma habitual?',
    descripcion: 'Cuéntanos qué necesitas y te decimos qué podemos hacer. Llámanos o pásate por el mercado.',
  },
} as const;
