---
title: "PRC05 - Gestión de Iteraciones"
---

_v2.0 / PP_

## Terminología

Iteración / Sprint:

Periodo de tiempo definido en el cual el equipo planifica, ejecuta y entrega un conjunto de elementos de trabajo.

Ceremonia:

Reunión estructurada que se realiza durante la iteración con un propósito específico, como planificar el trabajo, dar seguimiento al progreso o identificar mejoras.

Las ceremonias de la iteración incluyen:

- Sprint Planning
- Backlog Grooming
- Daily
- Reunión de Coordinación por Roles
- Sprint Retrospective

---

## Propósito

Gestionar la planificación, ejecución, seguimiento y mejora de cada iteración del proyecto, asegurando que el trabajo se realice conforme a los planes establecidos, que se monitoree el progreso del equipo y que se implementen acciones de mejora continua.

---

## Área / Prácticas del CMMI

Área de proceso:

PP — Project Planning

Prácticas específicas cubiertas:

- PP SP 1.2 — Establecer las estimaciones de los atributos de los productos de trabajo y de las tareas
- PP SP 2.1 — Establecer el presupuesto y el calendario
- PP SP 2.2 — Identificar los riesgos del proyecto
- PP SP 2.7 — Establecer el plan de proyecto
- PP SP 3.1 — Revisar los planes que afectan al proyecto
- PP SP 3.2 — Conciliar los niveles de trabajo y de recursos
- PP SP 3.3 — Obtener el compromiso con el plan

---

## Roles involucrados

- Team Leader (TL)  
- Product Owner (PO)  
- Architecture Owner (AO)  
- Team Members (TM)  
- Program Managers (PM), cuando aplique  

---

## Entradas

- Backlog del proyecto (PVG)
- WBS del proyecto
- Velocidad del equipo
- Definición de DONE
- Registro de iteraciones anteriores
- Matriz de riesgos
- Plan del proyecto
- Objetivos del proyecto

---

## Actividades

### 1. Preparar los elementos de trabajo de la iteración

Ceremonia asociada: **Backlog Grooming**

Momento de ejecución: Antes del inicio de la iteración y durante la iteración cuando sea necesario.

Frecuencia: Se realiza **2 veces por Sprint** o cuando se identifique la necesidad de preparar nuevos elementos de trabajo.

El equipo asegura que los elementos de trabajo estén correctamente definidos, estimados y listos para su ejecución.

#### Actividades

- Refinar los elementos del backlog cuando sea necesario.
- Dividir tareas grandes en actividades más pequeñas.
- Estimar los elementos de trabajo.
- Revisar historias similares previamente implementadas para apoyar la estimación.
- Priorizar los elementos de trabajo.
- Verificar dependencias y riesgos asociados.
- Verificar que los elementos cumplan con la Definición de Ready.

#### Evidencia generada

- Backlog actualizado
- Elementos de trabajo refinados y estimados
- Registro de priorización

#### Guías / Plantillas asociadas

- [¿Cómo realizar el Backlog Grooming?](../Guías/GUI17)
<details>
<summary>Definición de Ready de los proyectos</summary>

