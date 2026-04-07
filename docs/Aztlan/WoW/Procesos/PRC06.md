---
title: "PRC06 - Definir y estimar el alcance del proyecto"
---

_v2.0 / PP_

## Terminología

[WBS, DAD](../Glosario.md)

---

## Propósito

Estructurar los equipos de trabajo para definir un ciclo de vida adecuado y desglosar el alcance del proyecto generando estimaciones de tamaño, costo y esfuerzo para construir el plan de valor ganado.

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
- Visión del proyecto
- Plantilla del Plan de valor ganado [(PVG)](https://docs.google.com/spreadsheets/d/1kg_PnTUw6GnHll7XnYxqXmGK9umSope4nmvp1Qzt5Nc/edit?usp=sharing)

---

## Actividades

### 1. Conformar equipos y asignar roles []

Estructurar a los miembros del departamento en equipos y asignar un rol a cada miembro.

#### Actividades

- Identificar el personal disponible.
- Dividir al personal en equipos de desarrollo.
- Asignar el rol por periodo a cada miembro del equipo.
    - [Tabla de asignación de roles por equipo](https://docs.google.com/spreadsheets/d/1_NPndnSGP1HP_AvnrlHOInpGjkef5RldeK2u3mF1J9o/edit?usp=sharing)

---

### 2. Definir el ciclo de vida del proyecto [PP SP 1.3]

Seleccionar el ciclo de vida y definir sus fases e hitos para alinear las estimaciones y entregas.

#### Actividades

- Seleccionar el ciclo de vida a utilizar siguiendo la guía 02.
    - [GUI02 - Elegir ciclo de vida y definir fases](../Guías/GUI02_Guia_Ciclo_de_Vida.md)
- Identificar las fases y entregables dependiendo del ciclo de vida.
- Lista de hitos.

--- 

### 3. Definir el alcance y la estructura de desglose de trabajo [PP SP 1.1]

Definir y estructurar el trabajo del proyecto de manera clara y organizada, traduciendo los objetivos en paquetes de trabajo manejables.

#### Actividades

- Definir el alcance general, identificando historias de usuario, restricciones y componentes externos.
- Identificar los módulos alineados a las fases del ciclo de vida previamente elegido.
- Desglosar cada módulo en entregables específicos.
- Dividir cada entregable en paquetes de trabajo.
- Diagramar las actividades identificadas en un WBS.
    - [GUI01 - ¿Cómo hacer el diagrama WBS?](../Guías/GUI01_Guia_del_WBS.md)
- Utilizar el [PRC01 - Gestión de Requisitos](./PRC01.md) para listar las actividades relacionadas con los requisitos.
- Utilizar el [PRC07 - Desarrollar planes de soporte y plan del proyecto](./PRC07.md) para listar las actividades relacionadas con los planes.

**Nota:** Se puede establecer una visión general del WBS con los hitos y, después de aplicar el PRC01 o PRC07, regresar y adaptar el WBS con las nuevas actividades identificadas.

---

### 4. Estimar el tamaño de las tareas [PP SP 1.2]

Establecer el tamaño y complejidad de las actividades identificadas en el WBS, utilizando una medida estandarizada. Por ejemplo, Story Points.

#### Actividades

- Definir una escala númerica para estimar, por ejemplo, Story Points.
- Acordar la equivalencia de esfuerzo a tiempo por cada Story Point.
    - [GUI03 - Convertir Story Points a tiempo](../Guías/StoryP_Guía.md)
- Pasar las actividades al plan de valor ganado.
    - [Plantilla plan de valor ganado (PVG)](https://docs.google.com/spreadsheets/d/1kg_PnTUw6GnHll7XnYxqXmGK9umSope4nmvp1Qzt5Nc/edit?usp=sharing)
- Registrar en el PVG la complejidad o el tamaño de cada actividad mapeada desde el WBS.

---

### 5. Estimar el esfuerzo y costo de las tareas [PP SP 1.4]

Convertir las estimaciones de tamaño en unidades de costo, basándose en datos históricos para generar gráficas en el plan de valor ganado.

#### Actividades

- Recopilar datos históricos del equipo, por ejemplo, estimaciones previas.
- Agregar valores de mejor caso, caso promedio y peor caso para estimar el costo de cada actividad.

---

## Relación con otros procesos

Este proceso interactúa con:

- PRC01 - Gestión de requisitos: Se utiliza para identificar las actividades de cada fase y agregarlas al WBS y PVG.
- PRC07 - Desarrollar planes de soporte y plan del proyecto: Se utiliza para identificar las actividades relacionadas con los planes y agregarlas al WBS y PVG.

---

## Salidas

- Diagrama WBS
- Documento con roles del equipo
- Plan de valor ganado (PVG)
<details>
    <summary>Selección del ciclo de vida por equipo</summary>

    *Xólotl:* [Ciclo de vida DAD](../../Nuestros%20Proyectos/Xolotl-SOS/Estrategia_De_Desarrollo.md)

    *Ichan:* [Ciclo de vida DAD](../../Nuestros%20Proyectos/Ichan-RCHQ/Artefactos/CicloDeVida.md)

    *Cuitla:* [Ciclo de vida DAD](https://docs.google.com/document/d/1PoOLtvvigEFOjN5cPRgTm9IPhmUepv2hTL0bc0cRz4I/edit?usp=sharing)

    *Huitlacuacles:* [Ciclo de vida DAD](https://docs.google.com/document/d/1g4LW_xqRRZGln0W8PWuqPA4wvrDepeeabZy1R4CxKdA/edit?usp=sharing)

</details>

---

## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     |  Yael Charles  | Fatima Figueroa | Procesos 05 y 22 agrupados en el PRC06 actual, para definir el ciclo de vida de cada equipo, generar un diagrama WBS para plasmar las actividades en un plan de valor ganado con el tamaño y costo por actividad.  | 05/04/2026 |
| 1.1     |  Yael Charles  | Fatima Figueroa | Agregar la relación entre PRC01 en el paso 3 para listar las actividades relacionadas a requisitos en el WBS y PVG | 05/04/2026 |
| 2.0     |  Yael Charles  |  | Adaptar proceso a plantilla después de recibir retroalimentación | 06/04/2026 |