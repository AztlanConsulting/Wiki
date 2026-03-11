---
title: "ADR-04: Node.js"
---

# ADR-04: Node.js

**Fecha:** 2026-03-10

**Estado:** Proposed | **Accepted** | Rejected | Deprecated 

**Equipo/Proyecto:** Cuitla

**Decisores:** AOwner, Team Members.

## Contexto

El sistema requiere un backend capaz de manejar múltiples solicitudes concurrentes y que se integre fácilmente con el frontend desarrollado en JavaScript. Node.js permite unificar el lenguaje de desarrollo en todo el stack y facilita la creación de APIs de forma eficiente.


## Criterios usados (resumen)

Se consideraron criterios como la compatibilidad con el stack del proyecto (JavaScript/React), la experiencia del equipo con la tecnología, la rapidez de desarrollo, el soporte para arquitecturas basadas en APIs y la disponibilidad de un amplio ecosistema de librerías mediante npm.

## Alternativas consideradas


**1. Python (Django / Flask)**

    - **Pros**
        - Amplio ecosistema de librerías y herramientas.
        - Frameworks maduros y ampliamente utilizados para desarrollo web y APIs.
        - Facilita una buena organización del proyecto.
        - Adecuado para desarrollo rápido y mantenible.

    - **Contras**
        - Puede aumentar la complejidad del desarrollo para el equipo.
        - Reduce la unificación del stack tecnológico.
        - Puede implicar una mayor curva de aprendizaje porque el equipo domina más JavaScript.

**2. Java (Spring Boot)**

    - **Pros**
        - Framework robusto y maduro para aplicaciones empresariales.
        - Alta escalabilidad y seguridad.
        - Gran soporte para arquitecturas complejas.
        - Buenas herramientas para proyectos grandes y mantenibles.

    - **Contras**
        - Configuración y desarrollo más complejos.
        - Mayor tiempo de implementación.
        - Puede ser menos ágil para proyectos con tiempos ajustados.

**3. PHP (Laravel)**

    - **Pros**
        - Framework popular y ampliamente utilizado.
        - Facilita la creación de APIs y aplicaciones web completas.
        - Buena documentación y comunidad.
        - Permite desarrollar de forma estructurada y relativamente rápida.

    - **Contras**
        - No se integra de forma tan natural con el stack JavaScript del proyecto.
        - Puede dificultar la homogeneidad tecnológica del sistema.
        - Menor alineación con las habilidades del equipo.

**4. .NET (ASP.NET Core)**

- **Pros**
    - Framework potente para construir APIs y aplicaciones escalables.
    - Buen rendimiento.
    - Herramientas sólidas para desarrollo empresarial.
    - Soporte adecuado para proyectos robustos y mantenibles.

- **Contras**
    - Requiere trabajar con C# y un ecosistema diferente.
    - Menor compatibilidad con el stack del proyecto.
    - Representa una curva de aprendizaje mayor para el equipo.
    - Incrementa la diversidad tecnológica dentro del sistema.

## Decisión

Se seleccionó **Node.js con Express** como tecnología para el backend debido a su compatibilidad con el stack JavaScript del proyecto, la experiencia del equipo con esta tecnología y su capacidad para desarrollar APIs de forma rápida y eficiente.


## Consecuencias

**Positivas**

- Tecnologías estándar ampliamente soportadas por todos los navegadores.
- Simplicidad en el desarrollo de interfaces web.
- No requiere herramientas complejas para su implementación.
- Facilita el mantenimiento y comprensión del código.
- Amplia documentación y recursos disponibles.

**Negativas / Trade-offs**

- Puede requerir más trabajo manual para manejar estilos complejos.
- Menor reutilización de componentes si no se utilizan frameworks adicionales.
- Puede ser más difícil mantener consistencia visual en proyectos grandes.
- Escalabilidad limitada si el proyecto crece en complejidad.

## Notas / Links
- [Node.js](https://nodejs.org/es)<br/>
- [Reddit: Why use Node.js for backend development?](https://www.reddit.com/r/webdev/comments/wddl3k/really_confused_about_nodejs_and_why_its/)


---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Cuilta | Edmundo Canedo | ADR-05 Node.js  | 10/03/2026 |
