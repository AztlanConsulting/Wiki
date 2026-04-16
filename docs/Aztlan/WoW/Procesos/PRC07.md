---
title: "PRC07 - Desarrollar planes de soporte y plan del proyecto"
---

_v2.0 / PP_

## Terminología

[SRS, PVG](../Glosario.md)

---

## Propósito

Consolidar los planes auxiliares en un único plan del proyecto, revisarlo con los involucrados y obtener un compromiso con el plan, para que la ejecución sea realista y ejecutable.

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
- Estrategia de desarrollo

---

## Actividades

### 1. Definir las fechas de ejecución de cada tarea [PP SP 2.1]

A partir de las estimaciones y de las horas de trabajo realizadas en el [PRC06 - Definir y estimar el alcance del proyecto](./PRC06.md),  se define cuándo se ejecutará cada tarea y cómo se priorizará, estableciendo un cronograma oficial.

#### Actividades

- Utilizar la estrategia de desarrollo para definir las fechas basadas en la duración del sprint.
- Priorizar las tareas utilizando técnicas como [MoSCoW](https://soka.gitlab.io/blog/post/2019-06-05-tecnicas-metodologias-priorizacion/) o [ABC](https://www.lisandraramos.com/blog/como-priorizar-tareas-metodo-abc-productividad).
- Identificar dependencias entre tareas.
- Establecer un periodo y presupuesto de contingencia basado en los riesgos conocidos.
- Rellenar las fechas, plazo de entrega y prioridad a cada actividad en el plan de valor ganado (PVG).
    - [Plantilla del Plan de valor ganado](https://docs.google.com/spreadsheets/d/1kg_PnTUw6GnHll7XnYxqXmGK9umSope4nmvp1Qzt5Nc/edit?usp=sharing)

---

### 2. Clasificar los recursos del proyecto [PP SP 2.4]

Identificar, clasificar y asegurar la disponibilidad de los recursos necesarios para cumplir con el PVG.

#### Actividades

- Identificar los recursos disponibles para el proyecto.
- Identificar el tipo de recursos siguiendo la plantilla del plan de recursos.
    - [Plantilla del plan de recursos](https://docs.google.com/document/d/1zUsvWY1YYdEx6GJwQEo0tRvoFkn-6hSUKVpdAjyJ3-8/edit?usp=sharing)
- Investigar costos asociados con los recursos.
- Generar el plan de recursos plasmando la información obtenida.
- Agregar las actividades identificadas en el PVG, siguiendo el [PRC06 - Definir y estimar el alcance del proyecto](./PRC06.md) .

---

### 3. Analizar las habilidades necesarias y disponibles [PP SP 2.5]

Identificar las habilidades requeridas por el proyecto contra las disponibles en el equipo, creando un plan de capacitación para el personal.

#### Actividades

- Identificar las habilidades técnicas requeridas según el proyecto.
    - [Stack recomendado](https://drive.google.com/file/d/1QLuE3w2M5cw8fnxKyAj_R0WjcVRU65g8/view?usp=sharing)
- Analizar las habilidades técnicas que presenta el equipo.
- Plasmar las habilidades del equipo en la base de skills.
    - [GUI14 - ¿Cómo asignar un nivel de habilidad y rellenar la base de skills?](../Guías/GUI14_Guía_Nivel_De_Skills.md)
- Comparar las necesidades con la base de skills.
- Diseñar el training plan siguiendo la guía.
    - [Plan de entrenamiento](../ArtefactosDepartamentales/Training_Plan.md) 
- Vincular el artefacto generado para capacitar a los miembros del departamento en la base de skills.
- Agregar las actividades identificadas en el PVG, siguiendo el [PRC06 - Definir y estimar el alcance del proyecto](./PRC06.md) .

---

### 4. Identificar los riesgos [PP SP 2.2]

Detectar amenazas, evaluar su impacto y definir estategías claras para mitigar y contener los riesgos.

#### Actividades

- Identificar riesgos y categorizarlos siguiendo las normas que menciona DA.
    - [GUI09 - ¿Cómo identificar y categorizar riesgos?](../Guías/GUI09_Identificar_Riesgos.md)
- Definir la prioridad y criticidad.
- Redactar un plan de mitigación y un plan de contingencia, este último solo si es necesario.
- Llenar la matriz de riesgos por proyecto.
    - [GUI08 - ¿Cómo llenar la matriz de riesgos?](../Guías/GUI08_Llenar_Matriz_de_Riesgos.md)
    - [Plantilla de matriz de riesgos](https://docs.google.com/spreadsheets/d/1kg_PnTUw6GnHll7XnYxqXmGK9umSope4nmvp1Qzt5Nc/edit?usp=sharing)
- Monitorear el riesgo estableciendo un periodo para hacerlo y asignando a un responsable.
- Agregar las actividades identificadas en el PVG, siguiendo el [PRC06 - Definir y estimar el alcance del proyecto](./PRC06.md) .

---

### 5. Planificar el manejo de los datos del proyecto [PP SP 2.3]

Establecer cómo recopilar, almacenar y proteger los datos del proyecto dependiendo de su sensibilidad.

#### Actividades

- Identificar los datos almacenados con el SRS.
- Categorizar el nivel de sensibilidad para cada dato.
- Definir las medidas de seguridad.
- Actualizar el plan de datos en cada modificación a los requisitos de información.
    - [Plantilla del plan de datos](https://docs.google.com/document/d/1w_4ONzbpQEPamMEOWhddCDMD1ZP8oKmpW9PfsBlkZfw/edit?usp=sharing)
- Agregar las actividades identificadas en el PVG, siguiendo el [PRC06 - Definir y estimar el alcance del proyecto](./PRC06.md) .

---

### 6. Involucrar a los stakeholders [PP SP 2.6]

Identificar a las partes interesadas y definir una estrategia para mantenerlos comunicados y comprometidos, formalizando los acuerdos.

#### Actividades

- Identificar stakeholders relevantes.
- Definir canales de comunicación y frecuencia de las reuniones con stakeholders.
    - [Plantilla del plan de comunicación](../Plantillas/PLA11_PlanDeComunicacion.md)
- Informar a los stakeholders cuando se alcance un hito relevante al proyecto.
- Informar a los stakeholders de eventos relacionados al proyecto.
- Generar minutas en cada reunión con stakeholders.
    - [Plantilla de minutas](https://docs.google.com/document/d/17hcieLfLxW1UDGGcC6GaSedEJLbDR9n_mNARWQ0G_xk/edit?usp=sharing)
- Agregar las actividades identificadas en el PVG, siguiendo el [PRC06 - Definir y estimar el alcance del proyecto](./PRC06.md) .

---

### 7. Consolidar y establecer el plan del proyecto [PP SP 2.7]

Unificar todos los planes auxiliares en un único documento.

#### Actividades

- Recopilar el plan de recursos, matriz de riesgos, base de skills, plan de datos, plan de comunicación y plan de valor ganado.
- Agregar las actividades identificadas en el PVG, siguiendo el [PRC06 - Definir y estimar el alcance del proyecto](./PRC06.md).
- Identificar fechas relevantes al proyecto, como prueba de arquitectura, entrega de MVP y MBIs.
- Diseñar un plan de entregas con base en las fechas del PVG.
    - [Plantilla plan de release](https://docs.google.com/spreadsheets/d/1OvhBKdMFTOf42NWBJQ16JBDzmyR9XJnSmRSxJCaLxAk/edit?usp=sharing)

---

### 8. Revisar los planes del proyecto [PP SP 3.1]

Presentar y evaluar los planes para identificar conflictos, riesgos o discrepancias antes de iniciar el trabajo.

#### Actividades

- Preparar los planes auxiliares para su revisión.
- Revisar los planes en equipo para saber si están alineados con el objetivo.
- Llevar una minuta de la sesión.
    - [Plantilla de minutas](https://docs.google.com/document/d/17hcieLfLxW1UDGGcC6GaSedEJLbDR9n_mNARWQ0G_xk/edit?usp=sharing)

---

### 9. Conciliar el trabajo y recursos [PP SP 3.2]

Alinear las horas de trabajo requeridas por las actividades con las horas de disponibilidad real del equipo para asegurar que el plan es factible y evitar una sobrecarga.

Las actividades de este paso pueden realizarse en el Sprint Planning, consultar el [PRC05 - gestión de iteraciones](./PRC05.md), para entender más de esta ceremonia. 

#### Actividades

- Calcular la disponibilidad total del equipo para la iteración.
- Obtener el esfuerzo total para la iteración en el PVG.
- Comparar el esfuerzo total contra la disponibilidad. Si el esfuerzo es mayor a la capacidad, el plan no es factible.
- En caso de no ser factible, realizar ajustes al plan.
- Definir el objetivo del sprint basándose en la disponibilidad total y generar el PVG ajustado.

---

### 10. Negociar y actualizar el plan [PP SP 3.2]

Si el alcance original no se pudo cumplir en el tiempo esperado, se debe negociar con el socio formador y actualizar los artefactos.

#### Actividades

- Exponer al socio formador el motivo del cambio.
- Priorizar los cambios.
- Negociar los ajustes necesarios.
- En caso de que la negociación provoque un cambio, ajustar el PVG para reflejar este cambio. Si ocurre un cambio relacionado con los requisitos consultar el [PRC03 - Manejo de Cambios en Requisitos](./PRC03.md)

---

### 11. Obtener el compromiso formal [PP SP 3.3]

Registrar en un documento el acuerdo de todas las partes interesadas, generando un compromiso formal sobre la versión validada del plan.

#### Actividades

- Redactar el Acta de Compromiso.
    - [Plantilla del Acta de Compromiso](https://docs.google.com/document/d/1U3Xf4u492_j3Labn_bFUKl9OH12SOf43LL1bN_Lk6Vw/edit?usp=sharing)
- Presentar el Acta a los interesados.
- Generar minuta de la reunión.
    - [Plantilla de minutas](https://docs.google.com/document/d/17hcieLfLxW1UDGGcC6GaSedEJLbDR9n_mNARWQ0G_xk/edit?usp=sharing)
- Recabar la firma del socio formador y miembros del equipo.
- Compartir el plan firmado a los involucrados.

---

## Relación con otros procesos

Este proceso interactúa con:

- PRC02 - Obtención de Compromisos sobre los Requisitos: Se relacionan porque ambos buscan un compromiso, la diferencia es que el PRC02 busca el compromiso interno con los requisitos y este busca el compromiso del equipo y socio formador con el plan para cumplir el objetivo. 
- PRC03 - Manejo de Cambios en Requisitos: Cuando se modifica el alcance en el paso 3, se puede llegar a modificar también el alcance de los requisitos, por lo que en ese caso se utilizaría ese proceso.
- PRC05 - Gestión de iteraciones: Se utiliza la ceremonia del Sprint Planning descrito en el PRC05 para identificar si el plan es factible.
- PRC06 - Definir y estimar el alcance del proyecto: Se utilizan de los pasos 3 en adelante para identificar las nuevas actividades que sean necesarias para cumplir con los planes generados en el PRC07 y estimar el esfuerzo, costo. Finalmente establecer las fechas de ejecución de estas actividades para cumplirlas.

---

## Salidas

- Plan de valor ganado actualizado
- Base de skills e inventario de skills
- Matriz de riesgos
- Plan de gestión de datos
- Plan de comunicación
- Plan de release
- Acta de Compromiso con el Socio Formador firmada
- Minutas de sesiones

---

## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Yael Charles Marin    | Fatima Figueroa |  Agrupados los procesos 10, 16, 19, 20, 22, 25 y 27 en uno solo, para unificar los planes auxiliares al proyecto en uno solo. | 05/04/2026 |
| 1.1     | Yael Charles Marin    | Fatima Figueroa | Agregar la relación del PRC06 en el paso 3 | 06/04/2026 |
| 2.0     | Yael Charles Marin    | Manuel Bajos | PRC07 unido con el PRC08 para comprometerse con el plan en el mismo proceso y ahora sigue la plantilla tras recibir retroalimentación | 06/04/2026 |
