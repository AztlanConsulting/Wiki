---
title: "PRC01 - Gestión de Requisitos"
---

_v2.0 / REQM_

## Terminología

[Requisito](../Glosario.md)

---

## Propósito

Gestionar los requisitos del proyecto durante todo su ciclo de vida, asegurando su comprensión, compromiso, trazabilidad, control de cambios y consistencia con los productos de trabajo del proyecto.

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

---

## Actividades

### 1. Comprender los requisitos [REQM PP 1.1]

El equipo recopila y analiza las necesidades del cliente y stakeholders para asegurar una comprensión clara de los requisitos.

#### Actividades

- Recopilar las necesidades y expectativas del cliente.
- Analizar y documentar los requisitos (por ejemplo, Historias de Usuario, requisitos no funcionales o restricciones) en PVG y SRS. 
    - [Guía para redacción de historias de usuario](../Guías/GUI21). 
- Validar que los requisitos sean claros, completos y comprendidos.
- Registrar acuerdos y aclaraciones relevantes en minutas.
    - [Plantilla de minutas](https://docs.google.com/document/d/17hcieLfLxW1UDGGcC6GaSedEJLbDR9n_mNARWQ0G_xk/edit?tab=t.0#heading=h.we8033ee7kx9)

---

### 2. Preparar los requisitos para compromiso [REQM PP 1.2]

Antes de implementar un requisito, se debe evaluar su viabilidad y alineación con la capacidad del equipo.

#### Actividades

- Verificar que el requisito cumpla con la Definición de Ready.
    <details>
    <summary>Definición de Ready de los proyectos</summary>

    **Xólotl:** [Definición de Ready](https://docs.google.com/document/d/1aUp_aEt8Brbl4hBzX4htkx22cTn_omM3f3oPox9C2xE/edit?tab=t.0#heading=h.cxh5gryiw5ha)

    **Ichan:** [Definición de Ready](https://docs.google.com/document/d/1YigM1ULQ2WP2nNX6UHSlCaimVlBM3STtDPfeNf5W1U0/edit?tab=t.a06qi1hokg4e)

    **Cuitla:** [Definición de Ready](https://docs.google.com/document/d/1zMmDlI-PBrVlylfnvHHa0fcPMwn4JKj44Rahtz5Z25Y/edit?tab=t.0#heading=h.67d0lq8w136a)

    **Huitlacuacles:** [Definición de Ready](https://docs.google.com/document/d/1jmwTxEYCs_zStUkJUmeKPSe3aN0P7a7hKly7FV_06n8/edit?tab=t.0#heading=h.67d0lq8w136a)

    </details>
- Revisar dependencias y riesgos.
- Evaluar impacto en alcance, cronograma y recursos.
    - [Plantilla de estimación](../Plantillas/plantilla_StoryP.md)
- Refinar requisitos cuando sea necesario (por ejemplo, dividir un requisito grande en partes más pequeñas).

---

### 3. Obtener compromiso sobre los requisitos [REQM PP 1.2]

Cuando un requisito esté listo para implementación, se deberá ejecutar el proceso:

[PRC02 — Obtención de Compromisos sobre los Requisitos](../Procesos/PRC02.md)

---

### 4. Gestionar cambios en los requisitos [REQM PP 1.3]

Cuando se identifique una modificación, nueva necesidad o inconsistencia, se deberá ejecutar el proceso:

[PRC03 — Manejo de Cambios en Requisitos](../Procesos/PRC03.md)

---

### 5. Mantener la trazabilidad de los requisitos [REQM PP 1.4]

Se debe asegurar que cada requisito esté vinculado a sus productos de trabajo relacionados.

#### Actividades

- Registrar la relación entre requisitos (por ejemplo, Historias de Usuario) y los productos de trabajo relacionados (diseño, código y pruebas).
- Actualizar la Matriz de Trazabilidad de Requisitos (RTM).
    - [Plantilla de matriz de trazabilidad (RTM)](https://docs.google.com/spreadsheets/d/1yY1daMZ_oXeu3huJ-2UJ9qUKr4hWooPbJ5toUc0xc0U/edit?gid=0#gid=0)

---

### 6. Identificar inconsistencias [REQM PP 1.5]

Se debe verificar de manera estructurada y periódica que los productos de trabajo (diagramas, wireframes, código, casos de prueba) mantengan total consistencia e integridad respecto a las Historias de Usuario (HU) y requisitos a lo largo de todas las fases..

#### Actividades

- Revisar consistencia entre requisitos y artefactos.
- Registrar inconsistencias detectadas.
    - [Plantilla de registro de inconsistencias](https://docs.google.com/spreadsheets/d/1yY1daMZ_oXeu3huJ-2UJ9qUKr4hWooPbJ5toUc0xc0U/edit?gid=0#gid=0)
- Iniciar una solicitud de cambio cuando sea necesario.

---

## Relación con otros procesos

Este proceso interactúa con:

- PRC02 — Obtención de Compromisos sobre los Requisitos
- PRC03 — Manejo de cambios en requisitos

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
| 2.1     | Fatima Figueroa |  |  Actualización de formato | 15/04/2026 |