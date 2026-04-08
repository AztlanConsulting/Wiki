---
title: "SPK01 - Trazabilidad"
sidebar_position: 1
---

**Duración:** 2 a 4 días  
**Funcionalidad:** Registro de logs en Node.js disparado desde la API

## Beneficios

- Registrar logs desde la API permite capturar más contexto que hacerlo solo en base de datos, por ejemplo `userId`, `role`, `requestId`, `endpoint`, método HTTP, estado de la respuesta, tiempo de ejecución y errores de negocio.
- Permite registrar eventos que la base de datos no ve, como intentos de login fallidos, accesos denegados, validaciones fallidas, errores `500`, tokens inválidos o requests sospechosas.
- Facilita integrar la aplicación con plataformas de observabilidad como ELK, Datadog u OpenTelemetry si se usa un formato consistente.
- OWASP recomienda que el `application logging` esté presente para eventos de seguridad relevantes.
- NIST reconoce los logs de aplicación como una fuente formal de información de seguridad y auditoría.

## Desventajas

- Depende de que el desarrollador recuerde registrar eventos en los puntos correctos del flujo.
- Puede generar demasiado ruido si se registran eventos sin criterio.
- Existe riesgo de seguridad si se guardan contraseñas, secretos, tokens o información sensible en los logs.
- Si el formato no es consistente, después se vuelve difícil buscar, correlacionar eventos o crear alertas útiles.
- Requiere diseño y mantenimiento continuo para asegurar consistencia entre rutas, controladores y servicios.

## Facilidad de aprendizaje

**Media**

## Qué dicen los estándares internacionales

- **OWASP** indica que el `application logging` debe incluirse para eventos de seguridad y que los logs deben ayudar a responder quién hizo qué, cuándo, dónde y con qué resultado.
- **OWASP Logging Vocabulary** recomienda usar nombres de eventos consistentes para simplificar monitoreo y alertas.
- **NIST SP 800-92** define la gestión de logs como una práctica formal y remarca que los logs de aplicación son una fuente relevante de auditoría y seguridad.
- **OWASP Microservices Security Cheat Sheet** recomienda publicar logs en formato estructurado como JSON o CSV y adjuntar contexto adicional en cada evento.
- **OpenTelemetry** propone convenciones semánticas para estandarizar atributos entre logs, métricas y trazas.

## Recomendación de diseño

Para este proyecto, la mejor práctica es implementar el logging por capas:

- Middleware global para registrar cada request HTTP importante.
- Logs de negocio en servicios o controladores para eventos relevantes.
- Logs de seguridad para autenticación, autorización y acciones administrativas.
- Error handler centralizado para registrar excepciones.

Esto se alinea mejor con OWASP y NIST que depender solo de la base de datos, porque permite capturar eventos significativos con estructura consistente y contexto suficiente.

## Estructura recomendada de un log

Usa logs estructurados en JSON con campos fijos. Ejemplo:

```json
{
  "timestamp": "2026-04-05T20:30:00.000Z",
  "level": "INFO",
  "event": "user_login_success",
  "message": "Inicio de sesión exitoso",
  "service": "rchq-back",
  "requestId": "req-123",
  "userId": "42",
  "role": "admin",
  "method": "POST",
  "route": "/users/login",
  "statusCode": 200,
  "ip": "192.168.1.5",
  "durationMs": 45
}
```

## Eventos que sí deberías registrar

OWASP recomienda registrar al menos eventos de:

- autenticación
- autorización
- administración
- errores relevantes
- acciones sobre datos sensibles
- fallos de validación o intentos sospechosos

Ejemplos aterrizados al proyecto:

- `user_login_success`
- `user_login_failed`
- `token_invalid`
- `access_denied`
- `employee_created`
- `employee_updated`
- `employee_blacklisted`
- `vacation_approved`
- `event_created`
- `role_changed`
- `server_error`

## Eventos que no deberías registrar tal cual

No guardes en claro:

- contraseñas
- tokens JWT completos
- secretos
- session IDs completos
- información médica o datos sensibles innecesarios
- payloads completos si contienen información privada

## Recursos

