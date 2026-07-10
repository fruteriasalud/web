export const negocio = {
  nombre: 'Frutería Salud',
  nombreLegal: 'Frutería Salud',
  claim: 'Fruta y verdura fresca en Sevilla',
  descripcion:
    'Frutería familiar en los puestos 47, 48 y 49 del Mercado de Abastos Tiro de Línea, Sevilla.',
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
    telefonoTel: '954618045',
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
      'Somos una frutería familiar en los puestos 47, 48 y 49 del Mercado de Abastos Tiro de Línea. Lo que hay hoy puede no ser lo mismo que mañana: pásate y te recomendamos lo que esté mejor ese día.',
  },
  seo: {
    titleTemplate: '%s | Frutería Salud',
    defaultTitle: 'Frutería Salud | Fruta y verdura fresca en Sevilla',
    defaultDescription:
      'Frutería Salud, negocio familiar en los puestos 47, 48 y 49 del Mercado de Abastos Tiro de Línea, Sevilla.',
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
