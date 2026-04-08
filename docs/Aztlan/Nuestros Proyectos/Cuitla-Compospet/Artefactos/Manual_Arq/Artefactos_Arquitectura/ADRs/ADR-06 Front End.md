---
title: "ADR-06 - Front End"
sidebar_position: 6
---

# ADR-06: Front End

**Fecha:** 2026-03-10  

**Estado:** Accepted  

**Equipo/Proyecto:** Cuitla

**Decisores:** Owner, Team Lead, PO, PM, Team Member 

## Contexto

Se requiere una interfaz dinámica y reactiva que permita al equipo y a la socia interactuar con datos de rutas y clientes de forma fluida. El objetivo es optimizar la experiencia de usuario mediante componentes reutilizables y evitar recargas de página innecesarias, aprovechando la infraestructura existente de Node.js y PostgreSQL bajo un esquema de desarrollo ágil.

## Criterios usados (resumen)

* Mantener una curva de aprendizaje accesible para la productividad inmediata del equipo.
* Asegurar una separación clara de responsabilidades entre el cliente y el servidor.
* Utilizar una tecnología con ecosistema maduro y soporte técnico a largo plazo.

## Alternativas consideradas

1. **EJS (Embedded JavaScript templates):**
    - **Pros:** Muy simple de configurar; renderizado del lado del servidor (SSR) directo.
    - **Contras:** La experiencia de usuario es más lenta (recargas de página); se vuelve difícil de mantener cuando la interfaz crece en complejidad.
2. **Angular:**
    - **Pros:** Framework muy completo y estructurado.
    - **Contras:** **Descartado.** La curva de aprendizaje es demasiado elevada y la complejidad de su arquitectura (TypeScript estricto, inyección de dependencias) se considera innecesaria para los requisitos actuales del proyecto.
3. **React (Elegida):**
    - **Pros:** Gran ecosistema, curva de aprendizaje moderada y excelente manejo del estado. Su arquitectura basada en componentes se alinea perfectamente con la necesidad de reutilizar elementos en diferentes vistas del proyecto.
    - **Contras:** Requiere la selección manual de otras librerías para enrutamiento o manejo de estado global.

## Decisión

Utilizar **React** como biblioteca principal para el desarrollo de la aplicación web. 

## Consecuencias

**Positivas**
- Desarrollo más rápido mediante la reutilización de componentes.
- Interfaz de usuario mucho más fluida y profesional.
- Facilidad para encontrar documentación, soporte y librerías externas (como Tailwind CSS o librerías de gráficos).
- Separación clara de responsabilidades entre el cliente y el servidor.

**Negativas / Trade-offs**
- Necesidad de gestionar el empaquetado del código (Vite o Webpack).
- El SEO inicial es más complejo que con EJS (aunque no es crítico para una herramienta interna/dashboard).

## Notas / Links

- [React Documentation - Getting Started](https://react.dev/learn)
- [Comparison: React vs Angular](https://survey.stackoverflow.co/2023/)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Kamila Martínez, Yessica Lora, Alejandra Arredondo, Fatima Figueroa | Edmundo Canedo | Selección de React sobre EJS y Angular. | 10/03/2026 |