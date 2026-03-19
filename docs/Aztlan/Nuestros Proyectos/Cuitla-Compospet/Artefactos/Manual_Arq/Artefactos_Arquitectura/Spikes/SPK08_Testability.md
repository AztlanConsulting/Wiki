---
title: "SPK08 - Testability (Jest & Github Actions)"
sidebar_position: 8
---

**Duración:** 1 día  
**Funcionalidad:** Tests automáticos para el backend

## Beneficios

#### Jest

- Permite validar automáticamente la lógica del backend mediante pruebas unitarias.  
- Detecta errores antes de llegar a producción.  
- Facilita la refactorización segura del código.  
- Sintaxis simple e intuitiva para JavaScript.  
- Amplia comunidad y documentación. 

#### GitHub Actions

- Automatiza la ejecución de pruebas en cada push o pull request.  
- Asegura que el código cumpla con estándares antes de integrarse.  
- Permite implementar integración continua (CI) fácilmente.  
- Detecta fallos de forma temprana en el pipeline.  
- Se integra directamente con repositorios de GitHub sin herramientas externas.  

## Desventajas

#### Jest

- Requiere tiempo inicial para escribir y mantener pruebas.  
- Puede ser complicado testear dependencias externas (APIs, bases de datos).  
- Tests mal diseñados pueden dar falsa seguridad. 
- Aumenta el tiempo de ejecución en desarrollo si hay muchos tests.  

#### GitHub Actions

- Configuración inicial del workflow puede ser confusa.  
- Puede aumentar el tiempo de ejecución de pipelines.  
- Dependencia del entorno (versiones de Node, dependencias, etc.).  
- Errores en configuración pueden bloquear despliegues.  

## Facilidad de aprendizaje

**Fácil a Media**

- Jest es muy sencillo para comenzar.  
- GitHub Actions es fácil para configuraciones básicas, pero puede escalar a complejidad media.  

## Recursos

#### Jest

- [Documentación oficial](https://jestjs.io/docs/getting-started)
- Ejemplos de testing en Node.js y Express  
- Guías de testing unitario y mocks  

#### GitHub Actions

- [Documentación oficial](https://docs.github.com/en/actions/get-started/quickstart)
- Plantillas de workflows para Node.js  
- Ejemplos de integración continua (CI/CD)  

## Tutorial básico
..

### Control de versiones


| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Alejandra Arredondo | Yessica Lora Vázquez | Spike Testability  | 13/03/2026 |
