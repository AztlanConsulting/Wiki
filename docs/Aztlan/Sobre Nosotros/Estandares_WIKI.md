# Estándar de Desarrollo de la WIKI

## 1. Objetivo

Este documento define los lineamientos para el desarrollo del proyecto, con el fin de mantener un código consistente, claro, mantenible y fácil de colaborar entre todos los integrantes del equipo.

Incluye estándares para:
- Repositorio y ramas
- Commits
- Pull requests
- Codificación
- Documentación del código

## 2. Estándares del Repositorio

### 2.1 Ramas principales
**main**: Rama principal de producción.
- Contiene código estable y listo para desplegarse.
- No se permiten commits directos.
- Solo recibe merges aprobados desde staging o hotfix.
- Debe estar protegida.

**develop**: Rama principal de desarrollo.
- Aquí se integran los cambios de nuevas funcionalidades.
- Sirve para consolidar avances del equipo antes de pasar a staging.
- Debe estar protegida.

### 2.2 Ramas de trabajo
**feature**: Se utiliza para desarrollar nuevas funcionalidades.
- Se crea a partir de develop.
- Debe incluir únicamente cambios relacionados con una funcionalidad o historia de usuario.

**bugfix**: Se utiliza para corregir errores detectados en desarrollo o testing.
- Se crea a partir de develop.

**hotfix**:Se utiliza para corregir errores críticos detectados en producción.
- Se crea a partir de main.
- Solo debe contener cambios urgentes y puntuales.

### 2.3 Convención de nombres para ramas
**Reglas generales**
- Usar solo minúsculas
- Separar palabras con guiones (-)
- No usar espacios
- No usar acentos
- El nombre debe ser corto, claro y descriptivo
- Una rama por funcionalidad o corrección
- Formato recomendado

````bash
tipo/descripcion-corta
````

**Ejemplos**
```` bash
feature/spike-NodeJS-Express
feature/spike-React
bugfix/error-merge
````

## 3. Estándares de Commits

El estándar de commits del proyecto se basa en el uso de palabras clave entre corchetes al inicio del mensaje, seguidas de una descripción clara y concisa del cambio realizado.

Formato general:
````bash
[TIPO] Descripción breve del cambio
````

La descripción debe:
- Ser clara y directa
- Explicar qué se hizo (no cómo)
- Evitar mensajes genéricos como “cambios” o “update”

#### Tipos de Commits

**[ADD]**

Se utiliza cuando se agrega una nueva funcionalidad, archivo o componente al proyecto.

**Ejemplo:** 

[ADD] Función de autenticación de usuarios  

**[FIX]**

Se utiliza cuando se corrige un error (bug) en el sistema.

**Ejemplo:**

[FIX] Error en validación de contraseña en login


**[UPDATE]**

Se utiliza cuando se mejora o actualiza una funcionalidad existente sin ser un bug.

**Ejemplo:**

[UPDATE] Mejora en la lógica de cálculo de totales  

**[MODIFY]**  
Se utiliza cuando se realizan cambios en código existente que no necesariamente son mejoras ni fixes (cambios estructurales o ajustes).

**Ejemplo:** [MODIFY] Ajuste en estructura del controlador de usuarios  

**[DELETE]**  
Se utiliza cuando se elimina código, archivos o funcionalidades del proyecto.

**Ejemplo:** [DELETE] Eliminación de componente Navbar obsoleto

**[TEST]**  
Se utiliza cuando se agregan o modifican pruebas.

**Ejemplo:** [TEST] Pruebas unitarias para módulo de autenticación  

**[DOC]**  
Se utiliza para cambios en documentación.

**Ejemplo:** [DOC] Actualización de README con pasos de instalación  

**[MERGE]**  
Se utiliza cuando se integran ramas del repositorio.

**Formato recomendado:** [MERGE] rama-origen -> rama-destino  

**Ejemplo:** [MERGE] feature/login-usuario -> develop  

**Reglas generales**
- Un commit debe representar un cambio lógico
- No mezclar múltiples funcionalidades en un mismo commit
- Escribir mensajes claros y entendibles para cualquier miembro del equipo
- Evitar commits innecesarios o sin valor
- Siempre probar el código antes de hacer commit

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Alejandra Arredondo | Juan Manuel Murrillo López | Estandar inicial de commits para el proyecto | 26/03/2026 |