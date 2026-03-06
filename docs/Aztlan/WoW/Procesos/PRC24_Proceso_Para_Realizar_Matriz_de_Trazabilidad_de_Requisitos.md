---
title: "PRC24 Proceso para realizar matriz de trazabilidad de requisitos"
---

_v1.0 /_

## Propósito
Asegurar que cada requisito del cliente sea analizado, diseñado, implementado y probado, y viceversa; garantizando que no existan omisiones ni se construyan funcionalidades no solicitadas.

## Entradas

* Documentos de visión
* Minutas de sesiones con el socio/cliente o historias de usuario (Requisitos de Negocio).
* SRS.
* Repositorio de código fuente.
* Plan y Casos de Prueba.

## Descripción
| Fases | Actividades | Prácticas asociadas al CMMI |
|--------------|--------------|--------------|
| Inicialización de la Matriz | De una lista de requerimientos definida en el SRS, asignarles un identificador único (ej. BR-01) y registrarlos en las columnas "ID Req. Negocio", "Descripción" y "Origen/Fuente" de la [plantilla RTM](https://docs.google.com/spreadsheets/d/1yY1daMZ_oXeu3huJ-2UJ9qUKr4hWooPbJ5toUc0xc0U/edit?gid=0#gid=0). | REQM SP 1.4 |
| Trazabilidad de Requisitos y Diseño | Derivar los requisitos del sistema (US) a partir de los de negocio. Registrar el "ID Req. Sistema (US)" y vincularlo en la matriz con su respectivo "Doc. de Diseño" donde se detalla la solución técnica. | REQM SP 1.4 |
| Trazabilidad de Implementación | Durante el desarrollo, los programadores deben reportar qué componente o archivo resuelve cada requisito. Se debe registrar esta información en la columna "Módulo / Código" de la matriz. | REQM SP 1.4 |
| Trazabilidad de Pruebas y Estado | Se debe registrar el "ID Caso de prueba" en la matriz y mantener actualizado el estado (Pendiente, Aprobado, Fallido) al ejecutar las pruebas. | REQM SP 1.4 |
| Mantenimiento y Análisis de Impacto | Ante una solicitud de cambio del cliente, buscar el ID del requisito en la RTM para identificar qué diseño, código y pruebas deben modificarse. | REQM SP 1.3. y 1.4.|

## Salidas

* [Matriz de Trazabilidad de Requisitos](https://docs.google.com/spreadsheets/d/1yY1daMZ_oXeu3huJ-2UJ9qUKr4hWooPbJ5toUc0xc0U/edit?gid=0#gid=0) (RTM) actualizada

## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Roberto Serna y Mauricio Olguín | Jorge Garzón | Plantilla inicial para procesos.  | 04/03/2026 |