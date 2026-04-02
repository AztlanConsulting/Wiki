---
title: "ADR-010 Google Sheets API"
sidebar_position: 10
---

# ADR-010: Google Sheets API

**Fecha:** 2026-03-10  

**Estado:** Accepted 

**Equipo/Proyecto:** Cuitla

**Decisores:** AOwner, Team Lead, PO, PM, Team Member 

## Contexto
Es necesario compartir información actualizada sobre rutas y clientes con la socia estratégica mediante una herramienta que permita la visualización de datos en tiempo real sin requerir acceso directo a la base de datos técnica. Esta solución busca automatizar los reportes de logística utilizando una interfaz familiar que facilite la consulta independiente y elimine la carga operativa de exportar archivos manualmente.

## Criterios usados (resumen)

* Mejorar la transparencia con los stakeholders para facilitar la toma de decisiones basada en datos actuales.
* Asegurar un despliegue ágil mediante el uso de una API madura y bien documentada.
* Minimizar el esfuerzo de desarrollo aprovechando la infraestructura de autenticación ya existente.
* Proveer una herramienta versátil que funcione como un tablero de control para el equipo de operaciones.
* Garantizar la seguridad de la información mediante el control de permisos a nivel de archivo y scopes.

## Alternativas consideradas

1. **Dashboard en una Web App propia:**
    - **Pros:** Control total sobre la interfaz de usuario.
    - **Contras:** Tiempo de desarrollo elevado para crear tablas dinámicas, filtros y opciones de exportación que Sheets ya ofrece.
2. **Envío de archivos CSV/Excel por correo:**
    - **Pros:** No requiere integración técnica.
    - **Contras:** Información estática que se desactualiza al instante; riesgo de múltiples versiones del mismo archivo.
3. **Google Sheets API (Elegida):**
    - **Pros:** Actualización automática ("Single source of truth"), interfaz familiar para el usuario final y capacidad de usar fórmulas de Sheets sobre los datos sincronizados.
    - **Contras:** Dependencia de la estructura de la hoja (si la socia borra una columna, la sincronización podría fallar).

## Decisión

Implementar una integración con la **Google Sheets API** para realizar una sincronización unidireccional (Sistema -> Sheets). 

## Consecuencias

**Positivas**
- La socia tiene acceso a información "en vivo" desde cualquier dispositivo.
- Se reduce la fricción de comunicación entre el equipo técnico y la dirección.
- Se pueden generar gráficos y reportes automáticos dentro del mismo Sheet.

**Negativas / Trade-offs**
- Debemos implementar validaciones para asegurar que la estructura de la hoja no sea alterada accidentalmente.
- Estamos sujetos a los límites de cuota de escritura (Write requests per minute).

## Notas / Links

- [Google Sheets API: Guides](https://developers.google.com/sheets/api/guides/concepts)
- [Method: spreadsheets.values.update](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/update)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Kamila Martínez, Yessica Lora, Alejandra Arredondo, Fatima Figueroa| Edmundo Canedo| Integración para reporte dinámico a socios vía Sheets. | 10/03/2026 |