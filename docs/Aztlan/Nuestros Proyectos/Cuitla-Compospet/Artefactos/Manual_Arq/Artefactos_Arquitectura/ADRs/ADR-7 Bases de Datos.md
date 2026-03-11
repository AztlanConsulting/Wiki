---
title: "ADR-7 - Selección del Sistema de Gestión de Bases de Datos"
---

# ADR-07: Selección del Sistema de Gestión de Bases de Datos 

**Fecha:** 2026-03-10  

**Estado:** Accepted  

**Equipo/Proyecto:** Cuitla

**Decisores:** Owner, Team Lead, PO, PM, Team Member 

## Contexto

El proyecto requiere un sistema de almacenamiento persistente para gestionar perfiles de usuario y la logística de rutas bajo estándares de integridad estructural. Se optó por una base de datos relacional para garantizar la consistencia en el manejo de datos críticos y transacciones financieras, asegurando que la arquitectura soporte relaciones complejas entre clientes y operaciones con un mantenimiento simplificado a largo plazo.

## Criterios usados (resumen)

* Aprovechar el dominio previo del equipo en lenguajes de consulta estructurados.
* Implementar mecanismos robustos para el manejo de roles y cifrado de información.
* Seleccionar una tecnología con un ciclo de vida activo y soporte constante de la comunidad.
* Facilitar la escalabilidad mediante un motor de base de datos altamente mantenible.

## Alternativas consideradas

1. **MongoDB (No Relacional / Documental):**
    - **Pros:** Alta flexibilidad de esquema y escalabilidad horizontal sencilla.
    - **Contras:** Riesgo de inconsistencia en datos financieros altamente relacionados; mayor complejidad para realizar "joins" complejos entre rutas y clientes.
2. **MySQL (Relacional):**
    - **Pros:** Muy popular y fácil de configurar.
    - **Contras:** **Descartado.** El equipo observó una desaceleración en el ritmo de actualizaciones y una comunidad menos vibrante comparada con opciones modernas, además de limitaciones en tipos de datos avanzados.
3. **PostgreSQL (Relacional - Elegida):**
    - **Pros:** Cumplimiento total de ACID, soporte nativo para JSONB (lo que da flexibilidad de NoSQL dentro de SQL), y una comunidad de código abierto extremadamente activa con actualizaciones constantes.
    - **Contras:** Requiere una configuración de tuning inicial más detallada que MySQL.

## Decisión

Utilizar **PostgreSQL** como base de datos principal.

## Consecuencias

**Positivas**
- Maneja el tipo de dato JSONB, que almacena documentos JSON de forma binaria.
- Acceso a un ecosistema robusto de herramientas de analítica.

**Negativas / Trade-offs**
- El esquema es menos flexible que en una base de datos documental (aunque mitigado por el uso de columnas JSONB).
- Mayor consumo de recursos comparado con alternativas más ligeras.

## Notas / Links

- [PostgreSQL vs MySQL: Why PostgreSQL is better](https://www.postgresql.org/about/comparison/)
- [ACID Compliance in Databases](https://en.wikipedia.org/wiki/ACID)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Kamila Martínez, Yessica Lora, Alejandra Arredondo, Fatima Figueroa | Edmundo Canedo | Selección de PostgreSQL sobre MySQL y MongoDB. | 10/03/2026 |