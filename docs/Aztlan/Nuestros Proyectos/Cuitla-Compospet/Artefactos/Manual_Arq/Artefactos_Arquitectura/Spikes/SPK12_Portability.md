---
title: "SPK13 - Spike Portability - Browserslist"
sidebar_position: 13
---

**Duración:** 1 día  
**Funcionalidad:** Front-end web  

## Beneficios

- Mentener compatibilidad entre navegadores de manera sencilla
- Paquete de npm
- Comunidad amplia que da soporte
- Facil de configurar
- Configuración centralizada y compartida
- Create React App ya integra Browserslist con Babel y Autoprefixer automáticamente

## Desventajas

- Requiere actualización periódica de la base de datos
- Browserslist es solo una capa de configuración; requiere que otras herramientas (Babel, Autoprefixer, etc.) la consuman para que tenga efecto real en el código.

## Facilidad de aprendizaje

**Fácil**  
> Opciones: Fácil, Medio, Difícil, Muy difícil

## Recursos

- [Documentación oficial](https://browsersl.ist/)
- [Install Browserslist](https://youtu.be/_UoeV9KIeiE)
- [¿Qé es Browserslist?](https://lenguajecss.com/herramientas-css/preprocesadores/browserslist/)

## Tutorial básico

### ¿Cómo funciona?
Browserslist es una librería que te permite definir qué navegadores debe soportar tu app. Herramientas como Babel y Autoprefixer la leen automáticamente para hacer tu código compatible.

### Instalación
```bash
npm install -D browserslist
```
> Como usamos `create-react-app` para la app de react, ya viene instalado. No necesitamos hacer nada.

### Configuración
 
Crea un archivo `.browserslistrc` en la raíz de tu proyecto:
 
```
last 2 versions
not dead
> 0.5%
```
 
Eso es todo. Con esas 3 líneas le dices a tu app que soporte:
- Las últimas 2 versiones de cada navegador
- Solo navegadores con soporte activo
- Solo navegadores con más del 0.5% de uso global
 
---

## Verificar que funciona
 
Ejecuta este comando para ver qué navegadores cubre tu configuración:
 
```bash
npx browserslist
```
 
Verás una lista como esta en la terminal:
 
```
chrome 121
chrome 120
firefox 122
safari 17.2
edge 121
...
```


| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Luisa Fernanda Valdez Guillén | Yessica Lora | Spike de Portability | 19/03/2026 |
