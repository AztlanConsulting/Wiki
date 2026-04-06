---
title: "PRC06 - Definir y estimar el alcance del proyecto"
---

_v2.0 / PP

## Terminología

Estructura de desglose de trabajo (WBS):

Descomposición jerárquica orientada a entregables del alcance total de un proyecto, diseñada para organizar visualmente el trabajo en partes manejables llamadas paquetes de trabajo.

DAD (Disciplined Agile Delivery):

Es un marco de trabajo ágil híbrido diseñado para cubrir todo el ciclo de vida de entrega de soluciones de TI, desde la concepción hasta la operación. DAD integra prácticas de Scrum, Kanban, Lean y DevOps para ofrecer una guía de decisiones adaptativa que permite a los equipos elegir su propia "forma de trabajo" (WoW)

---

## Propósito

Estructurar los equipos de trabajo para definir un ciclo de vida adecuado y desglosar el alcance del proyecto generando estimaciones de tamaño, costo y esfuerzo para construir el plan de valor ganado.

---

## Área / Prácticas del CMMI

Área de proceso:

- PP — Project planning.

Prácticas específicas cubiertas:

- SP 1.1 Estimate the Scope of the Project 
- SP 1.2 Establish Estimates of Work Product and Task Attributes 
- SP 1.3 Define Project Lifecycle Phases 
- SP 1.4 Estimate Effort and Cost 

---

## Roles involucrados

- Team Leader (TL)  
- Product Owner (PO)  
- Architecture Owner (AO)  
- Team Members (TM)  
- Program Managers (PM), cuando aplique  

---

## Entradas

- Lista de miembros del departamento
- Datos de estimaciones previas
- Visión del proyecto
- Plantilla del Plan de valor ganado [(PVG)](https://docs.google.com/spreadsheets/d/1kg_PnTUw6GnHll7XnYxqXmGK9umSope4nmvp1Qzt5Nc/edit?usp=sharing)

---

## Actividades

### 1. Conformar equipos y asignar roles.

Estructurar a los miembros del departamento en equipos y asignar un rol a cada miembro.

#### Actividades

- Identificar el personal disponible.
- Dividir al personal en equipos de desarrollo.
- Asignar el rol por periodo a cada miembro del equipo.

#### Evidencia generada

- Tabla de asignación de roles por equipo [(Asignación)](https://docs.google.com/spreadsheets/d/1_NPndnSGP1HP_AvnrlHOInpGjkef5RldeK2u3mF1J9o/edit?usp=sharing)

---

### 2. Definir el ciclo de vida del proyecto.

Seleccionar el ciclo de vida y definir sus fases e hitos para alinear las estimaciones y entregas.

#### Actividades

- Seleccionar el ciclo de vida a utilizar siguiendo la [(Guía 02)](../Guías/GUI02_Guia_Ciclo_de_Vida.md)
- Identificar las fases y entregables dependiendo el ciclo de vida.
- Lista de hitos.

#### Evidencia generada

<details>
<summary>Selección del ciclo de vida por equipo</summary>

*Xólotl:* [Ciclo de vida DAD](../../Nuestros%20Proyectos/Xolotl-SOS/Estrategia_De_Desarrollo.md)

*Ichan:* [Ciclo de vida DAD](../../Nuestros%20Proyectos/Ichan-RCHQ/Artefactos/CicloDeVida.md)

*Cuitla:* [Ciclo de vida DAD](https://docs.google.com/document/d/1PoOLtvvigEFOjN5cPRgTm9IPhmUepv2hTL0bc0cRz4I/edit?usp=sharing)

*Huitlacuacles:* [Ciclo de vida DAD](https://docs.google.com/document/d/1g4LW_xqRRZGln0W8PWuqPA4wvrDepeeabZy1R4CxKdA/edit?usp=sharing)

</details>

#### Guías / Plantillas asociadas

- [(GUI02 - Elegir ciclo de vida y definir fases)](../Guías/GUI02_Guia_Ciclo_de_Vida.md)

--- 

### 3. Definir el alcance y la estructura de desglose de trabajo (WBS)

Definir y estructurar el trabajo del proyecto de manera clara y organizada, traduciendo los objetivos en paquetes de trabajo manejables.

#### Actividades

- Definir el alcance general, identificando historias de usuario, restricciones y componentes externos.
- Identificar los módulos alineados a las fases del ciclo de vida previamente elegido.
- Desglosar cada módulo en entregables específicos.
- Dividir cada entregable en paquetes de trabajo.
- Diagramar las actividades identificadas.

#### Evidencia generada

- Diagrama WBS.

#### Guías / Plantillas asociadas

- [(GUI01 - ¿Cómo hacer el diagrama WBS?)](../Guías/GUI01_Guia_del_WBS.md)

---

### 4. Estimar el tamaño de las tareas.

Establecer el tamaño y complejidad de las actividades identificadas en el WBS, utilizando una medida estandarizada. Por ejemplo Story Points

#### Actividades

- Definir una escala númerica para estimar.
- Pasar las actividades al plan de valor ganado.
- Asignar la complejidad / tamaño a cada actividad del WBS.

#### Evidencia generada

- Plan de valor ganado con estimaciones (PVG).

#### Guías / Plantillas asociadas

- [(Plantilla plan de valor ganado (PVG))](https://docs.google.com/spreadsheets/d/1kg_PnTUw6GnHll7XnYxqXmGK9umSope4nmvp1Qzt5Nc/edit?usp=sharing)
- [(GUI03 - Convertir Story Points a tiempo)](../Guías/StoryP_Guía.md)

---

### 5. Estimar el esfuerzo y costo de las tareas.

Convertir las estimaciones de tamaño en unidades de costo, basandose en datos historicos para generar gráficas en el plan de valor ganado.

#### Actividades

- Recopilar datos historicos del equipo.
- Acordar la equivalencia de esfuerzo a tiempo por cada Story Point.

#### Evidencia generada

- Plan de valor ganado con el costo por cada actividad

#### Guías / Plantillas asociadas

- [(GUI03 - Convertir Story Points a tiempo)](../Guías/StoryP_Guía.md)

---

## Relación con otros procesos

Este proceso interactúa con:

- PRC01 - Gestión de requisitos: Se utiliza para identificar las actividades de cada fase y agregarlas al WBS y PVG

---

## Salidas

- Diagrama WBS.
- Documento con roles del equipo.
- Plan de valor ganado (PVG).

---

## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     |  Yael Charles  | Fatima Figueroa | Procesos 05 y 22 agrupados en el PRC06 actual, para definir el ciclo de vida de cada equipo, generar un diagrama WBS para plasmarlas en un plan de valor ganado con el tamaño y costo por actividad.  | 05/04/2026 |
