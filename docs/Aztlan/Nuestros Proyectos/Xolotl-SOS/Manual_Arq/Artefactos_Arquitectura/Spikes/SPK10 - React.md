---
title: "SPK10 - React"
sidebar_position: 10
---

**Duración:** 1 día  
**Funcionalidad:** Front-end web  

## Beneficios

- Facilidad para modular la aplicación 
- Facilidad para hacer contenido dinámico 
- Reutilización de código 
- Amplia comunidad y recursos 
- Velocidad para cambiar entre rutas 


## Desventajas

- Curva de aprendizaje 
- Mayor complejidad 


## Facilidad de aprendizaje

**Fácil**  

## Recursos Externos

- [Tutorial básico](https://www.youtube.com/watch?v=tqjJrXd27m4)
- [Resumen de React](https://youtu.be/wIyHSOugGGw?si=RYeHsdEvNTujTFW1)

## Tutorial básico

### ¿Qué es React?
JavaScript librería de front-end, desarrollado por JOrdan Walke, Ingeniero de software de Facebook. Es una herramienta para construir componentes UI.
 
### ¿Cómo funciona?
En vez de manipular archivo DOM, React crea un DOM virtual en la memoria. Esto le permite solo cambiar lo que se haya cambiado, ya que compara primero el archivo actual de DOM virtual y anterior. Esto le permite solo cambiar esa parte sin tener que cargar todo el archivo DOM.

### Prerrequisitos
Tener instalado Node.js
 
### Instalación de una aplicación React

Utilizamos Vite para instalar una aplicación React.
Comando para instalar vite:
npm install -g create-vite
Comando para crear una nueva aplicación React (my-react-app en vez del nombre del proyecto):
npm create vite@latest my-react-app
* Seleccionar TypeScript como lenguaje.
 
### Correr una aplicación React
Ingresar el siguiente comando:
npm run dev

### ¿Qué es un componente de React?
Son partes de código que son independientes y reusables. Vienen en dos tipos: los componentes Class y los componentes Function.

### Componente Function
Inline type declaración:

```jsx

function MyButton({ title }: {title: string}) {
    return (
        <button>{title}</button>
    );
}
 
export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton title="I'm a button" />
        </div>
    )
}


```

Interface type declaración:

```jsx

interface MyButtonProps {
    title: string,
    disabled: boolean,
}
 
function MyButton({ title, disabled }: MyButtonProps) {
    return (
        <button disabled={disabled}>{title}</button>
    );
}
 
export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton title="I'm a button" disabled={false}/>
        </div>
    )
}


```

Type type declaración:

```jsx

type MyButtonProps = {
    title: string,
    disabled: boolean,
}
 
function MyButton({ title, disabled }: MyButtonProps) {
    return (
        <button disabled={disabled}>{title}</button>
    );
}
 
export default function MyApp() {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton title="I'm a button" disabled={false}/>
        </div>
    )
}



```

* Normalmente, cuando declaras un componente function, lo exportas directamente como la siguiente manera:


```jsx

interface MyButtonProps {
    title: string,
    disabled: boolean,
}
 
function MyButton({ title, disabled }: MyButtonProps) {
    return (
        <button disabled={disabled}>{title}</button>
    );
}
 
export default MyButton;

```

Pero lo utilizamos de manera diferente para ver cómo llamar los componentes con sus atributos por fuera en el mismo código.
 
### Componentes Class
Este componente antes se utilizaba como componente Function con Hooks. Pero con la creación de Hooks, ya no se utiliza frecuentemente. Aunque siga existiendo en React, es recomendable utilizar los componentes Function, en vez de los de Class.
 
### Hooks
Los hooks permiten las funciones a tener acceso directo al estado y otras funcionalidades de React sin usar Class. Los hooks son funciones que te permite meter al estado de React y funcionalidades de ciclo de vida de los componentes function. Tenemos useState como un ejemplo mayor de los hooks.
 
### UseState
UseState permite checar el estado del componente function.
Primero, tenemos que importar useState de React:
```jsx
Import { useState } from “react”;
```
useState acepta un estado inicial y regresa dos valores; el estado actual y una función que actualiza el estado.
Ejemplo:
```jsx
const [enabled, setEnabled] = useState(false);
```
En este ejemplo, enabled va a tener el valor de false y setEnabled sería la función que actuliza el enabled, el estado actual. Utilizamos useState() con su valor para inicializar el estado.
useState puede tener strings, números, booleans, arreglos, objetos y alguna combinación de los mencionados.
 
### Añadir style en React
En React, puedes especificar una clase CSS con className.

CSS clásico:
```jsx
<img className="avatar" />
```
CSS Modules:
```jsx
import styles from "./MyButton.module.css";
 <button className={styles.btn}>Click</button>
```
Estilo Inline:
```jsx
<div style={{ color: "red", fontSize: "20px" }}>Hola</div>
```

### Manejo de eventos en TypeScript

```tsx
function MyButton() {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked!", event);
  };
 
  return <button onClick={handleClick}>Click me</button>;
}
 
export default MyButton;
```

Renderizado condicional:

```tsx

function Greeting({ isLoggedIn }: { isLoggedIn: boolean }) {
  return <div>{isLoggedIn ? "Bienvenido" : "Por favor inicia sesión"}</div>;
}

```


| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Mateo Rodrigo Zapata Crapa  |  | Spike de React  | 07/04/2026 |