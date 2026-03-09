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
** Inicio
'-------------------------------------------------------------
***< Visión del proyecto 
****< Necesidad del SF
****> Objetivo del equipo
****< Objetivo del proyecto
****< Necesidad de la empresa
'-------------------------------------------------------------
***> Establecer propuesta 
**** Elaborar documento SRS
*****< Requisitos funcionales
*****> Requisitos no funcionales
*****< Requisitos de interfaz
*****> Reglas de negocio
*****> Requisitos de información
*****< Requisito tipo objetivo
'-------------------------------------------------------------
***< Identificar arquitectura 
****< tecnologías
****< Proveedores
***** Costos
*****< Servidor
*****> Documento de aprobación
****< Spikes
***** Google Calendar API
***** Jenkins
'-------------------------------------------------------------
***> Plan de release
****< Fecha MVP
****> Fecha MBI 1
****< Fecha MBI 2
'-------------------------------------------------------------
***< Plan de riesgos
****< Matriz de riesgos
*****< Plan de contingencia
****< Identificar riesgos
***> Plan de calidad
****< Procesos de pruebas
****> Estandares
*****> Commits
*****< PR'S
*****> Ramas
*****< Código
*****> Definiciones
****** Ready
******< Done
***< Plan de recursos
****< Identificar recursos
*****> Humanos
*****< Tecnológicos 
******< Infraestructura
******< Software
***** Financieros
***> Plan de comunicación
**** Stakeholders
**** Canales de comunicación
**** Disponibilidad
*** Plan de compromisos
**** Acta de compromiso de Requisitos
**** Acta de validación de la visión del proyecto
/'-------------------------------------------------------------
------------------ FASE DE CONSTRUCCIÓN -----------------------
--------------------------------------------------------------'/
** Construcción
'-------------------------------------------------------------
*** Historias de usuario
**** WBS para US
*** Preparar el entorno
**** Repositorios de github
**** Estructura básica del proyecto
***** Crear proyecto de Node.js
***** Crear proyecto de React
**** Dependencias y frameworks
***** UUID
***** Express
**** Linters
**** Prueba de arquitectura
**** Base de datos
***** Tablas
****** Campos
***** Relaciones

/'-------------------------------------------------------------
-------------------- FASE DE TRANSICION -----------------------
--------------------------------------------------------------'/
** Transición
'-------------------------------------------------------------
*** Entregar la solución
**** Capacitar usuarios
***** Entregar Tutoriales
***** Dar capacitaciones
***** Dar Manuales de usuario
'-------------------------------------------------------------
*** Desplegar la solución
****< Generar certificado SSL
****> Apuntar el dominio al servidor
**** Levantar servicios

@endwbs
```
</details>

[WBS para historias de usuario](./WBSUserStories.md)

![WBS del Proyecto](./imgs/wbs_proyecto.png)

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Yael Charles y Manuel Bajos | Edmundo Canedo | Creación del WBS | 27/02/2026 |
| 1.1 | Yael Charles | Marco Ivan | Cambiar formato del WBS y simplificar | 09/03/2026|