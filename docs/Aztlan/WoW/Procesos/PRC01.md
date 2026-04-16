---
title: "PRC01 - Gestión de Requisitos"
---

_v2.0 / REQM_

## Terminología

Requisito:

Condición o capacidad que debe cumplir el sistema.

En este proyecto, los requisitos pueden representarse mediante:

- Historias de Usuario (HU)
- Requisitos no funcionales
- Restricciones del sistema

Las Historias de Usuario se gestionan como requisitos dentro del proceso de Gestión de Requisitos.

---

## Propósito

Gestionar los requisitos del proyecto durante todo su ciclo de vida, asegurando su comprensión, compromiso, trazabilidad, control de cambios y consistencia con los productos de trabajo del proyecto.

---

## Área / Prácticas del CMMI

Área de proceso:

REQM — Gestión de Requisitos

Prácticas específicas cubiertas:

- REQM SP 1.1 — Comprender los requisitos  
- REQM SP 1.2 — Obtener compromiso sobre los requisitos  
- REQM SP 1.3 — Gestionar cambios en los requisitos  
- REQM SP 1.4 — Mantener la trazabilidad bidireccional de los requisitos  
- REQM SP 1.5 — Asegurar el alineamiento entre el trabajo del proyecto y los
requisitos

---

## Roles involucrados

- Product Owner
- Program Managers
- Team Members
- Stakeholders

---

## Entradas

- Necesidades del cliente
- Alcance del proyecto
- Acuerdos del proyecto
- Stakeholders identificados
- Solicitudes de cambio (cuando existan)
- Productos de trabajo existentes (diseño, código, pruebas)

---

## Actividades

### 1. Comprender los requisitos

El equipo recopila y analiza las necesidades del cliente y stakeholders para asegurar una comprensión clara de los requisitos.

#### Actividades

- Recopilar las necesidades y expectativas del cliente.
- Analizar y documentar los requisitos (por ejemplo, Historias de Usuario, requisitos no funcionales o restricciones) en PVG y SRS [LINK]. 
- Validar que los requisitos sean claros, completos y comprendidos.
- Registrar acuerdos y aclaraciones relevantes [LINK].

#### Evidencia generada

- Requisitos documentados (por ejemplo, PVG de Historias de Usuario o documento SRS)
- Minutas de reuniones
- Registro de acuerdos

#### Guías / Plantillas asociadas

- Guía para redacción de historias de usuario [LINK]. 

---

### 2. Preparar los requisitos para compromiso

Antes de implementar un requisito, se debe evaluar su viabilidad y alineación con la capacidad del equipo.

#### Actividades

- Verificar que el requisito cumpla con la Definición de Ready [LINK].
- Revisar dependencias y riesgos [LINK].
- Evaluar impacto en alcance, cronograma y recursos.
- Refinar requisitos cuando sea necesario (por ejemplo, dividir un requisito grande en partes más pequeñas).

#### Evidencia generada

- Registro de evaluación del requisito
- Registro de riesgos identificados
- Estimación preliminar

#### Guías / Plantillas asociadas

- Definición de Ready
- Plantilla de estimación [LINK]
- Guía de análisis de impacto

---

### 3. Obtener compromiso sobre los requisitos

Cuando un requisito esté listo para implementación, se deberá ejecutar el proceso:

PRC02 — Obtención de Compromisos sobre los Requisitos [LINK].

---

### 4. Gestionar cambios en los requisitos

Cuando se identifique una modificación, nueva necesidad o inconsistencia, se deberá ejecutar el proceso:

PRC03 — Manejo de Cambios en Requisitos [LINK].

---

### 5. Mantener la trazabilidad de los requisitos

Se debe asegurar que cada requisito esté vinculado a sus productos de trabajo relacionados.

#### Actividades

- Registrar la relación entre requisitos (por ejemplo, Historias de Usuario) y los productos de trabajo relacionados (diseño, código y pruebas).
- Actualizar la Matriz de Trazabilidad de Requisitos (RTM).

#### Evidencia generada

- Matriz de trazabilidad actualizada 

#### Guías / Plantillas asociadas

- Plantilla de matriz de trazabilidad (RTM) [LINK].

---

### 6. Identificar inconsistencias

Se debe verificar de manera estructurada y periódica que los productos de trabajo (diagramas, wireframes, código, casos de prueba) mantengan total consistencia e integridad respecto a las Historias de Usuario (HU) y requisitos a lo largo de todas las fases..

#### Actividades
- Definir el momento de la revisión
- Validar consistencia entre requisitos y artefactos.
- Registrar inconsistencias detectadas en el Defect Log.
- Iniciar una solicitud de cambio cuando sea necesario.

#### Evidencia generada

- Registro de inconsistencias
- Solicitud de cambio

#### Guías / Plantillas asociadas

- Plantilla de registro de inconsistencias (Defect Log) [LINK](https://docs.google.com/spreadsheets/d/1_2YngOnj-QUZhHwwklvRyDOQ2DP4rZKt3DlteP2S-k8/edit?usp=drive_link).
- GUI21 - ¿Cómo usar el defect log? [LINK](docs\Aztlan\WoW\Guías\GUI21.md).

---

## Relación con otros procesos

Este proceso interactúa con:

- PRC02 — Obtención de Compromisos sobre los Requisitos
- PRC03 — Manejo de cambios en requisitos
- Proceso de planificación del proyecto (PP)
- Proceso de aseguramiento de calidad (QA)
- Proceso de gestión de configuración (CM)

---

## Salidas

- Requisitos comprendidos y documentados
- Requisitos comprometidos
- RTM actualizada
- Cambios controlados
- Registro de inconsistencias

---

## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 2.0     | Fatima Figueroa |  |  Reestructuración de PRC08, PRC09, PRC17, PRC18, PRC24 | 04/04/2026 |