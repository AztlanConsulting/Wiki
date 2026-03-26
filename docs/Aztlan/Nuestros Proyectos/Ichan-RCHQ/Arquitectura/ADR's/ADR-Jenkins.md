---
title: "ADR Sobre Jenkins"
sidebar_position: 01
---

# ADR-01: Uso de Jenkins para CI

**Fecha:** 2026-03-26  

**Estado:** Accepted

**Equipo/Proyecto:** Ichan

**Decisores:** AOwner y Team Member

## Contexto

Para poder agilizar la integración del código y las pruebas que este conlleva.


## Criterios usados (resumen)

- Automatización de pruebas unitarias e integración: en cada push (para validar código antes de merge).
- Bloqueo automático de merge: si las pruebas fallan.
- Ejecución de pruebas en paralelo: sin limitaciones de tiempo.
- Costo-beneficio: infraestructura disponible vs servicios externos.
- Integración con GitHub: para feedback visual en PRs.

## Alternativas consideradas

1. **GitHub Actions** 
- Pros:
    1. Integración nativa con GitHub (sin herramienta externa).
    2. Fácil customización con YAML.
    3. Plan gratuito: 2000 minutos/mes para repos privados.
    4. Cero mantenimiento (GitHub gestiona infraestructura).
- Contras:
    1. Minutos limitados (2000/mes en plan gratuito).
    2. Costo escalable si se exceden los minutos ($0.25/min extra).
    3. Menos flexible para pipeline muy complejos.

2. **CircleCI** 
- Pros:
    1. Integración fluida con GitHub.
    2. Plan gratuito generoso: 6000 min/mes.
    3. Marketplace de orbes (plugins reutilizables).
    4. Excelente documentación.
- Contras:
    1. Servicio externo (depende de CircleCI).
    2. Costo premium si se exceden límites.
    3. Menos control que self-hosted.


## Decisión

Se desplegará en host propio aprovechando la infraestructura disponible, permitiendo ejecutar pruebas sin limitaciones de tiempo ni costos adicionales por minutos de CI/CD.

### Justificación:
- La infraestructura ya existe y está disponible (reducir costos al máximo).
- Uso ilimitado sin preocupación por overages.
- Ejecución de múltiples pruebas en paralelo sin restricciones.

## Consecuencias

**Positivas**
- Uso sin límites de minutos (sin costos adicionales).
- Múltiples pruebas ejecutándose en paralelo sin restricciones.
- Control total sobre configuración y escalabilidad.
- Independencia de servicios externos.

**Negativas**
- Mantenimiento requerido: actualizaciones de seguridad, backup, recuperación ante fallos.
- Configuración inicial: setup con Jenkinsfile requiere tiempo.
- Integración con GitHub: requiere webhooks y configuración manual.
- Riesgo operacional: si Jenkins se cae, CI/CD se detiene (Plan de recuperación necesario).
- Escalabilidad: debe dimensionarse correctamente (ejecutores, CPU, memoria, almacenamiento).
- Monitoreo y logs: responsabilidad del equipo gestionar alertas.


## Notas / Links

- Jenkinsfile: [Link a documentación](https://www.jenkins.io/doc/book/pipeline/jenkinsfile/)
- GitHub Webhooks Configuration: [Link a guía de github](https://docs.github.com/es/webhooks/using-webhooks/creating-webhooks) 

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | -Manuel Bajos Rivera | | Razón del uso de jenkins | 26/03/2026 |
