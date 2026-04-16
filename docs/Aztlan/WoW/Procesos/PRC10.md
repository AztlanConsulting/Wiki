---
title: "PRC10 - Gestión de la Configuración"
---

_v1.0 / Área(s) del CMMI: [CM](../Glosario.md#áreas-del-cmmi)_

## Terminología
*Ver [Glosario](../Glosario.md) para definiciones de CI, Línea Base y Repositorio.*

## Documentos relacionados
- [PLA10 - Política de Gestión de la Configuración](../Politicas/PLA10.md)
- [MAT01 - Matriz de Configuración](../Plantillas/MAT01.md)
- [Matriz de configuración - Google Sheet](https://docs.google.com/spreadsheets/d/1IMX2BoLu8kWLdGDLpVG24cqgjZhmaDwYwXS06NG_oJk/edit?gid=0#gid=0)
- [GUI22 - Convención de Versionado y Releases](../Guías/GUI22_Convencion_de_Versionado_y_Releases.md)

---

## Propósito
Establecer y mantener la integridad de los productos de trabajo (artefactos y código) de los proyectos, asegurando que cualquier cambio sea rastreable, autorizado y auditado, conforme a la [Política de Gestión de la Configuración](../Politicas/PLA10.md).

---

## Estados y niveles de control

Los Elementos de Configuración deberán manejar dos atributos distintos:

- **Estado:** indica en qué etapa de su ciclo de vida se encuentra el CI.
- **Nivel de control:** indica cómo puede ser modificado o liberado el CI.

### Estados permitidos
- **En revisión:** el CI aún está en validación, corrección o evaluación.
- **Vigente:** el CI ha sido aprobado y es la versión válida para uso.
- **Obsoleto:** el CI fue reemplazado o retirado de uso.

### Niveles de control permitidos
- **Dinámico:** el CI está en construcción o edición activa.
- **Controlado:** el CI está bajo cambios formales y aprobados.
- **Estático:** el CI está congelado como referencia, release o baseline.

### Relación práctica entre estado y nivel de control
- Un CI en **En revisión** normalmente estará en nivel **Dinámico**.
- Un CI **Vigente** normalmente estará en nivel **Controlado** o **Estático**.
- Un CI **Obsoleto** normalmente estará en nivel **Estático**.

### Regla operativa
El Estado y el Nivel de control deben registrarse por separado en la matriz de configuración oficial.

---

## Actividades

### 1. Identificación de Elementos de Configuración (CIs) [CM SP 1.1]
Todo proyecto debe considerar como **"intocables"** (bajo control de cambios formal) los siguientes elementos:

| Categoría | Elementos de Configuración (CIs) | Origen (Proceso) |
| :--- | :--- | :--- |
| **Gestión** | WBS, Plan de Valor Ganado (PVG), Matriz de Riesgos | PRC06, PRC07 |
| **Requisitos** | SRS (Software Requirements Specification), RTM (Matriz de Trazabilidad) | PRC01, PRC07 |
| **Técnico** | Código fuente (GitHub), Scripts de Base de Datos, Documentos de Arquitectura | Desarrollo |
| **Artefactos** | Wiki del WoW (Procesos, Guías, Políticas) | PRC04 |

Cada CI identificado deberá registrarse y mantenerse actualizado en la matriz oficial de configuración correspondiente.

### 2. Control de Versiones y Líneas Base [CM SP 1.2, 1.3]

Todo cambio relevante en un CI deberá reflejarse en la matriz de configuración oficial, incluyendo su versión, estado, nivel de control y línea base asociada.

- **Repositorio:** Todo CI debe residir en GitHub o en el repositorio oficial definido para el proyecto.
- **Líneas Base:** Se deben crear `Tags` o `Releases` en GitHub al finalizar hitos (Sprints, Entregas a Socio Formador).
- **Trazabilidad:** Cualquier cambio en un requisito debe reflejarse en el **RTM** (PRC01/03) de cada proyecto, para mantener la integridad bidireccional.
- **Registro:** Toda línea base deberá registrarse en la [Matriz de Configuración](https://docs.google.com/spreadsheets/d/1IMX2BoLu8kWLdGDLpVG24cqgjZhmaDwYwXS06NG_oJk/edit?gid=246843336#gid=246843336).

La matriz de configuración deberá registrar, para cada CI:

- el **Estado**,
- el **Nivel de control**,
- la **versión vigente**,
- y la **línea base, tag o release** correspondiente.

Cuando un CI sea aprobado como versión oficial, deberá cambiar su Estado a **Vigente**.  
Cuando un CI sea reemplazado por una nueva versión, deberá cambiar su Estado a **Obsoleto**.  
Cuando un CI esté en elaboración o validación, deberá mantenerse con Estado **En revisión**.  
Toda línea base o release deberá quedar asociada a un CI con Estado **Vigente**.

### 2.1 Redundancia y Recuperación Distribuida [CM SP 1.2]

El departamento adopta un modelo de **Redundancia Distribuida** aprovechando la arquitectura de Git. La integridad y disponibilidad de los Elementos de Configuración no dependen de un almacenamiento centralizado único.

**Protocolo de Respaldo Colectivo:**
- **Sincronización Obligatoria:** Todos los miembros del equipo deben asegurar que sus clones locales del repositorio estén sincronizados con la rama `main` y contengan todos los `Tags` de Línea Base oficiales al cierre de cada hito o Sprint.
- **Evidencia de Respaldo:** La existencia de múltiples clones actualizados en las estaciones de trabajo de los desarrolladores se considera el mecanismo oficial de respaldo del departamento.
- **Protocolo de Recuperación:** En caso de una falla crítica en el servidor central (GitHub), el **Program Manager (PM)** o el **Architecture Owner (AO)** designarán el clon local más actualizado entre los miembros del equipo para reconstruir el repositorio central y restaurar la integridad del sistema.

### 3. Control de Cambios [CM SP 2.1, 2.2]

Se debe establecer el mecanismo formal mediante el cual se gestionan, documentan y autorizan los cambios realizados sobre elementos de configuración y documentación departamental.

- Todo cambio en código o documentación debe hacerse vía **Pull Request (PR)**.
- El PR debe usar la **Plantilla Departamental** y referenciar el ID del requisito, issue o CI relacionado.
- Los commits deben seguir el estándar: `[TAG] Descripción` (Ej: `[FIX] Corregido error en login`).
- Toda solicitud de cambio aprobada deberá reflejarse también en la [Matriz de Configuración](../Plantillas/MAT01.md), cuando impacte un CI controlado.
- Las modificaciones a la Wiki departamental también deberán gestionarse mediante PR en GitHub.
- Cuando se requiera formalizar la petición antes de implementar el cambio, podrá abrirse un issue vinculado al PR.
- La responsabilidad de autorizar cambios controlados recae en la figura del Revisor del Pull Request. Al aprobar y hacer el merge de un PR, esta persona asume temporalmente la responsabilidad de asegurar que el Elemento de Configuración cumple con los estándares definidos.

### 3.1 Retroceso (Rollback)
Cuando un CI o una liberación genere un problema funcional, documental o de calidad, el rollback deberá realizarse únicamente hacia la última versión aprobada y liberada anterior, registrada como release, tag o línea base vigente.

Criterios para aplicar rollback:
- Debe existir una versión anterior aprobada.
- La versión de destino debe estar registrada en la matriz de configuración.
- El rollback debe quedar documentado como un nuevo cambio controlado.
- No se debe regresar a un commit arbitrario sin trazabilidad ni aprobación formal.
- El rollback deberá ejecutarse hacia la última versión aprobada y liberada anterior, identificada en el repositorio oficial o en la copia local sincronizada del equipo.

### 4. Auditoría de Integridad y Cumplimiento [CM SP 3.1, 3.2]

El Program Manager (PM) verificará periódicamente que el equipo siga los estándares.

#### Actividades
1. Realizar la auditoría utilizando la [Checklist de Auditoría de CM](../Plantillas/PLA04.md).
2. **Registro de Resultados:** El resultado de la auditoría debe guardarse en la carpeta `Auditorias/` dentro del directorio del proyecto correspondiente en la Wiki.
3. **Seguimiento:** En caso de hallazgos (Estado "N"), el TL deberá organizar un plan para corregir la inconsistencia en el repositorio o artefacto.
4. **Cierre:** Una vez corregido el hallazgo, se deberá actualizar la evidencia correspondiente y la matriz de configuración.

#### Evidencia generada
- Reporte de Auditoría de CM (ubicado en la carpeta del proyecto).

---

## Relación con otros procesos

Este proceso interactúa con:

- **PLA10:** define los lineamientos obligatorios que este proceso implementa.
- **PRC01 / PRC03:** La RTM y las solicitudes de cambio de requisitos impactan directamente los CIs.
- **PRC04:** Los cambios en la forma de trabajo modifican los CIs de tipo "Proceso".
- **PRC05:** Las iteraciones definen los momentos para crear Líneas Base (Tags).
- **PRC06 / PRC07:** Generan los CIs base de gestión y planificación.

---

## Salidas
- Repositorio actualizado.
- Líneas Base (Tags/Releases).
- RTM actualizada.
- Matriz de Configuración actualizada.
- Reporte de Auditoría de CM.

---

## Control de versiones
| Version | Creado por: | Auditado por: | Descripción | Fecha |
| :--- | :--- | :--- | :--- | :--- |
| 1.0 | Mauricio Olguín Sánchez | | Creación del proceso. | 12/04/2026 |