---
title: "SPK08 - Testing con Jest"
sidebar_position: 8
---

**Duración:** 2 a 3 días  
**Funcionalidad:** Pruebas automatizadas en Node.js con Jest en arquitectura MVC

## Funcionalidad

Jest es un framework de testing para JavaScript que permite validar el comportamiento del código de forma automática.

En un backend con Express y arquitectura MVC, Jest se usa para probar:

- lógica de negocio (`services`)
- controladores (`controllers`)
- rutas (`routes`)
- funciones auxiliares

En lugar de probar manualmente cada endpoint, el flujo cambia a:

- el desarrollador escribe pruebas
- ejecuta Jest
- Jest valida si el sistema funciona correctamente
- si algo falla, se detecta antes de producción

## Beneficios

- Detecta errores antes de producción.
- Permite validar lógica sin depender del frontend.
- Facilita refactorizar código sin miedo a romper funcionalidades.
- Permite automatizar pruebas en CI/CD.
- Incluye herramientas como mocks, spies y coverage integradas.
- Mejora la calidad del código y la mantenibilidad del proyecto.

## Desventajas

- Requiere tiempo inicial de aprendizaje y configuración.
- Puede ser complejo entender mocks al inicio.
- Tests mal diseñados pueden dar falsa seguridad.
- Aumenta el tiempo de desarrollo si no se organiza bien.
- Requiere mantenimiento cuando cambia la lógica.

## Facilidad de aprendizaje

**Media**

## Cuándo conviene usar Jest

Jest conviene cuando:

- tienes lógica de negocio importante
- trabajas con arquitectura MVC
- tienes endpoints críticos como login, empleados o vacaciones
- necesitas asegurar calidad antes de producción
- planeas usar CI/CD

## Arquitectura recomendada

Para usar Jest correctamente en MVC:

### 1. Separación por capas

- **Controller:** maneja `req` y `res`
- **Service:** lógica de negocio
- **Model:** acceso a datos

Esto permite testear cada parte por separado.

### 2. Tipos de pruebas

- **Unit tests:** prueban funciones individuales (`services`)
- **Controller tests:** prueban lógica HTTP
- **Integration tests:** prueban rutas completas

### 3. Uso de mocks

Para evitar dependencias externas:

- mockear base de datos
- mockear servicios
- no usar datos reales

## Recursos

- [jest](https://jestjs.io/docs/getting-started)
- [supertest](https://www.npmjs.com/package/supertest)

## Guía paso a paso para implementar Jest

### Prerrequisito: tener proyecto Express con MVC

Debes tener:

- rutas
- controladores
- servicios
- aplicación funcionando

### 1. Instalar dependencias

```bash
npm install --save-dev jest supertest
```

Jest se usa para testing y `supertest` para probar endpoints HTTP.

### 2. Configurar Jest

En `package.json`:

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

Opcional: crear `jest.config.js`:

```js
module.exports = {
  testEnvironment: 'node',
  clearMocks: true
};
```

### 3. Estructura de pruebas

```text
tests/
|-- unit/
|-- controller/
`-- integration/
```

Esto ayuda a mantener orden y escalabilidad.

### 4. Crear tu primer test (unit test)

Service:

```js
function sum(a, b) {
  return a + b;
}

module.exports = { sum };
```

Test:

```js
const { sum } = require('../../src/services/math.service');

test('suma correctamente', () => {
  expect(sum(2, 3)).toBe(5);
});
```

### 5. Testear un controller

Controller:

```js
exports.getEmployees = async (req, res) => {
  const employees = [{ id: 1 }];
  res.json(employees);
};
```

Test:

```js
const controller = require('../../src/controller/employee.controller');

test('retorna empleados', async () => {
  const req = {};
  const res = {
    json: jest.fn()
  };

  await controller.getEmployees(req, res);

  expect(res.json).toHaveBeenCalled();
});
```

### 6. Mockear servicios (clave en MVC)

```js
jest.mock('../../src/services/employee.service', () => ({
  getAllEmployees: jest.fn(() => [{ id: 1 }])
}));
```

Esto evita depender de la base de datos.

### 7. Test de rutas (integration test)

```js
const request = require('supertest');
const app = require('../../src/app');

test('GET /employees responde 200', async () => {
  const res = await request(app).get('/employees');

  expect(res.statusCode).toBe(200);
});
```

### 8. Validar errores

```js
test('retorna 500 en error', async () => {
  const req = {};
  const res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn()
  };

  try {
    throw new Error('Error');
  } catch (e) {
    res.status(500).json({ message: 'Error' });
  }

  expect(res.status).toHaveBeenCalledWith(500);
});
```

### 9. Ejecutar pruebas

```bash
npm test
```

### 10. Coverage (opcional pero recomendado)

```bash
npx jest --coverage
```

Te muestra qué tanto código estás probando.

### 11. Probar casos reales

Ejemplo en tu sistema:

- login exitoso
- login fallido
- registrar vacaciones correctamente
- validación de fechas incorrectas
- acceso sin autenticación
- error en base de datos

## Buenas prácticas

### 1. No probar librerías externas

Solo prueba tu lógica, no Express ni Prisma.

### 2. Usar mocks

Evita usar base de datos real en tests.

### 3. Tests independientes

Un test no debe depender de otro.

### 4. Nombres claros

```js
test('debe registrar vacaciones correctamente', () => {});
```

### 5. Probar casos positivos y negativos

No solo lo que funciona, también errores.

### 6. Mantener separación MVC

- `services` -> unit tests
- `controllers` -> controller tests
- `routes` -> integration tests

## Resultado esperado del spike

Al terminar este spike deberías poder responder:

- qué es Jest y para qué sirve
- cómo probar un service, controller y ruta
- cómo usar mocks en Jest
- cómo probar endpoints con `supertest`
- cómo estructurar tests en MVC
- si conviene implementar testing en todo el proyecto o solo en partes críticas

## Control de versiones

| Versión | Creado por | Auditado por | Descripción | Fecha |
| --- | --- | --- | --- | --- |
| 1.0 | Manuel Bajos | — | Spike de testing con Jest en Node.js usando MVC | 13/04/2026 |
