---
title: "Prueba de Arquitectura"
sidebar_position: 4
---

### Proposito "de la Prueba de Arquitectura Completa"

Verificar que la solución propuesta es realista, la podemos codificar o detectar problemas antes de empezar el desarrollo de la aplicación.

### Arquitectura "Completa"

---

### Prueba Express

#### Propósito "De la Sub-prueba"

Implementar backend del proyecto

#### Arquitectura "De la Sub-prueba"

"EJEMPLO" [Node.js](https://nodejs.org/es) y [Express](https://expressjs.com/)

#### Guías, recursos y tutoriales

- [Paquete de NPM de express](https://www.npmjs.com/package/express)
- [BodyParser](https://expressjs.com/en/resources/middleware/body-parser.html)

#### Prueba - "¿Qué pruebas se le realizaron de node?"

Se realizó la implementación de node.js y express para la creación de la API para el backend, se realizaron peticiones a la API para verificar su correcto funcionamiento. A su vez, se desplego el proyecto en el servidor de SOS.

#### Evidencia de documentación "Del proceso y de los resultados de las pruebas"

- ["Ejemplo" Documentación de la creación de la API con Express y Node.js]()
- ["Ejemplo" Documentación del despliegue del repositorio en el servidor]()

---

### Prueba React 
#### Propósito "De la Sub-prueba"
Provide a scalable and fast frontend foundation to build the user interface, enabling interaction with backend services.

#### Arquitectura "De la Sub-prueba"
Frontend framework and tooling:
React + Vite + TypeScript
-React: UI library for building component-based interfaces
-Vite: Development server and build tool for fast performance
-TypeScript: Static typing for better maintainability and scalability
The project runs locally using Vite’s dev server and is structured to support modular growth.

#### Guías, recursos y tutoriales
- [Vite documentation](https://vite.dev)
- [React documentation](https://react.dev)
- [TypeScript documentation](https://www.typescriptlang.org)

#### Prueba 1 - "¿Qué pruebas se le realizaron?"
This test validates that the React application is correctly installed, configured, and running.
1. Installed Node.js (required for Vite and npm)
2. Created the project using Vite (npm create vite@latest)
3. Selected React + TypeScript template
4. Installed dependencies using npm install
5. Configured project files:
vite.config.ts
tsconfig.json and related configs
6. Set up base React structure:
main.tsx (entry point)
App.tsx (main component)
7. Added basic styles (index.css, App.css)
8. Ran the development server with npm run dev
9. Verified that the app runs correctly in the browser (default Vite + React page)

#### Evidencia de documentación "Del proceso y de los resultados de las pruebas"

- [Documentación de implementación:](https://docs.google.com/document/d/1t8WiHVRm9_-q4Yo58PJd_xRQjdM5HxtIswBkeUED3XI/edit?usp=sharing)
---

### Prueba Weaviate

#### Propósito de la base de datos vectoriales

Identificar imágenes similares para encontrar perros similares encontrados a los perros que se están buscando.

#### Arquitectura

Motor de la base de datos:
[Weaviate](https://weaviate.io/)
Corre en un contenedor de docker que tiene una instancia de pytorch para manejar el sistema de embedido de imágenes y la base de datos vectorial con su API.

#### Guías, recursos y tutoriales

- [Guía de instalación](https://docs.google.com/document/d/1aMaD4iBeetNsLpeYxVzSar4iwpiIMb_x_Xa2hh7EiHU/edit?usp=sharing)
- [Guía para utilizarla](https://docs.google.com/document/d/1aMaD4iBeetNsLpeYxVzSar4iwpiIMb_x_Xa2hh7EiHU/edit?usp=sharing)

#### Prueba 1 - "Subir imágenes y recuperar imágenes similares"

La prueba incluye ambas partes para comprobar funcionalidad, insertar las imágenes al igual que recuperarlas para su uso.

1. Se instaló docker
2. Se instaló y contenedor de weaviate y se inició
3. Se utilizó la estructura MVC para crear las rutas y controladores lógicos que interactuarían con la base de datos
4. Se generó la conexión con la base de datos
5. Se creó el schema de las mascotas en la base de datos
6. Se generó la interfaz para subir imágenes en la base de datos
7. Se creó la interfaz para recuperar las 10 imágenes más cercanas a la imagen proporcionada como parámetro de búsqueda

#### Evidencia de documentación "Del proceso y de los resultados de las pruebas"

- [Documentación de implementación](https://docs.google.com/document/d/1aMaD4iBeetNsLpeYxVzSar4iwpiIMb_x_Xa2hh7EiHU/edit?usp=sharing)

---

### Prueba Stripe

#### Propósito

Implementar el sistema de pagos en el front y backend del proyecto utilizando Stripe, permitiendo procesar transacciones de forma segura y confiable.

#### Arquitectura

Se implementó una arquitectura full-stack utilizando las siguientes herramientas:

1. Node.js + Express en el backend
2. React en el frontend
3. API de Stripe para el procesamiento de pagos

Flujo general:

1. El frontend (React) solicita al backend la creación de un Payment Intent
2. El backend genera el client_secret usando Stripe
3. El frontend utiliza Stripe Elements para recolectar datos de pago
4. Se confirma el pago desde el frontend
5. El backend recibe eventos mediante webhooks para validar el resultado

#### Guías, recursos y tutoriales

1. Stripe Docs: https://stripe.com/docs
2. Stripe Elements: https://stripe.com/docs/elements
3. React Stripe: https://stripe.com/docs/stripe-js/react
4. Webhooks: https://stripe.com/docs/webhooks

#### Prueba - "¿Qué pruebas se le realizaron de Stripe?"

Frontend:

1. Integración de Stripe Elements para capturar datos de pago
2. Renderizado correcto del componente PaymentElement
3. Manejo de estados (actualmente solo success)
4. Simulación de pagos con tarjetas de prueba y Oxxo pay

Backend:

1. Creación de Payment Intents
2. Validación de datos enviados desde el frontend
3. Manejo de errores en la APIs
4. Conexión con la base de datos

Integración completa:

1. Comunicación correcta entre React y Express
2. Confirmación de pagos exitosos y fallidos
3. Recepción y validación de eventos mediante webhooks (payment_intent.succeeded, pending, etc.)
4. Pruebas con métodos de pago alternativos como OXXO
5. Pruebas en entorno local

#### Evidencia de documentación "Del proceso y de los resultados de las pruebas"

- [Documentación de implementación](https://docs.google.com/document/d/1VJjMi_xsVCuWwGWMb3bzv2o9PokONGD8G2RJ61NqOxs/edit?usp=sharing)


| Version | Creado por:      | Auditado por:       | Descripción | Fecha      |
| ------- | ---------------- | ------------------- | ----------- | ---------- |
| 1.0     | Yessica Lora     | Fernanda Valdez     |             | 10/03/2026 |
| 1.0     | Yessica Lora     | Alejandra Arredondo |             | 21/03/2026 |
| 1.1     | Frida Xcaret |                     |             | 20/03/2026 |
| 1.2     | Santiago Alducin |                     |             | 07/04/2026 |
| 1.3     | Dongju Mun | Frida Xcaret          |    Prueba de arquitectura de Stripe         | 09/04/2026 |
