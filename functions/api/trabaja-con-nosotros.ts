interface Env {
  RESEND_API_KEY?: string;
  TRABAJA_DESTINO_EMAIL?: string;
  RESEND_FROM_EMAIL?: string;
}

interface FunctionContext {
  request: Request;
  env: Env;
}

const MAX_CV_SIZE = 5 * 1024 * 1024;
const ALLOWED_EXTENSIONS = new Set(['pdf', 'doc', 'docx']);
const ALLOWED_MIME_TYPES = new Set([
  'application/pdf',
  'application/msword',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/octet-stream',
]);

const json = (body: { ok: boolean; error?: string }, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });

const getText = (formData: FormData, key: string, maxLength: number) => {
  const value = formData.get(key);
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
};

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
      })[character] ?? character,
  );

const normalizeFilename = (filename: string, extension: string) => {
  const basename = filename.replace(/\.[^.]+$/, '');
  const normalized = basename
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);

  return `${normalized || 'curriculum'}.${extension}`;
};

const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = '';

  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }

  return btoa(binary);
};

export const onRequest = async ({ request, env }: FunctionContext): Promise<Response> => {
  if (request.method !== 'POST') {
    return json({ ok: false, error: 'Método no permitido.' }, 405);
  }

  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return json({ ok: false, error: 'No se ha podido leer el formulario.' }, 400);
  }

  // Honeypot: respondemos correctamente para no dar pistas a envíos automatizados.
  if (getText(formData, 'website', 200)) {
    return json({ ok: true });
  }

  const nombre = getText(formData, 'nombre', 150);
  const telefono = getText(formData, 'telefono', 50);
  const email = getText(formData, 'email', 254);
  const puesto = getText(formData, 'puesto', 100);
  const experiencia = getText(formData, 'experiencia', 4000);
  const privacidad = formData.get('privacidad');
  const curriculum = formData.get('curriculum');

  if (!nombre || !telefono || !email || !puesto || !experiencia) {
    return json({ ok: false, error: 'Completa todos los campos obligatorios.' }, 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ ok: false, error: 'Introduce un email válido.' }, 400);
  }

  if (privacidad !== 'on') {
    return json({ ok: false, error: 'Debes aceptar la política de privacidad.' }, 400);
  }

  if (!(curriculum instanceof File) || curriculum.size === 0) {
    return json({ ok: false, error: 'Adjunta tu currículum.' }, 400);
  }

  if (curriculum.size > MAX_CV_SIZE) {
    return json({ ok: false, error: 'El currículum no puede superar los 5 MB.' }, 413);
  }

  const extension = curriculum.name.split('.').pop()?.toLowerCase() ?? '';
  const validMimeType = !curriculum.type || ALLOWED_MIME_TYPES.has(curriculum.type);

  if (!ALLOWED_EXTENSIONS.has(extension) || !validMimeType) {
    return json({ ok: false, error: 'El currículum debe estar en formato PDF, DOC o DOCX.' }, 400);
  }

  if (!env.RESEND_API_KEY || !env.TRABAJA_DESTINO_EMAIL || !env.RESEND_FROM_EMAIL) {
    return json({ ok: false, error: 'El servicio de envío no está configurado.' }, 503);
  }

  const receivedAt = new Intl.DateTimeFormat('es-ES', {
    dateStyle: 'long',
    timeStyle: 'short',
    timeZone: 'Europe/Madrid',
  }).format(new Date());
  const safe = {
    nombre: escapeHtml(nombre),
    telefono: escapeHtml(telefono),
    email: escapeHtml(email),
    puesto: escapeHtml(puesto),
    experiencia: escapeHtml(experiencia).replace(/\n/g, '<br>'),
  };
  const filename = normalizeFilename(curriculum.name, extension);
  const attachment = arrayBufferToBase64(await curriculum.arrayBuffer());

  let resendResponse: Response;
  try {
    resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: env.RESEND_FROM_EMAIL,
        to: [env.TRABAJA_DESTINO_EMAIL],
        subject: 'Nueva candidatura desde la web - Frutería Salud',
        reply_to: email,
        html: `
          <h1>Nueva candidatura desde la web</h1>
          <p><strong>Nombre y apellidos:</strong> ${safe.nombre}</p>
          <p><strong>Teléfono:</strong> ${safe.telefono}</p>
          <p><strong>Email:</strong> ${safe.email}</p>
          <p><strong>Puesto de interés:</strong> ${safe.puesto}</p>
          <p><strong>Experiencia breve:</strong><br>${safe.experiencia}</p>
          <p><strong>Privacidad:</strong> Aceptada</p>
          <p><strong>Fecha de recepción:</strong> ${escapeHtml(receivedAt)}</p>
        `,
        text: [
          'Nueva candidatura desde la web',
          '',
          `Nombre y apellidos: ${nombre}`,
          `Teléfono: ${telefono}`,
          `Email: ${email}`,
          `Puesto de interés: ${puesto}`,
          '',
          'Experiencia breve:',
          experiencia,
          '',
          'Privacidad: Aceptada',
          `Fecha de recepción: ${receivedAt}`,
        ].join('\n'),
        attachments: [{ filename, content: attachment }],
      }),
    });
  } catch {
    return json({ ok: false, error: 'No se ha podido contactar con el servicio de envío.' }, 502);
  }

  if (!resendResponse.ok) {
    return json({ ok: false, error: 'No se ha podido enviar la candidatura.' }, 502);
  }

  return json({ ok: true });
};
