---
title: "ADR-1 Weaviate"
sidebar_position: 3
---

# ADR-1: Weaviate para el reconocimiento de imágenes

**Fecha:** 2025-04-07

**Estado:** Proposed | **Accepted** | Rejected | Deprecated

**Equipo/Proyecto:** Xólotl

**Decisores:** AO

## Contexto

La socia quiere una base de datos para encontrar a perros perdidos, donde de manera automática subas una foto del perro perdido y te encuenrte perros similares perdidos por tu zona.

## Criterios usados

- Facilidad de implementación
- Recursos que utiliza
- Factibilidad

## Alternativas consideradas

1. **Redis** — Más complicado de implementar e iniciar, pero podría ser una buena alternativa. No encontré mucha documentación de como implementarlo con imágenes
<!-- 2. **pgVector** — Podría haber sido buena alternativa, pero no llegue a ver muy a detalle como funciona -->
2. **Pinecone DB** — Solución privada, requiere de contratación del servicio

## Decisión

Implementar la función de búsqueda de imágenes por medio de weaviate

## Consecuencias

**Positivas**

- Facilidad de implementación
- Facilidad de modificar el schema
- Facil de correr en cualqueir dispositivo
- Gratuito

**Negativas / Trade-offs**

- Usa recursos locales de la computadora
- Requiere GraphQL

## Notas / Links

- [Weaviate](https://weaviate.io/)
- [Tutorial](https://www.youtube.com/watch?v=mBcBoGhFndY&t=137s&pp=ygUeaW1wbGVtZW50aW5nIGEgdmVjdG9yIGRhdGFiYXNl)

---

| Version | Creado por:                                                                                 | Auditado por:             | Descripción                   | Fecha      |
| ------- | ------------------------------------------------------------------------------------------- | ------------------------- | ----------------------------- | ---------- |
| 1.0     | -Yessica Lora Vazquez -Edmundo Canedo -Alejandro Adrián García -Santiago Alducin Villaseñor | Kamila Jeannette Martínez | Plantilla inicial para guías. | 16/02/2026 |
| 1.0     | -Yessica Lora Vazquez                                                                       | Kamila Jeannette Martínez | Actualización                 | 06/02/2026 |
| 2.0     | -Santiago Alducin Villaseñor                                                                |                           | Llenado de plantilla          | 07/04/2026 |
