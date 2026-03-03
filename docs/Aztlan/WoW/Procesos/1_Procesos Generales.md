---
title: "Architecture Owners – Procesos"
---

## Introduccion

Este documento tiene el objetivo de identificar rapidamente los procesos propuestos por el departamento de AOs. Esto con el objetivo de estandarizar una forma en la que documentamos, diseñamos y tomamos desiciones tecnicas. Pasaremos a traves de coda componente explicando su definicion, objetivo, cuando utilizarlo, incluyendo enlaces a la guía de uso y plantilla correspondiente.

---

## Architecture Starter Pack

### Definición
Proponer una arquitectura inicial para el proyecto, tomando en cuenta contexto, datos sensibles, riesgos, requisitos no funcionales minimos y un primer diagrama de componentes, guiando la definicion y desarrollo del MVP.

### Objetivo
Tener un acercamiento inicial de la arquitectura del proyecto sin sobrediseñar, personalizado para cada equipo, reduciendo el retrabajo y evitando decisiones apresuradas que luego impacten en el alcance y calidad.

### Cuando usarlo
- Al inicio de la fase de análisis y planeación (antes del diseño detallado)
- Despues del primer acercamiento con el socio formador.
- Cuando hay cambios fuertes de alcance o integraciones críticas.

- [Guia](https://drive.google.com/file/d/162xwRWuZFKYyWl0u7UoyNdOJ5b1ymCXa/view?usp=sharing)
- [Plantilla](https://drive.google.com/file/d/13XUkHlUGkGliDsPp7r5-1bHMqll-qEWM/view?usp=sharing)

---

## Stack recomendado

### Definición
Lista para la consulta de herraamientas conocidas, funcionales y optimas para los proyectos.

### Objetivo
Crear un punto de partida probado y funcional que puede servir para cualqueir proyecto.Una sugerencia que puede ser modificada a las necesidades de cada proyecto.

### Cuando usarlo
Al realizar el starterpack de arquitectura del proyecto y como consulta en diferentes sugerencias de tecnologías que se necesite mas adelante.

### Lista de stacks
[Al presionar aquí.](https://www.youtube.com)

---

## Architecture Decision Record

### Definición
El ADR (Architecture Decision Record) es un registro que captura una decisión arquitectonica. Busca permtir nuevas tecnologías en base al valor generado para el proyecto en mano.

### Objetivo
Permite proponer nuevas tecnologías considerando el valor al proyecto. Tener un registro de tecnologías aprovadas o rechazadas y una argumentación de la desición.

### Cuando usarlo
En cualquier momento que una nueva tecnología se quiera utilizar dentro del departamento o cuando se busque entender el porque de la desición en alguna de las tecnologías.

- [Guia](https://drive.google.com/file/d/1OkaM5sbtILZmdNpMs9ZwZe5Q0HJNiUqB/view?usp=sharing)
- [Plantilla](https://drive.google.com/file/d/1tmPG6piPpUbU1emX1LgfMWmJ36uleKwG/view?usp=sharing)

---

## Spike

### Definición
Análisis de viabildiad de una tecnología que puede ser usada para el proyecto, pros, contras y recursos para aprender la tecnología.

### Objetivo
Compartir el conocimiento con el resto del departamento y calificar si vale la pena aprender la herramienta para el desarrollo de la aplicación.

### Cuando usarlo
Cuando se quiere incorporar una nueva tecnología al proyecto del cual ningun miembro del equipo sabe utilizar.

- [Guia](https://drive.google.com/file/d/1RDn2T7RxeTLZq0aXZrDEe3tDcD_1-M8G/view?usp=sharing)
- [Plantilla](https://drive.google.com/file/d/1MAJIGV16OPU_8RcFZOM3fXj7mDszyPEA/view?usp=sharing)

---

## Done

### Definición
Una funcionalidad es aceptada \[DONE\] cuando:
- La función tiene trazabilidad en la RTM
- Pasa todas las pruebas de integración
- Tiene una prueba automática unitaria de la función (Por lo menos backend)
- Se creó y aceptó el PR bajo los lineamientos superiores
- La función se integró correctamente con el código sin generar errores posteriores.

### Objetivo
Mantener la aplicación en un estado usable, y que las funcionalidades terminadas no sean regresadas a la sección de desarrollo o planeación.

### Cuando usarlo
Cada que se termine de incorporar una historia de usuario.