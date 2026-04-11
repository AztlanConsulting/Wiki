---
title: "Stack de Arquitectura"
sidebar_position: 5
---

# Servidor

## [OVHcloud VPS-2](https://us.ovhcloud.com/vps/)

- 6 vCores
- 12 GB RAM
- 100 GB SSD NVMe
- Unlimited Traddic
- 1 Gbps public bandwidth

[ADR-1 Servidor]()

# Sistema Operativo

## [Ubuntu Linux](https://ubuntu-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc)

Sistema operativo libre y de código abierto compatible con una amplia gama de arquitecturas de hardware y dispositivos.

[ADR-02]()

# Dominio

Contratado por medio de [Hostinger](https://www.hostinger.com/mx/dominios)

# Seguridad

## [Cloudfare](https://www.cloudflare.com/es-es/application-services/products/waf/)

Red global que actúa como intermediario inteligente entre un sitio web y sus visitantes. Ofrece aceleración, seguridad (protección DDoS) y fiabilidad mediante una CDN, mejorando la velocidad, optimizando el tráfico y reduciendo la carga del servidor original.

### SLL

Es un protocolo criptográfico que cifra la comunicación entre el navegador de un usuario y un servidor web- HTTPS

### WAF

Utiliza el aprendizaje automático para bloquear automáticamente las amenazas emergentes en tiempo real.

### DDos

Utiliza herramientas de ciberseguridad para detectar, filtrar y mitigar el tráfico malicioso

[ADR-03](../Artefactos_Arquitectura/ADRs/ADR-03%20Firewall.md)

# Backend

### [Node.js](http://Node.js)

Entorno de ejecución para JavaScript en el servidor, maneja las solicitudes HTTP y la lógica de negocio.<br/><br/>
[ADR-04]()

### [Express.js](http://Express.js)

Framework para Node.js que facilita la creación de servidores web y la definición de rutas de API.<br/><br/>
[ADR-05]()

# Frontend

### [React js](https://react.dev/)

Biblioteca de JavaScript para construir interfaces de usuario. Utilizada para gestionar el estado y las interacciones en la aplicación web.

[ADR-06]()

### [Tailwind](https://tailwindcss.com/)

Framework de estilos para desarrollo rápido con mucha flexibilidad para generar interfaces.

# Base de datos

### [MongoDB](https://www.mongodb.com/)

Base de datos basado en colecciones, desarrollo rápido para almacenar información no estructurada o poco estructurada. Ideal para las imágenes, talleres e imágenes.

### [MongoDB](https://www.mongodb.com/)

Base de datos basado en colecciones, desarrollo rápido para almacenar información no estructurada o poco estructurada. Ideal para las imágenes, talleres e imágenes.

[ADR-07]()

# APIs

### [Meta API]()

[ADR-08]()

| Version | Creado por:                                    | Auditado por:   | Descripción | Fecha      |
| ------- | ---------------------------------------------- | --------------- | ----------- | ---------- |
| 1.0     | Yessica Lora, Fatima Figueroa, Kamila Martinez | Fernanda Valdez |             | 10/03/2026 |
