---
title: "Prueba de Arquitectura Cuitla-Compospet"
sidebar_position: 5
---

### Propósito de la Prueba de Arquitectura

Evaluar y validar que la arquitectura propuesta del sistema es adecuada para cumplir con los requisitos funcionales y de calidad, identificando riesgos técnicos de manera temprana y asegurando que la estructura del software permita un desarrollo estable, mantenible, escalable y eficiente antes de avanzar a etapas posteriores del proyecto.

### Arquitectura

---
### Prueba Servidor

#### Propósito
Verificar que la infraestructura donde se ejecutará el sistema funciona correctamente y es compatible con la arquitectura propuesta, asegurando que el servidor soporta la configuración, tecnologías y componentes necesarios para que la aplicación opere de manera estable, segura y eficiente.

#### Arquitectura

- Servidor Hostinger
- Pm2
- Cloudflare
- Node.js
- Express
- React
- Postgresql
- Google Oauth
- Google Gmail
- Google Sheets
- Prometheus
- Prisma

#### Guías, recursos y tutoriales

- [Spike Servidor (Hostinger)](../Artefactos_Arquitectura/Spikes/SPK04_Server.md)
- [Set up and secure your own server](https://www.youtube.com/watch?v=Q1Y_g0wMwww)
- [Spike SSL Hostinger](../Artefactos_Arquitectura/Spikes/SPK07_SSL.md)
- [How to Install Lifetime SSL at Hostinger](https://www.hostinger.com/support/1583258-how-to-install-lifetime-ssl-at-hostinger/)

#### Prueba 1

Se realizó la instalación y configuración inicial del servidor, integrando las tecnologías definidas en la arquitectura. Posteriormente, se llevaron a cabo pruebas de funcionamiento para verificar la correcta comunicación entre los componentes, así como la adecuada configuración del proxy, certificados SSL y servicios necesarios para la operación del sistema.

#### Evidencia de documentación "Del proceso y de los resultados de las pruebas"  

- [Documentación de Instalación y Configuración Inicial del Servidor](https://docs.google.com/document/d/1FBTFAi-5vtzeMV7TiIIoMVaADTWwLQ_DzoUIJGxeNkM/edit?tab=t.0)
- [Documentación de instalación de proxy y SSL](https://docs.google.com/document/d/1TrajgA8gOJAOXWyyI-DreZAjjHWiUiAdPEIqHOXgKPw/edit?tab=t.0)
- [Documentación de Pruebas de Configuración del Servidor](https://docs.google.com/document/d/1W9sn1uhQ3MMN1YdVmSTpf8IJckwlpSHL9CCUPk5LDhc/edit?tab=t.0)

---
### Prueba Cloudflare

#### Propósito

Validar la correcta configuración e integración de Cloudflare como servicio de seguridad, proxy y optimización de rendimiento, asegurando que el sistema cuente con protección ante amenazas externas, disponibilidad confiable y una entrega eficiente del contenido al usuario final.

#### Arquitectura

Cloudflare

#### Guías, recursos y tutoriales

[Spike Cloudflare](../Artefactos_Arquitectura/Spikes/SPK03_Cloudflare.md)
[Tutorial CLOUDFLARE](https://www.youtube.com/watch?v=ue375N4JXXs)
[Curso Cloudflare](https://www.youtube.com/watch?v=I2mv4456l74)  

#### Prueba 1 - Configuración de proxy, seguridad y DNS

Se realizó la configuración de Cloudflare como proxy entre el usuario y el servidor, verificando la correcta gestión de DNS, activación de HTTPS, certificados SSL y reglas básicas de seguridad.
Se realizaron pruebas para confirmar que el dominio se comunica correctamente con el servidor y que Cloudflare protege la aplicación sin afectar su funcionamiento.

#### Evidencia de documentación 

[Implementación de Cloudflare](https://docs.google.com/document/d/1Lx-YofFfGRqqgWSepdvAkTySnnm65YVmlC4n57UJDVE/edit?tab=t.0)

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
### Prueba React

#### Propósito
Validar la correcta instalación, configuración e integración de React como tecnología para la interfaz de usuario, asegurando que es posible desarrollar componentes reutilizables, manejar el estado de la aplicación y establecer comunicación adecuada con el backend definido en la arquitectura.

#### Arquitectura

[React](https://es.react.dev/)

#### Guías, recursos y tutoriales

- [Spike React](../Artefactos_Arquitectura/Spikes/SPK01_React.md)
- [Documentación oficial](https://es.react.dev/learn)
- [Curso de React](https://www.youtube.com/watch?v=7iobxzd_2wY)
- [Tutorial: Tic-tac-toe](https://es.react.dev/learn/tutorial-tic-tac-toe)
- [Agregar React a un proyecto existente](https://es.react.dev/learn/add-react-to-an-existing-project)
- [Instalación de React](https://es.react.dev/learn/installation)
- [PERN Stack - ¿Cómo funciona React en conjunto con Node y PostgreSQL?](https://www.youtube.com/watch?v=_zGL_MU29zs&t=1687s)
- [Tu primer componente](https://es.react.dev/learn/your-first-component)

#### Prueba 1 - Instalación y creación de componentes

Se realizó la instalación de React y la configuración inicial del proyecto. Se desarrollaron componentes básicos para verificar la correcta renderización de la interfaz y el funcionamiento del flujo de datos mediante props y estado.

#### Evidencia de documentación "Del proceso y de los resultados de las pruebas" 

[Implementación de React](https://docs.google.com/document/d/1soIrDLSfEWmV6mkkAgbUUgKokXkP32MvLJIVjLPPpAw/edit?tab=t.0)

---
### Prueba Base de Datos (Postgresql, DBeaver, Bitácora, Prisma, ABAC)  

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

---
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