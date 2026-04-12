---
title: "SPK07 - FullCalendar para React"
sidebar_position: 7
---

**Duración:** 1 día  
**Funcionalidad:** Integración de `FullCalendar` en una aplicación React creada con Vite para visualizar y gestionar eventos en una interfaz de calendario

## Funcionalidad

`FullCalendar` es una librería de calendario para aplicaciones web que permite renderizar vistas mensuales, semanales y diarias, así como mostrar eventos, navegar entre fechas y reaccionar a interacciones del usuario.

En React se integra mediante el paquete `@fullcalendar/react`, el cual actúa como envoltura del calendario y permite configurarlo mediante `props`.

Permite:

- mostrar eventos en distintas vistas
- cambiar entre vista mensual, semanal o diaria
- capturar clics sobre fechas y eventos
- personalizar el comportamiento del calendario
- integrar fuentes de eventos locales o remotas

## Beneficios

- Tiene integración oficial con React.
- Ofrece múltiples vistas listas para usar.
- Permite comenzar con una configuración básica y crecer gradualmente.
- Tiene buena documentación oficial y ecosistema de plugins.
- Se adapta bien a casos de agenda, disponibilidad y administración de eventos.

## Desventajas

- Requiere instalar plugins adicionales para habilitar ciertas vistas o interacciones.
- La personalización avanzada puede aumentar la complejidad del componente.
- Si se alimenta con muchos eventos sin estrategia de carga, puede afectar la experiencia del usuario.
- Algunas funcionalidades avanzadas pertenecen a plugins premium.

## Facilidad de aprendizaje

**Media**

## Recursos

- [Documentación oficial de FullCalendar](https://fullcalendar.io/docs)
- [Guía oficial de React para FullCalendar](https://fullcalendar.io/docs/react)
- [Vite](https://vite.dev/guide/)

## Guía paso a paso para usar FullCalendar en un proyecto de Vite

### 1. Crear el proyecto con Vite

Si todavía no existe el proyecto, se puede crear con:

```bash
npm create vite@latest mi-calendario -- --template react
cd mi-calendario
npm install
```

Si el proyecto ya existe, solo se continúa con la instalación de dependencias.

### 2. Instalar FullCalendar y los plugins necesarios

Para un caso base con React, vista mensual y soporte de interacción:

```bash
npm install @fullcalendar/core @fullcalendar/react @fullcalendar/daygrid @fullcalendar/interaction
```

Si también se necesita una vista semanal o diaria tipo agenda:

```bash
npm install @fullcalendar/timegrid
```

## Qué hace cada paquete

- `@fullcalendar/core`: base del calendario
- `@fullcalendar/react`: integración con React
- `@fullcalendar/daygrid`: vista mensual
- `@fullcalendar/timegrid`: vista semanal y diaria por horas
- `@fullcalendar/interaction`: soporte para clics, selección y arrastre básico

### 3. Crear un componente de calendario

Crear un archivo como `src/components/Calendar.jsx`:

```jsx
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';

const events = [
  { title: 'Junta con coordinación', date: '2026-04-12' },
  { title: 'Seguimiento con casa hogar', date: '2026-04-15' },
  { title: 'Capacitación interna', date: '2026-04-17T10:00:00' },
];

export default function Calendar() {
  const handleDateClick = (info) => {
    console.log('Fecha seleccionada:', info.dateStr);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      }}
      events={events}
      dateClick={handleDateClick}
      editable={false}
      selectable={true}
      height="auto"
      locale={esLocale}
    />
  );
}
```

### 4. Usar el componente en la aplicación

En `src/App.jsx`:

```jsx
import Calendar from './components/Calendar';

function App() {
  return (
    <main>
      <h1>Calendario del sistema</h1>
      <Calendar />
    </main>
  );
}

export default App;
```

### 5. Levantar el proyecto

Ejecutar:

```bash
npm run dev
```

Después abrir la URL que muestra Vite en consola, normalmente:

```text
http://localhost:5173
```

## Configuración básica recomendada

Las opciones mínimas que conviene entender son:

- `plugins`: activa las vistas y capacidades disponibles
- `initialView`: define la vista inicial del calendario
- `headerToolbar`: configura los botones superiores
- `events`: carga los eventos a mostrar
- `dateClick`: callback al hacer clic en una fecha
- `selectable`: habilita selección de rango
- `editable`: controla si los eventos pueden moverse o redimensionarse
- `height`: ajusta el alto del calendario

## Cómo cargar eventos dinámicamente

Además de pasar un arreglo local, se puede consumir una API.

Ejemplo con React:

```jsx
import { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Calendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const loadEvents = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data);
    };

    loadEvents();
  }, []);

  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={events}
    />
  );
}
```

Formato esperado por FullCalendar:

```json
[
  {
    "title": "Visita a casa hogar",
    "date": "2026-04-20"
  },
  {
    "title": "Reunión semanal",
    "start": "2026-04-21T09:00:00",
    "end": "2026-04-21T10:00:00"
  }
]
```

## Casos de uso relevantes para Ichan-RCHQ

`FullCalendar` puede utilizarse para:

- gestionar disponibilidad de personal
- mostrar citas o actividades programadas
- visualizar eventos institucionales
- administrar agendas semanales o mensuales

## Recomendaciones de implementación

- Mantener el componente de calendario aislado en `components/`.
- Cargar eventos desde una capa de servicios si provienen de backend.
- Normalizar fechas en formato ISO para evitar errores.
- Empezar con `dayGridMonth` y agregar vistas extra solo si realmente se necesitan.
- Evitar meter demasiada lógica de negocio directamente dentro del componente de calendario.

## Resultado esperado

Al finalizar el spike deberías poder:

- instalar FullCalendar en un proyecto React con Vite
- renderizar un calendario funcional
- mostrar eventos estáticos o dinámicos
- reaccionar a clics sobre fechas
- extender el componente con nuevas vistas o integraciones

### Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Manuel Bajos | - | Spike de integración de FullCalendar en React con Vite | 12/04/2026 |
