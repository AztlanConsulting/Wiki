---
title: "ADR Elección de Prisma"
sidebar_position: 13
---

# ADR-XXX: Elección de Prisma como ORM para backend en Node.js/JavaScript

**Fecha:**  2026-03-31

**Estado:** Accepted

**Equipo/Proyecto:** Cuitla / Compospet  

**Decisores:** AOwner, Team Lead, PO, PM

## Contexto

El equipo necesita definir un ORM para el backend del proyecto, desarrollado con Node.js/JavaScript, con el fin de estandarizar la forma en que la aplicación interactúa con la base de datos relacional.

Esta decisión se toma al inicio de la arquitectura para evitar retrabajos posteriores en capas críticas como persistencia, modelos, migraciones, consultas y mantenimiento del esquema de datos. También busca reducir la complejidad técnica del equipo, acelerar el desarrollo y favorecer una base de código más mantenible y consistente a lo largo del proyecto.

Se evaluaron tres alternativas principales compatibles con el stack propuesto: **Prisma**, **Sequelize** y **TypeORM**.


## Criterios usados (resumen)

- Facilidad de aprendizaje para el equipo
- Productividad de desarrollo
- Claridad y mantenibilidad del código
- Soporte para migraciones
- Integración con Node.js
- Compatibilidad con JavaScript y posible evolución a TypeScript
- Seguridad y reducción de errores en consultas
- Calidad de documentación y experiencia de desarrollo
- Adecuación a un proyecto académico/profesional con necesidad de avanzar rápido

## Alternativas consideradas

1. **Prisma** 
    - **Pros**
        - Fácil de aprender y usar
        - Código más claro y ordenado
        - Buen soporte para migraciones

    - **Contras**
        - Algunas consultas complejas pueden requerir SQL adicional
2. **Sequelize** 
    - **Pros**
        -  Es una herramienta conocida en Node.js
    - **Contras**
        - Requiere más configuración manual 
        - El código puede volverse menos claro
3. **TypeORM** 
    - **Pros**
        - Flexible y potente
        - Buena opción para proyectos grandes
    - **Contras**
        - Tiene mayor curva de aprendizaje
        - Puede sentirse más complejo de configurar

## Decisión

Se **usara Prisma como ORM principal** para el backend del proyecto.


## Consecuencias

**Positivas**
- El desarrollo backend será más rápido y ordenado
- Será más fácil mantener el acceso a datos
- Seguridad contra sql injections 

**Negativas / Trade-offs**
- El equipo deberá adaptarse ade Prisma

## Notas / Links

- [Node.js ORMs overview and comparison](https://romeerez.hashnode.dev/nodejs-orms-overview-and-comparison)
- [Prisma](https://www.prisma.io/)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | -Yessica Lora Vazquez  | Kamila Jeannette Martínez | Actualización  | 31/03/2026 |
