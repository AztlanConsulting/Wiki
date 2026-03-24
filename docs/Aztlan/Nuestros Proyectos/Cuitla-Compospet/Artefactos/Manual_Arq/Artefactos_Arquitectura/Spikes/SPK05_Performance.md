---
title: "SPK05 - Medición de Performance"
sidebar_position: 5
---

**Duración:** 1 día  
**Funcionalidad:** Medición y análisis del desempeño de la aplicación web

## Beneficios
- **Permite medir métricas clave de experiencia de usuario:** Ayuda a evaluar carga, estabilidad visual y capacidad de respuesta.
- **Combina análisis de laboratorio y datos reales:** PageSpeed Insights permite analizar la página en condiciones controladas, mientras que web-vitals permite medir la experiencia real del usuario en navegador.
- **Facilita detectar oportunidades de optimización:** Ayuda a identificar problemas relacionados con imágenes, JavaScript, CSS, servidor o renderizado.
- **Uso de métricas estandarizadas:** Se basa en métricas reconocidas por Web.dev y Google para evaluar el desempeño web.
- **Implementación relativamente sencilla:** PageSpeed Insights puede usarse directamente desde navegador y web-vitals puede integrarse fácilmente en el frontend.

## Desventajas
- **No todas las métricas provienen de la misma herramienta:** Algunas se analizan mejor con PageSpeed Insights y otras con web-vitals.
- **Los resultados pueden variar según dispositivo y red:** El desempeño real puede cambiar dependiendo del contexto de cada usuario.
- **Requiere interpretación técnica:** No basta con ver el valor de una métrica; es necesario analizar qué lo está causando.
- **web-vitals requiere integración en código:** Para obtener datos reales, debe agregarse código al proyecto.
- **PageSpeed Insights no sustituye medición continua:** Es útil para pruebas puntuales, pero no monitorea automáticamente el comportamiento real de todos los usuarios.

## Facilidad de aprendizaje
**Nivel:** Fácil a intermedio

### Por qué es fácil
- PageSpeed Insights tiene una interfaz muy clara  
- web-vitals tiene una integración sencilla en JavaScript  
- Las métricas principales están bien documentadas  
- Se basa en estándares ampliamente conocidos en desarrollo web  

### Qué puede requerir más aprendizaje
- Interpretar correctamente métricas como LCP, INP o CLS  
- Distinguir entre métricas de laboratorio y de campo  
- Integrar web-vitals con un sistema de almacenamiento o monitoreo  
- Traducir resultados en acciones de optimización concretas  

### Tiempo estimado de aprendizaje
- **Uso básico de PageSpeed Insights:** 30 minutos – 1 hora  
- **Integración básica de web-vitals:** 1–2 horas  
- **Análisis e interpretación completa:** 1–2 días  
- **Uso continuo y optimización avanzada:** varias semanas de práctica  

## Recursos
- https://web.dev/performance  
- https://pagespeed.web.dev/  
- https://github.com/GoogleChrome/web-vitals  
- https://web.dev/articles/defining-core-web-vitals-thresholds?hl=es-419  

## Tutorial básico

### 1. Qué se quiere medir

El objetivo es evaluar el **desempeño de la aplicación web** usando métricas que permitan saber si la página carga rápido, responde bien y mantiene estabilidad visual.

Las métricas definidas son:

- **LCP (Largest Contentful Paint):** 2.5 segundos o menos  
- **SI (Speed Index):** entre 0 y 1.3 segundos  
- **CLS (Cumulative Layout Shift):** 0.1 o menos  
- **INP (Interaction to Next Paint):** 200 milisegundos o menos  
- **TTFB (Time to First Byte):** 0.8 segundos o menos  

### 2. Cómo funciona PageSpeed Insights

**PageSpeed Insights** permite analizar una URL y obtener un reporte de desempeño.

Sirve para:
- Ver métricas de carga de la página  
- Detectar oportunidades de mejora  
- Revisar recomendaciones técnicas  
- Obtener una referencia inicial del rendimiento  

Con esta herramienta se pueden revisar especialmente:
- **LCP**
- **Speed Index**
- **CLS**
- **TTFB**
- Oportunidades de optimización como imágenes pesadas, recursos bloqueantes o exceso de JavaScript

### 3. Cómo funciona web-vitals

La librería **web-vitals** se integra en el frontend y permite medir métricas reales desde el navegador del usuario.

Sirve para:
- Capturar métricas de experiencia real  
- Registrar valores de desempeño en tiempo de ejecución  
- Enviar resultados a consola, base de datos o sistema de monitoreo  
- Validar si la aplicación cumple el no funcional en uso real  

