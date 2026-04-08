---
title: "SPK05 - Disponibilidad con Better Stack"
sidebar_position: 5
---

**Duración:** 1 día  
**Funcionalidad:** Monitoreo externo de disponibilidad mediante verificaciones HTTP al endpoint `/health`, con alertas automáticas e historial de incidentes

## Beneficios

- Configuración rápida.
- No requiere infraestructura propia.
- Permite monitoreo externo del sistema.
- Incluye alertas automáticas.
- Incluye `status page`.
- Puede ofrecer checks más frecuentes que otras opciones gratuitas.

## Desventajas

- Tiene menor control que una solución como Prometheus + Grafana.
- El plan gratuito es limitado.
- No separa automáticamente horario laboral y no laboral.
- No mide métricas internas de la aplicación.

## Facilidad de aprendizaje

**Fácil**

## Recursos

- [Better Stack](https://betterstack.com/)
- [Better Stack Uptime Monitoring](https://betterstack.com/uptime)
- [Better Stack Status Pages](https://betterstack.com/status-page)
- [Video base sobre Better Stack](https://www.youtube.com/results?search_query=better+stack+uptime+tutorial)

## Tutorial básico

### 1. Preparar endpoint `/health`

Tu API debe responder:

- `200` -> disponible
- `503` -> no disponible

```javascript
app.get('/health', async (req, res) => {
  try {
    const isHealthy = true; // luego conectar DB, servicios, etc.

    if (!isHealthy) {
      return res.status(503).json({ status: 'down' });
    }

    res.json({ status: 'ok' });
  } catch {
    res.status(503).json({ status: 'down' });
  }
});
```

### 2. Exponer tu API

Si estás en local, puedes usar:

```bash
ngrok http 3000
```

Obtendrás algo como:

```text
https://abc123.ngrok-free.app
```

Endpoint final:

```text
https://abc123.ngrok-free.app/health
```

### 3. Crear cuenta en Better Stack

Pasos:

- registrarse
- confirmar email
- entrar al dashboard

### 4. Crear monitor

En el dashboard:

- click en `Monitors`
- click en `Create Monitor`

Configurar:

- Tipo: `HTTP`
- Nombre: `API Health`
- URL: `https://abc123.ngrok-free.app/health`

### 5. Configurar validación

Regla base:

- `200` -> `OK`
- no responde, `500` o `503` -> `FAIL`

Frecuencia aproximada del plan gratuito:

- alrededor de `3 minutos`

### 6. Configurar alertas

Seleccionar al menos:

- email

Opcionalmente:

- Slack
- Telegram

Se activan cuando:

- el servicio cae
- el servicio se recupera

### 7. Validar funcionamiento

Primero deberías ver:

- `Status = UP`

Simular caída.

Opción A, cambiando el código:

```javascript
const isHealthy = false;
```

Opción B, deteniendo el servidor:

```bash
Ctrl + C
```

Resultado esperado:

- Better Stack detecta `DOWN`
- se crea un incidente
- llega una alerta

### 8. Recuperación

Vuelve a levantar el servidor:

```bash
node app.js
```

Resultado:

- `Status = UP`
- se cierra el incidente

### 9. Revisar dashboard

En el panel podrás ver:

- porcentaje de uptime
- tiempo caído
- historial de incidentes
- tiempo de respuesta

### 10. Uso de múltiples monitores

Puedes agregar más endpoints o componentes, por ejemplo:

- `/api/health`
- `/auth/health`
- `/frontend`

Plan gratuito aproximado:

- alrededor de `10` monitores

## Resultado esperado del spike

Al finalizar deberías tener:

- endpoint `/health` funcionando
- monitor activo
- alertas configuradas
- al menos una caída detectada
- historial visible

### Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | OpenAI Codex | Pendiente | Spike de monitoreo de disponibilidad con Better Stack | 07/04/2026 |
