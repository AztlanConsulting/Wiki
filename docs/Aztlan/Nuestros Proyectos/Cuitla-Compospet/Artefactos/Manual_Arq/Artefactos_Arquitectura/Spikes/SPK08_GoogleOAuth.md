---
title: "SPK08 - Google OAuth 2.0"
sidebar_position: 8
---

**Duración:** 1 día  
**Funcionalidad:** Autenticación y Autorización (SSO)

## Beneficios

- **Seguridad:** No se manejan contraseñas; utiliza tokens temporales.
- **Estandarizado:** Protocolo robusto y ampliamente documentado.
- **Scopes:** Permisos granulares para acceder solo a lo necesario (ej. solo lectura en Sheets).
- **Gestión de Sesiones:** Uso de *Refresh Tokens* para acceso persistente sin re-logueo.
- **UX:** Mejora la conversión al permitir "Iniciar sesión con Google".

## Desventajas

- **Dependencia:** Sujeto a la disponibilidad y cambios de políticas de Google.
- **Complejidad de Tokens:** Requiere almacenamiento seguro para evitar filtraciones de tokens de actualización.
- **Configuración:** Sensible a errores en la definición de URIs de redirección.

## Facilidad de aprendizaje

**Media**

## Recursos

- [Documentación oficial de Google Identity](https://developers.google.com/identity/protocols/oauth2)
- [Guía: Google OAuth2 con JS y Bun](https://dev.to/idrisakintobi/a-step-by-step-guide-to-google-oauth2-authentication-with-javascript-and-bun-4he7)
- [Google Cloud Console](https://console.cloud.google.com/)
- [OAuth 2.0 Simplified](https://www.oauth.com/)

## Tutorial: Implementación básica

> Configuración técnica para habilitar Google OAuth en una aplicación.

### 1. Configuración en la Consola
1. Entrar a [Google Cloud Console](https://console.cloud.google.com/).
2. Crear un proyecto y configurar la **Pantalla de consentimiento OAuth**.
3. En **Credenciales**, crear un "ID de cliente de OAuth 2.0".
4. Definir las **URIs de redireccionamiento autorizadas** (ej. `http://localhost:3000/callback`).

### 2. Flujo de Intercambio de Código
El flujo estándar (Authorization Code Flow) consiste en obtener un código para luego cambiarlo por un token.

#### Paso A: Redirigir al usuario
```js
const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?
  client_id=TU_CLIENT_ID&
  redirect_uri=TU_REDIRECT_URI&
  response_type=code&
  scope=https://www.googleapis.com/auth/userinfo.email`;

window.location.href = authUrl;
```

#### Paso B: Intercambiar código por Token
```js
// En tu servidor/callback al recibir el ?code=...
const response = await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST',
  body: JSON.stringify({
    code: codeRecibido,
    client_id: 'TU_CLIENT_ID',
    client_secret: 'TU_CLIENT_SECRET',
    redirect_uri: 'TU_REDIRECT_URI',
    grant_type: 'authorization_code'
  })
});

const { access_token, refresh_token } = await response.json();
```
### Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Kamila Martínez | Yessica Lora | Spike de Google OAuth | 18/03/2026 |