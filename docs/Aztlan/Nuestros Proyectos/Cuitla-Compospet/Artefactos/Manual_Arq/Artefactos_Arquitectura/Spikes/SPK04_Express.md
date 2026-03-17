---
title: "SPK04 - Express"
sidebar_position: 4
---

**Duración:** 1 día  
**Funcionalidad:** API backend 

## Beneficios

- Es un framework minimalista que permite crear aplicaciones web y APIs de forma rápida, ya que reduce la cantidad de código necesario para manejar rutas, solicitudes y respuestas.
- Express no impone una estructura rígida al proyecto, lo que permite organizar el código de la forma que mejor se adapte a las necesidades del desarrollo.
- Permite definir rutas HTTP (GET, POST, PUT, DELETE, etc.) de forma clara y sencilla, facilitando la construcción de APIs REST.


## Desventajas

- No impone una arquitectura específica para organizar el proyecto, esto puede generar aplicaciones desordenadas si no se define una estructura clara desde el inicio.
- Al ser muy flexible, muchas decisiones de arquitectura, seguridad y organización deben ser implementadas manualmente por el desarrollador.
- Si no se establece una buena arquitectura (controllers, services, routes, etc.), el código puede volverse complejo y difícil de mantener a medida que el proyecto crece.

## Facilidad de aprendizaje

**Fácil** 

## Recursos

- [Documentación oficial](https://expressjs.com/)
- [Guía oficial de express](https://expressjs.com/en/guide/routing.html)
- [Documentación de middlewares](https://expressjs.com/en/resources/middleware.html)
- [Basic routing](https://expressjs.com/en/starter/basic-routing.html)
- [RESTful APIs in 100 Seconds // Build an API from Scratch with Node.js Express](https://youtu.be/-MTSQjw5DrM?si=uVyssPvVaHjJBp3_)

## Tutorial básico

# Tutorial básico para instalar Express.js

Este tutorial muestra cómo instalar **Express.js** y crear un servidor básico usando **Node.js**.

---

### 1. Instalar Node.js

Antes de instalar Express, debes tener **Node.js** instalado en tu computadora.

Puedes descargarlo desde el sitio oficial [Descargar node](https://nodejs.org/es/download)

Para verificar que está instalado correctamente, ejecuta en la terminal:

```bash
node -v
npm -v
```

Si ambos comandos muestran una versión, significa que Node.js y npm están instalados correctamente.

### 2. Crear un proyecto Node.js
Siguiendo el tutorial de Node.js del Spike 03. 

### 3. Instalar Express.js
Ahora instala Express usando npm:
````bash
npm install express
````
Esto agrega Express a las dependencias del proyecto y creará la carpeta node_modules

### 4. Crear el servidor básico
Crea un archivo llamado index.js en la raíz del proyecto.

Luego agrega el siguiente código:
````javascript
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola mundo desde Express');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
````

### 5. Ejecuta el servidor
Para iniciar el servidor, ejecuta en la terminal:
```bash
node index.js
```

Si todo funciona correctamente se deberá ver un mensaje de que todo funciona correctamente. 

### 6. Probar la aplicación
Abre el navegador y visita tu localhost:3000

Deberías ver el mensaje "Hola mundo desde Express" en la página.

### 7. Usar nodemon para desarrollo
Para reiniciar automaticamente el servidor cuando cambies el codigo, instala nodemon:
````bash
npm install nodemon --save-dev
````
Luego ejecútalo con:
````bash
npx nodemon index.js
````

### Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Alejandra Arredondo | Yessica Lora Vázquez | Spike de NodeJS  | 13/03/2026 |
