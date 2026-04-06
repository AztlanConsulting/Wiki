---
title: "PRC07 - Desarrollar planes de soporte y plan del proyecto"
---

_v2.0 / PP_

## Terminología

Software Requirements Specification (SRS):

Documento formal y detallado que define qué debe hacer un sistema de software y cómo debe comportarse, estableciendo los distintos tipos de requisitos necesarios para su desarrollo.

---

## Propósito

Desarrollar los planes auxiliares en un único plan del proyecto para guiar la ejecución y control del proyecto.

---

## Área / Prácticas del CMMI

Área de proceso:

- PP — Project Planning.

Prácticas específicas cubiertas:

- SP 2.1 Establecer el presupuesto y el calendario.
- SP 2.2 Identificar los riesgos del proyecto.
- SP 2.3 Planificar la gestión de los datos.
- SP 2.4 Planificar los recursos del proyecto.
- SP 2.5 Planificar el conocimiento y las habilidades necesarias.
- SP 2.6 Planificar la involucración de las partes interesadas.
- SP 2.7 Establecer el plan de proyecto.

---

## Roles involucrados

- Team Leader (TL)  
- Product Owner (PO)  
- Architecture Owner (AO)  
- Team Members (TM)  
- Program Managers (PM), cuando aplique  
- Stakeholders

---

## Entradas

- Lista de roles del equipo
- Software Requirements Specification (SRS)
- Plan de valor ganado (PVG)
- Horas de trabajo diarias por miembro
- Estrategia de desarrollo
- Architecture Starter Pack (ASP)

---

## Actividades

### 1. Definir las fechas de ejecución de cada tarea

A partir de las estimaciones y de las horas de trabajo se define cuándo se ejecutará cada tarea y cómo se priorizará, estableciendo un cronograma oficial.

#### Actividades

- Utilizar la estrategia de desarrollo para definir las fechas basadas en la duración del sprint.
- Priorizar las tareas utilizando técnicas como MoSCoW o ABC.
- Identificar dependencias entre tareas.
- Establecer un periodo y presupuesto de contingencia basado en los riesgos conocidos.
- Rellenar las fechas, plazo de entrega y prioridad a cada actividad en el plan de valor ganado (PVG).

#### Evidencia generada

- PVG actualizado con fechas, prioridad y plazos de entrega

#### Guías / Plantillas asociadas

