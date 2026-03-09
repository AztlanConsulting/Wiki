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
***< Hacer equipos 
'-------------------------------------------------------------
***< Visión del proyecto 
****< Entender la necesidad del SF
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
****< Definir tecnologías
****< Realizar comparativa de proveedores
*****< Solicitar servidor
*****> Redactar documento
****< Realizar spikes
***** Google Calendar API
***** Jenkins
'-------------------------------------------------------------
***> Plan de release
****< Definir MVP
****> Definir MBI 1
****< Definir MBI 2
'-------------------------------------------------------------
***< Plan de riesgos
****< Matriz de riesgos
*****< Plan de contingencia
****< Identificar riesgos
***> Hacer plan de calidad
****< Procesos de pruebas
****> Validar correcciones
****< Documentar errores
****> Ejecutar casos de prueba
****> Estandares
*****> Commits
*****< PR'S
*****> Ramas
*****< Código
*****> Definiciones
****** Ready
****** Done
***< Plan de recursos
****< Identificar recursos
*****> Humanos
*****< Tecnológicos 
******< Infraestructura
******< Software
***** Financieros
***> Plan de comunicación
**** Identificar stakeholders
**** Canales de comunicación
**** Disponibilidad
/'-------------------------------------------------------------
------------------ FASE DE CONSTRUCCIÓN -----------------------
--------------------------------------------------------------'/
** Construcción
'-------------------------------------------------------------
*** Historias de usuario
**** Diagrama WBS para US

*** Preparar el entorno
**** Repositorios de github
**** Estructura básica del proyecto
**** Instalar dependencias y frameworks
**** Linters

*** Prueba de concepto

*** Revisión de código
**** code reviews
**** corregir bugs
**** verificar DONE
/'-------------------------------------------------------------
-------------------- FASE DE TRANSICION -----------------------
--------------------------------------------------------------'/
** Transición
'-------------------------------------------------------------
*** Entregar la solución
**** Capacitar usuarios
***** Tutoriales
***** Dar capacitaciones
***** Manuales de usuario
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