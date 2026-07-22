# Revisión de fotos en Instagram — Frutería Salud

## 1. URL revisada

https://www.instagram.com/fruteriasalud?igsh=MW5ka3M3Mnl5eDhqdQ==

## 2. Acceso

**No se pudo acceder al contenido real del perfil.**

El entorno de esta sesión solo puede obtener HTML público sin ejecutar sesión de
usuario ni JavaScript de cliente. Instagram no renderiza el feed, las fotos de
publicaciones ni las historias para peticiones sin login: la respuesta obtenida
fue únicamente la cabecera genérica de la SPA (un par de iconos/base64 de
interfaz), sin ninguna publicación, foto de producto, puesto, reparto o equipo
visible.

No se ha inventado ningún contenido, foto o descripción a partir de esto.

## 3. Fotos candidatas encontradas

Ninguna. No hay candidatas que evaluar porque no hubo acceso al feed real.

## 4. Qué revisar manualmente

Para completar este análisis, alguien con acceso a la cuenta (login normal,
móvil u ordenador) debería:

1. Abrir el perfil `@fruteriasalud` ya logueado y recorrer el feed y los
   *stories* destacados (highlights).
2. Para cada foto candidata, valorar y anotar:
   - Descripción del contenido (producto, puesto, reparto, equipo, etc.).
   - Sección de la web donde podría encajar (home / temporada / productos /
     encargos / contacto / empresa).
   - Prioridad: alta / media / baja.
   - Orientación: horizontal / vertical / cuadrada.
   - Calidad visual estimada (nitidez, luz, encuadre).
   - Si aparecen personas identificables (dependientes, clientes) que
     requerirían permiso antes de publicar.
   - Riesgos: compresión/pixelado de Instagram, texto o stickers superpuestos,
     marca de agua de Instagram, formato vertical difícil de recortar, etc.
3. Descargar el **archivo original** (no una captura de pantalla ni un export
   comprimido de Instagram) directamente desde el dueño de la cuenta o desde
   el carrete del móvil que hizo la foto, siempre que sea posible. Instagram
   recomprime todo lo que se sube, así que la copia "descargada desde la app"
   ya pierde calidad respecto al original.
4. Priorizar fotos reales del puesto (puestos 47, 48 y 49), producto expuesto,
   preparación de encargos y, si existen, reparto/vehículo — son justo las
   secciones que hoy usan ilustraciones SVG provisionales en
   `src/data/galeria.ts` (`fruta-surtida`, `verduras-frescas`,
   `puesto-mercado`, `preparacion-pedidos`, `reparto-vehiculo-1`,
   `reparto-vehiculo-2`, `equipo-negocio`) y que serían las primeras candidatas
   a sustituir por fotografía real.

## 5. Recomendación final

- **Fotos que merece la pena pedir en original:** no se puede determinar
  todavía; depende de lo que aparezca en el feed real. Cuando se identifiquen
  candidatas siguiendo el proceso del punto 4, priorizar las que muestren el
  puesto, producto fresco expuesto y preparación de pedidos.
- **Fotos que se podrían usar ya solo si se descargan con calidad:** ninguna
  por ahora, al no haber acceso verificado al contenido.
- **Fotos que no conviene usar:** cualquier captura de Instagram visiblemente
  comprimida, pixelada, con marca de agua de la plataforma, con texto
  superpuesto o con personas identificables sin permiso claro. En esos casos
  es mejor pedir el archivo original al dueño antes que publicar una imagen
  mediocre.

**No se ha descargado ni añadido ninguna imagen a `public/images/real/` en esta
revisión**, porque no se pudo verificar contenido real, calidad ni derechos.
No se ha sustituido ninguna imagen actual de la web.
