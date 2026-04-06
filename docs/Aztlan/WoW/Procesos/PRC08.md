---
title: "PRC08 - Obtener Compromisos sobre el plan"
---

_v2.0 / PP_

## Propósito

Revisar los planes del proyecto con los involucrados, conciliar el esfuerzo estimado con la disponibilidad del equipo y formalizar el compromiso del equipo y socio formador para que el plan sea realista y ejecutable.

---

## Área / Prácticas del CMMI

Área de proceso:

- PP — Project Planning.

Prácticas específicas cubiertas:

- SP 3.1 Revisar los planes que afectan al proyecto.
- SP 3.2 Conciliar los niveles de trabajo y de recursos.
- SP 3.3 Obtener el compromiso con el plan.

---

## Roles involucrados

- Team Leader (TL)  
- Product Owner (PO)  
- Architecture Owner (AO)  
- Team Members (TM)  
- Program Managers (PM), cuando aplique  
- Socio Formador (SF)

---

## Entradas

- Plan de release
- Plan de valor ganado
- Disponibilidad del equipo

---

## Actividades

### 1. Revisar los planes del proyecto

Presentar y evaluar los planes para identificar conflictos, riesgos o discrepancias antes de iniciar el trabajo.

#### Actividades

- Preparar los planes auxiliares para su revisión.
- Revisar los planes en equipo para saber si están alineados con el objetivo.
- Llevar una minuta de la sesión.
- Revisar las métricas de los planes.

#### Evidencia generada

- Minuta de revisión de planes

#### Guías / Plantillas asociadas

- [Plantilla de minutas](https://docs.google.com/document/d/17hcieLfLxW1UDGGcC6GaSedEJLbDR9n_mNARWQ0G_xk/edit?usp=sharing)

---

### 2. Conciliar el trabajo y recursos

Alinear las horas de trabajo requeridas por las actividades con las horas de disponibilidad real del equipo para asegurar que el plan es factible y evitar una sobrecarga.

Las actividades de este paso pueden realizarse en el Sprint Planning, consultar el [PRC05 - gestión de iteraciones](./PRC05.md), para entender más de esta ceremonia. 

#### Actividades

- Calcular la disponibilidad total del equipo para la iteración.
- Obtener el esfuerzo total para la iteración en el PVG.
- Comparar el esfuerzo total contra la disponibilidad. Si el esfuerzo es mayor a la capacidad, el plan no es factible.
- En caso de no ser factible, realizar ajustes al plan.
- Definir el objetivo del sprint basándose en la disponibilidad total.

#### Evidencia generada

- PVG ajustado y objetivo del sprint

---

### 3. Negociar y actualizar el plan

Si el alcance original no se pudo cumplir en el tiempo esperado, se debe negociar con el socio formador y actualizar los artefactos.

#### Actividades

- Exponer al socio formador el motivo del cambio.
- Priorizar los cambios.
- Negociar los ajustes necesarios.
- En caso de que la negociación provoque un cambio, ajustar el PVG para reflejar este cambio. Si ocurre un cambio relacionado con los requisitos consultar el [PRC03 - Manejo de Cambios en Requisitos](./PRC08.md)

#### Evidencia generada

- PVG actualizado
- Minuta de reunión de cambios

#### Guías / Plantillas asociadas

- [Plantilla de minutas](https://docs.google.com/document/d/17hcieLfLxW1UDGGcC6GaSedEJLbDR9n_mNARWQ0G_xk/edit?usp=sharing)

---

### 4. Obtener el compromiso formal

Registrar en un documento el acuerdo de todas las partes interesadas, generando un compromiso formal sobre la versión validada del plan.

#### Actividades

- Redactar el Acta de Compromiso.
- Presentar el Acta a los interesados.
- Recabar la firma del socio formador y miembros del equipo.
- Compartir el plan firmado a los involucrados.

#### Evidencia generada

- Acta de Compromiso firmada

#### Guías / Plantillas asociadas

- [Plantilla de minutas](https://docs.google.com/document/d/17hcieLfLxW1UDGGcC6GaSedEJLbDR9n_mNARWQ0G_xk/edit?usp=sharing)
- [Plantilla del Acta de Compromiso](https://docs.google.com/document/d/1U3Xf4u492_j3Labn_bFUKl9OH12SOf43LL1bN_Lk6Vw/edit?usp=sharing)

---

## Relación con otros procesos

Este proceso interactúa con:

- PRC02 - Obtención de Compromisos sobre los Requisitos: Se relacionan porque ambos buscan un compromiso, la diferencia es que el PRC02 busca el compromiso interno con los requisitos y este busca el compromiso del equipo y socio formador con el plan para cumplir el objetivo. 
- PRC03 - Manejo de Cambios en Requisitos: Cuando se modifica el alcance en el paso 3, se puede llegar a modificar también el alcance de los requisitos, por lo que en ese caso se utilizaría ese proceso.
- PRC07 - Desarrollar planes de soporte y plan del proyecto: Se necesita de la ayuda de los planes generados en este proceso para garantizar que el alcance es el correcto y en el PRC08 se valida que sea factible ese alcance.

---

## Salidas

- PVG actualizado
- Acta de Compromiso con el socio formador firmada
- Minutas de sesiones

---

## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|-------------|--------------|-------------|------|
| 1.0 | Yael Charles Marin  | Fátima Figueroa | Agrupados los procesos 10 y 27 para obtener el compromiso del equipo y socio formador con el plan | 06/04/2026 |
| 1.1 | Yael Charles Marin  | Fátima Figueroa | Agregar relaciones entre procesos a este. | 06/04/2026 |