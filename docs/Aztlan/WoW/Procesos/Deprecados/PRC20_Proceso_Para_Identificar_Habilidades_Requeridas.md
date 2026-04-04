---
title: "PRC20 - Proceso para Identificar Habilidades Requeridas"
---

_v2.0 / PP SP 2.5_

## Propósito
Documentar y analizar las habilidades y conocimientos necesarios para el éxito del proyecto, reduciendo riesgos derivados de brechas de capacidad organizacional y mejorando la planeación de recursos.

## Entradas
- Minutas con los stakeholders.
- SRS.
- Tecnologías recomendadas por AOs (Stack Recomendado).
- Base de datos de habilidades y conocimientos organizacionales ([Base de Skills](https://docs.google.com/spreadsheets/d/1fTEIn50jTNEAErV28CrP1KxcjjsE_eJUXX-Y_yDiCIM/edit?gid=0#gid=0)).

## Descripción

| Fases | Actividades | Prácticas asociadas al CMMI |
|--------------|--------------|--------------|
| Análisis del contexto del proyecto | Revisa el alcance, objetivos, y restricciones del proyecto, así como entregables clave del mismo (MVP y MBI). Identifica los componentes críticos técnicos y de negocio. <br /> Recomendación: Consulta el [Stack Recomendado](https://drive.google.com/file/d/1QLuE3w2M5cw8fnxKyAj_R0WjcVRU65g8/view) por los AOs. | REQM SP 1.1, PP SP 1.1 |
| Descomposición por necesidades | Desglosa el proyecto en habilidades explícitas e implícitas necesarias para su ejecución. | PP SP 2.1 |
| Clasificación y nivel requerido | Categoriza cada habilidad por área (Frontend, Backend, Data, UX/UI, Despliegue, Seguridad, etc.), define el nivel requerido (según la [Guía 14](../Guías/GUI14_Guía_Nivel_De_Skills.md)) y determina la fase del proyecto en la que será necesaria. | PP SP 2.2 |
| Registro en Inventario | Registra cada habilidad identificada en el inventario de habilidades y conocimientos del equipo ([plantilla](https://docs.google.com/spreadsheets/d/1fTEIn50jTNEAErV28CrP1KxcjjsE_eJUXX-Y_yDiCIM/edit?gid=13744931#gid=13744931)). | PP SP 2.5 |
| Corrección de cobertura | Cada miembro del equipo deberá documentar si cumple con el nivel requerido para cada habilidad documentada, según la [guía del nivel de skills](../Guías/GUI14_Guía_Nivel_De_Skills.md), analiza si la cobertura de las skills es suficiente o si se deberá ejecutar el [training plan](../ArtefactosDepartamentales/Training_Plan.md) | PP SP 2.5 |
| Validación | Valida que las habilidades documentadas cubran los requerimientos establecidos en el SRS y confirma su suficiencia con el AO antes de iniciar fases críticas del proyecto. | PPQA SP 1.1 |
| Seguimiento | Cada que termine un periodo establecido (ej. sprints) o cada que una nueva habilidad sea identificada y añadida al inventario de skills, se deberá repetir el paso de Cobertura. Si el AO cree necesario reconsiderar el nivel de una skill, de igual manera se repite el paso. | PMC SP 1.1 |

## Salidas
- Inventario documentado de habilidades requeridas por proyecto junto con matriz de cobertura (misma hoja de sheets).
- Actualización de habilidades en Base de Skills departamental (mismo libro que la salida anterior).

## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Roberto Serna y Mauricio Olguín | Horacio Villela | Proceso para identificar habilidades requeridas. | 28/02/2026 |
| 1.1     | Roberto Serna y Mauricio Olguín |  | Corrección de redacción. | 02/03/2026 |
| 2.0     | Roberto Serna y Mauricio Olguín | Manuel Bajos | Solución a inconsistencias y mejora de alcance. | 08/03/2026 |