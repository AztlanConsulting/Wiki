title: "GUI22 - Convención de Versionado y Releases"
---

_v1.0_

## Propósito

Definir la convención utilizada para versionar Elementos de Configuración, generar releases, establecer líneas base y ejecutar rollback dentro de la Wiki departamental y los proyectos del equipo.

---

## Alcance

Esta guía aplica a todos los Elementos de Configuración administrados por el departamento y por los proyectos del equipo, incluyendo políticas, procesos, guías, plantillas, documentos técnicos, artefactos de proyecto y liberaciones.

---

## Conceptos generales

### Versionado
Sistema que permite identificar la evolución de un Elemento de Configuración mediante una etiqueta o número de versión.

### Release
Versión liberada de un Elemento de Configuración o conjunto de CIs que ha sido revisada y aprobada para su uso.

### Tag
Marcador inmutable en el repositorio que identifica una versión específica liberada o una línea base.

### Línea base
Conjunto de Elementos de Configuración aprobados y congelados en un punto específico del ciclo de vida.

### Rollback
Proceso de regreso a una versión anterior aprobada y liberada cuando una versión actual presenta fallas, inconsistencias o requiere reversión.

---

## Convención de versionado

La convención de versionado recomendada será:

- **MAJOR.MINOR.PATCH**
- Ejemplos:
  - `v1.0.0`
  - `v1.1.0`
  - `v1.1.1`

### Significado
- **MAJOR**: cambios mayores o estructurales.
- **MINOR**: incorporación de mejoras o secciones nuevas sin romper la estructura general.
- **PATCH**: correcciones pequeñas, ajustes de forma o errores menores.

---

## Reglas de uso de ramas

### develop
Rama de integración y trabajo activo.  
Se utiliza para consolidar cambios en desarrollo antes de liberarlos.

### main
Rama estable o controlada.  
Solo debe contener versiones aprobadas o listas para liberación formal.

### ramas de trabajo
Se utilizan para desarrollar cambios específicos antes de integrarlos a `develop` o al flujo definido por el equipo.

---

## Reglas para releases

Un release debe crearse cuando:

- un documento o artefacto ha sido aprobado formalmente,
- un conjunto de cambios ya pasó revisión,
- el contenido está listo para ser usado como referencia,
- se desea congelar una versión para una entrega, hito o baseline.

Cada release debe registrar:

- identificador de versión,
- fecha,
- responsable,
- CI incluidos,
- evidencia de aprobación,
- enlace al tag o release.

---

## Reglas para tags

Un tag debe utilizarse cuando:

- se quiere marcar una versión exacta e inmutable,
- se necesita identificar una línea base,
- se requiere recuperar una versión estable para auditoría o rollback.

Los tags no deben modificarse una vez creados.

---

## Reglas para líneas base

Una línea base debe crearse cuando:

- se aprueba un documento normativo,
- se cierra una iteración importante,
- se libera un entregable relevante,
- se requiere congelar una referencia para trabajo posterior.

Toda línea base debe quedar registrada en la matriz de configuración oficial.

---

## Reglas para rollback

El rollback deberá realizarse únicamente hacia la última versión anterior que cumpla con lo siguiente:

1. Esté aprobada.
2. Esté liberada.
3. Esté registrada como release, tag o línea base.
4. Esté marcada como vigente al momento de la liberación.

### No permitido
- Hacer rollback a un commit cualquiera sin referencia formal.
- Regresar a una versión no aprobada.
- Restaurar una versión sin actualizar la matriz de configuración.

### Registro del rollback
Todo rollback deberá documentarse como un cambio controlado y deberá registrar:

- versión origen,
- versión destino,
- motivo,
- fecha,
- responsable,
- evidencia del cambio.

---

## Relación con la matriz de configuración

La matriz de configuración oficial debe contener, como mínimo:

- versión actual,
- estado,
- nivel de control,
- release asociado,
- tag asociado,
- línea base asociada,
- versión anterior para rollback.

---

## Ejemplo práctico

| CI | Versión actual | Release | Tag | Línea base | Versión previa para rollback |
|---|---|---|---|---|---|
| PLA10 | v1.0.0 | REL-PLA10-1.0 | v1.0.0 | LB-PLA10-01 | v0.9.0 |
| PRC10 | v1.1.0 | REL-PRC10-1.1 | v1.1.0 | LB-PRC10-02 | v1.0.0 |
| ARC-01 | v0.1.0 | REL-ARC-01 | v0.1.0 | LB-ARC-01 | v0.0.9 |

---

## Control de cambios

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Mauricio Olguín Sánchez | | Creación de la guía de versionado y releases | 15/04/2026 |