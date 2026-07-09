export const negocio = {
  nombre: 'Frutería Salud',
  nombreLegal: 'Frutería Salud',
  claim: 'Fruta y verdura fresca en Sevilla',
  descripcion:
    'Frutería local familiar en el Mercado de Abastos Tiro de Línea, con fruta, verdura y producto fresco de temporada.',
  idioma: 'es-ES',
  siteUrl: 'https://www.fruteriasalud.es',
  logo: '/logo/logo-principal.png',
  imagenSocial: '/logo/logo-fondo-blanco.png',
  facebook: 'https://www.facebook.com/FruteriaSaludCom?locale=es_ES',
  googleMaps: 'https://maps.app.goo.gl/MUbiuF8D8oKDHpGs9',
  direccion: {
    texto:
      'Mercado de Abastos Tiro de Línea, puestos 47, 48 y 49, Calle Puebla de las Mujeres, s/n, 41013 Sevilla',
    mercado: 'Mercado de Abastos Tiro de Línea',
    puestos: '47, 48 y 49',
    calle: 'Calle Puebla de las Mujeres, s/n',
    codigoPostal: '41013',
    ciudad: 'Sevilla',
    provincia: 'Sevilla',
    pais: 'ES',
    zona: 'Tiro de Línea',
  },
  contacto: {
    telefono: '954 61 80 45',
    telefonoTel: '+34954618045',
    whatsapp: null,
    email: null,
  },
  horario: {
    texto: 'Horario habitual de mercado. Te recomendamos llamar antes de tu visita para confirmarlo.',
    openingHoursSpecification: [],
  },
  sobreNosotros: {
    titulo: 'Quiénes somos',
    texto:
      'Somos una frutería familiar del Mercado de Abastos Tiro de Línea. Cada día seleccionamos fruta y verdura fresca pensando en la cocina de nuestros clientes, con la atención cercana propia de un puesto de mercado de toda la vida.',
  },
  seo: {
    titleTemplate: '%s | Frutería Salud',
    defaultTitle: 'Frutería Salud | Fruta y verdura fresca en Sevilla',
    defaultDescription:
      'Frutería Salud, frutería local familiar en el Mercado de Abastos Tiro de Línea de Sevilla. Fruta, verdura y producto fresco de temporada.',
  },
  // Uso interno del equipo, no debe renderizarse en páginas públicas.
  pendienteConfirmar: [
    'Dominio final de producción',
    'WhatsApp',
    'Email',
    'Horario exacto por día',
    'Servicios de encargos y condiciones',
    'Reparto a domicilio',
    'Métodos de pago',
  ],
} as const;
