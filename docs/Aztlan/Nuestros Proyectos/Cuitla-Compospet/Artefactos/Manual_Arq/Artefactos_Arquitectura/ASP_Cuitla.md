---
title: "Architecture Starter Pack"
sidebar_position: 9
---

## Architecture Starter Pack Cuitla

**Contexto:** Compospet es una empresa que se dedica a la recolecta y entrega de composta. Actualmente, la empresa opera bajo una logística basada en Excel y busca profesionalizar sus flujos de trabajo para potenciar su alcance y eficiencia operativa.

**Objetivos:** Asegurar que cada solución sea construible, escalable y mantenible.

**Usuarios:** Administración y clientes de Compospet

**Supuestos:** APIs de Google

## Módulos principales
* Inicio de sesión
* Tabla de Clientes
* Tabla Ruta
* Recordatorios
* Pagos
* Formulario
* Landing

## Datos sensibles
*Cifrar datos sensibles desde un inicio:*
* Nombre
* Direcciones
* Teléfono
* Usuarios
* Contraseñas

## Requerimientos no funcionales mínimos
**Seguridad:** RBAC (Acceso Basado en Roles), cifrado de datos sensibles, queries parametrizadas, usar ORM (si es base de datos relacional), manejo de cookies y sesiones.

**Usabilidad:** Pantallas simplificadas para recolección en calle (pocos clics, botones grandes) y confirmaciones visuales claras.

**Fiabilidad:** Disponibilidad mayor de 95%, gestión de errores, timeouts.


### Riesgos de mitigación iniciales
- Infraestructura(Disponibilidad)
- Parametrizar datos
- Aceptación de API de pagos
- Recolección de datos

## Stack de tecnologías

### Lenguaje
- Javascript
- Typescript -> JS con tipado

### Backend
- Express

### Frontend
- EJS -> Estructura
- React -> Estructura
- Axios -> Consulta de información (Alternativa a fetcc)
- Tailwind -> Estilo

### Database
- PostgresSQL -> SQL
- MongoDB -> Colecciones

### Pruebas
- Postman -> Endpoints
- Jest -> Unitarias

### Integraciones externas probables
[APIs, servidores, \dots]

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Yessica Lora | Fernanda Valdez |    | 10/03/2026 |