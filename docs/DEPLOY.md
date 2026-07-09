# DEPLOY.md - Despliegue en hosting clásico

## Build local

```bash
npm install
npm run build
```

## Resultado

La carpeta final para subir al hosting será:

```text
dist/
```

## Hosting clásico

Subir el contenido de `dist/` al directorio público del hosting, normalmente:

- `public_html/`
- `www/`
- `htdocs/`

## Importante

No subir la carpeta `dist` como carpeta contenedora si el hosting espera los archivos directamente en `public_html`.

Lo correcto normalmente será subir el contenido interno de `dist/`.
