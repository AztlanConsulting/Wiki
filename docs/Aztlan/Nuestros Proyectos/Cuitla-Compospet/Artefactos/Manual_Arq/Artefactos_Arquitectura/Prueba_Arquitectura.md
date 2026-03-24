---
title: "Prueba de Arquitectura Cuitla-Compospet"
sidebar_position: 5
---

### Propósito "de la Prueba de Arquitectura Completa"

### Arquitectura "Completa"

---
### Prueba Nodejs 

#### Propósito 
Implementar, probar y desplegar la API del backend.

#### Arquitectura
[Node.js](https://nodejs.org/es) y [Express](https://expressjs.com/)

#### Guías, recursos y tutoriales
- [Video guía para la implementación de la API con Express y Node.js](https://www.youtube.com/watch?v=Oe421EPjeBE)
- [JavaScript Backend Course - Express.js & Node.js in 24 Minutes](https://youtu.be/ha_leEpnT30?si=BMteq1VDLOsyJ9gu)

#### Prueba 1 - Express & NodeJS

Se realizó la implementación de node.js y express para la creación de la API para el backend, se realizaron peticiones a la API para verificar su correcto funcionamiento. A su vez, se desplegó el proyecto en el servidor de Compospet. 

#### Evidencia de documentación - Express & NodeJS

- [Documentación de la creación de la API con Express y Node.js](https://docs.google.com/document/d/1x31uhVP6zc_oT7GATVJLFSnRNb8_VQ1Xt-Ip0LMQxGg/edit?tab=t.hyatc9mfjhcp#heading=h.y386bbev8y49)
- [Documentación del despliegue del repositorio en el servidor de Compospet](https://docs.google.com/document/d/1x31uhVP6zc_oT7GATVJLFSnRNb8_VQ1Xt-Ip0LMQxGg/edit?tab=t.0#heading=h.ox11eswqd7g2)
---
### Prueba Base de Datos (Postgresql, DBeaver, Prisma, ABAC) 

#### Propósito 

Implementar, probar, crear, proteger y desplegar la base de datos de la aplicación, con el motor de base de datos Postgresql, el administrador de bd DBeaver, el ORM Prisma y el modelo de seguridad ABAC

#### Arquitectura 

Motor de Base de datos
[Postgresql](https://www.postgresql.org/)

Administrador de la Base de datos
[DBeaver](https://dbeaver.io/download/)

ORM
[Prisma ORM](https://www.prisma.io/orm)

Modelo de seguridad ABAC (Control de Acceso basado en atributos)
[ABAC](https://www.permit.io/blog/what-is-abac)


#### Guías, recursos y tutoriales

[RBAC vs. ABAC](https://www.permit.io/blog/rbac-vs-abac)

#### Prueba PostgreSQL

1. Se realizó la instalación del motor de PostgreSQL en el servidor de Ubuntu 24.04.
2. Se creó la BD de Postgres dentro del servidor.
3. Se probó el funcionamiento de la BD.
    - Se creó una tabla.
    - Se creó un registro. 
    - Se verificó la creación de la tabla. 
    - Se realizó una query para revisar el registro.

#### Prueba DBeaver

1. Se realizó la instalación de DBeaver de manera local
2. Elevación de Privilegios 
3. Se conecto a la BD de PostgreSQL
4. Administrar Tablas
    - Eliminar una Tabla 
    - Crear una tabla nueva
    - Nivel Tabla 
    - Creación de Columnas
    - Modificar o eliminar una tabla
    - Restricciones (Primary Key)
    - Claves Foráneas
    - Cómo ejecutar scripts
    - Configurar Event Triggers 
    - Capturar el script completo para la base de datos pruebas
5. Se protegió la BD
6. Se hicieron Pruebas 

#### Prueba Prisma

1. Se instala Prisma 

#### Evidencia de documentación 

[Documentación Instalación y Pruebas de PostgreSQL](https://docs.google.com/document/d/1QXJiha9g6gh5MoR-EbYLULS2_-xZbUYKRYKi7TGZhm0/edit?tab=t.0)
[Documentación Instalación y Pruebas de DBeaver](https://docs.google.com/document/d/1QXJiha9g6gh5MoR-EbYLULS2_-xZbUYKRYKi7TGZhm0/edit?tab=t.qz3qpt9k79ab)
[Documentación Instalación y Pruebas de Prisma](https://docs.google.com/document/d/1QXJiha9g6gh5MoR-EbYLULS2_-xZbUYKRYKi7TGZhm0/edit?tab=t.1gdkgimajo7e)
[Documentación Implementación y Pruebas de ABAC](https://docs.google.com/document/d/1QXJiha9g6gh5MoR-EbYLULS2_-xZbUYKRYKi7TGZhm0/edit?tab=t.728612eksfuc)

---

### Prueba Jest & GitHub Actions

#### Propósito
Implementar, probar y desplegar la integración de Jest y GitHub Actions para la automatización de pruebas en el proyecto. 

#### Arquitectura
[Jest](https://jestjs.io/) y [GitHub Actions](https://github.com/features/actions)

#### Guías, recursos y tutoriales
- [Introduction To Testing In JavaScript With Jest](https://www.youtube.com/watch?v=FgnxcUQ5vho)
- [JavaScript Testing with Jest – Crash Course](https://www.youtube.com/watch?v=IPiUDhwnZxA)
- [CI/CD Tutorial using GitHub Actions - Automated Testing & Automated Deployments](https://www.youtube.com/watch?v=YLtlz88zrLg&t=138s)

#### Prueba 1 - Jest & GitHub Actions

Se realizó la implementación de jest y github actions para la automatización de pruebas en el proyecto, se crearon pruebas unitarias y de integración con jest para verificar el correcto funcionamiento de las funciones del backend. Se configuró GitHub Actions para ejecutar las pruebas automáticamente en cada push al repositorio.

#### Evidencia de documentación - Jest & GitHub Actions

- [Documentación de la implementación de Jest](https://docs.google.com/document/d/1ig7xQMsaJ9boORmsTpX48dVQWrFqAiYDuop9IeV7J2Q/edit?tab=t.0)
- [Documentación de la implementación de GitHub Actions](https://docs.google.com/document/d/1ig7xQMsaJ9boORmsTpX48dVQWrFqAiYDuop9IeV7J2Q/edit?tab=t.9gnym0omhtyr)

--
### Prueba Ejemplo

#### Propósito "De la Sub-prueba"

#### Arquitectura "De la Sub-prueba"

#### Guías, recursos y tutoriales

#### Prueba 1 - "¿Qué pruebas se le realizaron?"

#### Evidencia de documentación "Del proceso y de los resultados de las pruebas"  

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Yessica Lora | Fernanda Valdez |    | 10/03/2026 |
| 1.1 | Alejandra Arredondo | Juan Manuel Murillo | Actualización de prueba de arquitectura | 18/03/2026 |
| 1.1 |  Yessica Lora  |  Alejandra Arredondo| Actualización de prueba de arquitectura| 21/03/2026 |
| 1.1 |  Yessica Lora  |  Alejandra Arredondo| Actualización de prueba de arquitectura| 22/03/2026 |
| 1.1 | Alejandra Arredondo | Juan Manuel Murillo | Actualización de prueba de arquitectura | 23/03/2026 |