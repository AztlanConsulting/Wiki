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

Definir un ORM para el backend del proyecto, desarrollado con Node.js/JavaScript, con el fin de proteger al proyecto de sql injections y estandarizar la forma en que la aplicación interactúa con la base de datos relacional.

Esta decisión se toma al inicio de la arquitectura para evitar retrabajos posteriores.

Se evaluaron tres alternativas principales compatibles con el stack propuesto: **Prisma**, **Sequelize** y **TypeORM**.


## Criterios usados (resumen)

- Facilidad de aprendizaje para el equipo
- Soporte para migraciones
- Integración con Node.js
- Compatibilidad con JavaScript
- Seguridad y reducción de errores en consultas

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
