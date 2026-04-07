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

    - [Base de skills](https://docs.google.com/spreadsheets/d/1fTEIn50jTNEAErV28CrP1KxcjjsE_eJUXX-Y_yDiCIM/edit?usp=sharing)

- **Riesgos**
  - [Matriz de riesgos](https://docs.google.com/spreadsheets/d/1OtUU3JiI-ShuwNsPVxBTGs9G1-0PnEH7Ge06MCaN8dk/edit?usp=sharing)

#### Evolución futura

    - [Estrategia de desarollo](https://docs.google.com/document/d/1IrLcLrhL_BlwbuCQSJwNfDiLMErx0dFlX-gS1IelSJM/edit?usp=sharing)

## Stack

[Stack](./Artefactos_Arquitectura/Stack.md)

## ADRs

- [ADR-01 Servidor OVH]()
- [ADR-02...]()

## Diagrama de Despliegue

[Diagrama de despliegue](https://drive.google.com/file/d/1bhTWiKTjYgwSQsQ0IXbU5PYQX546gMJn/view?usp=sharing)

## Patrón de Arquitectura

- Clean Architecture
  - Back
    - **MVC** <br/>
      **Diagrama de Paquetes** <br />
      [Imagen de diagrama de paquetes](https://drive.google.com/file/d/1hvADhw1wNgfdJg-d2UJGX_qcsxzKLpBl/view?usp=sharing)
  - Front
    - **Atomic design**

    **Diagrama de Paquetes** <br />
    [Imagen de diagrama de paquetes Front](https://drive.google.com/file/d/1hvADhw1wNgfdJg-d2UJGX_qcsxzKLpBl/view?usp=sharing)

## Plan de recursos

- [Plan de recursos](https://docs.google.com/document/d/14vN-y7ePfldHozCVjnzgmwYVmlwoD7Rg6rgdZzJXTJw/edit?usp=sharing)

### Tutoriales o Spikes relacionados

## Prueba de Arquitectura

- [Planeación de prubea arquitectura](./Artefactos_Arquitectura/Prueba_Arquitectura.md)

## Estrategia de integración continua

### Flujo de integración - Procedimientos

### Estandares de Codificación <br/>

- [Airbnb](https://github.com/airbnb/javascript)

### Criterios de aceptación

**Definición de Ready ( DoR ) - Xólotl**
Ready
Una funcionalidad está en estado Ready o lista para desarrollo cuando:
Esta redactada como US.
Cuenta con interfaz de alta fidelidad
Cuenta con casos de prueba redactados
La historia de usuario es unitaria (El trabajo está estimado de ser no mayor a un día y no depende de otra que no ha sido realizada)

**Definición de Done ( DoN ) - Xólotl**<br/>
Una funcionalidad es aceptada [DONE] cuando
La función tiene trazabilidad en la RTM
Pasa todas las pruebas de integración
Tiene una prueba automática unitaria de la función (Por lo menos backend)
Se creó y aceptó el PR bajo los lineamientos superiores
La función se integró correctamente con el código sin generar errores posteriores

### Pruebas Unitarias

### Pruebas de Integración

### Ambientes de despliegue

#### Prod

#### Staging

#### Develop

## Glosario

## Referencias

---

| Version | Creado por:      | Auditado por:   | Descripción | Fecha      |
| ------- | ---------------- | --------------- | ----------- | ---------- |
| 0.0     | Yessica Lora     | Fernanda Valdez |             | 10/03/2026 |
| 1.0     | Santiago Alducin | Fernanda Valdez |             | 06/04/2026 |
