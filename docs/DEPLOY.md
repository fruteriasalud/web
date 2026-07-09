# DEPLOY.md - Despliegue en hosting clásico

## Preparar build local

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

No subir la carpeta `dist` como carpeta contenedora si el hosting espera los archivos directamente en `public_html`.
Lo correcto normalmente será subir el contenido interno de `dist/`.

## SSL y HTTPS

Antes de publicar como web final:

- Activar el certificado SSL desde el panel del hosting.
- Comprobar que `https://www.fruteriasalud.es/` carga sin avisos del navegador.
- Forzar HTTPS desde el panel del hosting si ofrece esa opción.
- Si el hosting usa Apache y no hay opción de panel, usar una regla `.htaccess` equivalente a `public/_htaccess.example`.

## Comprobaciones posteriores

- Verificar `/`, `/productos/`, `/temporada/`, `/encargos/`, `/contacto/`, `/aviso-legal/`, `/privacidad/`, `/cookies/`, `/robots.txt` y `/sitemap.xml`.
- Confirmar que `robots.txt` apunta al dominio final con HTTPS.
- Revisar las páginas legales antes de publicar si ya existen datos fiscales definitivos.
