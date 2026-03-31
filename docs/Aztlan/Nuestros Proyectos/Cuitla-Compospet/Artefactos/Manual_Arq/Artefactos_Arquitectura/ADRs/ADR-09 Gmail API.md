---
title: "ADR-09 Gmail API"
sidebar_position: 9
---

# ADR-09: Gmail API

**Fecha:** 2026-03-10  

**Estado:** Accepted 

**Equipo/Proyecto:** Cuitla

**Decisores:** AOwner, Team Lead, PO, PM, Team Member

## Contexto

El sistema requiere un método confiable para automatizar el envío de recordatorios sobre límites de gastos y fechas de corte directamente al correo electrónico de los usuarios. Se busca aprovechar un canal de comunicación de alta frecuencia para el cliente, asegurando una buena entregabilidad sin incurrir en costos de servicios de terceros y utilizando la infraestructura de confianza que ofrece el ecosistema de Google.

## Criterios usados (resumen)

* Incrementar el compromiso del usuario y fomentar la alfabetización financiera mediante notificaciones oportunas.
* Asegurar una implementación ágil utilizando funciones simplificadas de envío de mensajes.
* Minimizar el esfuerzo técnico aprovechando el conocimiento previo del equipo en Google Cloud.
* Estandarizar la comunicación con los clientes a través del uso de plantillas HTML compatibles.
* Garantizar la seguridad del sistema solicitando únicamente permisos de envío de correos.
## Alternativas consideradas

1. **Servidor SMTP Propio:**
    - **Pros:** Sin límites de cuota impuestos por Google.
    - **Contras:** Alta probabilidad de caer en spam si no se configura correctamente SPF/DKIM y mantenimiento de servidor.
2. **Servicios de Email Marketing (Mailchimp/SendGrid):**
    - **Pros:** Analíticas detalladas de clics y aperturas.
    - **Contras:** Requiere integración de un SDK adicional y costos por volumen de envío.
3. **Gmail API - Método Send (Elegida):**
    - **Pros:** Reutiliza la autenticación OAuth 2.0 existente, alta reputación de dominio (Google) y sin costo adicional dentro de los límites de cuota.
    - **Contras:** Límite diario de envíos (aprox. 2,000 por día en cuentas de Workspace).

## Decisión

Utilizar la **Gmail API** exclusivamente para el envío de correos electrónicos de recordatorios. Se utilizará el scope restringido `https://www.googleapis.com/auth/gmail.send` para cumplir con el principio de privilegio mínimo.

## Consecuencias

**Positivas**
- Los correos aparecen en la carpeta de "Enviados" del usuario, permitiendo trazabilidad.
- No hay necesidad de gestionar credenciales SMTP adicionales (todo es vía Tokens).
- Implementación rápida y segura.

**Negativas / Trade-offs**
- Si el volumen de clientes crece masivamente (>2,000 correos/día), tendremos que migrar a una solución de relay masivo.
- Dependencia de la estabilidad de la API de Google.

## Notas / Links

- [Gmail API: Sending Email](https://developers.google.com/gmail/api/guides/sending)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Kamila Martínez, Yessica Lora, Alejandra Arredondo, Fatima Figueroa| Edmundo Canedo| Decisión de usar Gmail API para envío de recordatorios. | 10/03/2026 |