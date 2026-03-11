---
title: "ADR-03 Firewall WAF Cloudflare"
---

# ADR-03: Firewall Cloudflare WAF

**Fecha:** 2026-03-10

**Estado:** Proposed | **Accepted** | Rejected | Deprecated 

**Equipo/Proyecto:** Cuitla. 

**Decisores:** AOwner, Team Members.

## Contexto

La aplicación web de expone datos personales y operaciones sensibles (Direcciones, nombres, solicitudes, pagos, saldos). Necesitamos una capa de protección para mitigar tráfico malicioso y ataques comunes a aplicaciones web (WAF) con costo bajo para el MVP.

## Criterios usados (resumen)
- Cobertura WAF con reglas administradas (incluyendo enfoque OWASP).
- Costo 
- Certificado SSL

## Alternativas consideradas

1. **Cloudfare** 
    - Pros
        - Es gratis
        - Rapido y facil de implementar
        - Protección contra DDoS ilimitada
        - Certificado SSL
    - Contras
        - Algunas capacidades avanzadas de WAF suelen requerir planes superiores
2. **AWS** 
    - Pros 
        - WAF administrado
        - Mayor seguridad
    - Contras
        - No es gratis, cobra por volumen de solicitudes
        - Integrable con infraestructura AWS.


## Decisión

Elegimos Cloudflare como WAF, por ofrecer una opción gratuita con amplia cobertura de seguridad, facil y rapida implementación.

## Consecuencias

**Positivas**
- Mitigación de riesgo ante ataques comunes a aplicaciones web, con implementación facil y rápida.
- Impacto positivo en el presupuesto económico de nuestro cliente

**Negativas / Trade-offs**
- Cobertura del plan Free es limitada frente a opciones pagadas

## Notas / Links

- [Cloudflare](https://www.cloudflare.com/es-es/plans/)
- [AWS](https://aws.amazon.com/es/waf/pricing/)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Yessica Lora Vazquez, Kamila Jeannette Martínez, Alejandra Arredondo, Fernanda Valdez, Juan Manuel Murillo, Andrea Fatima Figeroa  | Edmundo Canedo Cervantez | Actualización  | 09/03/2026 |
