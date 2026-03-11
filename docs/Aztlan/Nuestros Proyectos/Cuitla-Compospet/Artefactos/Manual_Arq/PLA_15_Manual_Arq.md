---
title: "Manual de Arquitectura Cuitla-Compospet"
---

## Proposito

## Ciclo de vida 

- Milestons

## Factores considerados

- Costo de desarrollo
    - Kami
- Costo de Mantenimiento
    - Cuanto le costara que lo cambien
- Atributos de calidad
    - NRFs
- Complejidad del sistema
    - Plan de recursos?
- Robustez
    - Mitigación de riesgos
    - El diagrama alex y denisse comunicación
- Escalabilidad
    - Tus de escalabilidad creo
- Limitaciónes de Tecnologías
    - No se 
- Riesgos
    - Matriz de riesgos
- Evolución futura
    - Plan de desarrollo?
- Capacidades de los usuarios
    Plan de recursos? 

## Starter Pack

- 

##  ADRs

- 

## Diagrama de Despliegue 
[Diagrama de despliegue](https://drive.google.com/drive/folders/1unCmhpQJstqL7ZR0USmDIarhOaIjlOVT)


## Patrón de Arquitectura
- Clean Architecture
    - Back
        - **MVC** <br/>
        Por otro lado, el backend seguirá el patrón de arquitectura [Modelo Vista Controlador (MVC)](https://codigofacilito.com/articulos/mvc-model-view-controller-explicado), el cual separa la lógica de negocio, la gestión de datos y el manejo de las solicitudes del usuario, permitiendo una estructura más modular y mantenible del sistema.<br/><br/>
        **Diagrama de Paquetes** <br />
        ![Imagen de diagrama de paquetes](../../../../../../static/img/diagrama_paquetes_cuitla.png)
        [Diagrama de paquetes texto](../Entregables/diagrama_paquetes.plantuml)
        
    - Front
        - **MVVM**<br/>
        En el frontend se implementará la arquitectura [Model View ViewModel (MVVM)](https://learn.microsoft.com/en-us/dotnet/architecture/maui/mvvm), la cual permite separar la interfaz de usuario de la lógica de presentación y de los datos, facilitando una mejor organización del código y una actualización reactiva de la interfaz. <br/> <br/>Se hará un spike de react para realizar el diagrama de paquetes del frontend. 

## Plan de recursos
- [Plan de recursos](https://docs.google.com/document/d/1Yih3CBKonNiYRsPUfO8lJsYRYNXJTQccyRpao51t2TM/edit?tab=t.0)

### Tutoriales o Spikes relacionados
- Los que creemos 
- De lo que queremos aprender


## Prueba de Arquitectura

- Planeación de prubea arquitectura


## Estrategia de integración continua
### Flujo de integración - Procedimientos



### Estandares de Codificación <br/>
Para los estándares de codificación del proyecto se utilizará JavaScript, siguiendo las buenas prácticas definidas en la Airbnb JavaScript Style Guide, la cual establece convenciones para la estructura del código, la nomenclatura de variables y funciones, así como reglas de estilo que permiten mantener un código consistente, legible y mantenible a lo largo del desarrollo. <br/><br/>

Para el cumplimiento de estos estándares, se utilizará ESLint como herramienta de análisis estático de código, la cual permite detectar posibles errores y malas prácticas durante el desarrollo. Esta herramienta ayuda a aplicar reglas de estilo, mantener la consistencia del código y promover buenas prácticas en JavaScript, contribuyendo a mejorar la calidad y mantenibilidad del software.<br/><br/>

Adicionalmente, se utilizará un formateador de código, Prettier, cuya función es organizar el código visualmente para mantener un estilo uniforme en todo el proyecto. Esta herramienta permitirá controlar aspectos como los espacios, saltos de línea, uso de comillas simples o dobles, punto y coma e indentación, facilitando la legibilidad y consistencia del código.

### Criterios de aceptación

**Definición de Ready ( DoR ) - ComposPet**

- Tamaño pequeño: La historia ya no se puede descomponer en más actividades. Es lo suficientemente pequeña y manejable para sacarla completa dentro de un sprint.<br/>
- Redacción clara: La historia de usuario está redactada con el enfoque tradicional de Card, Conversation, Confirmation: Como [ tipo de usuario ], quiero [ funcionalidad ] para [ beneficio ].<br/>
- Estimación y prioridad: La historia de usuario cuenta con una prioridad y estimación del esfuerzo que se requeriría  basada en story points en el backlog del equipo. <br/>
- Sin dependencias: Las dependencias con otras historias de usuario han sido identificadas y resueltas
- Diagramas: La historia de usuario cuenta con diagramas (secuencia, componentes, estados, BPMN, Tablas de decisión, etc..)<br/>
- Dependencias Spikes: Si la historia depende de un spike, este debe estar concluido con resultados claros. <br/>
- Interfaz en figma: La interfaz cumple con los diseños en Figma que han sido aprobados por el cliente. <br/><br/>

**Definición de Done ( DoN ) - ComposPet**<br/>

Basada en la definición de Done del departamento:


Una funcionalidad es aceptada [DONE] cuando: <br/>
- Cumple con ready: La historia de usuario cumple con la definición de ready. <br/>
- Trazabilidad:La función tiene su respectiva trazabilidad en la RTM (Matriz de Trazabilidad de Requisitos).<br/>
- Pruebas de integración: Pasa todas las pruebas de integración.<br/>
- PRs aprobados: Los PR's (Pull Requests) ya fueron creados, revisados y aceptados siguiendo los lineamientos que acordamos.<br/>
- Código limpio: Cumple con los estándares de codificación establecidos. <br/>
- Seguridad: Se cumplieron los estándares de seguridad (encriptación, manejo de contraseñas).<br/>
- Documentación: El código está documentado. <br/>
- Aprobado por el cliente: La funcionalidad ha sido demostrada y aceptada por el cliente.<br/>
- Cumple pruebas: El código cumple con la cobertura de las pruebas unitarias en al menos un 80%.<br/>

### Pruebas Unitarias
- Se implementarán pruebas unitarias para verificar el correcto funcionamiento de funciones y módulos individuales del sistema.<br/>
- Estas pruebas se desarrollarán utilizando Jest, permitiendo validar de forma aislada la lógica del sistema desarrollada en JavaScript.<br/><br/>

### Pruebas de Integración
- Se implementarán pruebas de integración para validar la interacción entre los diferentes componentes del sistema, asegurando que los módulos funcionen correctamente cuando se integran entre sí. <br/>
- Estas pruebas también se ejecutarán mediante Jest y se automatizarán utilizando GitHub Actions, permitiendo su ejecución automática en cada actualización del sistema.<br/>

### Ambientes de despliegue
El proyecto utilizará una estrategia de ramas para organizar el desarrollo y garantizar la estabilidad del código en cada etapa del proceso.<br/>

#### Prod
- Contendrá código estable y listo para desplegar en producción.
- No se permitirán commits directos en esta rama.
- Solo recibirá merges aprobados desde la rama **Staging**.
- Esta rama deberá estar protegida para evitar modificaciones no autorizadas.

#### Staging
- En esta rama se validarán funcionalidades completas antes de su liberación.
- Puede recibir merges desde la rama **Develop**.
- Después de verificar que las funcionalidades operan correctamente en este ambiente, se podrá realizar el *merge* hacia la rama **Prod**.

#### Develop
- Rama principal de desarrollo.
- Aquí se integrarán todas las ramas de **feature**.
- Una vez que las funcionalidades se encuentren completas y probadas, se podrán integrar a la rama **Staging**.


## Glosario

**MVC (Modelo Vista Controlador)**  
Patrón de arquitectura que separa la aplicación en tres componentes principales: modelo, vista y controlador.

**MVVM (Model View ViewModel)**  
Patrón de arquitectura que separa la lógica de presentación de la interfaz de usuario mediante el uso de un ViewModel.

**ADR (Architecture Decision Record)**  
Documento que registra decisiones importantes relacionadas con la arquitectura del sistema.

**Spike**  
Actividad de investigación técnica utilizada para explorar una solución o tecnología antes de implementarla.

**Pull Request (PR)**  
Solicitud para integrar cambios de una rama a otra dentro de un repositorio de código.

**RTM (Requirements Traceability Matrix)**  
Matriz que permite rastrear la relación entre requisitos, desarrollo y pruebas.

**Integración Continua (CI)**  
Práctica de desarrollo en la que los cambios de código se integran frecuentemente en el repositorio principal y se validan automáticamente mediante pruebas.

**Pruebas Unitarias**  
Pruebas que verifican el funcionamiento de componentes individuales del sistema.

**Pruebas de Integración**  
Pruebas que verifican la interacción entre diferentes componentes del sistema.

## Referencias
## Referencias

- [Postgres vs MongoDB – Bytebase](https://www.bytebase.com/blog/postgres-vs-mongodb/)
- [Diferencia entre bases de datos ACID y BASE – AWS](https://aws.amazon.com/es/compare/the-difference-between-acid-and-base-database/)
- [Choosing MongoDB vs PostgreSQL Cloud Database Solutions – EnterpriseDB](https://www.enterprisedb.com/choosing-mongodb-postgresql-cloud-database-solutions-guide)
- [MongoDB vs PostgreSQL Comparison – MongoDB](https://www.mongodb.com/resources/compare/mongodb-postgresql)
- [Discussion: PostgreSQL vs MongoDB – Reddit](https://www.reddit.com/r/PostgreSQL/comments/19bkn8b/doubt_regarding_postgresql_vs_mongodb/?tl=es-419)
- [Difference Between MongoDB and PostgreSQL – AWS](https://aws.amazon.com/es/compare/the-difference-between-mongodb-and-postgresql/)
- [Requerimientos de Software Nuclea 1.0](https://docs.google.com/document/d/1sUATBxqH3TbwqfV5jSE0gygfIeTC9kQua0CND8ov9GM/edit?tab=t.0)
- [PLA10 – Plantilla para redactar un documento de compromiso](https://docs.google.com/document/d/1U3Xf4u492_j3Labn_bFUKl9OH12SOf43LL1bN_Lk6Vw/edit?tab=t.dmvhdli3c9vb)
- [SRS – ComposPet](https://docs.google.com/document/d/1YoU9wY4nDRIAOOuGRMDbNJV5Vhgw3qolXyaR-Va28L0/edit?tab=t.0)
- [Cloudflare](https://www.cloudflare.com/)
- [Cloudflare Web Application Firewall (WAF)](https://www.cloudflare.com/es-es/application-services/products/waf/)
- [Hostinger VPS Hosting](https://www.hostinger.com/mx/vps-hosting)
- [Parámetros y límites de planes de hosting en Hostinger](https://www.hostinger.com/support/6976044-parameters-and-limits-of-hosting-plans-in-hostinger/#h_0fbdbe1ac8)
- [Presentación del proyecto](https://docs.google.com/presentation/d/17J0F4BSO5mRLJnsqmdc9MaKvIalAG5t20JZP7ISTf8c/edit?slide=id.g402ad65d92_0_314#slide=id.g402ad65d92_0_314)
- [React Documentation](https://react.dev/)
- [Ubuntu](https://ubuntu.com/)
- [Manual de Arquitectura General – CaveLabs](https://github.com/CaveLabs-1/Wiki/blob/master/Arquitectura/Manuales/Manual%20Arquitectura%20General.md)
- [Technology Stack – dwyl](https://github.com/dwyl/technology-stack)
- [Acta Proyecto Zeitgeist](https://black-dot-2024.github.io/docs/zeitgeist/acta-proyecto-ZG)





---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Yessica Lora | Fernanda Valdez |    | 10/03/2026 |