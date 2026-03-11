---
title: "Manual de Arquitectura Cuitla-Compospet"
---

## Proposito
El propósito de este documento es describir la arquitectura de Compospet, estableciendo una base técnica común mediante la unificación de patrones de diseño y estándares de desarrollo.

Funciona como la fuente de verdad para asegurar la calidad del sistema, guiando al equipo actual en la implementación y facilitando el mantenimiento, la resolución de problemas y la evolución del software a largo plazo.

## Ciclo de vida 
| Fase | Objetivo | Actividades principales | Entregables | Criterio de salida |
| :--- | :--- | :--- | :--- | :--- |
| **Inicio** | Comprender el contexto del proyecto y las condiciones de trabajo del parcial | Revisar alcance, backlog inicial, restricciones de tiempo, riesgos conocidos y disponibilidad del SF | Definición inicial del trabajo del parcial, riesgos identificados, insumos para planeación | El equipo cuenta con información suficiente para seleccionar y documentar la forma de trabajo |
| **Planeación de etapa** | Definir cómo se trabajará durante el parcial bajo DAD | Seleccionar el ciclo de vida, definir fases, establecer hitos, organizar backlog y acordar revisiones | Documento de ciclo de vida, backlog priorizado, hitos principales del parcial | El equipo tiene una estructura de trabajo definida y aprobada internamente |
| **Ejecución iterativa** | Desarrollar el trabajo del proyecto en sprints | Planeación de sprint, desarrollo de entregables, seguimiento del trabajo, revisiones periódicas, validaciones y ajustes | Incrementos del proyecto, avances funcionales y documentales, evidencia de seguimiento | Se completa el trabajo comprometido del sprint y se documentan los ajustes necesarios |
| **Revisión y validación** | Verificar el cumplimiento de objetivos y entregables del parcial | Revisar resultados del sprint, validar con TL y stakeholders, identificar ajustes necesarios | Retroalimentación, validaciones, acuerdos de ajuste | Los entregables revisados cumplen con lo esperado o se define una replanificación |
| **Cierre de la etapa** | Consolidar resultados del periodo de trabajo | Documentar entregables finales del parcial, registrar documentación y actualizar la wiki | Entregables finales del parcial, documentación actualizada | El parcial queda formalmente documentado y cerrado |

## Milestones
* Aprobación del ciclo de vida y fases
* Prueba de Arquitectura
* Verificación 
* Validación de avances con stakeholders
* MVP
* MBI 1
* MBI 2
* Capacitaciones MVP, MBI 1 & MBI 2

## ASP 
[Architecture Starter Pack](/Wiki/docs/Aztlan/Nuestros%20Proyectos/Cuitla-Compospet/Artefactos/Manual_Arq/Artefactos_Arquitectura/ASP_Cuitla)

## Factores considerados

### Costo de desarrollo
#### Costo de Mantenimiento
| Periodo | Servidor/mes | Dominio/año | Total Mensual | Total Anual |
| :--- | :--- | :--- | :--- | :--- |
| **Primer año** | $155 | $160 | $169 | $2,020 |
| **Segundo año** | $155 | $327 | $182.25 | $2,187 |
| **Tercer y cuarto año** | $274 | $327 | $301.25 | $3,615 |
| **Quinto año en adelante** | $382 | $327 | $409.25 | $4,911 | 

#### Atributos de calidad
##### 1. Usabilidad
| Atributo / Principio | Requisito y Métrica |
| :--- | :--- |
| **Visibilidad del estatus** | Retroalimentación constante en acciones relevantes (progreso, éxito, falla). |
| **Mundo real** | Lenguaje y simbología no técnica. Flujo de tareas < 5 minutos. |
| **Control y libertad** | Opciones para salir, regresar o cancelar tareas siempre disponibles. |
| **Consistencia** | Estándar de componentes y colores basado en la guía de interfaces de AWS. |
| **Prevención de errores** | Tasa de éxito del 80% en completar tareas asignadas dentro de la web. |
| **Reconocimiento** | Score de 70 en la prueba SUS (System Usability Scale). |
| **Eficiencia** | Carga máx. 3s (móvil/PC) y acceso a información en < 10s (ISO 9241). |
| **Estética** | Interfaz minimalista: máx. 3 colores además de blanco y negro. |
| **Diagnóstico de errores** | Mensajes en lenguaje claro que sugieren una solución al usuario. |
| **Ayuda** | Manual de usuario por cada nivel de acceso basado en atributos (ABAC). |

##### 2. Seguridad
| Categoría | Especificación Técnica |
| :--- | :--- |
| **Auditoría** | Logs de Id, acción y fecha. Registro de login/logout/fallos para Admin. |
| **Autenticación** | Rutas privadas retornan 404 a no autenticados. API Google Authenticator. |
| **Contraseñas** | Mín. 12 caracteres (Mayús, minús, núm, simb). Bloqueo tras 5 intentos (15 min). |
| **Recuperación** | Token de recuperación y activación vía correo con expiración de 15 min. |
| **Autorización** | Control de acceso basado en atributos (ABAC) para rutas, API y datos. |
| **Comunicaciones** | Uso obligatorio de HTTPS. No incluir datos sensibles en parámetros URL. |
| **Criptografía** | Almacenamiento con hash robusto (SHA256, Argon2i o bcrypt). |
| **Excepciones** | Mensajes de error genéricos (OWASP) para no revelar info confidencial. |
| **Sesiones** | Cierre por inactividad (5h cliente / 8h admin). Máximo 2 sesiones simultáneas. |

