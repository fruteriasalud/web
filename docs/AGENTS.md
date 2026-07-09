# AGENTS.md - Instrucciones para agentes

## Proyecto

Web de Frutería Salud, frutería local familiar ubicada en Sevilla.

## Objetivo

Construir una web moderna, visual, rápida, responsive y fácil de publicar en hosting clásico.

## Reglas generales

1. No usar WordPress.
2. No añadir backend salvo que se solicite expresamente.
3. Mantener la salida estática compatible con `npm run build`.
4. Evitar dependencias innecesarias.
5. Priorizar diseño móvil.
6. Usar datos desde `src/data` cuando sea posible.
7. No inventar datos críticos como teléfono, horario, dirección o servicios no confirmados sin marcarlos como pendientes.
8. Todo cambio debe dejar el proyecto compilando correctamente.
9. Documentar cambios relevantes.

## Reparto recomendado

### Codex

- Arquitectura técnica
- Scripts
- SEO
- Build
- Calidad de código
- Preparación para hosting clásico

### Claude

- Diseño visual
- UX/UI
- Componentes frontend
- Responsive
- Paleta y estilo
- Experiencia móvil

## Comandos obligatorios antes de finalizar cambios

```bash
npm run build
```

Si falla, corregir antes de terminar.
