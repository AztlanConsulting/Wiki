---
title: "Stack Recomendado"
---

# Servidor
## [Plan KVM 2 de Hostinger](https://www.hostinger.com/support/6976044-parameters-and-limits-of-hosting-plans-in-hostinger/#h_0fbdbe1ac8)
* 2 núcleos de vCPU cores
* 8 GB RAM
* 100 GB de espacio en disco NVMe
* 8 TB de ancho de banda

[ADR-01](../Artefactos_Arquitectura/ADRs/ADR-01%20Servidor%20Hostinger.md)


# Sistema Operativo
## [Ubuntu Linux](https://ubuntu-com.translate.goog/?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc)
Sistema operativo libre y de código abierto compatible con una amplia gama de arquitecturas de hardware y dispositivos.

[ADR-02](../Artefactos_Arquitectura/ADRs/ADR-02%20SistemaOperativo.md)

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
Entorno de ejecución para JavaScript en el servidor, maneja las solicitudes HTTP y la lógica de negocio.

### [Express.js](http://Express.js)
Framework para Node.js que facilita la creación de servidores web y la definición de rutas de API.

# Frontend
### [React js](https://react.dev/)
Biblioteca de JavaScript para construir interfaces de usuario. Utilizada para gestionar el estado y las interacciones en la aplicación web.

### [Bulma](https://bulma.io/)
Bulma es un framework CSS gratuito y de código abierto basado en Flexbox y desarrollado con Sass. Es 100 % responsivo, totalmente modular y está disponible de forma gratuita.

### [Sweet Alert](https://sweetalert2.github.io/)
Biblioteca de JavaScript que reemplaza la función alert() tradicional de JavaScript.

# Base de datos
### [Postgresql](https://www.postgresql.org/)
 Crear tablas para guardar datos, permite realizar consultas para encontrar información específica y asegura que los datos sigan reglas estrictas para evitar errores o duplicados

Tiene herramientas nativas como Row Level Security que sirven para reforzar autorización a nivel de datos

# APIs
### [Google Oath](https://developers.google.com/identity/protocols/oauth2/web-server?hl=es-419)
Verifica la identidad del usuario y le pregunta qué permisos está dispuesto a conceder a una aplicación externa.

[ADR-08](../Artefactos_Arquitectura/ADRs/ADR-8%20Google%20Oath.md)

### [Google Gmail](https://developers.google.com/workspace/gmail/api/reference/rest?hl=es-419)
Busca correos específicos, organiza mensajes mediante etiquetas, redacta respuestas automáticas y envía notificaciones sin que el usuario tenga que escribir el correo manualmente.

[ADR-09](../Artefactos_Arquitectura/ADRs/ADR-09%20Gmail%20API.md)

### [Google Sheets](https://developers.google.com/workspace/sheets?hl=es-419)
Crea hojas nuevas, edita valores en tiempo real, aplica formatos y extrae listas de datos para usarlas en otros lugares.

[ADR-10](../Artefactos_Arquitectura/ADRs/ADR-10%20Google%20Sheets%20API.md)

Categorias

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Yessica Lora, Fatima Figueroa, Kamila Martinez | Fernanda Valdez |    | 10/03/2026 |