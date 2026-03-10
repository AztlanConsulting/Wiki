---
title: "WBS - Fungívora"
---

# WBS – Proyecto Fungívora

## Documento WBS (PDF)

El WBS completo puede consultarse en el siguiente enlace:

🔗 **PDF del WBS en Google Drive**

https://drive.google.com/file/d/17_y7zHX8W1g9cFOGYVDwZIYxGPO_i6ye/view?usp=drive_link

---

# Diagrama WBS (PlantUML)

El siguiente código genera el **Work Breakdown Structure del proyecto Fungívora**.

```plantuml
@startwbs
* Proyecto Fungivora

** Inception

* PP
** SG1 Establecer las estimaciones

*** 1.1 Estimar el alcance del proyecto
**** WBS
***** GUI01

*** 1.2 Estimar atributos de productos de trabajo y tareas
**** Objetivo del proyecto
***** GUI04

*** 1.3 Definir fases del ciclo de vida
**** Elección de ciclo de vida
***** GUI02
***** PRC12

*** 1.4 Estimar el esfuerzo y el coste
**** Matriz de documentos
**** Plan de Valor Ganado (PVG)

** SG2 Desarrollar plan del proyecto

*** 2.1 Establecer presupuesto y calendario
**** Fechas de entrega en PVG
**** Cálculo de horas de trabajo para el sprint

*** 2.2 Identificar riesgos del proyecto
**** Plan de riesgo
***** GUI08

*** 2.3 Planificar gestión de datos
**** Plan de datos
***** PRC22

*** 2.4 Planificar recursos del proyecto
**** Plan de recursos
**** Sprint Planning

*** 2.5 Planificar habilidades y conocimiento
**** Base de Skills
***** PRC21

*** 2.6 Planificar involucramiento de stakeholders
**** Plan de comunicación
***** PLA11

*** 2.7 Establecer plan del proyecto
**** Plan de entrega

** SG3 Obtener compromiso con el plan

*** 3.1 Revisar planes del proyecto

*** 3.2 Conciliar trabajo y recursos
**** Plan de recursos
***** PRC07

*** 3.3 Obtener compromiso con el plan
**** Acta de compromiso
***** PLA10
***** PLA23
**** Daily
***** PRC15

* REQM
** SG1 Gestionar los requisitos

*** 1.1 Comprender los requisitos
**** SRS
***** PLA05
**** RTM
**** Necesidad del socio

*** 1.2 Obtener el compromiso sobre los requisitos
**** Acta de compromiso interno
***** PRC17
**** Acta de compromiso con Socio Formador (SF)
***** PRC17
**** Definición de Ready
**** Definición de Done

*** 1.3 Gestionar los cambios a los requisitos
**** Matriz de cambios
***** PRC18

*** 1.4 Mantener la trazabilidad bidireccional de los requisitos
**** RTM

*** 1.5 Asegurar el alineamiento entre el trabajo del proyecto y los requisitos
**** Registro de fallos

** Elaboration
** Construction
** Transition

@endwbs
```

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Elizabeth Orduña | Alejandro Cruz, Emilia Cárdenas y Adrián García |  Creación del WBS  | 09/03/2026 |