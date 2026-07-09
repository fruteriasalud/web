import { negocio } from './negocio';

export const contacto = {
  direccion: negocio.direccion,
  googleMaps: negocio.googleMaps,
  facebook: negocio.facebook,
  telefono: negocio.contacto.telefono,
  whatsapp: negocio.contacto.whatsapp,
  email: negocio.contacto.email,
  horarioTexto: negocio.horario.texto,
  pendientes: negocio.pendienteConfirmar.filter((item) =>
    ['Teléfono', 'WhatsApp', 'Email', 'Horario exacto'].includes(item),
  ),
} as const;
