---
title: "Architecture Starter Pack"
sidebar_position: 3
---

## Architecture Starter Pack Xólotl

**Contexto:** La socio formadora cuenta ya con una plataforma en Wix por la cual promociona y vende anuncios
en Meta para ayudar a las personas a encontrar a su perro.

Flujo: [Una persona entra en la página] -> [Ingresa su información y foto de su perro] -> [Elije un
plan y paga] -> [Flujos de pagos] -> [Flujo de seguimiento]

Flujo alterno Redes sociales: [Una persona se comunica con ellas a través de sus redes sociales] ->
[Dan su información por medio de las redes sociales] -> [La persona responsable hace el registro de
la información] -> [Flujo de pagos] -> [Continúa flujo normal]

Flujo de seguimiento: [Se crea un cartél y se publica en Meta] -> [Se mantiene al dueño al tanto de
las personas que han visto el cartél y si se ha encontrado a su mascota]

Flujo de pagos [Paypal | Transferencia]: [. . . ] -> [Se usa el número de cuenta] -> [Se realiza el pago]
-> [Se relaciona pago con usuario] -> [. . . ]
Flujo de pagos [Oxxo]: [. . . ] -> [Se usa el número de cuenta] -> [Se realiza el pago] -> [Se requiere
que el usuario mande comprobante de pago por redes sociales] -> [. . . ]

**Objetivos:** Reducir el tiempo de respuesta a máximo 1 minuto en la contratación del servicio para brindar una respuesta más rápida a los clientes para la entrega del MVP.

**Usuarios:** 
1. **Usuarios Indirectos:** Quienes ven los anuncios y no interactúan con la aplicación
2. **Fans:** Quienes quieren dar información de perros perdidos y subir fotos
3. **Clientes:** Personas que perdieron a su mascota y quieren contratar el servicio
4. **Colaboradoras externas:** Suben evidencia de promociones del servicio en grupos de facebook
5. **Colaboradoras internas:** Dan seguimiento a los clientes
6. **Priscila** Gestiona a las personas que ayudan, crea anuncios, modifica planes, talleres, manuales, etc.

**Supuestos:** 
1. Pérdida de clientes al tardar al responder
2. Poca honestidad en clientes y colaboradoras
3. Clientes internacionales, países de habla hispana (Chile, Argentina, Colombia, etc)

## Módulos principales
* Gestión de usuarios
* Pagos
* Reconocimiento de imágenes (Evitar duplicados / identificar y categorizar)
* Automatizar generación de posters de búsqueda
* Publicaciones automáticas de posters

## Datos sensibles
*Cifrar datos sensibles desde un inicio:*
* Nombre
* Direcciones
* Teléfono
* Contraseñas
* Información de pagos

## Requerimientos no funcionales mínimos
**Seguridad:** 
* ABAC
* Cifrado de datos

**Usabilidad:** 
* Interfaces claras con botones de acción que llamen la atención

**Fiabilidad:** 
* Disponibilidad mayor de 95%, gestión de errores, timeouts.


### Riesgos de mitigación iniciales
* Cifrado de datos
- Parametrizar datos
- Aceptación de API de pagos
- Recolección de datos

## Stack de tecnologías

### Lenguaje
- Javascript
- Typescript -> JS con tipado

### Backend
- Express

### Frontend
- React -> Estructura
- Axios -> Consulta de información (Alternativa a fetch)
- Tailwind -> Estilo

### Database
- MongoDB -> Colecciones

### Pruebas
- Postman -> Endpoints
- Jest -> Unitarias

### Integraciones externas probables
* Meta API
* PayPal
* Stripe
* OSM
* LocationIQ

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Yessica Lora | Fernanda Valdez |    | 10/03/2026 |
| 1.1 | Santiago Alducin Villaseñor | [Pending] |    | 26/03/2026 |