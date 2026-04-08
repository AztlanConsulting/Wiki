---
title: "SPK04 - Disponibilidad"
sidebar_position: 4
---

**Duración:** 1 día  
**Funcionalidad:** Monitoreo externo de disponibilidad del sistema mediante checks automáticos a endpoints HTTP (`/health`)

## Beneficios

- Configuración muy rápida, normalmente en 10 a 15 minutos.
- No requiere infraestructura propia.
- Permite monitoreo externo real del sistema.
- Proporciona un dashboard listo para usar.
- Permite alertas automáticas por correo, Telegram u otros canales.
- El plan gratuito permite comenzar sin costo.

## Desventajas

- Tiene menor precisión en el plan gratuito, ya que los checks suelen ejecutarse cada 5 minutos.
- No separa automáticamente horario laboral y no laboral.
- Dependes de un servicio externo.
- El nivel de personalización es más limitado que en una solución propia de observabilidad.

## Facilidad de aprendizaje

**Fácil**

## Recursos

- [UptimeRobot](https://uptimerobot.com/)
- [Video en YouTube sobre UptimeRobot](https://youtu.be/m3ZXNYcISFs?si=v7-dA3Z3vE2yGrPJ)

## Tutorial básico

### 1. Preparar endpoint `/health` en Node.js

Tu API debe tener un endpoint simple:

```javascript
app.get('/health', async (req, res) => {
  try {
    // Simulacion basica; despues puedes agregar DB, servicios, etc.
    const isHealthy = true;

    if (!isHealthy) {
      return res.status(503).json({ status: 'down' });
    }

    res.json({ status: 'ok' });
  } catch {
    res.status(503).json({ status: 'down' });
  }
});
```

Regla importante:

- `200` = disponible
- `503` = no disponible

### 2. Desplegar tu API

Necesitas que el endpoint sea accesible públicamente.

Ejemplo:

```text
http://tu-api.com/health
```

Si estás en local puedes usar:

- `ngrok` de forma temporal
- o desplegar en plataformas como Railway o Render

### 3. Crear cuenta en UptimeRobot

Pasos básicos:

- registrarse en UptimeRobot
- confirmar el correo electrónico

### 4. Crear un monitor

Dentro del dashboard selecciona:

- Tipo: `HTTP(s)`
- Nombre: `API Health`
- URL: `http://tu-api.com/health`
- Frecuencia: `5 minutos` en plan gratuito
- Timeout: valor por defecto

### 5. Configurar alertas

Selecciona al menos:

- email

Opcionalmente también puedes configurar:

- Telegram
- Slack

Esto enviará alerta cuando:

- el sistema caiga
- el sistema vuelva a estar disponible

### 6. Validar funcionamiento

Simula una caída:

```javascript
const isHealthy = false;
```

Resultado esperado:

- UptimeRobot detecta el fallo
- marca el estado como `DOWN`
- envía una alerta
- registra el downtime

## Uso de múltiples monitores

Puedes crear varios monitores para distintos componentes. Ejemplo:

- `/api/health`
- `/auth/health`
- `/frontend`

Cada uno es un monitor independiente.

El plan gratuito permite:

- hasta `50` monitores

## Resultado esperado del spike

Al finalizar deberías tener:

- endpoint `/health` funcional
- monitor activo en UptimeRobot
- alertas configuradas
- métricas de uptime visibles
- evidencia de caídas detectadas

### Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Manuel Bajos | Andre | Spike de monitoreo de disponibilidad con UptimeRobot | 07/04/2026 |
