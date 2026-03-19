---
title: "SPK11 - Testability (Jest & GitHub Actions)"
sidebar_position: 11
---

**Duración:** 1 día  
**Funcionalidad:** Implementación de pruebas automáticas para validar el backend

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

### **Jest**

1. Instalar dependencia:

```bash
npm install --save-dev jest
```

2. Configurar script en package.json:

````json
"scripts": {
  "test": "jest"
}
````

3. Crear función a probar:
````javascript
function suma(a, b) {
  return a + b;
}

module.exports = suma;
````

4. Crear archivo de prueba (suma.test.js):
````javascript
const suma = require('./suma');

test('suma 1 + 2 = 3', () => {
  expect(suma(1, 2)).toBe(3);
});
````

5. Ejecutar pruebas:
````bash
npm test
````

### **Github Actions**
1. Crear carpeta:
````
.github/workflows
````
2. Crear el archivo de test.yml:
````yaml
name: Run Tests

on:
  push:
    on:
        pull_request:
            branches: [ "develop", "main" ]

jobs:
  test:
    runs-on: ubuntu-latest
    timeout-minutes: 5

    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm install

      - name: Run tests
        run: npm test

````
3. Subir cambios al repositorio
GitHub ejecutará automáticamente los tests en cada push o pull request.

### Control de versiones


| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Alejandra Arredondo | Yessica Lora Vázquez | Spike Testability  | 13/03/2026 |