##### 3. Escalabilidad
| Métrica | Objetivo de Desempeño |
| :--- | :--- |
| **Capacidad Sostenida** | 100 requests por segundo (P95 ≤ 3s). |
| **Manejo de Picos** | 150 requests por segundo por 10 min (degradación máx. 15%). |
| **Crecimiento** | Soportar de 300 a 600 usuarios concurrentes en un horizonte de 2 años. |
| **Monitoreo** | Alertas si CPU > 70% o tiempo de respuesta > 3s por 5 min. |



##### 4. Fiabilidad
| Indicador | Meta de Cumplimiento |
| :--- | :--- |
| **Disponibilidad** | ≥ 98.5% mensual (incluyendo dependencias externas). |
| **Error Rate** | HTTP 5xx no debe superar el 1% en ventanas de 5 minutos. |
| **Resiliencia API** | Timeout de 5s; 3 reintentos automáticos con espera incremental. |
| **MTTF** | Tiempo medio entre fallas de al menos 200 horas. |

##### 5. Modificabilidad
Los cambios relevantes en estructura de la arquitectura del sistema deberán documentarse mediante decisiones de arquitectura (ADR) y diagramas mínimos actualizados.

El sistema deberá estar organizado en módulos con funcionalidades claras que permitan agregar o sustituir integraciones externas (APIs) o componentes específicos sin afectar la funcionalidad de la arquitectura.


##### 6. Desempeño (Web Vitals)
| Métrica | Umbral (Threshold) | Descripción |
| :--- | :--- | :--- |
| **LCP** | ≤ 2.5 segundos | Tiempo de carga del contenido principal. |
| **Speed Index** | 0 - 1.3 segundos | Rapidez visual durante la carga. |
| **CLS** | ≤ 0.1 | Estabilidad visual del diseño (sin saltos). |
| **INP** | ≤ 200 milisegundos | Capacidad de respuesta a interacciones. |
| **TTFB** | ≤ 0.8 segundos | Tiempo de respuesta del primer byte del servidor. |

##### 7. Accesibilidad
Se tomará como base la documentación de Web.dev: https://web.dev/performance, que a su vez se basa en las evaluaciones del impacto en el usuario de Axe.
Para medirlo y analizarlo se utilizará la página de PageSpeed Insights https://pagespeed.web.dev/

Axe-core cuenta con diferentes tipos de reglas para WCAG 2.0, 2.1 y 2.2 en los niveles A, AA y AAA, así como con una serie de prácticas recomendadas que ayudan a identificar prácticas comunes de accesibilidad. Al usar la librería, en promedio, el 57 % de los problemas de WCAG se resuelven automáticamente. Además, para detectar errores mientras vamos desarrollando, usaremos la extensión axe-linter de VSCode. 


##### 8. Portabilidad
| Navegador | Soporte de Versiones |
| :--- | :--- |
| **Chrome / Android** | Versión actual + 4 versiones futuras. |
| **Microsoft Edge** | Versión actual + 4 versiones futuras. |
| **Safari / iOS** | Versión actual + 2 versiones futuras. |

#### Complejidad del sistema
| Módulos ↓ | Landing | Inicio Sesión | Clientes | Formulario | Ruta | Pagos | Recordatorios |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Landing** | - | | | | | | |
| **Inicio Sesión** | X | - | | | | | |
| **Tabla Clientes** | | X | - | | | | |
| **Formulario** | | X | X | - | X| X| |
| **Tabla Ruta** | | X | X |X | - | | |
| **Pagos** | | X | X | | | - |X |
| **Recordatorios** | | X | X | |  |X| - |
#### Robustez
* [Mitigación de riesgos](https://drive.google.com/drive/folders/1-sY_fcFZMAHglTi_jbGFmRfS-NRvrJpJ?usp=sharing)
* Diagrama de Flujo de Datos

#### Limitaciónes de Tecnologías
    - [Base de skills](https://docs.google.com/spreadsheets/d/1fTEIn50jTNEAErV28CrP1KxcjjsE_eJUXX-Y_yDiCIM/edit?gid=0#gid=0)
- Riesgos
    - [Matriz de riesgos](https://docs.google.com/spreadsheets/d/1PyHPAv7n_Ok2TyG7pxqiGVQXgGVu5A58DYE56uI0Wo4/edit?gid=1206113592#gid=1206113592)
#### Evolución futura
    - [Estrategia de desarollo](https://docs.google.com/document/d/1PoOLtvvigEFOjN5cPRgTm9IPhmUepv2hTL0bc0cRz4I/edit?tab=t.0)

## Stack Recomendado
[Stack](../Manual_Arq/Artefactos_Arquitectura/Stack_recomendado.md          )

##  ADRs

-
 

## Diagrama de Despliegue 
- 


## Patrón de Arquitectura
- Clean Architecture
    - Back
        - **MVC**
        **Justificación**
        **Diagrama de Paquetes**
        
    - Front
        - **MVVM**
        **Justificación**
        **Diagrama de Paquetes**

## Plan de recursos
- 

### Tutoriales o Spikes relacionados
- Los que creemos 
- De lo que queremos aprender


## Prueba de Arquitectura

- Planeación de prubea arquitectura


## Estrategia de integración continua
### Flujo de integración - Procedimientos



### Estandares de Codificación
- Reglas de integración - Estandares?
- Codificación
- Interfaz 
- etc

### Criterios de aceptación

### Pruebad Unitarias
- Ale

### Pruebas de Integración
- Ale
- Tests automatizados- Pruebas Unitarias e integración

### Aambientes de despliegue
    - Ambientes de producción, desarrollo y local?


## Glosario



## Referencias






---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Yessica Lora | Fernanda Valdez |    | 10/03/2026 |