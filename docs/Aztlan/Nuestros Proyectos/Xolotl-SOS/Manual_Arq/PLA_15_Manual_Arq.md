---
title: "Manual Arquitectura Xólotl - SOS"
sidebar_position: 12
---

## Proposito

Guía de instalación y mantenimiento del proyecto de SOS.
Documentar y describir la arquitectura de la aplicación, funcionamiento, módulos, y establecimiento de estándares seguidos para el desarrollo.

## Ciclo de vida

| Fase                      | Objetivo                                                        | Actividades principales                                                                                   | Entregables                                                                                             | Criterio de salida                                                                                                                                              |
| :------------------------ | :-------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Inicio**                | Comprender contexto del proyecto, necesidades y objetivos       | Identificar restricciones, recursos, disponibilidad de los miembros interesados                           | Riesgos identificados, Presupuesto, calendario                                                          | Se cuenta con un plan de acción para empezar planeación, equipo de trabajo, se identificó la necesidad, objetivo y se tiene una idea de qué se tiene que hacer. |
| **Planeación de etapa**   | Definir alcance del proyecto y calcular esfuerzo                | Priorizar backlog de actividades, registro de actividades                                                 | PVG, Backlog                                                                                            | Se cuenta con un plan de trabajo, tareas y la socia ha aceptado el plan y alcance                                                                               |
| **Ejecución iterativa**   | Generar valor para el cliente                                   | Diseño, desarrollo, pruebas, implementación                                                               | Funciones del proyecto, documentación, actualizaciones backlog/pvg                                      | Fin del sprint                                                                                                                                                  |
| **Revisión y validación** | Identificar errores en etapas tempranas del ciclo de desarrollo | Reuniones con la socia, peer revision, verificación de calidad y validación de relevancia y funcionalidad | Reportes de evaluación de calidad, backlog actualizado, cambios que se tienen que hacer o cómo se hacen | Hay responsables para abordar los cambios, se tiene una expectativa para la siguiente revisión                                                                  |

## Milestones

- Aprobación de parte de la socia sobre el alcance del proyecto
- Prueba de arquitectura
- Verificación
- Validación con la socia
- MVP
- MBI 1
- MBI 2

## ASP

[Poner el Architecture Starter Pack del Proyecto](./Artefactos_Arquitectura/ASP_Xolotl.md)

## Factores considerados

### Costo de desarrollo

#### Costo de Mantenimiento

| Periodo                    | Servidor/mes      | Dominio/año | Total Mensual | Total Anual |
| :------------------------- | :---------------- | :---------- | :------------ | :---------- |
| **Primer año**             | $178.14 ($10 USD) | $178.14     | $356.28       | $2,315      |
| **Segundo año**            | $178.14           | $178.14     | $356.28       | $2,315      |
| **Tercer y cuarto año**    | $356.27 ($20 USD) | $178.14     | $534.41       | $4,275.24   |
| **Quinto año en adelante** | $356.27           | $178.14     | $534.41       | $4,275.24   |

#### Atributos de calidad

##### 1. Usabilidad

##### 2. Seguridad

##### 3. Escalabilidad

##### 4. Fiabilidad

##### 5. Modificabilidad

##### 6. Desempeño (Web Vitals)

##### 7. Accesibilidad

##### 8. Portabilidad

#### Complejidad del sistema

| Módulos ↓ | Landing | Inicio Sesión | Clientes | Formulario | Ruta | Pagos | Recordatorios |
| :-------- | :-----: | :-----------: | :------: | :--------: | :--: | :---: | :-----------: |

#### Robustez

- [Mitigación de riesgos]()

- Diagrama de Flujo de Datos

#### Limitaciónes de Tecnologías

    - [Base de skills]()

- **Riesgos**
  - [Matriz de riesgos]()

#### Evolución futura

    - [Estrategia de desarollo]()

## Stack Recomendado

[Stack]()

## ADRs

- [ADR-01 Servidor Hostinger]()
- [ADR-10 Google Sheets API]()

## Diagrama de Despliegue

[Diagrama de despliegue]()

## Patrón de Arquitectura

- Clean Architecture
  - Back
    - **MVC** <br/>
      **Diagrama de Paquetes** <br />
      [Imagen de diagrama de paquetes]()
  - Front
    - **MVVM**<br/>

    **Diagrama de Paquetes** <br />
    [Imagen de diagrama de paquetes Front]()

## Plan de recursos

- [Plan de recursos]()

### Tutoriales o Spikes relacionados

- Los que creemos
- De lo que queremos aprender

## Prueba de Arquitectura

- [Planeación de prubea arquitectura]()

## Estrategia de integración continua

### Flujo de integración - Procedimientos

### Estandares de Codificación <br/>

### Criterios de aceptación

**Definición de Ready ( DoR ) - ComposPet**

**Definición de Done ( DoN ) - ComposPet**<br/>

### Pruebas Unitarias

### Pruebas de Integración

### Ambientes de despliegue

#### Prod

#### Staging

#### Develop

## Glosario

## Referencias

---

| Version | Creado por:  | Auditado por:   | Descripción | Fecha      |
| ------- | ------------ | --------------- | ----------- | ---------- |
| 1.0     | Yessica Lora | Fernanda Valdez |             | 10/03/2026 |
