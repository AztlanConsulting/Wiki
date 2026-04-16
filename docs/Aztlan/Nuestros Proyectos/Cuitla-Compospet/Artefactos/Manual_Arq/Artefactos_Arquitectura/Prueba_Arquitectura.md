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

1. Instalar instancias. 
2. Inicializa Prisma
3. Traer el esquema desde la base de datos
4. Generar el cliente
5. Crear prisma.js para establecer la comunicación con la base de datos
6. Importar prisma al modelo
7. Actualiza las consultas de tu aplicación para usar Prisma ORM.


#### Evidencia de documentación 

[Documentación Instalación y Pruebas de PostgreSQL](https://docs.google.com/document/d/1QXJiha9g6gh5MoR-EbYLULS2_-xZbUYKRYKi7TGZhm0/edit?tab=t.0)
[Documentación Instalación y Pruebas de DBeaver](https://docs.google.com/document/d/1QXJiha9g6gh5MoR-EbYLULS2_-xZbUYKRYKi7TGZhm0/edit?tab=t.qz3qpt9k79ab)
[Documentación Instalación y Pruebas de Prisma](https://docs.google.com/document/d/1QXJiha9g6gh5MoR-EbYLULS2_-xZbUYKRYKi7TGZhm0/edit?tab=t.1gdkgimajo7e)
[Documentación Implementación y Pruebas de ABAC](https://docs.google.com/document/d/1QXJiha9g6gh5MoR-EbYLULS2_-xZbUYKRYKi7TGZhm0/edit?tab=t.728612eksfuc)

---
### Prueba Google Oauth

#### Propósito

Validar la correcta configuración e integración de Google OAuth 2.0 como mecanismo de autenticación, asegurando que el sistema permita a los usuarios iniciar sesión de forma segura mediante sus cuentas de Google, protegiendo la información de acceso y garantizando una comunicación confiable entre la aplicación y los servicios de autenticación externos.

#### Arquitectura

- Google OAuth 2.0

#### Guías, recursos y tutoriales

- [Spike Google Oauth](../Artefactos_Arquitectura/Spikes/SPK08_GoogleOAuth.md)
- [Documentación oficial de Google Identity](https://developers.google.com/identity/protocols/oauth2)
- [Guía: Google OAuth2 con JS y Bun](https://dev.to/idrisakintobi/a-step-by-step-guide-to-google-oauth2-authentication-with-javascript-and-bun-4he7)
- [Google Cloud Console](https://console.cloud.google.com/)
- [OAuth 2.0 Simplified](https://www.oauth.com/)

#### Prueba 1 - Configuración de autenticación con Google

Se realizó la configuración de Google OAuth 2.0 mediante Google Cloud Console, generando las credenciales necesarias para la autenticación. Posteriormente, se integró el flujo de inicio de sesión en la aplicación, verificando que los usuarios puedan autenticarse correctamente utilizando su cuenta de Google.
Se realizaron pruebas para confirmar la correcta recepción de tokens de autenticación y la comunicación segura entre el cliente, el servidor y los servicios de Google.

#### Evidencia de documentación "Del proceso y de los resultados de las pruebas" 

[Documentación de Google OAuth 2.0](https://docs.google.com/document/d/1eQvTQZX0Qi68KSyqwExtelLDvQ0V5uCO6l1YLbtiMbc/edit?tab=t.0#heading=h.86uybb5iie5w)

---

### Prueba Google Gmail

#### Propósito

Validar la correcta configuración e integración de Gmail API como servicio para el envío de correos electrónicos desde la aplicación, asegurando que el sistema pueda comunicarse de forma segura con los servicios de Google para automatizar el envío de notificaciones, confirmaciones u otros mensajes necesarios para el funcionamiento del sistema.

#### Arquitectura

- Gmail API

#### Guías, recursos y tutoriales

- [Spike Google Gmail](../Artefactos_Arquitectura/Spikes/SPK09_Gmail.md)
- [Documentación oficial de Gmail API](https://developers.google.com/gmail/api/guides)
- [Explorador de APIs (Probar métodos)](https://developers.google.com/gmail/api/reference/rest)
- [Librería cliente para Node.js](https://github.com/googleapis/google-api-nodejs-client)
- [Guía de cuotas y límites](https://developers.google.com/gmail/api/reference/quota)

#### Prueba 1 - Configuración de envío de correos electrónicos

Se realizó la configuración de Gmail API utilizando credenciales generadas en Google Cloud Console. Posteriormente, se integró el servicio en el backend para permitir el envío automático de correos electrónicos desde la aplicación.
Se realizaron pruebas de envío para verificar que los mensajes se generen correctamente, que la autenticación funcione de forma segura y que la comunicación con los servicios de Google se realice sin errores.

#### Evidencia de documentación "Del proceso y de los resultados de las pruebas" 

[Documentación de Gmail API](https://docs.google.com/document/d/13fpo_HQuXrES-7wNS2aGz1p2Sv183lRo0vgvWpC0N10/edit?tab=t.0#heading=h.t1wmuocfka5p)

---

### Prueba Google Sheets

#### Propósito

Validar la correcta configuración e integración de Google Sheets API como servicio para la lectura, escritura y gestión de datos en hojas de cálculo, asegurando que el sistema pueda almacenar, consultar y actualizar información de forma automatizada mediante la comunicación segura con los servicios de Google.

#### Arquitectura

- Google Sheets API

#### Guías, recursos y tutoriales

- [Spike Google Sheets](../Artefactos_Arquitectura/Spikes/SPK10_Sheets.md)
- [Documentación oficial de Sheets API](https://developers.google.com/sheets/api/guides/concepts)
- [Referencia de métodos (v4)](https://developers.google.com/sheets/api/reference/rest)
- [Guía de lectura y escritura de valores](https://developers.google.com/sheets/api/guides/values)
- [Google Sheets API - Node.js Quickstart](https://developers.google.com/sheets/api/quickstart/nodejs)

#### Prueba 1 - Configuración de acceso y manipulación de datos

Se realizó la configuración de Google Sheets API mediante credenciales generadas en Google Cloud Console. Posteriormente, se integró el servicio en el backend para permitir la lectura y escritura de datos en hojas de cálculo.
Se realizaron pruebas para verificar que la aplicación puede crear, consultar y actualizar información correctamente, asegurando una comunicación segura y estable con los servicios de Google.

#### Evidencia de documentación "Del proceso y de los resultados de las pruebas" 

[Documentación de Sheets API](https://docs.google.com/document/d/18nqRzl7zK1jz8AXO0jZ0kIEFppaWzfAglUFc-xDuJo8/edit?tab=t.0)

---

## Requisitos NO Funcionales

### Testeabilidad - Prueba Jest & GitHub Actions

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

### Portabilidad - Prueba Browserslist & React Bootstrap

#### Propósito

Validar que la aplicación pueda ejecutarse correctamente en distintos navegadores y dispositivos, asegurando la compatibilidad de estilos, componentes y funcionalidades de la interfaz de usuario. Se busca garantizar que el sistema mantenga una presentación consistente y responsiva, permitiendo una experiencia de uso adecuada independientemente del navegador o resolución de pantalla utilizada.

#### Arquitectura

- [Browserslist](https://browsersl.ist/)
- [React Bootstrap](https://react-bootstrap.github.io/)

#### Guías, recursos y tutoriales

- [Documentación oficial](https://browsersl.ist/)
- [Install Browserslist](https://youtu.be/_UoeV9KIeiE)
- [¿Qé es Browserslist?](https://lenguajecss.com/herramientas-css/preprocesadores/browserslist/)
- [Documentación oficial Bootstrap 5](https://getbootstrap.com/docs/5.3/)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [Sistema de grid Bootstrap](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Breakpoints Bootstrap 5](https://getbootstrap.com/docs/5.3/layout/breakpoints/)
- [Tailwind CSS — Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Comparativa Bootstrap vs Bulma](https://bulma.io/alternative-to-bootstrap/)

#### Prueba 1 - Configuración de compatibilidad entre navegadores y diseño responsivo

Se configuró Browserslist para definir los navegadores objetivo que la aplicación debe soportar, permitiendo asegurar la compatibilidad del código frontend.
Adicionalmente, se utilizaron componentes de React Bootstrap y el sistema de grid para desarrollar interfaces responsivas que se adapten a distintos tamaños de pantalla.
Se realizaron pruebas en diferentes resoluciones y navegadores para verificar que los estilos, componentes y funcionalidades se visualicen y comporten correctamente.

#### Evidencia de documentación

- [Documentación de portabilidad](https://docs.google.com/document/d/19UiZN_HT_2JfX-xiNwYVd6kKKfTfPIwMEodzAok0lLA/edit?tab=t.0)

--- 

### Escalabilidad - Prueba Uptime Kuma & Grafana Cloud

#### Propósito

Validar que la arquitectura del sistema permite monitorear el rendimiento, disponibilidad y comportamiento de los servicios, asegurando que la aplicación pueda mantenerse estable ante incrementos en el uso y facilitando la detección temprana de problemas. Esta prueba busca confirmar que es posible recopilar métricas y supervisar el estado del sistema para apoyar su crecimiento y operación continua.

#### Arquitectura

- Uptime Kuma
- Grafana Cloud

#### Guías, recursos y tutoriales

- [Spike Scalability](../Artefactos_Arquitectura/Spikes/SPK15_Scalability.md)
- [Documentación Oficial de Prometheus](https://prometheus.io/docs/introduction/overview/)
- [Guía de Instalación de Uptime Kuma](https://github.com/louisland/uptime-kuma)
- [Librería prom-client para Node.js](https://github.com/siimon/prom-client)
- [Configuración de Grafana Cloud (Free Tier)](https://grafana.com/products/cloud/)

#### Prueba 1 - Configuración de monitoreo y recolección de métricas

Se configuraron herramientas de monitoreo para observar el estado y desempeño de la aplicación. Uptime Kuma se utilizó para verificar la disponibilidad del sistema mediante pruebas de acceso periódico, mientras que Grafana Cloud se configuró para visualizar métricas relacionadas con el rendimiento de los servicios.
Se realizaron pruebas para confirmar que el sistema puede recopilar información relevante sobre su funcionamiento, permitiendo detectar fallas, cuellos de botella o problemas de disponibilidad que puedan afectar la escalabilidad.

#### Evidencia de documentación

- [Documentación de escalabilidad](https://docs.google.com/document/d/11xJ2Q_l83ER_H_hvnfY7uxw9rQu4CzBRz7cNfbQ16Vo/edit?tab=t.0#heading=h.z746vbtddms5)

---

### Fiabilidad - Prueba Uptime Kuma & Grafana Cloud con Prometheus

#### Propósito

Validar que el sistema puede mantenerse disponible y funcionando correctamente de manera continua, permitiendo detectar fallas, caídas del servicio o comportamientos anómalos de forma oportuna. Esta prueba busca asegurar que la arquitectura cuenta con mecanismos de monitoreo que faciliten la identificación y resolución de problemas, contribuyendo a la estabilidad y confiabilidad del sistema.

#### Arquitectura

- Uptime Kuma
- Grafana Cloud

#### Guías, recursos y tutoriales

- [Spike Reliability](../Artefactos_Arquitectura/Spikes/SPK17_Reliability)
- [Documentación Oficial de Prometheus](https://prometheus.io/docs/introduction/overview/)
- [Guía de Instalación de Uptime Kuma](https://github.com/louisland/uptime-kuma)
- [Librería prom-client para Node.js](https://github.com/siimon/prom-client)
- [Configuración de Grafana Cloud (Free Tier)](https://grafana.com/products/cloud/)

#### Prueba 1 - Monitoreo de disponibilidad y estabilidad del sistema

Se configuraron herramientas de monitoreo para verificar la disponibilidad continua de la aplicación y supervisar el estado de los servicios. Uptime Kuma se utilizó para comprobar periódicamente que el sistema se encuentre accesible, mientras que Grafana Cloud permite visualizar métricas relacionadas con el funcionamiento de la aplicación.
Se realizaron pruebas para confirmar que es posible detectar interrupciones del servicio, fallas o comportamientos inusuales, facilitando la toma de acciones correctivas de manera oportuna.

#### Evidencia de documentación

- [Documentación de fiabilidad](https://docs.google.com/document/d/1pZfssmINH6JfMic6humXcpQ6DFRnyKsnrRHZJoYRlyY/edit?tab=t.0)

---

### Seguridad - Prueba Auditoría de Servidor (auditd)
#### Propósito
Implementar un sistema de auditoría en el servidor que permita monitorear accesos, ejecución de comandos y actividad de los usuarios, con el objetivo de mejorar la seguridad y trazabilidad del sistema.

#### Arquitectura
- Sistema operativo Linux (Ubuntu)
- Herramienta de auditoría: auditd
- Logs del sistema: /var/log/audit/, /var/log/auth.log

#### Guías, recursos y documentación
- [Documentación oficial de auditd](https://docs.oracle.com/es/learn/ol-auditd/)
- [Guía básica de auditd en Linux](https://koansoftware.com/comprehensive-guide-to-auditd-for-linux-embedded-systems/)

#### Prueba 1 - Implementación de auditd

Se realizó la instalación de la herramienta auditd en el servidor, permitiendo habilitar la auditoría de eventos del sistema.
  
Se configuró el servicio para ejecutarse automáticamente y se verificó su correcto funcionamiento mediante el estado del servicio (systemctl status auditd).
  
Posteriormente, se definieron reglas de auditoría para registrar los comandos ejecutados por los usuarios, permitiendo obtener trazabilidad de las acciones realizadas dentro del servidor.
  
#### Prueba 2 - Monitoreo de comandos y usuarios

Se utilizaron herramientas como ausearch y aureport para consultar la información registrada por auditd.
  
Se validó la correcta captura de eventos como:
- Ejecución de comandos (EXECVE)
- Inicio y cierre de sesión (USER_START, USER_END)
- Autenticación y accesos (USER_LOGIN, USER_AUTH)

Esto permitió identificar qué usuario ejecuta comandos, en qué momento y si la acción fue exitosa o fallida.

#### Prueba 3 - Monitoreo de accesos al servidor (SSH)
  
Se analizaron los logs de autenticación (/var/log/auth.log) para identificar accesos al servidor mediante SSH.
  
Se validaron:
- Logins exitosos
- Intentos fallidos
- Dirección IP de origen
- Usuario que accede
  
Esto permite detectar accesos no autorizados o comportamientos sospechosos.

#### Evidencia de documentación - auditd
- [Documentación de instalación y configuración de auditd](https://docs.google.com/document/d/1u8BeCNG0ekweDGOHW2A9-mdw_fUPs2tzG0TLdcavRVI/edit?tab=t.0)
- [Documentación de comandos clave para monitorear la seguridad del servidor](https://docs.google.com/document/d/1u8BeCNG0ekweDGOHW2A9-mdw_fUPs2tzG0TLdcavRVI/edit?tab=t.lz1p9634y90p#heading=h.n9j4pjh1xzcv)

--- 

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Yessica Lora | Fernanda Valdez |    | 10/03/2026 |
| 1.1 | Alejandra Arredondo | Juan Manuel Murillo | Actualización de prueba de arquitectura | 18/03/2026 |
| 1.1 |  Yessica Lora  |  Alejandra Arredondo| Actualización de prueba de arquitectura| 21/03/2026 |
| 1.1 |  Yessica Lora  |  Alejandra Arredondo| Actualización de prueba de arquitectura| 22/03/2026 |
| 1.1 | Alejandra Arredondo | Juan Manuel Murillo | Actualización de prueba de arquitectura | 23/03/2026 |
| 1.1 | Alejandra Arredondo | Kamila Jeanette Martínez | Actualización de prueba de arquitectura - Auditd | 01/04/2026 |
| 1.1 | Luisa Fernanda Valdez Guillén | | Actualización de prueba de arquitectura | 02/04/2026 |