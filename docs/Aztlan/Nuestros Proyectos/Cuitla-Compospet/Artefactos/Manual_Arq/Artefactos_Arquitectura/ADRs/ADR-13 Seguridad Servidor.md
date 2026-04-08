---
title: "ADR-13: Auditoría de servidor con auditd"
sidebar_position: 13
---

# ADR-13: Auditoría de servidor con auditd

**Fecha:** 2026-03-31

**Estado:** Proposed | **Accepted** | Rejected | Deprecated 

**Equipo/Proyecto:** Cuitla

**Decisores:** AOwner, Team Members.

## Contexto

El sistema requiere implementar un mecanismo de seguridad a nivel servidor que permita registrar y auditar las acciones realizadas por los usuarios dentro del VPS. 

Actualmente, no se cuenta con visibilidad clara sobre quién accede al servidor ni qué acciones ejecuta cada usuario, lo cual representa un riesgo en términos de seguridad, trazabilidad y debugging.

Se busca una solución que permita:
- Registrar comandos ejecutados por usuarios.
- Asociar acciones a usuarios específicos.
- Consultar historial de actividad.
- Tener evidencia ante errores o incidentes.

## Criterios usados (resumen)

Se consideraron criterios como:
- Nivel de seguridad y confiabilidad de los registros.
- Capacidad de auditar acciones a nivel sistema operativo.
- Facilidad de integración con el entorno Linux existente.
- Bajo impacto en rendimiento.
- Disponibilidad de documentación y soporte.

## Alternativas consideradas

**1. Bash History (historial de comandos)**

- **Pros**
    - Fácil de usar.
    - Disponible por defecto en cualquier sistema Linux.
    - No requiere instalación adicional.

- **Contras**
    - Puede ser modificado o eliminado por el usuario.
    - No es confiable para auditoría de seguridad.
    - No registra todos los eventos del sistema.
    - No permite trazabilidad completa.

**2. Logs del sistema (syslog / auth.log)**

- **Pros**
    - Ya disponibles en el sistema.
    - Registran eventos generales del servidor.
    - Útiles para monitoreo básico.

- **Contras**
    - No registran todos los comandos ejecutados.
    - Difícil correlacionar acciones con usuarios específicos.
    - No están diseñados para auditoría detallada.


**3. Herramientas de grabación de sesión (ej. tlog)**

- **Pros**
    - Permiten grabar sesiones completas de terminal.
    - Alta visibilidad de lo que hace el usuario.
    - Útil para auditorías profundas.

- **Contras**
    - Mayor consumo de recursos.
    - Configuración más compleja.
    - Puede ser excesivo para necesidades básicas de auditoría.


**4. auditd (Linux Audit System)**

- **Pros**
    - Diseñado específicamente para auditoría de seguridad.
    - Registra comandos ejecutados y eventos del sistema.
    - Asocia acciones con usuarios reales.
    - Logs difíciles de manipular por usuarios.
    - Permite filtrado por usuario, tiempo y tipo de evento.
    - Bajo impacto en rendimiento si se configura correctamente.

- **Contras**
    - Requiere configuración inicial de reglas.
    - Genera gran cantidad de logs si no se limita correctamente.
    - Interpretación de logs puede ser compleja al inicio.


## Decisión

Se seleccionó **auditd** como herramienta principal para la auditoría de movimientos en el servidor.

La decisión se basa en su capacidad para registrar eventos a nivel sistema operativo, su confiabilidad en entornos de seguridad y su integración nativa con sistemas Linux, lo que permite implementar una solución robusta sin necesidad de herramientas externas complejas.

## Consecuencias

**Positivas**

- Se obtiene visibilidad completa de las acciones realizadas por los usuarios.  
- Se mejora la seguridad del servidor al contar con registros auditables.  
- Se facilita el análisis de incidentes y errores.  
- Se pueden generar reportes y búsquedas específicas por usuario o evento.  
- Integración nativa con el sistema operativo Linux.  

**Negativas / Trade-offs**

- Aumento en el volumen de logs generados.  
- Necesidad de definir correctamente qué eventos auditar.  
- Curva de aprendizaje inicial para interpretar los logs.  
- Requiere mantenimiento (limpieza o rotación de logs).  

## Notas / Links

- [Auditd](https://docs.oracle.com/es/learn/ol-auditd/)
- [Documentación de auditd](https://docs.redhat.com/es/documentation/red_hat_enterprise_linux/8/html/security_hardening/configuring-auditd-for-a-secure-environment_auditing-the-system)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Alejandra Arredondo | Yessica Lora Vázquez | ADR Auditoría de servidor con auditd | 31/03/2026 |