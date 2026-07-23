import { negocio } from './negocio';

export const contacto = {
  direccion: negocio.direccion,
  googleMaps: negocio.googleMaps,
  facebook: negocio.facebook,
  instagram: negocio.instagram,
  telefono: negocio.contacto.telefono,
  telefonoTel: negocio.contacto.telefonoTel,
  domicilio: negocio.contacto.domicilio,
  hosteleria: negocio.contacto.hosteleria,
  whatsapp: negocio.contacto.whatsapp,
  email: negocio.contacto.email,
  horarioTexto: negocio.horario.texto,
} as const;
