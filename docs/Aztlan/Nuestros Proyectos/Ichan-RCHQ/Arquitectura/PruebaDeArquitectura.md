---
title: "Prueba de Arquitectura Ichan-RCHQ"
---

### Proposito "de la Prueba de Arquitectura Completa"

Validar, a nivel tecnico y documental, que la arquitectura propuesta cubre las necesidades principales del sistema en seguridad, disponibilidad, mantenibilidad, trazabilidad, backend y acceso a datos. Esta prueba de arquitectura reune decisiones, spikes y evidencias que permiten justificar que la solucion es viable antes de su adopción completa.

### Arquitectura "Completa"

La arquitectura propuesta se basa en una aplicacion web con backend en Node.js, base de datos relacional PostgreSQL administrada desde Prisma, medidas de seguridad, mecanismos de trazabilidad mediante logging y monitoreo externo de disponibilidad usando herramientas externas.

---

### Prueba node:

#### Proposito "De la Sub-prueba"

Validar que Node.js es una base adecuada para implementar el backend del proyecto y que puede ejecutarse correctamente en el ambiente de desarrollo y despliegue.

#### Arquitectura "De la Sub-prueba"

[Node.js](https://nodejs.org/es) como entorno de ejecucion del backend y [NPM](https://www.npmjs.com) como gestor de dependencias para librerias, utilerias y herramientas del proyecto.

#### Guias, recursos y tutoriales

- [Video guia para instalar Node.js y NPM](https://www.youtube.com/watch?v=qyMK7IFEPmU)
- [Pagina oficial de Node.js](https://nodejs.org/es)

#### Prueba - "¿Que pruebas se le realizaron de node?"

Se corrio el comando **node -v** y **npm -v** para verificar que la instalacion fuera correcta y que el entorno estuviera listo para ejecutar el backend y administrar dependencias.

#### Evidencia de documentacion "Del proceso y de los resultados de las pruebas"

- La adopcion de Node.js si se refleja indirectamente en los spikes implementados en backend, como [Prisma](./Spike's/Prisma.md), [2FA](./Spike's/2FA.md), [ABAC](./Spike's/ABAC.md) y [Swagger](./Spike's/SpikeSwagger.md), todos planteados sobre Node.js.

---

### Prueba PostgreSQL:

#### Proposito "De la Sub-prueba"

Validar que el proyecto puede trabajar con una base de datos relacional usando un acceso seguro, mantenible y escalable desde el backend.

#### Arquitectura "De la Sub-prueba"

[PostgreSQL](https://www.postgresql.org/) como motor de base de datos relacional y [Prisma](https://www.prisma.io/) como ORM para modelado, migraciones y acceso tipado desde Node.js.

#### Guias, recursos y tutoriales

- [Documentacion oficial de Prisma](https://www.prisma.io/docs)
- [Videotutorial Prisma](https://youtu.be/RebA5J-rlwg?si=QTq-GpXuNNMQOLLy)
- [Documentación de postgreSQL](https://www.postgresql.org)
- [Video tutorial instalación postgreSQL](https://youtu.be/40uGNsi7ysc?si=lfoKKb3GIugqvGCY)

#### Prueba 1 - "¿Que pruebas se le realizaron?"

Se instalo PostgreSQL y se genero un usuario para ver si el servidor soporta PostgreSQL.

#### Evidencia de documentacion "Del proceso y de los resultados de las pruebas"

----

### Prueba Seguridad:

#### Proposito "De la Sub-prueba"

Validar que la arquitectura propuesta contempla controles de seguridad tanto en autenticacion, autorizacion, persistencia y frontend, para reducir riesgos de acceso no autorizado, exposicion de sesiones y ataques comunes.

#### Arquitectura "De la Sub-prueba"

La seguridad propuesta se apoya en varios frentes:

- `2FA` para reforzar autenticacion
- `ABAC` para autorizacion fina basada en atributos y contexto
- `Prisma` para reducir exposicion a SQL Injection mediante acceso ORM tipado
- lineamientos de `SeguridadFront` para proteger sesiones, tokens, XSS, CSRF y manejo de rutas protegidas

#### Guias, recursos y tutoriales

- [Spike de 2FA](./Spike's/2FA.md)
- [Spike de ABAC](./Spike's/ABAC.md)
- [Spike de Prisma](./Spike's/Prisma.md)
- [Spike de Seguridad Frontend](./Spike's/SeguridadFront.md)

#### Prueba 1 - "¿Que pruebas se le realizaron?"

Se analizaron y documentaron las siguientes subpruebas de seguridad:

- Implementacion de autenticacion de dos factores con TOTP, QR y validacion desde backend
- Diseño de politicas ABAC para controlar acceso segun atributos del usuario, recurso y contexto
- Integracion de Prisma como capa de acceso a datos para evitar queries manuales vulnerables a SQL Injection

#### Evidencia de documentacion "Del proceso y de los resultados de las pruebas"

- [2FA](./Spike's/2FA.md)
- [ABAC](./Spike's/ABAC.md)
- [Prisma](./Spike's/Prisma.md)

----

### Prueba Mantenibilidad:

#### Proposito "De la Sub-prueba"

Validar que la arquitectura facilita mantenimiento, incorporacion de nuevos miembros y evolucion del sistema mediante documentacion clara y herramientas de desarrollo consistentes.

#### Arquitectura "De la Sub-prueba"

La mantenibilidad se apoya en:

- Swagger / OpenAPI para documentar y probar endpoints
- Prisma para mantener el modelo de datos centralizado y versionado mediante migraciones

#### Guias, recursos y tutoriales

- [Spike de Swagger](./Spike's/SpikeSwagger.md)
- [Spike de Prisma](./Spike's/Prisma.md)

#### Prueba 1 - "¿Que pruebas se le realizaron?"

Se documento la adopcion de Swagger como documentacion oficial del API y herramienta de pruebas manuales en `/api-docs`. Tambien se definio el uso de Prisma para mantener un esquema claro de base de datos y un flujo ordenado de cambios mediante migraciones.

#### Evidencia de documentacion "Del proceso y de los resultados de las pruebas"

- [Swagger / OpenAPI](./Spike's/SpikeSwagger.md)
- [Prisma](./Spike's/Prisma.md)

----

### Prueba Disponibilidad:

#### Proposito "De la Sub-prueba"

Validar que el sistema puede ser monitoreado externamente para detectar caidas, tiempos fuera de servicio y recuperacion del servicio mediante checks automaticos al endpoint `/health`.

#### Arquitectura "De la Sub-prueba"

La propuesta de disponibilidad considera monitoreo externo mediante herramientas externas:

- Better Stack
- UptimeRobot

Ambas opciones se basan en verificar periodicamente el endpoint `/health` del backend y generar alertas e historial de incidentes.

#### Guias, recursos y tutoriales

- [Spike de Disponibilidad con Better Stack](./Spike's/DisponibilidadBetterStack.md)
- [Spike de Disponibilidad con UptimeRobot](./Spike's/DisponibilidadUptimeRobot.md)

#### Prueba 1 - "¿Que pruebas se le realizaron?"

Se documento la creacion de un endpoint `/health` que responde `200` cuando el sistema esta disponible y `503` cuando no lo esta. A partir de ello se propusieron dos pruebas de monitoreo:

- Better Stack, con checks HTTP, alertas automaticas, historial de incidentes y dashboard de uptime
- UptimeRobot, con checks HTTP, alertas y metricas basicas de disponibilidad

En ambos casos la validacion consiste en simular una caida del servicio y comprobar que la herramienta detecta el evento y notifica la incidencia.

#### Evidencia de documentacion "Del proceso y de los resultados de las pruebas"

- [Disponibilidad con Better Stack](./Spike's/DisponibilidadBetterStack.md)
- [Disponibilidad con UptimeRobot](./Spike's/DisponibilidadUptimeRobot.md)

----

### Prueba Trazabilidad:

#### Proposito "De la Sub-prueba"

Validar que la arquitectura contempla mecanismos de registro de eventos relevantes para auditoria y la trazabilidad de las acciones relevantes mencionadas.

#### Arquitectura "De la Sub-prueba"

La propuesta usa logging estructurado disparado desde la API en Node.js, con registros por request, eventos de autenticacion, autorizacion, errores y acciones sensibles del negocio.

#### Guias, recursos y tutoriales

- [Spike de Trazabilidad](./Spike's/Trazabilidad.md)

#### Prueba 1 - "¿Que pruebas se le realizaron?"

Se definio un enfoque de logging estructurado con middleware global, logs de negocio, logs de seguridad y un manejador centralizado de errores. Tambien se documento el uso de eventos consistentes y la posibilidad de integrar los logs con consola, PostgreSQL o plataformas externas.

#### Evidencia de documentacion "Del proceso y de los resultados de las pruebas"

- [Trazabilidad](./Spike's/Trazabilidad.md)


| Version | Creado por: | Auditado por: | Descripcion | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Manuel Bajos | Pendiente | Inicio del documento | 10/03/2026 |

