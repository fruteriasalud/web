import type { APIRoute } from 'astro';
import { navegacionPrincipal } from '../data/navegacion';
import { absoluteUrl } from '../lib/seo';

export const GET: APIRoute = () => {
  const urls = navegacionPrincipal.map((item) => {
    return `  <url><loc>${absoluteUrl(item.href)}</loc></url>`;
  });

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