- [OWASP Logging Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
- [OWASP Microservices Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Microservices_Security_Cheat_Sheet.html)
- [OWASP Logging Vocabulary Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Vocabulary_Cheat_Sheet.html)
- [NIST SP 800-92 Guide to Computer Security Log Management](https://csrc.nist.gov/pubs/sp/800/92/final)
- [OpenTelemetry Semantic Conventions](https://opentelemetry.io/docs/specs/semconv/)
- [Heroku Logging Best Practices](https://devcenter.heroku.com/articles/logging)

## Tutorial básico

### 1. Instala una librería de logging

Una opción común y moderna en Node.js es `pino`. Para APIs con Express también resulta útil `pino-http`.

```bash
npm install pino pino-http
```

### 2. Crea un logger central

Crea un archivo como `src/utils/logger.js`:

```javascript
const pino = require('pino');

const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  base: {
    service: 'rchq-back'
  }
});

module.exports = logger;
```

Esto ayuda a centralizar el formato y el nivel de logs para mantener consistencia.

### 3. Agrega middleware HTTP de logging

En `index.js`:

```javascript
const crypto = require('node:crypto');
const express = require('express');
const pinoHttp = require('pino-http');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());

app.use(
  pinoHttp({
    logger,
    genReqId: function (req) {
      return req.headers['x-request-id'] || crypto.randomUUID();
    }
  })
);
```

Esto permite generar un `requestId` y registrar automáticamente información de cada request.

### 4. Registra eventos de negocio desde controladores o servicios

Ejemplo en login:

```javascript
const logger = require('../utils/logger');

exports.loginFunction = async (req, res, next) => {
  const { username } = req.body;

  try {
    const user = await findUserByUsername(username);

    if (!user) {
      logger.warn({
        event: 'user_login_failed',
        message: 'Usuario no encontrado',
        username,
        ip: req.ip,
        requestId: req.id
      });

      return res.status(401).json({ message: 'Invalid credentials' });
    }

    logger.info({
      event: 'user_login_success',
      message: 'Inicio de sesión exitoso',
      userId: user.id,
      role: user.role,
      ip: req.ip,
      requestId: req.id
    });

    return res.json({ message: 'Login successful' });
  } catch (error) {
    next(error);
  }
};
```

### 5. Registra accesos denegados en RBAC o ABAC

En tu middleware de autorización:

```javascript
const logger = require('../utils/logger');

exports.requireRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) {
      logger.warn({
        event: 'access_denied',
        message: 'Usuario no autenticado',
        requestId: req.id,
        route: req.originalUrl,
        method: req.method,
        ip: req.ip
      });

      return res.status(401).json({ message: 'User not authenticated' });
    }

    if (!allowedRoles.includes(req.user.role)) {
      logger.warn({
        event: 'access_denied',
        message: 'Rol insuficiente',
        userId: req.user.id,
        role: req.user.role,
        allowedRoles,
        requestId: req.id,
        route: req.originalUrl,
        method: req.method,
        ip: req.ip
      });

      return res.status(403).json({ message: 'Forbidden' });
    }

    next();
  };
};
```

### 6. Registra errores en un error handler central

Ejemplo:

```javascript
const logger = require('../utils/logger');

function errorHandler(err, req, res, next) {
  logger.error({
    event: 'server_error',
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    requestId: req.id,
    route: req.originalUrl,
    method: req.method,
    ip: req.ip,
    userId: req.user?.id
  });

  res.status(500).json({
    status: 500,
    message: 'Internal Server Error'
  });
}

module.exports = errorHandler;
```

### 7. Estandariza vocabulario

Define una lista de eventos permitidos en un archivo como `src/constants/logEvents.js`:

```javascript
module.exports = {
  USER_LOGIN_SUCCESS: 'user_login_success',
  USER_LOGIN_FAILED: 'user_login_failed',
  ACCESS_DENIED: 'access_denied',
  EMPLOYEE_CREATED: 'employee_created',
  EMPLOYEE_UPDATED: 'employee_updated',
  SERVER_ERROR: 'server_error'
};
```

Esto ayuda a mantener nombres consistentes y reutilizables para monitoreo y alertamiento.

### 8. Decide dónde guardar los logs

Tienes tres caminos comunes:

- escribir a consola y dejar que Docker, PM2 o la nube los recoja
- guardar también en archivo
- mandar a un agregador o a una base de datos aparte

La práctica recomendada suele ser escribir a `stdout` o `stderr` y dejar que la infraestructura se encargue de capturarlos.

### 9. Si decides guardar en PostgreSQL, usa una tabla simple y clara

Ejemplo:

```sql
CREATE TABLE app_logs (
  id BIGSERIAL PRIMARY KEY,
  timestamp TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  level TEXT NOT NULL,
  event TEXT NOT NULL,
  message TEXT,
  service TEXT,
  request_id TEXT,
  user_id TEXT,
  role TEXT,
  method TEXT,
  route TEXT,
  status_code INT,
  ip INET,
  metadata JSONB
);
```

### 10. Crea un log service

Ejemplo:

```javascript
const pool = require('../config/db');

async function saveLog(log) {
  await pool.query(
    `INSERT INTO app_logs
    (level, event, message, service, request_id, user_id, role, method, route, status_code, ip, metadata)
    VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12)`,
    [
      log.level,
      log.event,
      log.message,
      log.service,
      log.requestId,
      log.userId,
      log.role,
      log.method,
      log.route,
      log.statusCode,
      log.ip,
      log.metadata || {}
    ]
  );
}

module.exports = { saveLog };
```

### 11. No bloquees toda la request por culpa del logger

Idealmente, si guardar el log falla, no debería tumbar una operación normal del negocio salvo que se trate de auditoría crítica.

### 12. Prueba casos reales

Prueba por lo menos:

- login exitoso
- login fallido
- token inválido
- acceso denegado
- creación de empleado
- actualización de rol
- error `500`
- request sin body válido

### 13. Estructura sugerida en tu proyecto

```plain text
src/
├── utils/
│   └── logger.js
├── constants/
│   └── logEvents.js
├── services/
│   └── log.service.js
├── middleware/
│   ├── auth.js
│   ├── rbac.js
│   └── ErrorHandler.js
├── controller/
│   └── user.controller.js
├── router/
│   └── user.route.js
└── index.js
```

## Recomendación final

Para este proyecto sí conviene registrar logs desde código en Node.js disparados por la API, porque ahí se tiene el contexto completo de la request, del usuario y de la lógica de negocio.

La recomendación práctica es:

- usar JSON estructurado
- registrar desde middleware, controladores y error handler
- estandarizar eventos
- no guardar secretos
- decidir después si se envían a consola, PostgreSQL o a una plataforma externa

### Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Manuel Bajos Rivera| Oswaldo | Spike de trazabilidad con logging en Node.js | 07/04/2026 |
