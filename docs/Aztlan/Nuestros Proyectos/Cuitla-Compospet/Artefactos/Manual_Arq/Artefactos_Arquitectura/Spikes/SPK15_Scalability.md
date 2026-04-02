---
title: "SPK15 - Scalability"
sidebar_position: 15
---

# SPK10 - Scalability (Prometheus + Uptime Kuma)

**Duración:** 1 día  
**Funcionalidad:** Observabilidad de infraestructura y disponibilidad de servicios  

## Beneficios
* **Visibilidad Interna:** Mediciones reales de carga de CPU (AMD EPYC) y RAM para prevenir saturación del VPS de Hostinger.
* **Métricas de Negocio:** Conteo exacto de Peticiones por Segundo (RPS) mediante la integración nativa con Node.js.
* **Alertas Inmediatas:** Notificaciones automáticas a Discord o Telegram si el servicio de CompoPet deja de responder.
* **Dashboard Híbrido:** Visualización técnica profunda en Grafana Cloud y estado de disponibilidad rápida en Uptime Kuma.

## Desventajas
* **Consumo de RAM:** El stack completo utiliza entre 400 MB y 600 MB adicionales (aceptable dado los 8 GB totales del servidor).
* **Configuración de Puertos:** Requiere la apertura y gestión manual de los puertos 3001 (Kuma) y 9100 (Node Exporter) en el firewall.
* **Dependencia Externa:** La visualización de datos históricos depende de la conectividad saliente hacia Grafana Cloud (Remote Write).

## Facilidad de aprendizaje
**Media / Alta** (Requiere manejo de terminal SSH, edición de archivos YAML y configuración de servicios `systemd` en Ubuntu).

## Recursos
* [Documentación Oficial de Prometheus](https://prometheus.io/docs/introduction/overview/)
* [Guía de Instalación de Uptime Kuma](https://github.com/louisland/uptime-kuma)
* [Librería prom-client para Node.js](https://github.com/siimon/prom-client)
* [Configuración de Grafana Cloud (Free Tier)](https://grafana.com/products/cloud/)

---

## Estructura técnica para la implementación

### 1. Endpoints de Monitoreo
* **`http://localhost:3000/metrics`**: Expone las métricas internas de la aplicación (RPS, Errores).
* **`http://localhost:9100/metrics`**: Expone el estado del hardware del servidor (CPU, Disco, Red).
* **`http://localhost:3001`**: Interfaz de administración y configuración de alertas de Uptime Kuma.

### 2. Ejemplo: Integración en Node.js (prom-client)
```javascript
const express = require('express');
const client = require('prom-client'); // Librería de métricas

const app = express();
const register = new client.Registry();

// 1. Habilitar métricas por defecto (CPU, RAM del proceso de Node)
client.collectDefaultMetrics({ register });

// 2. Métrica personalizada: Contador de peticiones HTTP
const httpRequestCounter = new client.Counter({
    name: 'compopet_http_requests_total',
    help: 'Total de peticiones procesadas por CompoPet',
    labelNames: ['method', 'route', 'status']
});
register.registerMetric(httpRequestCounter);

// 3. Middleware para registrar cada petición entrante
app.use((req, res, next) => {
    res.on('finish', () => {
        httpRequestCounter.inc({ 
            method: req.method, 
            route: req.path, 
            status: res.statusCode 
        });
    });
    next();
});

// 4. Endpoint que leerá el agente de Prometheus
app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
});

app.listen(3000, () => console.log('App lista en puerto 3000'));
```

### 3. Diferencias de Recursos de Monitoreo
| Recurso | Descripción | Uso común |
| :--- | :--- | :--- |
| **Node Exporter** | Agente de hardware para Linux. | Medir la carga real del CPU y espacio en Disco. |
| **Prometheus** | Recolector de métricas (Scraper). | Unificar datos locales y enviarlos a la nube. |
| **Uptime Kuma** | Monitor de disponibilidad externa. | Avisar de inmediato si la web no carga (HTTP 200). |
| **Grafana Cloud** | Visualizador de datos históricos. | Analizar tendencias de tráfico de los últimos 7 días. |

---

## Control de versiones
| Version | Creado por: | Auditado por: | Descripción | Fecha |
| :--- | :--- | :--- | :--- | :--- |
| 1.0 | Kamila Martínez | Edmundo Canedo | Spike de Monitoreo Multicapa | 23/03/2026 |