Con web-vitals se pueden medir principalmente:
- **LCP**
- **CLS**
- **INP**
- **TTFB**

### 4. Diferencia entre ambas herramientas

Ambas herramientas se complementan.

**PageSpeed Insights**:
- Sirve para pruebas manuales y análisis puntual  
- Da resultados en entorno de laboratorio  
- Ayuda a identificar problemas técnicos visibles rápidamente  

**web-vitals**:
- Sirve para obtener métricas reales de uso  
- Se integra directamente en la aplicación  
- Permite monitoreo continuo del desempeño real  

### 5. Métricas que se analizarán

#### Largest Contentful Paint (LCP)
Mide cuánto tarda en mostrarse el elemento principal o más grande visible en pantalla.

Objetivo:
- **LCP ≤ 2.5 segundos**

Indica:
- Qué tan rápido percibe el usuario que el contenido principal ya cargó

#### Speed Index (SI)
Mide qué tan rápido se muestra visualmente el contenido durante la carga.

Objetivo:
- **SI entre 0 y 1.3 segundos**

Indica:
- Qué tan rápido avanza la carga visible de la página

#### Cumulative Layout Shift (CLS)
Mide la estabilidad visual, es decir, si los elementos cambian de lugar inesperadamente mientras la página carga.

Objetivo:
- **CLS ≤ 0.1**

Indica:
- Qué tan estable se siente la interfaz para el usuario

#### Interaction to Next Paint (INP)
Mide qué tan rápido responde la página cuando el usuario interactúa con ella.

Objetivo:
- **INP ≤ 200 ms**

Indica:
- Qué tan fluida y reactiva se percibe la página

#### Time to First Byte (TTFB)
Mide el tiempo que tarda en llegar el primer byte de respuesta del servidor.

Objetivo:
- **TTFB ≤ 0.8 segundos**

Indica:
- Qué tan rápido comienza a responder la infraestructura

### 6. Lo mínimo que debes saber
- Qué es **PageSpeed Insights**  
- Qué es la librería **web-vitals**  
- Qué significa cada métrica: **LCP, SI, CLS, INP y TTFB**  
- Qué métricas se revisan manualmente y cuáles se pueden capturar desde el frontend  
- Cómo interpretar si una métrica está dentro o fuera del objetivo definido  

## Pasos para implementar la medición de performance en una web

1. **Definir las métricas objetivo**  
   Establecer los umbrales de desempeño que debe cumplir la aplicación:
   - LCP ≤ 2.5 s  
   - SI entre 0 y 1.3 s  
   - CLS ≤ 0.1  
   - INP ≤ 200 ms  
   - TTFB ≤ 0.8 s  

2. **Analizar la página con PageSpeed Insights**  
   Ingresar la URL en PageSpeed Insights para obtener un reporte inicial del desempeño.

3. **Registrar resultados base**  
   Documentar los valores obtenidos de LCP, SI, CLS, INP y TTFB como línea base del sistema.

4. **Integrar la librería web-vitals en el frontend**  
   Instalar la librería en el proyecto para comenzar a medir métricas reales desde navegador.

5. **Configurar captura de métricas**  
   Enviar los resultados de web-vitals a consola, logs, una API o una base de datos para análisis posterior.

6. **Comparar resultados contra los no funcionales definidos**  
   Verificar qué métricas cumplen y cuáles no cumplen con los valores esperados.

7. **Identificar oportunidades de mejora**  
   Revisar si los problemas se relacionan con imágenes, scripts, CSS, fuentes, servidor o renderizado.

8. **Aplicar optimizaciones**  
   Hacer ajustes técnicos según los hallazgos encontrados en PageSpeed Insights y en los datos capturados por web-vitals.

9. **Volver a medir**  
   Ejecutar nuevamente PageSpeed Insights y revisar los datos actualizados de web-vitals.

10. **Documentar conclusiones del spike**  
   Registrar qué herramienta mide cada aspecto, si la aplicación cumple el no funcional y qué mejoras se recomiendan.

## Ejemplo básico de uso de web-vitals

```js
import { onCLS, onINP, onLCP, onTTFB } from 'web-vitals';

onCLS(console.log);
onINP(console.log);
onLCP(console.log);
onTTFB(console.log);
```

Este ejemplo permite capturar métricas básicas desde el navegador y mostrarlas en consola.
Posteriormente, en lugar de console.log, se pueden enviar a un backend o sistema de monitoreo.

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Fátima Figueroa | | Primera versión del spike de Performance | 17/03/2026 |