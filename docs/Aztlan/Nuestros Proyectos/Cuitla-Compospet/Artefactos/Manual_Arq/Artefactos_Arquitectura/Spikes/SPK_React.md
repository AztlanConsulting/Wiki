---
title: "Spike de React"
sidebar_position: 1
---

## Spike de React

**Duración:** 1 día  
**Funcionalidad:** Front-end web  

## Beneficios

- Biblioteca de JavaScript, no hay necesidad de aprender un nuevo lenguaje
- Ofrece protección básica contra ataques XSS (Cross-Site Scripting) 
- Facilita la creación de interfaces de usuario
- Facilita la creación de contenido dinámico
- Reutilización de código
- Amplia comunidad y recursos
- Diseño modular

## Desventajas

- Curva de aprendizaje inicial para conceptos propios como JSX, hooks y el manejo del estado
- JSX puede resultar confuso al mezclar lógica y marcado en el mismo archivo
- El rendimiento puede degradarse si no se optimiza correctamente (rerenders innecesarios)

## Facilidad de aprendizaje

**Fácil**  

## Recursos

- [Documentación oficial](https://es.react.dev/learn)
- [Curso de React](https://www.youtube.com/watch?v=7iobxzd_2wY)
- [Tutorial: Tic-tac-toe](https://es.react.dev/learn/tutorial-tic-tac-toe)
- [Agregar React a un proyecto existente](https://es.react.dev/learn/add-react-to-an-existing-project)
- [Instalación de React](https://es.react.dev/learn/installation)
- [PERN Stack - ¿Cómo funciona React en conjunto con Node y PostgreSQL?](https://www.youtube.com/watch?v=_zGL_MU29zs&t=1687s)
- [Tu primer componente](https://es.react.dev/learn/your-first-component)


## Tutorial: Componentes en React

> Comparativa paso a paso entre HTML + JavaScript puro y React (JSX)

## ¿Qué es un componente?

Un componente es un bloque reutilizable de interfaz que mezcla estructura, estilo y lógica en un solo lugar. En HTML/JS puro esto se hace manualmente; React lo formaliza como una función.

### HTML + JavaScript

```html

<div class="tarjeta">
  <h2>Ana García</h2>
  <p>Desarrolladora</p>
</div>

<div class="tarjeta">
  <h2>Luis Ramos</h2>
  <p>Diseñador</p>
</div>
```
### React (JSX)

```jsx
function Tarjeta() {
  return (
    <div className="tarjeta">
      <h2>Ana García</h2>
      <p>Desarrolladora</p>
    </div>
  );
}

// Lo reutilizamos sin tener que copiar el código
<Tarjeta />
<Tarjeta />
```

## Props: datos dinámicos

Las props son los "parámetros" de un componente. En HTML/JS pasamos datos manipulando el DOM; React lo hace directamente como atributos JSX.

### HTML + JavaScript

```html
<div class="tarjeta">
  <h2>Ana García</h2>
  <p>Desarrolladora</p>
</div>
```

```js
function crearTarjeta(nombre, rol) {
  const div = document.createElement('div');
  div.innerHTML = `
    <h2>${nombre}</h2>
    <p>${rol}</p>
  `;
  return div;
}
```

### React (JSX)

```jsx
function Tarjeta({ nombre, rol }) {
  return (
    <div className="tarjeta">
      <h2>{nombre}</h2>
      <p>{rol}</p>
    </div>
  );
}

// Cada uso puede tener datos distintos
<Tarjeta nombre="Ana García"  rol="Desarrolladora" />
<Tarjeta nombre="Luis Ramos"  rol="Diseñador" />
```


| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Luisa Fernanda Valdez Guillén | Yessica Lora | Spike de React | 13/03/2026 |