**Xólotl:** [Definición de Ready](https://docs.google.com/document/d/1aUp_aEt8Brbl4hBzX4htkx22cTn_omM3f3oPox9C2xE/edit?tab=t.0#heading=h.cxh5gryiw5ha)

**Ichan:** [Definición de Ready](https://docs.google.com/document/d/1YigM1ULQ2WP2nNX6UHSlCaimVlBM3STtDPfeNf5W1U0/edit?tab=t.a06qi1hokg4e)

**Cuitla:** [Definición de Ready](https://docs.google.com/document/d/1zMmDlI-PBrVlylfnvHHa0fcPMwn4JKj44Rahtz5Z25Y/edit?tab=t.0#heading=h.67d0lq8w136a)

**Huitlacuacles:** [Definición de Ready](https://docs.google.com/document/d/1jmwTxEYCs_zStUkJUmeKPSe3aN0P7a7hKly7FV_06n8/edit?tab=t.0#heading=h.67d0lq8w136a)

</details>

- [Plantilla de estimación de horas](../Plantillas/plantilla_Horas.md)
- [¿Cómo convierto mi escala de Story Points a Tiempo?](.../Guías/StoryP_Guía.md)

---

### 2. Planificar la iteración

Ceremonia asociada: **Sprint Planning**

Momento de ejecución: Al inicio de cada iteración.

Frecuencia: Se realiza **1 vez por Sprint**.

El equipo define el objetivo del Sprint y selecciona los elementos de trabajo previamente preparados para su ejecución.

#### Actividades

- Definir el objetivo del Sprint considerando las prioridades del proyecto.
- Revisar el backlog disponible.
- Seleccionar los elementos de trabajo que se ejecutarán durante la iteración.
- Verificar que los elementos seleccionados estén estimados y listos para su ejecución.
- Verificar que el plan sea realista de acuerdo con la capacidad del equipo.
- Confirmar el compromiso del equipo con el trabajo del Sprint.

#### Evidencia generada

- Objetivo del Sprint definido
- Sprint Backlog comprometido
- Registro de planificación de la iteración

#### Guías / Plantillas asociadas

- [¿Cómo realizar el Sprint Planning?](../Guías/GUI16)

---

### 3. Dar seguimiento al trabajo durante la iteración

Ceremonia asociada: **Daily**

Momento de ejecución: Durante toda la iteración.

Frecuencia: Se realiza **diariamente**.

El equipo monitorea el progreso del trabajo y gestiona impedimentos que puedan afectar el cumplimiento del plan.

#### Actividades

- Revisar el progreso de las tareas asignadas.
- Identificar bloqueos, dependencias o riesgos.
- Reportar avances del trabajo.
- Identificar desviaciones respecto al plan.
- Definir acciones para resolver impedimentos.

#### Evidencia generada

- Registro de seguimiento diario
- Lista de impedimentos identificados
- Actualización del Sprint Backlog

#### Guías / Plantillas asociadas

- [¿Cómo realizar la Daily?](../Guías/GUI18)
- [Plantilla de Daily](../Plantillas/Plantilla_Daily.md) 

---

### 4. Coordinar el estado del proyecto entre roles

Ceremonia asociada: **Reunión de Coordinación por Roles**

Momento de ejecución: Durante la iteración.

Frecuencia: Se realiza **2 veces por Sprint**.

El equipo de liderazgo revisa el estado del proyecto para asegurar la alineación entre los roles y el cumplimiento de los objetivos del proyecto.

#### Actividades

- Revisar el progreso del proyecto.
- Analizar desviaciones entre el plan y el progreso real.
- Revisar riesgos identificados.
- Coordinar decisiones entre los roles de liderazgo.
- Definir acciones correctivas cuando sea necesario.
- Alinear prioridades entre los roles del proyecto.

#### Evidencia generada

- Minuta de reunión de coordinación por roles
- Lista de acuerdos
- Actualización de riesgos

#### Guías / Plantillas asociadas

- [¿Cómo realizar la Reunión de Coordinación por Roles?](../Guías/GUI20)
- [Plantilla de minuta](https://docs.google.com/document/d/17hcieLfLxW1UDGGcC6GaSedEJLbDR9n_mNARWQ0G_xk/edit?usp=drive_link)

---

### 5. Evaluar y mejorar la iteración

Ceremonia asociada: **Sprint Retrospective**

Momento de ejecución: Al finalizar la iteración.

Frecuencia: Se realiza **1 vez por Sprint**.

El equipo evalúa los resultados obtenidos y define acciones de mejora para la siguiente iteración.

#### Actividades

- Revisar el cumplimiento del objetivo del Sprint.
- Analizar el desempeño del equipo.
- Identificar oportunidades de mejora.
- Definir acciones de mejora para la siguiente iteración.
- Asignar responsables para implementar las acciones de mejora.

#### Evidencia generada

- Registro de Sprint Retrospective
- Lista de acciones de mejora

#### Guías / Plantillas asociadas

- [¿Cómo realizar el Sprint Retrospective?](../Guías/GUI19)
- [Plantilla de Retrospective](https://www.canva.com/design/DAHCp2M3VaY/0hL_ErZC594xHfvOum1fGw/edit?utm_content=DAHCp2M3VaY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)

---

### 6. Documentar los resultados de la iteración

Momento de ejecución: Durante y al finalizar la iteración.

Se deben registrar los acuerdos, avances, riesgos y acciones definidas durante la iteración.

#### Actividades

- Registrar los acuerdos y decisiones tomadas durante la iteración.
- Actualizar los artefactos del proyecto.
- Almacenar los registros en la carpeta correspondiente del proyecto.

#### Evidencia generada

- Registros de la iteración
- Artefactos del proyecto actualizados

---

## Consideraciones para la planificación de iteraciones

- Se recomienda que la duración del Sprint sea consistente entre iteraciones.
- Se recomienda definir fechas de inicio y fin del Sprint desde el inicio del proyecto.
- Se recomienda mantener una frecuencia estable de ceremonias durante el proyecto.
- **No se recomienda iniciar un Sprint en lunes o viernes**, ya que estos días suelen verse afectados por actividades administrativas, ausencias o menor disponibilidad del equipo, lo que puede impactar negativamente el inicio de la iteración.
- Se recomienda iniciar el Sprint en días intermedios de la semana para facilitar la planificación, la disponibilidad del equipo y la continuidad del trabajo.

---

## Relación con otros procesos
Este proceso interactúa con los siguientes procesos del sistema cuando se requiere gestionar requisitos durante la planificación y ejecución de una iteración:

- PRC01 — Gestión de Requisitos: Se ejecuta cuando los requisitos son revisados, preparados o utilizados durante la planificación y ejecución de la iteración.

- PRC02 — Obtención de Compromiso sobre los Requisitos: Se ejecuta cuando el equipo decide comprometerse a implementar un requisito dentro de una iteración.

- PRC03 — Manejo de Cambios en Requisitos: Se ejecuta cuando se identifica un cambio en un requisito durante la iteración que requiere evaluación y control.

---

## Salidas

- Sprint Backlog actualizado  
- Registro de seguimiento de la iteración  
- Lista de impedimentos identificados  
- Acciones correctivas definidas  
- Acciones de mejora definidas  
- Registros de la iteración  

---

## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|-------------|------|
| 2.0 | Fatima Figueroa | Yael Charles | Reestructuración de PRC13, PRC11, PRC07, PRC14, PRC15 | 04/04/2026 |
| 2.1 | Fatima Figueroa | Yael Charles | Actualización de los links | 06/04/2026|