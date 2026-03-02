---
title: "PRC09 - Proceso para Desarrollo de Historia de Usuario" # CAMBIAR AL TITULO
---

_v1.0 /_ REQM <!--Poner practicas del CMMI-->


## Propósito
* Evitar generar inconsistencias durante la definición y elaboración de Historias de Usuario.
* Promover el uso de los estándares de calidad.


## Entradas
* Plan de comunicación con Stakeholders.
* Plan de Valor Ganado (PVG).
* Diseños/bocetos de la UI/UX.
* Modelo Entidad Relación (MER).
* Diagrama de despliegue.


<!-- ---------------------------------------------------------------------------
- Las fases estan puestas como template
- tu puedes definir tus propias fases
---------------------------------------------------------------------------- -->

## Descripción
| Fases | Actividades | Prácticas asociadas al CMMI |
|--------------|--------------|--------------|
| Asignación | 1. Revisar el PVG del proyecto.<br/>2. Escoger una HU que no tenga asignado un responsable.<br/>3. Colocar tu nombre en la columna correspondiente. | REQM SP 1.5 |  
| Diseño | 1. Diseñar el Diagrama de Secuencia.<br/>2. Elaborar el Diseño UX/UI.<br/>3. Crear los Casos de Prueba asociados a la HU. |    |  
| Revisión del diseño | 1. Validar el diseño con al menos 2 miembros del equipo.<br/>2. Registrar observaciones y realizar ajustes en caso necesario. |    |  
| Desarrollo | 1. Desarrollar el backend correspondiente a la HU.<br/>2. Desarrollar el frontend correspondiente.<br/>3. Marcar la HU como “Done” en el PVG una vez finalizado el desarrollo. |    |  
| Validación | 1. Verificar que lo desarrollado coincide con lo validado en la fase de diseño.<br/>2. Ejecutar las pruebas definidas.<br/>3. Validar la implementación con el cliente.<br/>4. En caso de encontrar algún defecto, cambiar el estado de la HU a “En progreso” y resolver el error identificado. |  REQM SP 1.5  | 
| Despliegue | 1. Verificar que se cuenta con la versión más actualizada de la rama “develop”.<br/>2. Crear un Pull Request con base en el estándar [Inserta Estándar PR].<br/>3. Comunicar en la Daily que el PR ha sido realizado. |    |


## Salidas
* Pull Request.


## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Elizabeth Orduña, Alejandro Cruz | Pendiente | Creación del proceso | 27/02/2026 |