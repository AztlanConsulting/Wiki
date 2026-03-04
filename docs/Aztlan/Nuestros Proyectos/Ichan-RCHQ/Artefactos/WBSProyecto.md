---
title: "WBS Proyecto"
sidebar_position: 1
---


<details>
<summary>Código PUML</summary>
```puml
@startwbs

* IchanRH
/'-------------------------------------------------------------
------------------ FASE DE COMIENZO -------------------------
--------------------------------------------------------------'/
** Comienzo
'-------------------------------------------------------------
***< Hacer equipos
'-------------------------------------------------------------
***< Alinear con la dirección de la empresa
****< Entender la necesidad
****> Encontrar objetivo
****< Entender visión y misión de la empresa
****> Visión del proyecto
'-------------------------------------------------------------
***< Explorar alcance
****< Realizar impact mapping
****< Establecer propuesta de solución
*****< Identificar arquitectura
******< Definir tecnologías
******< Realizar comparativa de proveedores
******< Realizar spikes
******* Spike Jenkins y Github Actions
******* Spike Google Calendar
***** Elaborar documento SRS
******< Requisitos funcionales
******> Requisitos no funcionales
******< Requisitos de interfaz
*******< Diseñar de wireframes
*******< Diseñar las vistas de alta fidelidad
*******< Identificar Apis de utilidad
******> Reglas de negocio
******> Requisitos de información
'-------------------------------------------------------------
****< Entender la estructura de la empresa
*****< Entender procesos y reglas 
'-------------------------------------------------------------
***< Planear la release
****< Definir MVP
****> Definir MBI 1
****< Definir MBI 2
'-------------------------------------------------------------
***< Definir estrategía de pruebas
****< Definir tipos de pruebas
'-------------------------------------------------------------
***< Elaborar planes
****< Hacer plan de riesgos
****> Hacer plan de calidad
****< Hacer plan de recursos
****> Hacer plan de valor ganado
****< Hacer plan de comunicación
****> Hacer plan de release
'-------------------------------------------------------------
***< Visión común
****< Alinear visión de equipo e interesados
/'-------------------------------------------------------------
------------------ FASE DE CONSTRUCCIÓN -----------------------
--------------------------------------------------------------'/
** Construcción
'-------------------------------------------------------------
*** Probar la arquitectura pronto
****> Redactar spikes
****< Realizar pruebas de concepto
'-------------------------------------------------------------
*** Atender cambios de los interesados
**** Actualizar Plan de Valor Ganado
**** Ordenar prioridades
**** Realizar cambios
'-------------------------------------------------------------
*** Producir una posible solución
**** Diagrama WBS para US
'-------------------------------------------------------------
*** Mejorar la calidad
**** Establecer estandares
***** Elaborar estandares para backend
***** Elaborar estandares para frontend
/'-------------------------------------------------------------
-------------------- FASE DE TRANSICION -----------------------
--------------------------------------------------------------'/
** Transición
'-------------------------------------------------------------
*** Garantizar la puesta en producción
**** Buscar opciones de alojamiento
*****< Seleccionar servidor
*****> Seleccionar servicio de alojamiento de archivos
***** Seleccionar proveedor de dominio

'-------------------------------------------------------------
*** Desplegar la solución
****< Generar certificado SSL
****> Apuntar el dominio al servidor
**** Levantar servicios

@endwbs
```
</details>

![WBS del Proyecto](./imgs/WBSProyecto.png)

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Yael Charles y Manuel Bajos | Edmundo Canedo | Creación del WBS | 27/02/2026 |