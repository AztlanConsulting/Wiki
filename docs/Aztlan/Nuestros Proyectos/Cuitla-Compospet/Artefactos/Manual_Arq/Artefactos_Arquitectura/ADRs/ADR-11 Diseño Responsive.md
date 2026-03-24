---
title: "ADR-11 Diseño Responsive"
sidebar_position: 11
---

# ADR-11: Bootstrap

**Fecha:** 2026-03-22  

**Estado:** Proposed

**Equipo/Proyecto:** Cuitla 

**Decisores:** AOwner, Team Lead, PO, Team Member

## Contexto

Para cumplir con el requerimiento no funcional de portabilidad, es necesario contar con un diseño responsivo en la aplicación que garantice la visualización correcta en diferentes resoluciones de pantalla. El proyecto ya cuenta con átomos y moléculas implementados con CSS propio dentro de una arquitectura React, por lo que el framework elegido debe coexistir sin conflictos con los estilos existentes. El equipo tiene experiencia previa con Bootstrap y Bulma, por lo que la curva de aprendizaje no es un factor determinante. El objetivo es seleccionar el framework que mejor soporte el diseño responsivo como criterio principal, sin comprometer la mantenibilidad ni la integración con el stack actual.

## Criterios usados (resumen)

- **Diseño responsivo** — sistema de grid y breakpoints flexible y granular
- **Compatibilidad con React** — integración limpia sin conflictos con el JS del framework
- **Coexistencia con CSS propio** — no debe romper ni competir con los estilos de átomos y moléculas ya implementados
- **Facilidad de implementación** — disponibilidad de componentes interactivos listos
- **Mantenibilidad a largo plazo** — respaldo, actividad del proyecto y estabilidad de versiones
- **Familiaridad del equipo** — el equipo ya conoce ambas opciones

## Alternativas consideradas

1. **Bootstrap 5** 
Framework CSS/JS ampliamente adoptado, con sistema de grid de 12 columnas y breakpoints granulares (`sm`, `md`, `lg`, `xl`, `xxl`).

**Pros**
- Sistema de grid más completo y con mayor granularidad de breakpoints, ventaja directa para el criterio de responsivo
- Ecosistema muy grande: documentación extensa, plantillas, soluciones en Stack Overflow
- Componentes interactivos listos disponibles vía `react-bootstrap`, sin necesidad de implementarlos desde cero
- Respaldo y mantenimiento activo con historial de migraciones estables (v3 → v4 → v5)

**Contras**
- Incluye JavaScript propio que puede generar conflictos con React; requiere usar `react-bootstrap` como wrapper
- Los estilos por defecto son muy reconocibles y requieren customización para diferenciarse visualmente
- Mayor bundle size si no se configura tree-shaking

2. **Bulma** 
Framework CSS puro basado en Flexbox, sin JavaScript incluido.

**Pros**
- Sin JavaScript, por lo que no hay conflictos con React
- Sintaxis de clases más legible y semántica
- Theming con variables CSS nativas sin necesidad de Sass
- El equipo ya lo conoce
 
**Contras**
- Grid basado en Flexbox con menos breakpoints predefinidos que Bootstrap, lo cual limita el control fino del layout responsivo
- Sin componentes interactivos: switches, dropdowns y otros deben implementarse completamente desde cero
- Ecosistema más pequeño, menor disponibilidad de recursos y soluciones
- Proyecto de mantenimiento personal con actividad irregular

3. **Tailwind CSS**
Framework CSS utilitario que genera únicamente las clases utilizadas en el proyecto, con soporte responsivo mediante prefijos de breakpoint aplicados directamente en el markup.

**Pros**
- Responsivo de primera clase: los prefijos `sm:`, `md:`, `lg:`, `xl:`, `2xl:` se aplican a cualquier utilidad directamente en el JSX, sin escribir media queries
- Bundle muy pequeño en producción gracias a PurgeCSS integrado — solo se incluye lo que realmente se usa
- Sin estilos visuales por defecto, por lo que no compite con el CSS propio existente
- Integración natural con React: las clases se aplican directamente como `className`, sin wrappers adicionales
- Ecosistema muy activo y con respaldo de Vercel, alta estabilidad a largo plazo
- Complementa bien una arquitectura de componentes atómica

**Contras**
- El equipo no tiene experiencia previa con Tailwind, lo que implica una curva de aprendizaje real
- El markup se vuelve más verboso con múltiples clases utilitarias, lo que puede dificultar la lectura del JSX
- No provee componentes interactivos (switches, dropdowns); estos deben implementarse desde cero
- Requiere configurar el tooling (PostCSS, plugin de Tailwind) desde el inicio
- Cambiar el enfoque mental de "escribir CSS" a "componer utilidades" puede generar resistencia en el equipo a corto plazo

## Decisión

Se adopta **Bootstrap 5** como framework de diseño responsivo para el proyecto.
 
Para la integración con React se utilizará **`react-bootstrap`**, que expone los componentes de Bootstrap como componentes React sin cargar el JavaScript nativo del framework, eliminando así los posibles conflictos. El sistema de grid y las utilidades responsivas de Bootstrap se usarán como capa de layout, coexistiendo con el CSS propio ya implementado para átomos y moléculas. Los componentes interactivos pendientes (switches, dropdowns) se cubrirán con los componentes de `react-bootstrap`.

## Consecuencias

**Positivas**
- El sistema de grid de 12 columnas con breakpoints `sm / md / lg / xl / xxl` cubre el requerimiento de responsivo con mayor granularidad que Bulma
- El equipo puede avanzar de inmediato sin curva de aprendizaje significativa
- Los componentes interactivos pendientes quedan cubiertos sin implementación adicional
- La estabilidad y el respaldo del proyecto garantizan mantenibilidad a largo plazo
- `react-bootstrap` elimina los conflictos JS con React

**Negativas / Trade-offs**
- Se agrega `react-bootstrap` como dependencia adicional, lo que introduce un posible desfase de versión entre Bootstrap y su wrapper
- Los estilos por defecto de Bootstrap pueden colisionar con el CSS propio si no se delimitan correctamente los alcances (se mitiga usando las clases de Bootstrap únicamente para layout y responsivo, no para estilos visuales)
- Es necesario configurar tree-shaking para evitar incluir partes del framework que no se utilizan
- El bundle final será algo mayor comparado con una solución puramente CSS

## Notas / Links

- [Documentación oficial Bootstrap 5](https://getbootstrap.com/docs/5.3/)
- [react-bootstrap](https://react-bootstrap.github.io/)
- [Sistema de grid Bootstrap](https://getbootstrap.com/docs/5.3/layout/grid/)
- [Breakpoints Bootstrap 5](https://getbootstrap.com/docs/5.3/layout/breakpoints/)
- [Tailwind CSS — Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Comparativa Bootstrap vs Bulma](https://bulma.io/alternative-to-bootstrap/)

---

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Luisa Fernanda Valdez Guillen |  | ADR para definir framework de diseño | 22/03/2026 |