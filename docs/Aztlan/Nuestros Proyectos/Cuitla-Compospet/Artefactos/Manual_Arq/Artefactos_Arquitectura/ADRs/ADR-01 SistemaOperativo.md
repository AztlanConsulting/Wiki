---
title: "ADR-02 Sistema Operativor"
---

# ADR-02: Ubuntu 24.04 Linux

**Fecha:** 2026-03-10

**Estado:** Proposed | **Accepted** | Rejected | Deprecated 

**Equipo/Proyecto:** Cuitla. 

**Decisores:** AOwner, Team Members.

## Contexto

Necesitamos definir el sistema operativo del VPS para desplegar CompoPet. La elección está limitada a las opciones disponibles en nuestro proveedor (Hostinger). Buscamos una opción que sea TLS (Long-Term Support) y compatible con el stack del proyecto.


## Criterios usados (resumen)
- Que sea la version mas alta de Long-Term Support
- Disponibilidad en el proveedor (Hostinger).
- Riesgo bajo por cambios frecuentes

## Alternativas consideradas

1. **Ubuntu 22.04** 
    - Pros
        - Es LTS (Long-Term Support)
    - Contras
        - No es la LTS más reciente
2. **Ubuntu 24.04** 
    - Pros 
        - Es LTS (Long-Term Support)
        - Es la LTS más reciente disponible
    - Contras
        - No es la versión mas nueva
3. **Ubuntu 25.10**
    - Pros
        - 99,99 % de disponibilidad
        - 250 GB de almacenamiento
        - Mas barato que hostinger despues de 5 años
    - Contras
        - No es LTS (Long-Term Support)
    

## Decisión

Ubuntu


## Consecuencias

**Positivas**
- Menor riesgo operativo y mejor capacidad de recuperación ante fallas.
- Infraestructura alineada a los minimos establecidos

**Negativas / Trade-offs**
- Costo mensual recurrente. 
- Todo ya esta limitado

## Notas / Links

- [Operating Systems](https://www.hostinger.com/support/1583571-what-are-the-available-operating-systems-for-vps-at-hostinger/)
- [Oracle siempre gratis](https://docs.oracle.com/es-ww/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm )
- [Ionos VPS L](https://www.ionos.mx/servidores/vps#features-longlist)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Yessica Lora Vazquez, Kamila Jeannette Martínez, Alejandra Arredondo, Fernanda Valdez, Juan Manuel Murillo, Andrea Fatima Figeroa  | Edmundo Canedo Cervantez | Actualización  | 09/03/2026 |