- Plantilla del Plan de valor ganado [(PVG)](https://docs.google.com/spreadsheets/d/1kg_PnTUw6GnHll7XnYxqXmGK9umSope4nmvp1Qzt5Nc/edit?usp=sharing)

---

### 2. Clasificar los recursos del proyecto

Identificar, clasificar y asegurar la disponibilidad de los recursos necesarios para cumplir con el PVG.

#### Actividades

- Identificar los recursos disponibles para el proyecto.
- Identificar el tipo de recursos siguiendo la plantilla del plan de recursos.
- Investigar costos asociados con los recursos.
- Generar el plan de recursos plasmando la información obtenida.

#### Evidencia generada

- Plan de recursos

#### Guías / Plantillas asociadas

- [Plantilla del plan de recursos](https://docs.google.com/document/d/1zUsvWY1YYdEx6GJwQEo0tRvoFkn-6hSUKVpdAjyJ3-8/edit?usp=sharing)

---

### 3. Analizar las habilidades necesarias y disponibles

Identificar las habilidades requeridas por el proyecto contra las disponibles en el equipo, creando un plan de capacitación para capacitar al personal.

#### Actividades

- Desglosar las habilidades técnicas requeridas según el proyecto.
- Analizar las habilidades técnicas que presenta el equipo.
- Plasmar las habilidades del equipo en la base de skills.
- Comparar las necesidades con la base de skills.
- Diseñar el training plan siguiendo la guía.
- Vincular el artefacto generado para capacitar a los miembros del departamento en la base de skills.
- Seguir el [PRC06 - Definir y estimar el alcance del proyecto](./PRC06.md) como ayuda para seguir las actividades del paso 3.

#### Evidencia generada

- Base de skills
- Inventario de skills por proyecto

#### Guías / Plantillas asociadas

- [Plan de entrenamiento](../ArtefactosDepartamentales/Training_Plan.md) 
- [GUI14 - ¿Cómo asignar un nivel de habilidad y rellenar la base de skills?](../Guías/GUI14_Guía_Nivel_De_Skills.md)
- [Stack recomendado](https://drive.google.com/file/d/1QLuE3w2M5cw8fnxKyAj_R0WjcVRU65g8/view?usp=sharing)

---

### 4. Gestionar los riesgos

Detectar amenazas, evaluar su impacto y definir estategías claras para mitigar y contener los riesgos.

#### Actividades

- Identificar riesgos y categorizarlos siguiendo las normas que menciona DA.
- Definir la prioridad y criticidad.
- Redactar un plan de mitigación y un plan de contingencia solo si es necesario.
- Monitorear el riesgo estableciendo un periodo para hacerlo y asignando a un responsable.

#### Evidencia generada

- Plan de mitigación y contingencia (este último si aplica)
- Matriz de riesgos

#### Guías / Plantillas asociadas

- [GUI08 - ¿Cómo llenar la matriz de riesgos?](../Guías/GUI08_Llenar_Matriz_de_Riesgos.md)
- [GUI09 - ¿Cómo identificar y categorizar riesgos?](../Guías/GUI09_Identificar_Riesgos.md)
- [Plantilla de matriz de riesgos](https://docs.google.com/spreadsheets/d/1kg_PnTUw6GnHll7XnYxqXmGK9umSope4nmvp1Qzt5Nc/edit?usp=sharing)
---

### 5. Gestionar los datos del proyecto

Establecer cómo recopilar, almacenar y proteger los datos del proyecto dependiendo de su sensibilidad.

#### Actividades

- Identificar los datos almacenados con el SRS.
- Categorizar el nivel de sensibilidad para cada dato.
- Definir las medidas de seguridad.
- Actualizar el plan de datos en cada modificación a los requisitos de información.

#### Evidencia generada

- Plan de gestión de datos

#### Guías / Plantillas asociadas

- [Plantilla del plan de datos](https://docs.google.com/document/d/1w_4ONzbpQEPamMEOWhddCDMD1ZP8oKmpW9PfsBlkZfw/edit?usp=sharing)

---

### 6. Gestionar la comunicación con stakeholders

Identificar a las partes interesadas y definir una estrategia para mantenerlos comunicados y comprometidos, formalizando los acuerdos.

#### Actividades

- Identificar stakeholders relevantes.
- Definir canales de comunicación.
- Definir la frecuencia de las reuniones con stakeholders.
- Informar a los stakeholders cuando se alcance un hito relevante al proyecto.
- Informar a los stakeholders de eventos relacionados al proyecto.
- Generar minutas en cada reunión con stakeholders.

#### Evidencia generada

- Plan de comunicación
- Minutas por reunión

#### Guías / Plantillas asociadas

- [Plantilla de minutas](https://docs.google.com/document/d/17hcieLfLxW1UDGGcC6GaSedEJLbDR9n_mNARWQ0G_xk/edit?usp=sharing)
- [Plantilla del plan de comunicación](../Plantillas/PLA11_PlanDeComunicacion.md)

---

### 7. Consolidar y establecer el plan del proyecto

Unificar todos los planes auxiliares en un único documento.

#### Actividades

- Recopilar el plan de recursos, matriz de riesgos, base de skills, plan de datos, plan de comunicación y plan de valor ganado.
- Aplicar el PRC06 para desglosar actividades de estos planes en el WBS y PVG.
- Diseñar un plan de entregas con base en las fechas del PVG.
- Identificar fechas relevantes al proyecto.

#### Evidencia generada

- PVG actualizado con nuevas actividades
- Plan de release

#### Guías / Plantillas asociadas

- [Plantilla de minutas](https://docs.google.com/document/d/17hcieLfLxW1UDGGcC6GaSedEJLbDR9n_mNARWQ0G_xk/edit?usp=sharing)
- [Plantilla del plan de comunicación](../Plantillas/PLA11_PlanDeComunicacion.md)
- [Plantilla plan de release](https://docs.google.com/spreadsheets/d/1OvhBKdMFTOf42NWBJQ16JBDzmyR9XJnSmRSxJCaLxAk/edit?usp=sharing)

---

## Relación con otros procesos

Este proceso interactúa con:

- PRC06 - Definir y estimar el alcance del proyecto: Se utilizan de los pasos 3 en adelante para identificar las nuevas actividades que sean necesarias para cumplir con los planes generados en el PRC07 y estimar el esfuerzo, costo. Finalmente establecer las fechas de ejecución de estas actividades para cumplirlas.

---

## Salidas

- Plan de valor ganado actualizado
- Base de skills
- Matriz de riesgos
- Plan de gestión de datos
- Plan de comunicación
- Plan de release

---

## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Yael Charles Marin    | Fatima Figueroa |  Agrupados los procesos 10, 16, 19, 20, 22, 25 y 27 en uno solo, para unificar los planes auxiliares al proyecto en uno solo. | 05/04/2026 |
| 1.1     | Yael Charles Marin    | Fatima Figueroa | Agregar la relación del PRC06 en el paso 3 | 06/04/2026 |
