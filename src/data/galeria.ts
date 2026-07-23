// Fotografías reales del negocio, optimizadas por Astro (astro:assets) desde
// src/assets/images/fruteria. Los originales sin procesar viven en
// material/fotos-originales (fuera del sistema de assets de producción).
import equipoNegocio from '../assets/images/fruteria/equipo-frutas-verduras-salud.jpg';
import flotaTransporte from '../assets/images/fruteria/flota-transporte.jpg';
import frutaTemporada from '../assets/images/fruteria/fruta-temporada.jpg';
import furgonetaEntregas from '../assets/images/fruteria/furgoneta-entregas.jpg';
import preparacionEncargos from '../assets/images/fruteria/preparacion-encargos.jpg';
import puestoMercado from '../assets/images/fruteria/puesto-frutas-verduras-salud.jpg';
import verdurasFrescas from '../assets/images/fruteria/verdura-hortalizas.jpg';

export const galeria = [
  {
    id: 'fruta-surtida',
    src: frutaTemporada,
    alt: 'Selección de fruta fresca de temporada expuesta en el puesto de Frutas y Verduras Salud',
    titulo: 'Fruta fresca de temporada',
    caption: 'Selección diaria de fruta en el puesto según mercado y temporada.',
    categoria: 'producto',
    aspect: 'aspect-[16/9]',
    objectPosition: 'center',
  },
  {
    id: 'verduras-frescas',
    src: verdurasFrescas,
    alt: 'Verduras y hortalizas frescas variadas dispuestas en el puesto del mercado',
    titulo: 'Verdura y hortaliza fresca',
    caption: 'Verdura fresca seleccionada cada día según la temporada y el mercado.',
    categoria: 'producto',
    aspect: 'aspect-[16/9]',
    objectPosition: 'center',
  },
  {
    id: 'puesto-mercado',
    src: puestoMercado,
    alt: 'Puesto de Frutas y Verduras Salud en el Mercado de Abastos Tiro de Línea, con el rótulo del negocio',
    titulo: 'Nuestro puesto en el mercado',
    caption: 'Puestos 47, 48, 49, 50 y 51 del Mercado de Abastos Tiro de Línea.',
    categoria: 'puesto',
    aspect: 'aspect-[16/9]',
    objectPosition: 'center 30%',
  },
  {
    id: 'preparacion-pedidos',
    src: preparacionEncargos,
    alt: 'Preparación de un encargo en Frutas y Verduras Salud, embolsando fruta fresca',
    titulo: 'Preparación de encargos',
    caption: 'Preparamos cada encargo con atención antes de la recogida o de una entrega a consultar.',
    categoria: 'puesto',
    aspect: 'aspect-[4/3]',
    objectPosition: '30% center',
  },
  {
    id: 'reparto-vehiculo-1',
    src: furgonetaEntregas,
    alt: 'Furgoneta rotulada de Frutas y Verduras Salud, con los teléfonos de pedidos y el distintivo de más de 50 años',
    titulo: 'Entregas a consultar',
    caption: 'La entrega de pedidos se valora caso por caso y está sujeta a disponibilidad.',
    categoria: 'logistica',
    aspect: 'aspect-[16/9]',
    objectPosition: 'center',
  },
  {
    id: 'reparto-vehiculo-2',
    src: flotaTransporte,
    alt: 'Flota de furgonetas utilizadas por Frutas y Verduras Salud para la logística y el transporte',
    titulo: 'Logística y transporte',
    caption: 'Apoyo visual para explicar recogidas y entregas a consultar por teléfono.',
    categoria: 'logistica',
    aspect: 'aspect-[4/3]',
    objectPosition: 'center',
  },
  {
    id: 'equipo-negocio',
    src: equipoNegocio,
    alt: 'Equipo de trabajo de Frutas y Verduras Salud posando junto a las furgonetas del negocio',
    titulo: 'Equipo de Frutas y Verduras Salud',
    caption: 'Detrás del puesto, un equipo familiar dedicado al mercado cada día.',
    categoria: 'equipo',
    aspect: 'aspect-[16/9]',
    objectPosition: 'top',
  },
] as const;

export type GaleriaItem = (typeof galeria)[number];

export const getGaleria = (categoria: GaleriaItem['categoria']) => galeria.filter((item) => item.categoria === categoria);
