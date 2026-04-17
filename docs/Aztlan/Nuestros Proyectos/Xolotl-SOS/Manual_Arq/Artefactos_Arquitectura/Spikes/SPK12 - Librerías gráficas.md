---
title: "SPK12 - Librerías gráficas"
sidebar_position: 12
---

**Duración:** 1 día  
**Funcionalidad:** Front-end  


El propósito de este spike es determinar cuál librería (MUI X y D3) es la que más nos conviene como equipo (Xólotl) para trabajar. Específicamente, se utilizará para la parte del dashboard que verá integrado la socia.

## MUI X

### Beneficios

- Accesibilidad nativa y legibilidad: Al basarse en Material Design, garantiza proporciones, contrastes y áreas táctiles ideales para pantallas móviles y usuarios de diversas edades.
- Integración perfecta con React: Manejo de estado robusto y diseño responsivo casi automático a través de sus propiedades.
- Velocidad de desarrollo: Permite tener gráficos funcionales y estéticos en minutos sin necesidad de cálculos matemáticos.

### Desventajas

- Tamaño del paquete (Bundle size): Es más pesado, lo que podría impactar ligeramente los tiempos de carga en conexiones móviles inestables.
- Diseño fuertemente opinado: Salirse de las guías visuales estrictas de Material Design requiere sobreescribir múltiples estilos.
- Funciones de pago: Ciertas características muy avanzadas o interacciones complejas están reservadas para las licencias Pro o Premium.

## D3.js

### Beneficios

- Control absoluto: Permite manipular cada nodo SVG y elemento del DOM a voluntad. Si puedes imaginarlo, D3 puede dibujarlo.
- Personalización ilimitada: Ideal para narrativas visuales (data storytelling), animaciones a medida e interacciones altamente especializadas.
- Ecosistema gigante: Al ser la librería base de visualización web, tiene una cantidad masiva de ejemplos y algoritmos matemáticos ya resueltos.

### Desventajas

- Curva de aprendizaje pronunciada: Requiere bases fuertes de matemáticas (trigonometría, escalas), SVG y manipulación nativa del DOM.
- Fricción con React: React y D3 intentan controlar el DOM simultáneamente, lo que requiere patrones arquitectónicos complejos (usar useRef y useEffect) para que no interfieran.
- Cero responsividad nativa: Para un enfoque mobile-first, el desarrollador debe programar a mano las fórmulas para que los gráficos recalculen sus tamaños al cambiar la pantalla.

## Recharts

### Beneficios

- Sintaxis declarativa: Utiliza componentes de React (BarChart, Pie), lo que hace que el código sea muy limpio y fácil de leer.
- Responsividad nativa: Su componente ResponsiveContainer adapta los gráficos a pantallas móviles de forma automática.
- Animaciones Out-of-the-box: Incluye transiciones fluidas y modernas por defecto, mejorando la experiencia de usuario sin esfuerzo extra.

### Desventajas

- Flexibilidad limitada: Es una capa de abstracción sobre D3; si necesitas un gráfico que no existe en su catálogo, es sumamente difícil de crear.
- "Techos de cristal": Las personalizaciones muy específicas (como modificar el comportamiento de tooltips o eventos táctiles complejos) a menudo chocan con los límites de la librería.

## Facilidad de aprendizaje

Si pusiéramos las librerías en una escala de facilidad de aprendizaje (de más fácil a más difícil), el orden sería: Recharts, MUI X, D3.js. Recharts y MUI X son librerías basadas en componentes de React donde solo configuras propiedades (props). D3.js, por el contrario, es una herramienta matemática y de dibujo de bajo nivel que requiere un cambio de paradigma mental respecto a cómo React renderiza la interfaz.

## Recursos Externos

- MUI X:
    - [Documentación oficial](https://mui.com/x/react-charts/)
- Recharts:
    - [Documentación oficial](https://recharts.org/en-US/)
    - [Guía básica interactiva](https://refine.dev/blog/recharts/)
- D3.js:
    - [Documentación y galería oficial](https://d3js.org/)
    - [Galería oficial](https://observablehq.com/@d3/gallery)
    - [Integración con React (Tutorial de Amelia Wattenberger)](https://www.freecodecamp.org/news/how-to-get-started-with-d3-and-react-c7da74a5bd9f/)

## Tutorial básico: Gráfico de progreso

Un gráfico de progreso (o media dona) es ideal para móviles porque ahorra espacio vertical. A continuación, se muestra cómo implementar uno que represente un 75% de progreso en cada tecnología.

### MUI X

MUI X lo logra simplemente limitando los ángulos del PieChart.

```tsx

import { PieChart } from '@mui/x-charts/PieChart';

export default function ProgressMui() {
  return (
    <PieChart
      series={[
        {
          data: [
            { id: 0, value: 75, color: '#2e7d32' },
            { id: 1, value: 25, color: '#e0e0e0' }
          ],
          innerRadius: 60,
          outerRadius: 80,
          startAngle: -90, // Inicia a la izquierda
          endAngle: 90,    // Termina a la derecha
        }
      ]}
      width={300}
      height={150}
    />
  );
}

```

### D3.js

D3 requiere definir arcos matemáticos y dibujarlos en un SVG usando referencias nativas.

```tsx

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function ProgressD3() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current).html(""); 
    const arcBg = d3.arc().innerRadius(60).outerRadius(80)
                    .startAngle(-Math.PI / 2).endAngle(Math.PI / 2);
    const arcFg = d3.arc().innerRadius(60).outerRadius(80)
                    .startAngle(-Math.PI / 2).endAngle(Math.PI * 0.25); // 75%
    
    const group = svg.append('g').attr('transform', 'translate(150, 140)');
    group.append('path').attr('d', arcBg as any).attr('fill', '#e0e0e0');
    group.append('path').attr('d', arcFg as any).attr('fill', '#9c27b0');
  }, []);

  return <svg ref={svgRef} width={300} height={150} />;
}

```

### Recharts

Recharts usa el componente Pie manipulando sus ángulos inicial y final.

```tsx

import { PieChart, Pie, Cell } from 'recharts';

export default function ProgressRecharts() {
  const data = [{ value: 75 }, { value: 25 }];
  const colors = ['#2e7d32', '#e0e0e0'];

  return (
    <PieChart width={300} height={150}>
      <Pie 
        data={data} 
        cx="50%" cy="100%" 
        startAngle={180} endAngle={0} 
        innerRadius={60} outerRadius={80} 
        dataKey="value" stroke="none"
      >
        {data.map((_, index) => (
          <Cell key={`cell-${index}`} fill={colors[index]} />
        ))}
      </Pie>
    </PieChart>
  );
}

```


| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Mateo Rodrigo Zapata Crapa  |  | Spike de librerías gráficas  | 07/04/2026 |