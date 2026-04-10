# Documento de Tecnologias

## Objetivo

Este documento describe las tecnologias principales utilizadas en el proyecto Ichan-RCHQ, enfocandose en las API externas y las librerias integradas en la aplicacion.

## API utilizadas

### Mailgun API

Mailgun es la API utilizada para el envio de correos electronicos dentro del sistema.

#### Uso en el proyecto

- Envio de correos a donadores.
- Notificaciones a usuarios.

#### Motivo de uso

- Reduce la complejidad de administrar infraestructura propia para correo electronico.
- Ofrece una API sencilla para integrarse con el backend del sistema.

## Librerias utilizadas

### FullCalendar para React

Se utiliza la libreria `@fullcalendar/react` para implementar el componente de calendario dentro de la aplicacion en React.

#### Uso en el proyecto

- Visualizacion de eventos en calendario.
- Interaccion con fechas y eventos desde la interfaz de usuario.
- Integracion de una vista de calendario reutilizable dentro del frontend.

#### Motivo de uso

- Facilita la construccion de interfaces de calendario robustas.
- Cuenta con integracion nativa para proyectos desarrollados en React.
- Buena documentación sobre su integración.

### Jest

Jest es la libreria utilizada para realizar pruebas unitarias en el proyecto.

#### Uso en el proyecto

- Ejecucion de pruebas unitarias.
- Probar comportamiento de funciones.
- Soporte para mantener la calidad del codigo durante el desarrollo.

#### Motivo de uso

- Es una herramienta ampliamente adoptada en proyectos JavaScript.
- Ofrece una configuracion sencilla para pruebas automatizadas.
- Permite detectar errores de forma temprana y mejorar la mantenibilidad del sistema.

## Resumen

Las tecnologias documentadas en este archivo cubren funciones clave del proyecto:

- [Mailgun](https://github.com/mailgun/mailgun.js?tab=readme-ov-file#create) como servicio de correo electronico mediante API externa.
- [@fullcalendar/react](https://fullcalendar.io) como libreria para el calendario en la interfaz.
- [Jest](https://jestjs.io/docs/getting-started) como herramienta para pruebas unitarias.


| Version | Creado por: | Auditado por: | Descripcion | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Manuel Bajos | Pendiente | Inicio del documento | 10/04/2026 |

