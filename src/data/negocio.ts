export const negocio = {
  nombre: 'Frutas y Verduras Salud',
  nombreLegal: 'FRUTAS Y VERDURAS SALUD, S.L.',
  nif: 'B90483520',
  formaJuridica: 'Sociedad de responsabilidad limitada',
  registroMercantil: {
    texto: 'Registro Mercantil de Sevilla, Tomo 6911, Folio 21, Sección 8, Hoja SE-126831, Inscripción 1.ª.',
    provincia: 'Sevilla',
    tomo: '6911',
    folio: '21',
    seccion: '8',
    hoja: 'SE-126831',
    inscripcion: '1.ª',
  },
  cnae: {
    codigo: '47.21',
    descripcion: 'Comercio al por menor de frutas y hortalizas en establecimientos especializados',
  },
  claim: 'Tu frutería en Sevilla',
  descripcion:
    'Frutería local familiar en el Mercado de Abastos Tiro de Línea, con fruta, verdura y producto fresco de temporada.',
  idioma: 'es-ES',
  siteUrl: 'https://www.fruteriasalud.es',
  logo: '/logo/logo-principal.png',
  imagenSocial: '/logo/logo-fondo-blanco.png',
  facebook: 'https://www.facebook.com/FruteriaSaludCom?locale=es_ES',
  instagram: 'https://www.instagram.com/fruteriasalud',
  googleMaps: 'https://maps.app.goo.gl/MUbiuF8D8oKDHpGs9',
  direccion: {
    texto:
      'Mercado de Abastos Tiro de Línea, puestos 47, 48, 49, 50 y 51, Calle Puebla de las Mujeres, s/n, 41013 Sevilla',
    mercado: 'Mercado de Abastos Tiro de Línea',
    puestos: '47, 48, 49, 50 y 51',
    calle: 'Calle Puebla de las Mujeres, s/n',
    codigoPostal: '41013',
    ciudad: 'Sevilla',
    provincia: 'Sevilla',
    pais: 'ES',
    zona: 'Tiro de Línea',
  },
  contacto: {
    // Número general, usado en los CTA genéricos "Llamar ahora" del sitio.
    telefono: '954 618 045',
    telefonoTel: '+34954618045',
    domicilio: {
      titulo: 'Pedidos a domicilio',
      telefonos: [
        { texto: '954 618 045', tel: '+34954618045' },
        { texto: '687 867 280', tel: '+34687867280' },
      ],
    },
    hosteleria: {
      titulo: 'Pedidos para hostelería',
      telefonos: [{ texto: '687 771 465', tel: '+34687771465' }],
    },
    whatsapp: null,
    email: 'fruteriasaludsl@gmail.com',
  },
  horario: {
    texto: 'De 7:00 a 15:00 h.',
    openingHoursSpecification: [],
  },
  sobreNosotros: {
    titulo: 'Quiénes somos',
    texto:
      'Somos una frutería familiar del Mercado de Abastos Tiro de Línea. Cada día seleccionamos fruta y verdura fresca pensando en la cocina de nuestros clientes, con la atención cercana propia de un puesto de mercado de toda la vida.',
  },
  seo: {
    titleTemplate: '%s | Frutas y Verduras Salud',
    defaultTitle: 'Frutas y Verduras Salud | Fruta y verdura fresca en Sevilla',
    defaultDescription:
      'Frutas y Verduras Salud, frutería local familiar en el Mercado de Abastos Tiro de Línea de Sevilla. Fruta, verdura y producto fresco de temporada.',
  },
  // Uso interno del equipo, no debe renderizarse en páginas públicas.
  pendienteConfirmar: [
    'Dominio final de producción',
    'Horario exacto por día',
    'Servicios de encargos y condiciones',
    'Reparto a domicilio',
    'Métodos de pago',
  ],
} as const;
