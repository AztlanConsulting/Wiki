---
title: "SPK15 - Nominatim"
sidebar_position: 15
---

**Duración:** 3-4 horas  
**Funcionalidad:** Servicio de búsqueda y geocodificación.  

## Beneficios

- Es código abierto.
- Trabaja directamente con datos de OSM.
- Maneja muchos formatos de direcciones internacionales.
- Tiene una comunidad amplia.
- Posibilidad de expansión con diferentes librerías.
- Posibilidad de geocodificación hacia delante y reversa, en otras palabras soporta coordenadas y direcciones.
- Optimizado para búsquedas estructurales y precisas.
- Respuestas más lentas comparado con soluciones más comerciales como google maps.
- Gratuito, no requiere API Key.
- Auto-hosteable si se necesita mayor control.


## Desventajas

- La API pública cuenta con un límite de 1 request por segundo.
- No está diseñada para altos niveles de tráfico.
- La calidad de los datos depende de OSM.
- No es ideal para autocompletar en tiempo real, mientras que el usuario escribe su dirección.
- No presenta fuzzy search, lo cual lo hace menos tolerante en cuestión de erratas.
- Los resultados pueden variar de precisiones si las consultas son ambiguas o confusas.


## Facilidad de aprendizaje

**Medio**  

## Recursos Externos

- [Wiki de Nominatim](https://nominatim.org/release-docs/develop/)
- [API de Nominatim](https://nominatim.org/release-docs/develop/api/Overview/)
- [Tutorial de implementación con Leaflet](https://www.youtube.com/watch?v=rmIhGPy8rSY)

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Mateo Rodrigo Zapata Crapa  |  | Spike de Nominatim  | 07/04/2026 |