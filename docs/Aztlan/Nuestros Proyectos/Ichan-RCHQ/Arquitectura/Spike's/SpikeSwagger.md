---
title: "SPK7 - Swagger"
sidebar_position: 7
---

**Duración:** 1 a 2 días  
**Funcionalidad:** Documentación y pruebas manuales de la API con Swagger / OpenAPI en Node.js

## Objetivo

Documentar el uso de Swagger, basado en OpenAPI, en el proyecto Node.js para:

- entender cómo funciona
- estandarizar la documentación de endpoints
- facilitar pruebas manuales de la API
- servir como referencia para el equipo

## ¿Qué es Swagger?

Swagger, basado en el estándar OpenAPI, es una herramienta que permite:

- definir una API mediante un archivo de especificación en JSON o YAML
- generar automáticamente una interfaz web interactiva
- probar endpoints directamente desde el navegador

En términos simples:

- convierte tu API en documentación viva y en un playground de pruebas

## ¿Qué problema resuelve?

Sin Swagger:

- la documentación puede estar desactualizada o no existir
- es más difícil probar endpoints sin herramientas externas como Postman o Insomnia
- hay menos visibilidad del contrato entre frontend y backend

Con Swagger:

- la documentación queda centralizada
- el testing manual es más rápido desde el navegador
- el contrato API queda más claro para todo el equipo

## Cómo funciona conceptualmente

El flujo general es:

- defines tu API usando una especificación OpenAPI
- Swagger genera una interfaz basada en esa definición
- la UI permite ver endpoints, enviar requests y revisar respuestas

## Implementación en Node.js

En Node.js normalmente se usan:

- `swagger-jsdoc` para generar la especificación a partir de comentarios
- `swagger-ui-express` para servir la interfaz web

## Setup básico

### 1. Instalar dependencias

```bash
npm install swagger-jsdoc swagger-ui-express
```

### 2. Configuración

```javascript
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Docs',
      version: '1.0.0',
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
```

Aquí se define la información básica de la API y los archivos donde se documentarán los endpoints.

### 3. Exponer la UI

```javascript
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```

Luego accedes a:

```text
http://localhost:3000/api-docs
```

## Documentar endpoints

Swagger usa comentarios estilo JSDoc:

```javascript
/**
 * @openapi
 * /users:
 *   get:
 *     summary: Obtener lista de usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
app.get('/users', handler);
```

## Qué puedes hacer desde la UI

Desde Swagger UI puedes:

- ejecutar requests `GET`, `POST`, `PUT`, `DELETE`
- enviar `body` en formato JSON
- probar autenticación con `Bearer token`
- ver respuestas en tiempo real

## Autenticación

Ejemplo con JWT:

```javascript
components: {
  securitySchemes: {
    bearerAuth: {
      type: 'http',
      scheme: 'bearer',
    },
  },
},
security: [{ bearerAuth: [] }],
```

Con esto Swagger mostrará un botón `Authorize`.

## Ventajas y desventajas

### Beneficios

- documentación automática
- testing manual integrado
- facilita onboarding de nuevos miembros
- funciona como fuente única de verdad del API

### Desventajas

- requiere disciplina para mantener la documentación actualizada
- los comentarios pueden volverse verbosos
- no reemplaza testing automatizado

## Buenas prácticas

- documentar todos los endpoints públicos
- incluir parámetros, request body y responses
- mantener ejemplos reales
- versionar la API, por ejemplo `/v1` y `/v2`
- documentar errores comunes además de respuestas exitosas

## Alternativas o complementos

- Postman Collections
- Insomnia
- Redoc como UI alternativa
- Contract testing con herramientas como Pact

## Decisiones en este proyecto

Se propone usar Swagger como:

- documentación oficial del API
- herramienta de testing manual

Ubicación propuesta:

- `/api-docs`

Fuente principal:

- comentarios en código mediante `swagger-jsdoc`

## Próximos pasos

- definir un estándar de documentación para el equipo
- añadir ejemplos a todos los endpoints
- documentar errores comunes
- integrar validación del spec en CI

## Resumen

Swagger:

- expone una UI interactiva
- documenta el API automáticamente
- facilita testing y colaboración

Es especialmente útil en equipos donde:

- frontend y backend trabajan juntos
- se necesita claridad en contratos
- hay onboarding frecuente

Este spike sirve como base para adoptar Swagger como estándar en el proyecto.

### Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Andre | Manuel Bajos | Spike de Swagger / OpenAPI en Node.js | 07/04/2026 |
