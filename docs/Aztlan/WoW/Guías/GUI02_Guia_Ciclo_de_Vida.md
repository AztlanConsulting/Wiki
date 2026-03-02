---
title: "GUI02 - Guía para elegir ciclo de vida y definir fases"
---


## Propósito
Ayudar a elegir un ciclo de vida adecuado para cada proyecto en el departamento, definiendo sus fases, entregables, puntos de decisión, hitos y dependencias principales para calendarizarlo y monitorearlo (ver [PRC04](../Procesos/PRC04_Uso_Y_Mantenimiento_De_Calendarios.md)).

<!--## Áreas de proceso y prácticas en las que aplica
- PP SP 1.3: Definir fases del ciclo de vida del proyecto.
- PP SP 2.1: Establecer presupuesto y fechas (calendarización mediante hitos).
- PP SP 3.2: Reajustar planes (replanificación cuando un gate lo requiera).

## Documentos relacionados
- PRC12 - Proceso para definir Ciclo de Vida del proyecto.
- PRC04 - Uso y mantenimiento de Calendarios.
- PRC10 - Reajuste de trabajo y recursos.

## Ciclos de vida descritos en esta guía (basados en DAD)
1. DAD – Agile (Scrum-based)
2. DAD – Lean
3. DAD – Continuous Delivery: Agile
4. DAD – Continuous Delivery: Lean
5. DAD – Exploratory (Lean Startup)
6. DAD – Program-->

## Desarrollo

### Paso 1: Recopilar criterios del proyecto
Tomar en cuenta los siguientes criterios:
- Claridad de requisitos
- Incertidumbre técnica
- Riesgo
- Disponibilidad del Socio Formador
- Necesidad de entregas frecuentes
- Cambios/soporte continuo esperado
- Dependencias externas críticas (APIs, credenciales, etc)

### Paso 2: Seleccionar ciclo de vida
DAD describe seis ciclos de vida principales. También discute ~~cascada~~ como referencia, pero no como ciclo de vida DAD soportado.
Apoyar decisión con los siguientes criterios:

#### Agile (Scrum-based)

Ciclo basado en iteraciones fijas (sprints). El trabajo se organiza en un backlog priorizado y se entrega valor en incrementos. Es adecuado para proyectos con principio y fin, donde se puede planear por iteraciones y validar frecuentemente con el socio formador.

Fases típicas:
1. Inception
2. Construcción (Sprints)
3. Transición/Entrega

Recomendado cuando:
- Claridad de requisitos: medio
- Incertidumbre técnica: medio
- Revisiones con el socio formador: medio (por sprint o periódicas)
- Se busca entregar incrementos funcionales con cadencia estable
- El equipo puede comprometerse a un plan de trabajo por iteraciones

Puntos de decisión sugeridos:
- Incepción (antes de Sprint 1): ¿backlog inicial priorizado?, ¿riesgos y dependencias principales identificadas?, ¿cadencia acordada con el socio?
- Release (cada 2-4 sprints o cuando aplique): ¿incremento usable?, ¿deuda técnica controlada?, ¿riesgos críticos mitigados?
- Entrega: ¿criterios de aceptación cubiertos?, ¿demo/entrega aprobada?, ¿pendientes negociados?

Hitos típicos:
- Backlog inicial priorizado
- Demo al final de cada sprint
- Fin de cada release (conjunto de sprints)
- Integración completa de módulos prioritarios
- Entrega final / cierre


#### Lean

Ciclo de flujo continuo. El equipo toma el siguiente ítem cuando tiene capacidad, limita trabajo en curso y optimiza tiempos de entrega. Se adapta bien cuando la prioridad cambia frecuentemente o el trabajo entra como una cola continua.

Fases típicas:
1. Alineación inicial
2. Flujo de entrega (WIP limitado)
3. Estabilización/Release
4. Entrega/Cierre

Recomendado cuando:
- Claridad de requisitos: medio
- Incertidumbre técnica: medio
- Revisiones con el socio formador: bajo a medio
- Trabajo en flujo: sí
- Se necesita flexibilidad para re-priorizar sin esperar a cerrar un sprint

Puntos de decisión sugeridos:
- Alineación: ¿definición de "listo para iniciar" (entrada al flujo)?, ¿prioridad y criterios claros?, ¿acuerdos de feedback?
- Control de WIP: ¿hay bloqueos?, ¿hay exceso de trabajo en curso?, ¿se requiere pausar nuevas entradas?
- Release: ¿lo entregable está estable y aceptable?, ¿se puede liberar sin riesgo?

