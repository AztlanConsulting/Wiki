---
title: "SPK16 - Photon"
sidebar_position: 16
---

**Duración:** 3-4 horas  
**Funcionalidad:** Servicio de búsqueda y geocodificación. 

## Beneficios

- Es código abierto y gratuito.
- Igualmente que Nominatim también se basa en los datos de OSM.
- Es ideal para autocompletar en tiempo real, mientras que el usuario escribe su dirección.
- Cuenta con una API pública sin necesidad de registro ni API key.
- Integración fácil con Leafletjs.
- Encuentra resultados aunque haya errores de escritura para las direcciones (fuzzy search).
- Funciona bien con búsquedas incompletas o aproximadas.
- Más amigable en el UX que Nominatim.
- Apto para producción si se auto-hostea el servidor propio.


## Desventajas

- La API pública no está apta para producción a gran escala.
- Menos preciso que Nominatim.
- La calidad de los datos depende de OSM.
- Documentación más limitada que Nominatim en búsquedas estructurales.
- Puede llegar a ocurrir cambios en el futuro, debido a que es un proyecto comunitario.
- No es ideal para la geocodificación precisa para logística.


## Facilidad de aprendizaje

**Fácil**  

## Recursos Externos

- [Demo del funcionamiento y API](https://photon.komoot.io/)
- [Repositorio de Photon con documentación](https://github.com/komoot/photon?tab=readme-ov-file)

## Tutorial básico

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Mateo Rodrigo Zapata Crapa  |  | Spike de Photon  | 07/04/2026 |