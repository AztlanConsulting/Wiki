---
title: "GUI21 - Estados y Niveles de Control de Elementos de Configuración"
---

_v1.0_

## Propósito

Definir de forma clara el significado de los estados y niveles de control utilizados en la gestión de configuración de la Wiki departamental, para evitar ambigüedades al registrar, modificar, liberar o depreciar Elementos de Configuración.

---

## Alcance

Esta guía aplica a todos los Elementos de Configuración administrados por el departamento y por los proyectos del equipo.

---

## Conceptos generales

Un Elemento de Configuración debe registrar dos atributos distintos:

- **Estado:** indica la etapa del ciclo de vida del CI.
- **Nivel de control:** indica el grado de restricción con el que puede ser modificado o liberado.

Estos atributos no son equivalentes y deben registrarse de forma separada.

---

## Estados permitidos

### En revisión
Elemento de Configuración que todavía está siendo evaluado, corregido o validado.  
No debe considerarse una versión final.

### Vigente
Elemento de Configuración aprobado y disponible como versión válida para su uso.

### Obsoleto
Elemento de Configuración sustituido o retirado de uso.  
Puede conservarse únicamente como referencia histórica.

---

## Niveles de control permitidos

### Dinámico
Elemento de Configuración en edición activa o en construcción.  
Puede cambiar con frecuencia y aún no constituye una versión congelada.

### Controlado
Elemento de Configuración sometido a control formal de cambios.  
Toda modificación debe pasar por revisión y aprobación.

### Estático
Elemento de Configuración congelado como referencia oficial, baseline o release.  
No debe modificarse sin generar una nueva versión.

---

## Relación recomendada entre estado y nivel de control

| Estado | Nivel de control recomendado | Uso común |
|---|---|---|
| En revisión | Dinámico | Documento en construcción o validación |
| Vigente | Controlado | Versión aprobada y mantenida |
| Vigente | Estático | Release o baseline formal |
| Obsoleto | Estático | Versión histórica o reemplazada |

---

## Reglas de uso

1. El Estado y el Nivel de control deben registrarse por separado.
2. Todo CI en revisión debe contar con responsable y fecha de última modificación.
3. Todo CI vigente debe estar vinculado a su versión aprobada o línea base.
4. Todo CI obsoleto debe mantenerse solo para consulta o trazabilidad histórica.
5. La matriz de configuración oficial es el registro maestro de estos atributos.

---

## Ejemplos

| ID CI | Nombre | Estado | Nivel de control |
|---|---|---|---|
| PLA10 | Política de Gestión de la Configuración | Vigente | Controlado |
| PRC10 | Proceso de Gestión de la Configuración | Vigente | Controlado |
| ARC-01 | Prueba de Arquitectura | En revisión | Dinámico |
| REL-1.0 | Release del proyecto | Vigente | Estático |
| DOC-OLD | Versión anterior de un documento | Obsoleto | Estático |


---

## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Mauricio Olguín Sánchez | | Creación de la guía de estados y niveles de control | 15/04/2026 |