Hitos típicos:
- Definición de políticas de flujo (WIP, columnas, reglas)
- Revisión periódica de bloqueos
- Releases por hitos o por umbral de valor acumulado
- Estabilización de integraciones críticas
- Entrega final o cierrre


#### Continuous Delivery: Agile

Evolución del enfoque ágil con énfasis en entregar valor con mucha frecuencia, idealmente con integración continua, pruebas automatizadas y despliegue frecuente. Mantiene iteraciones (como Scrum), pero con disciplina técnica y automatización para liberar más seguido.

Fases típicas:
1. Incepción
2. Construcción (iteraciones cortas)
3. Entrega continua
4. Operación/Mejora

Recomendado cuando:
- Claridad de requisitos: alto
- Incertidumbre técnica: bajo a medio
- Revisiones con el socio formador: alto
- Necesidad de entregar valor muy seguido: alto
- El equipo puede sostener prácticas técnicas fuertes (pruebas automatizadas)

Puntos de decisión sugeridos:
- Ready to release: ¿pruebas automatizadas pasan?, ¿calidad mínima?, ¿monitoreo o logs listos?
- Seguridad/Calidad: ¿cumple requisitos no funcionales mínimos?, ¿riesgos controlados?
- Incidente: si algo falla, hay plan de rollback o mitigación?

Hitos típicos:
- Pipeline de integración continua funcionando
- Primer despliegue a entorno de prueba/staging
- Releases frecuentes (por iteración o más seguido)
- Métricas de estabilidad (errores críticos, fallos de pipeline)
- Entrega incremental sostenida


#### Continuous Delivery: Lean

Combina Lean con la capacidad de desplegar constantemente. Requiere alta madurez técnica y operativa. Es útil cuando el trabajo entra continuamente y se busca entregar en cuanto algo está listo, sin esperar ventanas fijas.

Fases típicas:
1. Alineación inicial
2. Flujo continuo
3. Integración continua
4. Entrega continua
5. Operación/Mejora

Recomendado cuando:
- Claridad de requisitos: medio
- Incertidumbre técnica: medio
- Revisiones con el socio formador: medio a alto
- Trabajo en flujo: sí
- Pruebas automatizadas: alto (requisito)

Puntos de decisión sugeridos:
- Entrada al flujo: ¿criterios de entrada claros?, ¿tarea lista para ser tomada sin bloquear al equipo?
- Liberación: ¿pasa calidad automática?, ¿riesgo aceptable?, ¿mecanismo de rollback?
- Bloqueos: ¿dependencias externas detenidas?, ¿se necesita renegociar alcance?

Hitos típicos:
- Pipeline pruebas completo
- Flujo estable con WIP controlado
- Releases continuos (según disponibilidad de cambios)
- Reducción de tiempos de ciclo
- Entrega incremental sostenida


#### Exploratory (Lean Startup)

Ciclo orientado a validar hipótesis con el menor esfuerzo posible mediante experimentos y MVPs. Se prioriza aprender rápido, medir resultados y decidir si continuar, ajustar o replantear.

Fases típicas:
1. Descubrimiento
2. Experimentos/MVP
3. Medición
4. Decisión (perseverar/pivotar/cancelar)
5. Construcción (si se valida)

Recomendado cuando:
- Claridad de requisitos: bajo
- Incertidumbre técnica: alto o requisitos inciertos
- Revisiones con el socio formador: alto (retroalimentación rápida)
- Se necesita validar hipótesis (usuario, valor, factibilidad) antes de invertir mucho
- Hay apertura a cambios rápidos en el plan

Puntos de decisión sugeridos:
- Hipótesis: ¿qué se está validando?, ¿cómo se mide éxito?
- MVP: ¿el MVP es lo mínimo para medir?, ¿tiempo acotado?
- Decisión: ¿datos suficientes?, ¿se pivota o se continúa?
- Construcción: ¿ya hay claridad suficiente para pasar a agile/lean?

Hitos típicos:
- Hipótesis documentadas y métricas definidas
- MVP 1 entregado
- Resultados medidos y analizados
- Decisión de pivot/perseverar
- Migración a ciclo de vida de construcción (scrum/lean)


#### Program

