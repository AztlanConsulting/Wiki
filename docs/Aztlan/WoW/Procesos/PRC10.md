---
title: "PRC09 - Gestión de la Configuración"
---

_v1.0 / Área(s) del CMMI: [CM](../Glosario.md#áreas-del-cmmi)_

## Terminología
*Ver [Glosario](../Glosario.md) para definiciones de CI, Línea Base y Repositorio.*

---

## Propósito
Establecer y mantener la integridad de los productos de trabajo (artefactos y código) de los proyectos, asegurando que cualquier cambio sea rastreable, autorizado y auditado.

---

## Actividades

### 1. Identificación de Elementos de Configuración (CIs) [CM SP 1.1]
Todo proyecto debe considerar como **"intocables"** (bajo control de cambios formal) los siguientes elementos:

| Categoría | Elementos de Configuración (CIs) | Origen (Proceso) |
| :--- | :--- | :--- |
| **Gestión** | WBS, Plan de Valor Ganado (PVG), Matriz de Riesgos | PRC06, PRC07 |
| **Requisitos** | SRS (Software Requirements Specification), RTM (Matriz de Trazabilidad) | PRC01, PRC07 |
| **Técnico** | Código fuente (GitHub), Scripts de Base de Datos, Documentos de Arquitectura | Desarrollo |
| **Procesos** | Wiki del WoW (Procesos, Guías, Políticas) | PRC04 |

### 2. Control de Versiones y Líneas Base [CM SP 1.2, 1.3]
- **Repositorio:** Todo CI debe residir en GitHub.
- **Líneas Base:** Se deben crear `Tags` o `Releases` en GitHub al finalizar hitos (Sprints, Entregas a Socio Formador).
- **Trazabilidad:** Cualquier cambio en un requisito debe reflejarse en el **RTM** (PRC01/03) de cada proyecto, para mantener la integridad bidireccional.

### 3. Control de Cambios [CM SP 2.1, 2.2]
- Todo cambio en código o documentación debe hacerse vía **Pull Request (PR)**.
- El PR debe usar la **Plantilla Departamental** y referenciar el ID del requisito o issue relacionado.
- Los commits deben seguir el estándar: `[TAG] Descripción` (Ej: `[FIX] Corregido error en login`).

### 4. Auditoría de Integridad y Cumplimiento [CM SP 3.1, 3.2]

El Program Manager (PM) verificará periódicamente que el equipo siga los estándares.

#### Actividades
1. Realizar la auditoría utilizando la [Checklist de Auditoría de CM](../Plantillas/PLA04.md).
2. **Registro de Resultados:** El resultado de la auditoría debe guardarse en la carpeta `Auditorias/` dentro del directorio del proyecto correspondiente en la Wiki.
3. **Seguimiento:** En caso de hallazgos (Estado "N"), el TL deberá de organizar un plan para corregir la inconsistencia en el repositorio o artefacto.

#### Evidencia generada
- Reporte de Auditoría de CM (ubicado en la carpeta del proyecto).

---

## Salidas
- Repositorio actualizado.
- Líneas Base (Tags).
- RTM actualizada.
- Reporte de Auditoría de CM.

---

## Control de versiones
| Version | Creado por: | Auditado por: | Descripción | Fecha |
| :--- | :--- | :--- | :--- | :--- |
| 1.0 | Mauricio Olguín Sánchez | | Creación del proceso. | 12/04/2026 |