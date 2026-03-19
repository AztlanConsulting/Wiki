---
title: "SPK09 - Gmail API"
sidebar_position: 9
---

**Duración:** 1 día  
**Funcionalidad:** Gestión de correos electrónicos 

## Beneficios

- **Automatización:** Envío de notificaciones o reportes sin intervención manual.
- **Filtros Avanzados:** Uso de la misma sintaxis de búsqueda de Gmail (ej. `has:attachment`, `from:nombre`).
- **Escalabilidad:** Maneja grandes volúmenes de datos mediante paginación y cuotas generosas.
- **Seguridad:** Integración nativa con los tokens de Google OAuth 2.0.

## Desventajas

- **Límites de Cuota:** Google penaliza el uso excesivo (especialmente el envío masivo de spam).
- **Formato MIME:** Enviar correos con formato complejo o archivos adjuntos requiere codificación en Base64.
- **Privacidad:** Requiere una revisión de seguridad de Google si la app se vuelve pública y usa *scopes* sensibles.

## Facilidad de aprendizaje

**Media**

## Recursos

- [Documentación oficial de Gmail API](https://developers.google.com/gmail/api/guides)
- [Explorador de APIs (Probar métodos)](https://developers.google.com/gmail/api/reference/rest)
- [Librería cliente para Node.js](https://github.com/googleapis/google-api-nodejs-client)
- [Guía de cuotas y límites](https://developers.google.com/gmail/api/reference/quota)

## Tutorial: Conceptos Clave

> Estructura técnica para interactuar con la bandeja de entrada.

### 1. Scopes Recomendados
* `https://www.googleapis.com/auth/gmail.send` (Solo enviar).
* `https://www.googleapis.com/auth/gmail.readonly` (Solo leer).

### 2. Ejemplo: Enviar un correo simple (Node.js)
Para enviar, el mensaje debe estar en formato **RFC 2822** y codificado en `base64url`.

```javascript
const { google } = require('googleapis');
const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

const makeBody = (to, from, subject, message) => {
    const str = [
        `To: ${to}`,
        `From: ${from}`,
        `Subject: ${subject}`,
        '',
        message
    ].join('\n');

    return Buffer.from(str).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
};

const raw = makeBody('cliente@ejemplo.com', 'tu-app@gmail.com', 'Aviso Importante', 'Contenido del mensaje');

await gmail.users.messages.send({
    userId: 'me',
    requestBody: { raw }
});
```

### 3. Diferencias de Recursos

| Recurso | Descripción | Uso común |
| :--- | :--- | :--- |
| **Message** | El objeto individual del correo. | Leer el contenido de un email específico. |
| **Thread** | Conjunto de mensajes relacionados. | Agrupar respuestas de una conversación. |
| **Label** | Etiquetas del sistema o usuario. | Organizar correos (Inbox, Spam, Hecho). |
| **Draft** | Borradores de mensajes. | Preparar correos para revisión posterior. |


### Control de versiones
| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Kamila Martínez | Yessica Lora | Spike de Gmail API | 18/03/2026 |
