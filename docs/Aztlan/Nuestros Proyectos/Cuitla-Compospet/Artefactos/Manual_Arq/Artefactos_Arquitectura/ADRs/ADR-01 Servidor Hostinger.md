---
title: "ADR-01 Servidor Hostinger"
sidebar_position: 1
---

# ADR-01: Servidor Hostinger

**Fecha:** 2026-03-10

**Estado:** Proposed | **Accepted** | Rejected | Deprecated 

**Equipo/Proyecto:** Cuitla. 

**Decisores:** AOwner, Team Members.

## Contexto

Necesitamos un servidor VPS para desplegar la aplicación web de CompoPet y su base de datos. Estimamos un pico de hasta 100 peticiones por segundo con un almacenamiento al rededor de 10 gigas maximo por año, asi que definimos los mínimos para operar el servidor, 2 núcleos de vCPU, 4 GB RAM, 50 GB de almacenamiento y un ancho de banda de mas de 10 megas por segundo.


## Criterios usados (resumen)
- Cumplir mínimos de capacidad (CPU/RAM/almacenamiento/ancho de banda) para el estimado inicial.
- Seguridad base

## Alternativas consideradas

1. **Hostinger VPS Plan KVM 2** 
    - Pros
        - Seguridad de los servicios
        - Dsiponibilidad 99.9 %
        - Ancho de banda de 8 TB
        - Dominio gratis 1 año
    - Contras
        - Despues de los 5 años se vuelve la opción más cara
2. **Oracle Cloud Siempre Gratis** 
    - Pros 
        - Cinco autoridades de certificación (CA) 
        - Balanceador de cargas gratis
        - 4 OCPU y 24 GB de memoria.
    - Contras
        - 10 megas por segundo
        - No hay seguridad que deje ser gratis
        - Reclamación de instancias informáticas inactivas
3. **Ionos VPS L**
    - Pros
        - 99,99 % de disponibilidad
        - 250 GB de almacenamiento
        - Mas barato que hostinger despues de 5 años
    - Contras
        - Mas caro al inicio.
        - Cobra los respaldos del servidor

## Decisión

Elegimos Hostinger VPS Plan KVM 2 para el despliegue inicial de CompoPet, por cumplir los mínimos definidos, su servicio estable y por los respaldos semanales gratis que ofrecia.


## Consecuencias

**Positivas**
- Menor riesgo operativo y mejor capacidad de recuperación ante fallas.
- Infraestructura alineada a los minimos establecidos

**Negativas / Trade-offs**
- Costo mensual recurrente. 
- Todo ya esta limitado

## Notas / Links

- [Plan KVM 2 de Hostinger](https://www.hostinger.com/support/6976044-parameters-and-limits-of-hosting-plans-in-hostinger/#h_0fbdbe1ac8)
- [Oracle siempre gratis](https://docs.oracle.com/es-ww/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm )
- [Ionos VPS L](https://www.ionos.mx/servidores/vps#features-longlist)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Yessica Lora Vazquez, Kamila Jeannette Martínez, Alejandra Arredondo, Fernanda Valdez, Juan Manuel Murillo, Andrea Fatima Figeroa  | Edmundo Canedo Cervantez | Actualización  | 09/03/2026 |
