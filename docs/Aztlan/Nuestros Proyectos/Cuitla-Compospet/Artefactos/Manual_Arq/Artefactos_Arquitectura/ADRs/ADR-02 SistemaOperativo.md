---
title: "ADR-02 Sistema Operativo"
sidebar_position: 2
---

# ADR-02: Sistema Operativo Ubuntu 24.04 Linux

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
        - Paquetes más recientes
    - Contras
        - No es LTS (Long-Term Support)
    

## Decisión

Elegimos Ubuntu 24.04 LTS como sistema operativo para el VPS, por ser la versión LTS más reciente entre las opciones ofrecidas por Hostinger

## Consecuencias

**Positivas**
- Entorno estable con soporte a largo plazo.
- Menor riesgo de cambios inesperados.

**Negativas / Trade-offs**
- No teniamos muchas opciones de sistemas operativos, lo que nos limita.

## Notas / Links

- [Operating Systems](https://www.hostinger.com/support/1583571-what-are-the-available-operating-systems-for-vps-at-hostinger/)
- [LTS](https://stackoverflow.com/questions/289565/what-is-lts-long-term-support)


---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Yessica Lora Vazquez, Kamila Jeannette Martínez, Alejandra Arredondo, Fernanda Valdez, Juan Manuel Murillo, Andrea Fatima Figeroa  | Edmundo Canedo Cervantez | Actualización  | 09/03/2026 |

