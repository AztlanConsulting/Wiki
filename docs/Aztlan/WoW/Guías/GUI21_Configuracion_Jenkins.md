---
title: "GUI21 - ¿Cómo configurar Jenkins?"
---

Esta guía forma parte del proceso: Integración continua y automatización de despliegues del proyecto.

---

## Propósito

Configurar Jenkins como servidor de automatización para ejecutar tareas de integración continua, como clonado del repositorio, instalación de dependencias y ejecución de pruebas.

---

## Frecuencia

Se realiza cuando se integra Jenkins por primera vez.

---

## Participantes

- Architecture Owner (AO)
- Team Leader (TL)
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
    - Behaviours: 
        - Discover pull request from origin:
            - Strategy: The current pull request revision
        - Property Strategy: 
            - All branches get the same propeties

8. Presionar `Save` para guardar la configuración del pipeline.

### GitHub

9. Entrar al repositorio que se vinculó a Jenkins.

10. Ir a la sección de `Settings` o `Configuraciones`.

11. Entrar a la sección de `Webhooks` para habilitar el disparador que active Jenkins y seleccionar `Add webhook`.

12. En `Payload URL`, agregar el siguiente link:
    - https://halflap.theeddyhomeserver.org/jenkins/github-webhook/

13. Dejar las opciones restantes igual como están y únicamente modificar la última opción:

   - `Which events would you like to trigger this webhook`

14. Seleccionar los siguientes eventos:
    - Pull request review comments
    - Pushes
    - Pull requests

15. Entrar a la sección de `Rulesets` para proteger la rama si las pruebas no pasan.

16. Dentro de `Rulesets`, seleccionar `New ruleset` y después `New branch ruleset`.

17. En el nuevo ruleset, seleccionar el target de la rama o ramas que se desea proteger en `Branch targeting criteria`.

    **Recomendación**:
        - Develop
        - Main
        - release/*

18. Después de seleccionar la rama, bajar hasta encontrar la opción `Require status checks to pass`.

19. Activar esa opción y dentro de ella seleccionar `Do not require status checks on creation`.

20. En `Status checks that are required`, seleccionar el siguiente check:
    -  `continuous-integration/jenkins/pr-head`

21. Guardar la configuración del ruleset.

---

## Salidas

- Pipeline configurado
- Credenciales registradas
- Github configurado

---

## Recomendaciones

- Usar credenciales almacenadas en Jenkins.
- Revisar permisos de usuarios y roles dentro de Jenkins.

---

## Plantillas / Registros asociados

- [Documento con imágenes del proceso de configuración de Jenkins](https://drive.google.com/file/d/1NgRCGvAkD1SMeLHDb_tLVNSMKBXMuuLq/view?usp=sharing)


---

## Control de versiones

| Version | Creado por | Auditado por | Descripción | Fecha |
|-------|-------------|-------------|-------------|-------|
| 1.0 | Manuel Bajos | Pendiente | Guía base para configurar Jenkins en un proyecto | 07/04/2026 |
