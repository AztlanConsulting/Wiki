---
title: "SPK02 - NodeJS"
sidebar_position: 2
---

**Duración:** 1 día  
**Funcionalidad:** API backend 

## Beneficios

- Permite crear aplicaciones tanto en el frontend como en el backend.
- Permite ejecutar código de JavaScript de forma rápida y eficiente. 
- Node.js cuenta con npm, uno de los repositorios de paquetes más grande del mundo. 
- Tiene una comunidad muy graned, lo que significa abundante documentación, tutoriales y solución de problemas comunes. 
- Se utiliza con frameworks como Express.js que facilitan la creación de APIs REST (forma estándar de comunicación entre aplicaciones a través de internet)

## Desventajas

- Utiliza un solo hilo de eventos, por lo que no es ideal para tareas intensivas en CPU.
- Muchas funcionalidades dependen de las librerías de npm.
- La programación asíncrona puede llevar al anidamiento de funciones de devolución de llamada (callback hell) puede generar estructuras de código complejas y díficiles de leer. 

## Facilidad de aprendizaje

**Fácil** 

## Recursos

- [Ventajas & Desventajas de NodeJS](https://www.epam.com/careers/blog/5-node-js-advantages-and-disadvantages-and-what-they-mean-for-your-project)
- [Página oficial de NodeJS](https://nodejs.org/es)
- [Documentación oficial](https://nodejs.org/docs/latest/api/)
- [Documentación para instalar NodeJS](https://nodejs.org/es/download)
- [Cómo instalar Node.js en MacOS, Linux o Windows usando NVM](https://www.freecodecamp.org/espanol/news/como-instalar-node-js-en-macos-linux-o-windows-usando-nvm/)
- [Node.js Ultimate Beginner’s Guide in 7 Easy Steps](https://youtu.be/ENrzD9HAZK4?si=Gk0uz_-zErbKaAvu)

## Tutorial básico

### 1. Instalar NodeJS
Descargálo desde el sitio oficial de NodeJS. Usa los dominios oficial para evitar descargar versiones no oficiales o con malware.

Después válida la instalación en terminal:
```bash
node -v 
npm -v
```
### 2. Crea tu proyecto
En tu terminal
```bash
mkdir [nombre de la carpeta para el proyecto]
cd [nombre de la carpeta para el proyecto]
npm init -y
```
Ejemplo:
```bash
mkdir mi-primer-backend
cd mi-primer-backend
npm init -y
```
Eso crea tu archivo ```package.json``` con la configuración básica de tu proyecto y sus dependencias. ```npm``` es el gestor de paquetes estándar de Node.js. 

### 3. Crea el archivo principal
Crea un archivo llamado ```index.js``` en la raíz de tu proyecto. Este será el punto de entrada de tu aplicación.

Dentro del archivo pon este código:
```javascript
const http = require('node:http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola desde Node.js');
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```
Node.js incluye un módulo HTTP que permite crear un servidor web. En este ejemplo, el servidor responde con "Hola desde Node.js" a cualquier solicitud.

### 4. Ejecuta el servidor
En tu terminal:
```bash
node index.js
```
Abre tu navegador en:
```
http://localhost:3000
```
### 5. Agrega scripts útiles
En tu ```package.json```, agrega un script para iniciar tu servidor de forma más sencilla:
```json
{
  "name": "mi-primer-backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  }
}
```
Luego podrás iniciar con:
```bash
npm start
```

### 6. Configurar variables de entorno con .env

Para evitar guardar información sensible o configurable directamente en el código, se utiliza un archivo `.env`.

### 7. Instalación
Primero instala la librería `dotenv`:

```bash
npm install dotenv
```

#### 8. Creación del archivo .env
Luego crea un archivo llamado `.env` en la raíz de tu proyecto y agrega tus variables de entorno:

```plain text
PORT=3000
```

### 9. Configuración en el código
En tu `index.js`, carga las variables de entorno al inicio del archivo:

```javascript
require('dotenv').config();
const http = require('node:http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hola desde Node.js');
});

server.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
```
De esta forma, el puerto del servidor queda configurado desde el archivo `.env`.

### 10. Agregar .env al gitignor (en caso de tenerlo para un repositorio de github)
El archivo `.env` no debe subirse al repositorio, ya que puede contener información sensible.

**Configurar .gitignore**
Crea o edita un archivo .gitignore en la raiz del proyecto y agrega:
```plain text
.env
node_modules/
```

### 11 Estructura básica recomendada
```Plain text
mi-primer-backend/
├── package.json
├── index.js
├── routes/
├── controllers/
└── models/
```
Esto ayuda a organizar rutas, lógica y acceso a datos de forma clara y mantenible.

### 12. Siguiente paso: Express.js
Express.js es un framework minimalista para Node.js que facilita la creación de aplicaciones web y APIs. Permite manejar rutas, middleware y peticiones de forma más sencilla que el módulo HTTP nativo.


### Control de versiones


| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Alejandra Arredondo | Yessica Lora Vázquez | Spike de NodeJS  | 13/03/2026 |
