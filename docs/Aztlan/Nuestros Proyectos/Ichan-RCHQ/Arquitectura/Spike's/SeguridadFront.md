---
title: "SPK09 - Seguridad Frontend"
sidebar_position: 9
---

**Duración:** 1 a 2 días  
**Funcionalidad:** Guía general y decisiones de seguridad para frontend en aplicaciones web modernas

## Objetivo

Documento de referencia para definir cómo gestionar sesiones, credenciales y seguridad en una aplicación web moderna, por ejemplo una SPA con React, incluyendo criterios de decisión y prácticas recomendadas.

## 1. Qué puede y qué no puede hacer el frontend

El código que corre en el cliente:

- puede ocultar UI, manejar estado y adjuntar tokens
- no puede garantizar seguridad

Cualquier usuario puede:

- inspeccionar requests
- reutilizar tokens
- llamar directamente a la API

Principio clave:

- el backend es la autoridad y debe validar autenticación, autorización y datos en cada operación sensible

## 2. Almacenamiento del token

### `localStorage` o `sessionStorage`

Ventajas:

- simple de implementar
- integración directa con headers como `Authorization`

Riesgos:

- vulnerable a XSS porque el token es accesible por JavaScript

### Cookies `HttpOnly`

Configuración recomendada:

- `HttpOnly`
- `Secure`
- `SameSite`

Ventajas:

- el token no es accesible desde JavaScript
- reduce riesgo de robo por XSS

Consideraciones:

- requiere protección contra CSRF
- agrega complejidad en backend y configuración CORS

### Solo memoria

Ventajas:

- no persistente, por lo tanto con menor exposición

Desventajas:

- la experiencia de usuario puede ser más compleja por re-login o flujos de refresh

### Comparación general

| Enfoque | Riesgo XSS | Complejidad | Riesgo CSRF |
|---------|------------|-------------|-------------|
| `localStorage` | Alto | Baja | No |
| Cookies `HttpOnly` | Menor | Media | Sí |
| Solo memoria | Medio | Media | Depende |

## 3. Comunicación con el API

### HTTPS

- obligatorio en producción
- protege credenciales y tokens en tránsito

### CORS

- se configura en backend
- define qué orígenes pueden consumir la API
- no es una defensa de seguridad por sí misma

### Header de autorización

```http
Authorization: Bearer <token>
```

Flujo:

- el cliente envía el token
- el servidor valida firma, expiración y permisos

## 4. Caducidad y revocación de tokens

Los JWT expiran mediante el campo `exp`, pero permanecen en el cliente hasta eliminarse.

Buenas prácticas:

- access tokens de vida corta
- refresh tokens con rotación
- revocación en backend mediante blacklist o cambio de clave

El frontend debe reaccionar a errores `401 Unauthorized`.

## 5. Protección de rutas en la SPA

Patrón común:

- rutas protegidas que redirigen al login si no hay sesión

Limitación:

- tener token no significa que el token siga siendo válido

Mejores prácticas:

- validar expiración para mejorar UX
- manejar `401` globalmente
- limpiar sesión automáticamente
- redirigir a login cuando corresponda

## 6. XSS y superficie de ataque

Buenas prácticas:

- evitar HTML sin sanitizar
- evitar `dangerouslySetInnerHTML`
- mantener dependencias actualizadas
- reducir scripts de terceros innecesarios

## 7. Content Security Policy (CSP)

### ¿Qué es?

CSP es un header HTTP de seguridad que indica al navegador qué recursos puede cargar o ejecutar.

Ejemplo:

```http
Content-Security-Policy: default-src 'self';
```

### Objetivo

- mitigar XSS limitando la ejecución de scripts no autorizados

### Ejemplo

```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self' https://trusted-cdn.com;
  object-src 'none';
```

### Buenas prácticas con CSP

- evitar scripts inline
- usar `nonce` o `hash` en scripts permitidos
- restringir al máximo orígenes externos
- aplicar CSP junto con sanitización como defensa en profundidad

### Consideraciones

- puede romper aplicaciones que usan `eval` o scripts inline
- debe implementarse y probarse progresivamente

## 8. Herramientas y librerías

| Ámbito | Ejemplos |
|--------|----------|
| HTTP cliente | `fetch`, `axios`, `ky` |
| JWT decode | `jwt-decode` |
| Auth | `Auth0`, `Clerk`, `Firebase Auth`, `Keycloak` |
| Seguridad | `CSP`, `npm audit`, `Snyk` |

## 9. Decisiones de arquitectura recomendadas

### Gestión de sesión

- usar cookies `HttpOnly` + `Secure` + `SameSite`
- evitar `localStorage` para tokens sensibles

Motivo:

- reduce el impacto de XSS

### Ciclo de vida de tokens

- access tokens cortos
- refresh tokens con rotación

Motivo:

- limitar exposición ante fuga

### Protección CSRF

- usar `SameSite` en cookies
- agregar token anti-CSRF si aplica

### Comunicación con API

- HTTPS obligatorio
- validación completa en backend

### Manejo de sesión en frontend

- interceptor global de errores `401`
- limpieza automática de sesión

### Protección XSS

- evitar HTML dinámico inseguro
- implementar CSP

## 10. Comparación de decisiones clave

| Decisión | Opción elegida | Alternativa | Motivo |
|---------|----------------|-------------|--------|
| Token storage | Cookies `HttpOnly` | `localStorage` | Mitigación de XSS |
| Auth flow | JWT + refresh | sesión tradicional | Escalabilidad |
| Protección XSS | CSP + sanitización | solo sanitización | Defensa en profundidad |

## 11. Principios clave

- el servidor es la fuente de verdad
- nunca confiar en el frontend para seguridad
- minimizar exposición de tokens
- aplicar defensa en profundidad
- diseñar para fallo seguro (`fail securely`)

## Recomendación final

Este documento define una base de seguridad recomendada y adaptable según las necesidades del proyecto. Para una SPA moderna, la opción más sólida suele ser combinar cookies `HttpOnly`, access tokens de vida corta, refresh tokens con rotación, validación estricta en backend y mitigaciones activas contra XSS y CSRF.

### Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Andre| Manuel Bajos | Guía general de seguridad en frontend y decisiones de arquitectura | 07/04/2026 |