Ciclo para coordinar múltiples equipos trabajando en paralelo. Cada equipo puede seguir su propio ciclo (Scrum, Lean, etc.), pero se sincronizan en entregables, arquitectura, integración, riesgos y dependencias.

Fases típicas:
1. Alineación del programa
2. Planeación por incrementos
3. Ejecución paralela por equipos
4. Integración/Validación
5. Entregas coordinadas

Recomendado cuando:
- Múltiples equipos trabajan sobre el mismo producto o ecosistema
- Hay dependencias cruzadas fuertes (integraciones o módulos compartidos)
- Se requiere coordinación de arquitectura y releases
- Se necesita una visión global de hitos y riesgos

Puntos de decisión sugeridos:
- Planeación del incremento: ¿objetivos por equipo claros?, ¿dependencias identificadas?, ¿capacidad realista?
- Integración: ¿se integran componentes sin romper?, ¿pruebas de integración pasan?
- Release coordinado: ¿todos los equipos cumplen criterios mínimos?, ¿riesgos aceptables?

Hitos típicos:
- Plan del incremento (hitos globales)
- Sincronizaciones periódicas entre equipos
- Integración por etapas (milestones de integración)
- Release coordinado
- Retrospectiva global y ajustes de plan


**Salida:**
- Ciclo de vida elegido
- Justificación (con base en paso 1)

### Paso 3: Definir fases
Para el ciclo elegido, definir fases y por cada fase:

- Objetivo
- Entregables
- Criterios de salida
- Decisiones

### Paso 4: Derivar hitos y dependencias principales para el calendario
A continuación se enlistan algunos hitos útiles por categoría:
#### Hitos de planeación y alineación
- Aprobación del ciclo de vida y fases
- Backlog inicial priorizado y refinado
- Alcance congelado para un release
- Definición de Done acordada
- Plan de comunicación acordado con el socio formador
- Identificación de riesgos críticos y planes de mitigación/prevención

#### Hitos de arquitectura e infraestructura
- Arquitectura base validada (diagrama, decisiones clave)
- Entorno de desarrollo listo (repos, ramas, estándares, CI básico)
- Staging listo
- Producción lista
- Configuración de seguridad mínima lista

#### Hitos de implementación
- MVP listo
- Módulo listo
- Integración entre módulos críticos lista
- Integración con terceros lista (API, pagos, correo, etc.)

#### Hitos de calidad y pruebas
- Primer set de pruebas automatizadas
- Pruebas de integración completadas para un release
- Pruebas de aceptación con el socio formador completadas
- Corrección de errores críticos completada

#### Hitos de despliegue y entrega
- Demo interna completada
- Demo con socio formador completada
- Releases
- Entrega final aceptada
- Capacitación / documentación de uso entregada

#### Hitos de gestión de dependencias
- Credenciales / accesos entregados por el socio formador
- Dataset o información necesaria recibida y validada
- Aprobación de decisiones clave
- Contrato/permiso/validación externa completada

#### Hitos de aprendizaje
- Spike completado
- Decisión tecnológica registrada
- Prototipo validado con usuarios/socio

#### Dependencias principales
Identificar bloqueos que afectan fases o hitos:
- Insumos externos (credenciales, datos, aprobaciones)
- Infraestructura (ambientes, dominio, despliegue)
- Integraciones críticas
- Dependencias entre entregables

**Salida:**
- Lista de hitos por fase
- Lista de dependencias principales asociadas

### Paso 5: Calendarizar
Con hitos y dependencias principales, crear/actualizar el calendario del proyecto según [PRC04](../Procesos/PRC04_Uso_Y_Mantenimiento_De_Calendarios.md)

## Evidencias esperadas
- Documento de ciclo de vida del proyecto (fases, entregables, decisiones)
- Lista de hitos y dependencias principales
- Calendario del proyecto actualizado con hitos (ver [PRC04](../Procesos/PRC04_Uso_Y_Mantenimiento_De_Calendarios.md))
- Replanificación registrada (si aplica, ver [PRC10](../Procesos/PRC10%20-%20Reajuste%20de%20trabajo%20y%20recursos.md))


## Referencias
- https://www.pmi.org/disciplined-agile/lifecycle
- https://www.pmi.org/disciplined-agile/wow/chooselifecycle
- https://www.projectmanager.com/blog/milestones-project-management


## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Marco Iván Flores Villanueva || Guía para elegir ciclo de vida y definir fases | 01/03/2026 |
