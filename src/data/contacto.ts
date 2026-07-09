import { negocio } from './negocio';

export const contacto = {
  direccion: negocio.direccion,
  googleMaps: negocio.googleMaps,
  facebook: negocio.facebook,
  telefono: negocio.contacto.telefono,
  telefonoTel: negocio.contacto.telefonoTel,
  whatsapp: negocio.contacto.whatsapp,
  email: negocio.contacto.email,
  horarioTexto: negocio.horario.texto,
} as const;
