## Architecture Starter Pack "Equipo" --- Plantilla MVP

**Contexto:** \,[Cada Proyecto tiene diferente contexto] \,[Análisis]

**Objetivos:** Asegurar que cada solución sea construible, escalable y mantenible.

**Usuarios:** \,[Cada Proyecto tiene diferente Usuarios] \,[Context Map]

**Supuestos:** \,[Diferente para cada Proyecto]

## Módulos principales
[Módulos de cada proyecto, o secciones que se necesitan para que el proyecto funcione, eg: Pagos, Usuarios, Partes del proceso] \,[Diagrama de Componentes]

## Datos sensibles
*Cifrar datos sensibles desde un inicio:*
- Nombre
- Direcciones
- Contraseñas
- Teléfono
- Contactos en general
- Pagos
- Cuenta de banco
- Información general de pagos

## Requerimientos no funcionales mínimos
**Seguridad:** RBAC (Acceso Basado en Roles), cifrado de datos sensibles, queries parametrizadas, usar ORM (si es base de datos relacional), manejo de cookies y sesiones.

**Disponibilidad:** \,[Definir SLA/SLO mínimo, RTO/RPO, ventanas de mantenimiento]

**Rendimiento:** \,[Definir latencia objetivo, throughput, límites de carga]

**Trazabilidad:** Git, matrices de avance, Pull Requests, commits.

### Riesgos de mitigación iniciales
- Cifrado de datos
- Parametrizar datos

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