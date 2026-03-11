---
title: "ADR-08 Google OAuth 2.0"
---

# ADR-08: Google OAuth 2.0

**Fecha:** 2026-03-10  

**Estado:**  Accepted

**Equipo/Proyecto:** Cuitla

**Decisores:** AOwner, Team Lead, PO, Team Member

## Contexto

El sistema requiere un mecanismo de autenticación seguro y escalable que minimice la fricción durante el registro de nuevos usuarios mediante el aprovechamiento de cuentas existentes. Al delegar la gestión de identidad a un proveedor externo, se elimina la responsabilidad operativa de almacenar contraseñas sensibles y se acelera el proceso de acceso para los usuarios que ya forman parte del ecosistema de Google.

## Criterios usados (resumen)

* Mejorar la tasa de conversión al simplificar el flujo de registro inicial.
* Mantener una baja complejidad técnica aprovechando la experiencia previa del equipo.
* Facilitar la interoperabilidad futura con otros servicios de Google Cloud.
* Mitigar riesgos de seguridad delegando el manejo de credenciales a un estándar de la industria.

## Alternativas consideradas

1. **Autenticación Local (User/Pass):**
    - **Pros:** Control total del flujo.
    - **Contras:** Alta carga operativa para implementar seguridad (hashing, salting, recuperación).
2. **Auth0 / Firebase Auth:**
    - **Pros:** Soporte multi-proveedor inmediato.
    - **Contras:** Posibles costos adicionales o dependencia de un tercero extra.
3. **Google OAuth 2.0 (Elegida):**
    - **Pros:** Estándar de la industria, integración nativa con Android y alta confianza del usuario.
    - **Contras:** Dependencia directa del "uptime" de Google Identity Services.

## Decisión

Implementar **Google OAuth 2.0** utilizando el flujo de **Authorization Code Grant**.



## Consecuencias

**Positivas**
- Reducción drástica del riesgo de filtración de contraseñas.
- Acceso inmediato a datos de perfil (email verificado, nombre, foto).
- Escalabilidad simplificada.

**Negativas / Trade-offs**
- El sistema queda acoplado a la disponibilidad de Google.
- Obliga a los usuarios a tener o crear una cuenta de Google para acceder.

## Notas / Links

- [Google Identity Platform Documentation](https://developers.google.com/identity/protocols/oauth2)
- [RFC 6749 - The OAuth 2.0 Authorization Framework](https://datatracker.ietf.org/doc/html/rfc6749)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Kamila Martínez, Yessica Lora, Alejandra Arredondo, Fatima Figueroa| Edmundo Canedo| Definición inicial de autenticación vía Google. | 10/03/2026 |