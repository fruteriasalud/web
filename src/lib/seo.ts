import { negocio } from '../data/negocio';

type JsonLdValue = Record<string, unknown> | Record<string, unknown>[];

export type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article';
  jsonLd?: JsonLdValue;
  noindex?: boolean;
};

export const siteUrl = negocio.siteUrl.replace(/\/$/, '');

export function absoluteUrl(path = '/') {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  return `${siteUrl}${path.startsWith('/') ? path : `/${path}`}`;
}

export function formatTitle(title?: string) {
  if (!title) {
    return negocio.seo.defaultTitle;
  }

  if (title === negocio.nombre || title.includes(negocio.nombre)) {
    return title;
  }

  return negocio.seo.titleTemplate.replace('%s', title);
}

export function createLocalBusinessJsonLd() {
  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['GroceryStore', 'LocalBusiness', 'Store'],
    name: negocio.nombre,
    legalName: negocio.nombreLegal,
    description: negocio.descripcion,
    url: siteUrl,
    image: absoluteUrl(negocio.imagenSocial),
    logo: absoluteUrl(negocio.logo),
    sameAs: [negocio.facebook],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${negocio.direccion.mercado}, puestos ${negocio.direccion.puestos}, ${negocio.direccion.calle}`,
      postalCode: negocio.direccion.codigoPostal,
      addressLocality: negocio.direccion.ciudad,
      addressRegion: negocio.direccion.provincia,
      addressCountry: negocio.direccion.pais,
    },
    areaServed: {
      '@type': 'City',
      name: negocio.direccion.ciudad,
    },
    hasMap: negocio.googleMaps,
  };

  if (negocio.contacto.telefono) {
    data.telephone = negocio.contacto.telefono;
  }

  if (negocio.horario.openingHoursSpecification.length > 0) {
    data.openingHoursSpecification = negocio.horario.openingHoursSpecification;
  }

  return data;
}

export function stringifyJsonLd(jsonLd?: JsonLdValue) {
  if (!jsonLd) {
    return '';
  }

  return JSON.stringify(jsonLd).replace(/</g, '\\u003c');
}
