---
title: "Política de Gestión de la Configuración"
sidebar_position: 10
---

_v1.0_

## Propósito

Establecer los lineamientos para identificar, controlar, versionar, proteger y auditar los elementos de configuración de la organización, con el fin de asegurar la integridad, trazabilidad y consistencia de los productos de trabajo, tanto a nivel departamental como a nivel de proyecto.

## Áreas de proceso y prácticas en las que se aplica

Esta política aplica a las siguientes áreas y prácticas relacionadas con CMMI:

- **CM SP 1.1** Identificar elementos de configuración.
- **CM SP 1.2** Controlar elementos de configuración.
- **CM SP 1.3** Crear y mantener líneas base.
- **CM SP 2.1** Establecer sistema de control de cambios.
- **CM SP 2.2** Realizar seguimiento a solicitudes de cambio.
- **CM SP 3.1** Realizar auditorías de configuración.
- **CM SP 3.2** Corregir inconsistencias detectadas en auditorías.

## Política

1. Todos los productos de trabajo relevantes para la operación de la organización deberán identificarse como **elementos de configuración (CIs)** cuando su alteración pueda afectar la calidad, trazabilidad, entrega o cumplimiento del proyecto o del departamento.

2. Todo CI deberá contar, como mínimo, con:
   - identificador único,
   - nombre o descripción,
   - responsable o dueño,
   - ubicación oficial,
   - versión vigente,
   - estado,
   - relación con proyecto, proceso o departamento,
   - evidencia de aprobación o liberación, cuando aplique.

3. Los CIs deberán clasificarse según su naturaleza, por ejemplo:
   - políticas,
   - procesos,
   - plantillas,
   - guías,
   - formatos,
   - documentación técnica,
   - código fuente,
   - scripts,
   - documentos de gestión,
   - artefactos de proyecto.

4. Todo cambio a un CI controlado deberá realizarse mediante el flujo autorizado de gestión de cambios definido en el proceso [PRC10 - Gestión de la Configuración](../Procesos/PRC10.md). No deberán aceptarse modificaciones directas fuera del mecanismo establecido.

5. Los CIs deberán mantenerse bajo control de versión en el repositorio oficial definido por la organización o por el departamento responsable.

6. Las líneas base deberán establecerse en puntos de control definidos, como liberaciones, fin de iteración, cierre de fase o aprobación formal de entregables.

7. Todo Elemento de Configuración deberá registrar por separado su **Estado** y su **Nivel de control**.

8. Los estados permitidos para los Elementos de Configuración serán:
   - En revisión
   - Vigente
   - Obsoleto

9. Los niveles de control permitidos para los Elementos de Configuración serán:
   - Dinámico
   - Controlado
   - Estático

10. La definición operativa de cada estado y nivel de control deberá consultarse en la guía de estados y niveles de control de la Wiki departamental.

11. Todo Elemento de Configuración que alcance una versión aprobada y liberada deberá registrarse como **Vigente** y asociarse a su línea base, release o referencia oficial correspondiente.

12. Todo Elemento de Configuración sustituido por una versión posterior deberá marcarse como **Obsoleto** y mantenerse únicamente como referencia histórica.

13. Toda modificación a la Wiki departamental, incluidos políticas, procesos, guías, plantillas y documentos de apoyo, deberá gestionarse mediante control formal de cambios en GitHub. El mecanismo estándar de implementación será un Pull Request vinculado al CI afectado; cuando aplique, podrá acompañarse de una solicitud previa en forma de issue.

14. Las versiones de compiladores, librerías, frameworks y herramientas externas utilizadas para construir los Elementos de Configuración deben estar declaradas explícitamente en archivos de manifiesto (por ejemplo, package.json, requirements.txt, pom.xml, o equivalentes). Estos archivos de manifiesto son considerados Elementos de Configuración Controlados y deben formar parte de la Línea Base de cada release.

15. Toda persona que participe en la edición, revisión o mantenimiento de los Elementos de Configuración deberá conservar un clon local actualizado del repositorio oficial. Dicho clon deberá sincronizarse con la última línea base vigente del proyecto o CI correspondiente, y funcionará como respaldo distribuido complementario al repositorio oficial, no como sustituto de éste.

## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Mauricio Olguín Sánchez |  | Creación de la política de gestión de configuración | 14/04/2026 |