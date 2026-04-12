---
title: "ADR Sobre Disponibilidad"
sidebar_position: 02
---

# ADR-02: Elección de herramienta de monitoreo de disponibilidad

**Fecha:** 2026-04-12  

**Estado:** Accepted

**Equipo/Proyecto:** Ichan-RCHQ

**Decisores:** Manuel Bajos y equipo de arquitectura

## Contexto

El proyecto necesita una herramienta de monitoreo externo para verificar la disponibilidad del sistema mediante un endpoint `/health`.

Se evaluaron dos opciones mediante spikes:

1. `UptimeRobot`
2. `Better Stack`

Ambas cubren la necesidad básica de realizar checks HTTP, emitir alertas y registrar caídas del sistema. Sin embargo, era necesario seleccionar una sola opción para estandarizar el monitoreo inicial del proyecto.

## Criterios usados

- Facilidad de configuración inicial.
- Tiempo de detección de fallas.
- Costo de entrada.
- Capacidad de alertamiento.
- Visibilidad del historial de incidentes.
- Utilidad para el proyecto en una etapa inicial.

## Alternativas consideradas

### 1. UptimeRobot

**Pros**

- Configuración muy rápida.
- No requiere infraestructura propia.
- Permite iniciar sin costo.
- Soporta múltiples monitores en el plan gratuito.
- Tiene dashboard y alertas listas para usar.

**Contras**

- En el plan gratuito los checks suelen ejecutarse cada `5 minutos`.
- Tiene menor precisión para detectar caídas rápidamente.
- El nivel de personalización es limitado.
- Se depende completamente de un servicio externo.

### 2. Better Stack

**Pros**

- Configuración rápida.
- No requiere infraestructura propia.
- Permite monitoreo externo real del sistema.
- Incluye alertas automáticas.
- Incluye `status page`.
- Puede ofrecer checks más frecuentes que otras opciones gratuitas.

**Contras**

- El plan gratuito es más limitado en cantidad de monitores.
- Tiene menos control que una solución de observabilidad propia.
- No mide métricas internas de la aplicación.
- Sigue existiendo dependencia de un servicio externo.

## Decisión

Se selecciona **Better Stack** como herramienta de monitoreo de disponibilidad para la primera etapa del proyecto.

## Justificación

La decisión se basa en que, para el proyecto actual, es más importante detectar incidentes con mayor rapidez y contar con una mejor visibilidad operativa que disponer de una gran cantidad de monitores.

De acuerdo con los spikes realizados:

- `Better Stack` puede ofrecer checks más frecuentes.
- `Better Stack` incluye `status page`, lo cual agrega valor para comunicar incidentes.
- La configuración sigue siendo simple y no requiere infraestructura propia.

Se asume que en la etapa actual del proyecto el número de endpoints críticos a monitorear será reducido, por lo que la limitación del plan gratuito en cantidad de monitores no representa un bloqueo inmediato.

## Consecuencias

**Positivas**

- Detección más rápida de caídas del sistema.
- Mejor visibilidad del estado del servicio.
- Posibilidad de comunicar incidentes mediante `status page`.
- Integración sencilla con el endpoint `/health`.
- Menor esfuerzo operativo que una solución autoadministrada.

**Negativas**

- Menor cantidad de monitores disponibles en el plan gratuito.
- Si el proyecto crece mucho, podría ser necesario migrar a un plan pagado.
- No ofrece métricas internas de aplicación como una plataforma completa de observabilidad.
- Se mantiene la dependencia de un proveedor externo.

## Condición de revisión

Esta decisión deberá revisarse si ocurre alguno de los siguientes escenarios:

- el número de servicios o endpoints críticos supera la capacidad del plan actual
- el costo del servicio deja de ser conveniente
- se requiere observabilidad más profunda con métricas internas
- la frecuencia de monitoreo deja de justificar la elección frente a otras alternativas

## Notas / Links

- Spike Better Stack: [DisponibilidadBetterStack](../Spike's/DisponibilidadBetterStack.md)
- Spike UptimeRobot: [DisponibilidadUptimeRobot](../Spike's/DisponibilidadUptimeRobot.md)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Manuel Bajos | - | ADR para seleccionar herramienta de monitoreo de disponibilidad | 12/04/2026 |
