---
title: "ADR-12 Monitoreo Híbrido (Prometheus + Grafana Cloud)"
---

# ADR-12: Implementación de Monitoreo de Infraestructura y Aplicación (Modelo Híbrido)

**Fecha:** 2026-03-22

**Estado:** **Proposed** | Accepted | Rejected | Deprecated 

**Equipo/Proyecto:** CompoPet (Cuitla)

**Decisores:** Kamila Martínez, Team Members.

## Contexto

Para asegurar la estabilidad de CompoPet en el servidor Hostinger (ADR-01), es necesario monitorear las Peticiones por Segundo (RPS) y el uso de CPU. Sin embargo, el servidor cuenta con una limitación de **4 GB de RAM**. Un stack de monitoreo completo (Prometheus + Grafana + Alertmanager) instalado localmente consumiría entre 500 MB y 700 MB, lo cual representa un ~15% de los recursos totales, restando capacidad de procesamiento a la aplicación Node.js y la base de datos.

## Criterios usados (resumen)
- **Eficiencia de Recursos:** Maximizar la RAM disponible para la aplicación principal.
- **Capacidad de Alerta:** Notificaciones automáticas ante picos de tráfico o CPU.
- **Costo Mensual:** Mantenerse dentro de los planes gratuitos (Free Tier).
- **Escalabilidad:** Permitir el crecimiento de métricas sin saturar el almacenamiento del VPS.

## Alternativas consideradas

1. **Stack Local Completo (Prometheus + Grafana + Alertmanager en Docker)**
    - **Pros:** Control total de los datos, sin dependencias externas.
    - **Contras:** Consumo de RAM elevado (~600 MB+) y almacenamiento de logs local.
2. **Monitoreo Híbrido (Agentes locales + Grafana Cloud)**
    - **Pros:** Reduce el consumo de RAM en el VPS al no instalar la interfaz de Grafana localmente. Delegación del almacenamiento de largo plazo y alertas a la nube. Consumo estimado: < 200 MB.
    - **Contras:** Dependencia de conexión a internet para el envío de métricas a la nube.
3. **Monitoreo Manual (Middleware Node.js + Logs)**
    - **Pros:** Consumo de recursos mínimo.
    - **Contras:** Sin visualización en tiempo real, propenso a fallas si el servidor se satura y difícil de escalar.

## Decisión

Elegimos la **Alternativa 2: Monitoreo Híbrido**. 

Se instalará únicamente **Prometheus** (configurado como agente de envío) y **Node Exporter** en el VPS de Hostinger. La visualización, el almacenamiento histórico y el sistema de alertas se gestionarán a través de **Grafana Cloud (Free Tier)**. 

La aplicación Node.js expondrá métricas mediante la librería `prom-client`, las cuales serán recolectadas localmente y enviadas (Remote Write) a la instancia externa de Grafana.

## Consecuencias

**Positivas**
- **Ahorro de RAM:** Liberamos aproximadamente 250-300 MB de RAM al no ejecutar el servidor de Grafana localmente.
- **Persistencia:** Si el VPS de Hostinger cae, las métricas e informes siguen disponibles en la nube para análisis post-mortem.
- **Alertas Externas:** Las notificaciones de Discord/Email se disparan desde la nube, asegurando que lleguen incluso si el servidor está offline.

**Negativas / Trade-offs**
- Introducción de una dependencia externa (Grafana Cloud).
- Configuración adicional para la autenticación de métricas (API Keys).

## Notas / Links

- [Configuración de Remote Write en Prometheus](https://prometheus.io/docs/prometheus/latest/configuration/configuration/#remote_write)
- [Grafana Cloud Free Tier Limits](https://grafana.com/products/cloud/pricing/)
- [Node Exporter Documentation](https://github.com/prometheus/node_exporter)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Kamila Martínez | Yessica Lora | Definición de monitoreo híbrido para ahorro de RAM | 22/03/2026 |