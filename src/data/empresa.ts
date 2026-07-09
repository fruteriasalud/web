// Contenido de la página /empresa. Copy prudente: no afirma reparto a domicilio
// confirmado ni datos que no constan en negocio.ts (ver negocio.pendienteConfirmar).
export const empresa = {
  hero: {
    eyebrow: 'Empresa y reparto',
    titulo: 'Detrás del puesto: quiénes somos y cómo trabajamos',
    descripcion:
      'Frutería Salud es un negocio familiar del Mercado de Abastos Tiro de Línea. Te contamos cómo organizamos el puesto, cómo preparamos los encargos y cómo resolvemos la logística de los pedidos.',
  },
  quienesSomos: {
    texto:
      'Somos una frutería familiar con actividad en los puestos 47, 48 y 49 del Mercado de Abastos Tiro de Línea, en Sevilla. Cada jornada seleccionamos fruta y verdura fresca, atendemos encargos y resolvemos las necesidades concretas de quienes compran en el mercado, desde clientes habituales hasta negocios de la zona.',
  },
  comoTrabajamos: [
    {
      icono: '🌅',
      titulo: 'Selección diaria',
      texto: 'Empezamos el día revisando qué producto fresco tenemos disponible según mercado y temporada.',
    },
    {
      icono: '🧺',
      titulo: 'Exposición en el puesto',
      texto: 'Organizamos fruta y verdura en el puesto para que puedas ver y elegir con calma antes de comprar.',
    },
    {
      icono: '📞',
      titulo: 'Encargos por teléfono o en persona',
      texto: 'Recogemos encargos de clientes habituales y negocios, siempre según la disponibilidad de cada día.',
    },
    {
      icono: '🧾',
      titulo: 'Preparación cuidada',
      texto: 'Preparamos cada pedido antes de la recogida, con la misma atención de un puesto de mercado de toda la vida.',
    },
  ],
  estructura: [
    {
      icono: '🏪',
      titulo: 'Puestos 47, 48 y 49',
      texto:
        'Nuestra actividad se reparte en tres puestos contiguos dentro del mercado, lo que nos permite tener más variedad de producto expuesto.',
    },
    {
      icono: '👨‍👩‍👧',
      titulo: 'Negocio familiar',
      texto: 'Frutería Salud es un negocio de gestión familiar, con la cercanía propia del comercio de mercado de siempre.',
    },
    {
      icono: '📍',
      titulo: 'Mercado de Abastos Tiro de Línea',
      texto: 'Formamos parte de un mercado de barrio en Sevilla, junto a otros comercios de producto fresco.',
    },
  ],
  pedidos: {
    eyebrow: 'Pedidos',
    titulo: 'Pedidos y encargos',
    texto:
      'Atendemos encargos de clientes habituales y de negocios de hostelería o alimentación que necesitan producto fresco con cierta regularidad. La disponibilidad, las cantidades y las condiciones se confirman siempre por teléfono o en el puesto, según lo que tengamos ese día.',
  },
  logistica: {
    eyebrow: 'Logística',
    titulo: 'Reparto y transporte',
    texto:
      'La recogida de encargos se realiza en el puesto del mercado. Para necesidades de entrega, consúltanos por teléfono la disponibilidad y la forma de hacerlo llegar: lo valoramos caso por caso según el pedido y la zona.',
    nota: 'El servicio de entrega está en desarrollo. De momento, la vía más segura para confirmar cualquier detalle es llamarnos.',
  },
  ctaFinal: {
    eyebrow: 'Hablemos de tu pedido',
    titulo: '¿Necesitas producto fresco de forma habitual?',
    descripcion: 'Cuéntanos qué necesitas y te decimos qué podemos hacer. Llámanos, escríbenos por Facebook o pásate por el mercado.',
  },
} as const;
