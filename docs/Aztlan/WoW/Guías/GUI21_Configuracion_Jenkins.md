---
title: "GUI21 - ¿Cómo configurar Jenkins?"
---

Esta guía forma parte del proceso: Integración continua y automatización de despliegues del proyecto.

---

## Propósito

Configurar Jenkins como servidor de automatización para ejecutar tareas de integración continua, como clonado del repositorio, instalación de dependencias, ejecución de pruebas y despliegue básico del proyecto.

---

## Frecuencia

Se realiza **cuando se integra Jenkins por primera vez** y **cada vez que se requiera ajustar el pipeline o la configuración del servidor**.

---

## Participantes

- Architecture Owner (AO)
- Team Leader (TL)
- DevOps o responsable de infraestructura, cuando aplique
- Team Members (TM), cuando participen en la configuración técnica

---

## Entradas

- Repositorio del proyecto
- Acceso al servidor o entorno donde se instalará Jenkins
- Credenciales necesarias para el repositorio y despliegue
- Archivo `Jenkinsfile`, cuando exista
- Requerimientos técnicos del proyecto

---

## Actividades

### Jenkins

1. Entrar a la liga de Jenkins:

   `https://docusaurus.theeddyhomeserver.org/jenkins`

2. Ingresar el usuario y la contraseña correspondientes.

3. Una vez dentro del panel, presionar la opción de `Nueva tarea`.

4. Dentro de la vista de nueva tarea, ingresar el nombre del pipeline y seleccionar la opción `Multibranch Pipeline`, para poder manejar múltiples ramas dentro de GitHub.

5. Una vez creado el `Multibranch Pipeline`, configurar la sección `Branch Sources` y seleccionar `GitHub`.

6. En la opción de `GitHub`, configurar:

   - en `Credenciales`, seleccionar `jenkinsGithubApp`
   - en `Repository HTTPS URL`, colocar la URL HTTPS del repositorio en GitHub

7. Eliminar todas las demás opciones que aparezcan y dejar únicamente esas dos configuraciones.

8. Presionar `Save` para guardar la configuración del pipeline.

### GitHub

9. Entrar al repositorio que se vinculó a Jenkins.

10. Ir a la sección de `Settings` o `Configuraciones`.

11. Entrar a la sección de `Webhooks` para habilitar el disparador que active Jenkins y seleccionar `Add webhook`.

12. En `Payload URL`, agregar el link correspondiente indicado en el documento visual de apoyo.

13. Dejar las opciones restantes igual como están y únicamente modificar la última opción:

   - `Which events would you like to trigger this webhook`

14. Seleccionar los eventos indicados en el documento visual de apoyo y guardar el webhook.

15. Entrar a la sección de `Rulesets` para proteger la rama si las pruebas no pasan.

16. Dentro de `Rulesets`, seleccionar `New ruleset` y después `New branch ruleset`.

17. En el nuevo ruleset, seleccionar el target de la rama o ramas que se desea proteger en `Branch targeting criteria`.

18. Después de seleccionar la rama, bajar hasta encontrar la opción `Require status checks to pass`.

19. Activar esa opción y dentro de ella seleccionar `Do not require status checks on creation`.

20. En `Status checks that are required`, seleccionar el check indicado en el documento visual de apoyo.

21. Guardar la configuración del ruleset.

---

## Salidas

- Jenkins instalado y accesible
- Pipeline configurado
- Credenciales registradas
- Ejecución inicial validada
- Registro de configuración disponible para el equipo

---

## Recomendaciones

- Usar credenciales almacenadas en Jenkins y no hardcodeadas en el repositorio.
- Mantener el pipeline versionado mediante `Jenkinsfile` cuando sea posible.
- Separar ambientes de prueba y producción.
- Revisar permisos de usuarios y roles dentro de Jenkins.
- Documentar plugins instalados y dependencias externas.

---

## Plantillas / Registros asociados

- [Documento con imágenes del proceso de configuración de Jenkins](https://docs.google.com/document/d/1h9UCLIE2h8l_qRGimq1KsSq-PxTElW6NMKcjGx62XN8/edit?usp=sharing)
- Registro de configuración del pipeline
- Evidencia de ejecución inicial del job

---

## Control de versiones

| Version | Creado por | Auditado por | Descripción | Fecha |
|-------|-------------|-------------|-------------|-------|
| 1.0 | Manuel Bajos | Pendiente | Guía base para configurar Jenkins en un proyecto | 07/04/2026 |
