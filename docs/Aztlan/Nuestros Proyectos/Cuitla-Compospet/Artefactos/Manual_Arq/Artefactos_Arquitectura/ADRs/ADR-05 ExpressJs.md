---
title: "ADR-05: Express.js"
---

# ADR-05: Express.js

**Fecha:** 2026-03-10

**Estado:** Proposed | **Accepted** | Rejected | Deprecated 

**Equipo/Proyecto:** Cuitla

**Decisores:** AOwner, Team Members.

## Contexto

El sistema requiere un framework para Node.js que permita estructurar el backend y facilitar la creación de APIs REST para la comunicación entre el frontend y la base de datos. Se busca una solución ligera, flexible y ampliamente adoptada que permita organizar rutas, middlewares y controladores de forma clara dentro de la arquitectura del sistema.


## Criterios usados (resumen)

Se consideraron criterios como la compatibilidad con Node.js, la facilidad para construir APIs REST, la curva de aprendizaje del equipo, la flexibilidad del framework y la disponibilidad de documentación y comunidad de soporte.


## Alternativas consideradas

**1. Fastify**

- **Pros**
    - Alto rendimiento.
    - Mejor manejo de validaciones y esquemas.
    - Arquitectura moderna y optimizada.

- **Contras**
    - Comunidad más pequeña que Express.
    - Menor cantidad de ejemplos y recursos disponibles.
    - Menor familiaridad del equipo con el framework.

**2. NestJS**

- **Pros**
    - Arquitectura estructurada basada en módulos.
    - Buen soporte para aplicaciones grandes.
    - Integración con TypeScript y patrones de diseño.

- **Contras**
    - Mayor complejidad inicial.
    - Curva de aprendizaje más alta.
    - Puede ser excesivo para proyectos pequeños o medianos.

**3. Koa**

- **Pros**
    - Framework ligero creado por los desarrolladores de Express.
    - Mejor manejo de asincronía con async/await.
    - Arquitectura moderna.

- **Contras**
    - Comunidad más pequeña.
    - Menos middlewares disponibles.
    - Menor documentación comparado con Express.

**4. Hapi.js**

- **Pros**
    - Framework robusto con buenas herramientas integradas.
    - Buen manejo de validación y configuración.

- **Contras**
    - Comunidad más pequeña.
    - Menos popular que Express.
    - Curva de aprendizaje mayor.

## Decisión

Se seleccionó **Express.js** como framework para el backend debido a su simplicidad, su integración directa con Node.js y su amplio ecosistema de middlewares, lo que facilita la creación de APIs REST y la organización del servidor.

## Consecuencias

**Positivas**

- Framework ligero y fácil de implementar.
- Gran comunidad y abundante documentación.
- Amplio ecosistema de middlewares disponibles.
- Integración sencilla con Node.js y otras librerías del ecosistema.
- Permite desarrollar APIs REST de forma rápida.

**Negativas / Trade-offs**

- Menor estructura comparado con frameworks más robustos.
- Algunas funcionalidades deben implementarse manualmente.
- Puede requerir mayor organización del código en proyectos grandes.
- Dependencia del ecosistema de Node.js.

## Notas / Links
- [Express.js](https://expressjs.com/)
- [Express.js Documentation](https://expressjs.com/en/starter/installing.html)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Cuilta | Edmundo Canedo | ADR-05 Express.js  | 10/03/2026 |
