---
title: "ADR-12 Monitoreo del Servidor (Prometheus + Uptime Kuma)"
---

# ADR-12: Monitoreo del Servidor

**Fecha:** 2026-03-23

**Estado:** **Proposed** | Accepted | Rejected | Deprecated 

**Equipo/Proyecto:** CompoPet (Cuitla)

**Decisores:** Kamila Martínez, Team Members.

## Contexto

Para garantizar la alta disponibilidad de CompoPet en el VPS de Hostinger (ADR-01), necesitamos cubrir tres frentes:
1.  **Métricas de Salud (Internas):** Uso de CPU y RAM del procesador AMD EPYC.
2.  **Métricas de Negocio (RPS):** Volumen de peticiones por segundo procesadas por Node.js.
3.  **Disponibilidad (Externa):** Verificación de que el servicio es alcanzable por el usuario final y alertas inmediatas.  

## Criterios usados (resumen)
- **Observabilidad 360°:** No solo saber *cuánto* recurso se usa, sino *si* la web carga.
- **Alertas Proactivas:** Notificaciones inmediatas a Discord/Telegram.
- **Bajo Overhead:** Mantener el uso de recursos por debajo del 10% de la capacidad total del VPS.
- **Facilidad de Uso:** Interfaz visual para que todo el equipo (Yessica, Alejandra, etc.) pueda consultar el estado.

## Alternativas consideradas

1. **Stack Exclusivo Prometheus/Grafana**
    - **Pros:** Profundidad técnica total (CPU/RPS).
    - **Contras:** Configurar alertas de disponibilidad externa (Uptime) es más complejo y tedioso en Grafana.
2. **Stack Exclusivo Uptime Kuma**
    - **Pros:** Configuración de alertas en 5 minutos y dashboard de estado muy intuitivo.
    - **Contras:** No puede medir RPS ni el uso detallado del CPU del servidor.
3. **Estrategia Multicapa (Prometheus + Uptime Kuma)**
    - **Pros:** Combina la potencia analítica de Prometheus para el Spike de arquitectura con la simplicidad de alertas de Uptime Kuma.
    - **Contras:** Requiere gestionar dos procesos independientes en el servidor.

## Decisión

Elegimos la **Alternativa 3: Estrategia Multicapa**.

- **Prometheus (Modo Agente):** Se instalará localmente para recolectar métricas de CPU (vía Node Exporter) y RPS (vía `prom-client`), enviándolas a **Grafana Cloud** para análisis histórico.
- **Uptime Kuma:** Se instalará localmente (puerto 3001) para vigilar la disponibilidad del puerto 3000 (App) y gestionar las notificaciones críticas al equipo.



## Consecuencias

**Positivas**
- **Resiliencia:** Si Prometheus falla, Uptime Kuma sigue avisando si la web cae (y viceversa).
- **Dashboard de Equipo:** Uptime Kuma provee una "Status Page" pública para CompoPet.
- **Análisis de Carga:** Mantenemos la capacidad de medir las 100 RPS definidas en el ADR-01.

**Negativas / Trade-offs**
- Consumo de RAM ligeramente mayor (aprox. 400-600 MB totales entre ambos), lo cual es aceptable dado los 8 GB disponibles.
- Necesidad de abrir el puerto 3001 (o usar un proxy inverso) para acceder a la interfaz de Kuma.

## Notas / Links

- [Uptime Kuma GitHub](https://github.com/louislam/uptime-kuma)
- [Prometheus Remote Write Guide](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write)
- [Node.js Performance Monitoring](https://nodesource.com/blog/node-js-performance-monitoring-with-prometheus/)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.1     | Kamila Martínez | Yessica Lora | Actualización a monitoreo multicapa (Kuma + Prometheus) | 23/03/2026 |