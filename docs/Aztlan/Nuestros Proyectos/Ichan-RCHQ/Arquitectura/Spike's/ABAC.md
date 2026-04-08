---
title: "SPK03 - ABAC"
sidebar_position: 3
---

**Duración:** 2 a 3 días  
**Funcionalidad:** Control de acceso basado en atributos (ABAC)

## Funcionalidad

ABAC (Attribute-Based Access Control) es un modelo de autorización donde el acceso a recursos no depende solo del rol del usuario, sino de una combinación de atributos, como:

- Atributos del usuario: rol, área, puesto, antigüedad, estatus
- Atributos del recurso: tipo de documento, casa hogar asignada, nivel de confidencialidad
- Atributos de la acción: leer, crear, editar, eliminar, aprobar
- Atributos del entorno: hora, ubicación, dispositivo, red interna, estado de sesión

En vez de reglas como:

- solo `admin` puede editar

ABAC permite reglas como:

- un coordinador puede editar empleados de su misma sede
- un usuario solo puede ver expedientes de la casa hogar a la que pertenece
- solo se puede aprobar una solicitud en horario laboral y desde la red interna

## Beneficios

- Es más flexible que RBAC.
- Permite permisos más cercanos a la realidad del negocio.
- Escala mejor en sistemas complejos sin crear demasiados roles artificiales.
- Mejora la seguridad al restringir acceso por condiciones específicas.
- Es útil en sistemas multi-sede o multi-casa donde el acceso depende del contexto.

## Desventajas

- Es más complejo de diseñar porque exige definir bien atributos, políticas y reglas.
- Es más difícil de depurar cuando una autorización falla.
- Requiere una buena estructura de datos para que los atributos estén disponibles y sean consistentes.
- Puede crecer rápido en complejidad si las políticas no se planean adecuadamente.
- Obliga a pensar la autorización como una capa formal del sistema, no como validaciones aisladas.

## Facilidad de aprendizaje

**Difícil**

## Cuándo conviene usar ABAC

ABAC conviene cuando:

- los permisos dependen del contexto
- hay recursos por departamento, sede o casa hogar
- no basta con decir `admin` sí y `user` no
- se necesitan reglas finas de seguridad

## Diferencia entre RBAC y ABAC

### RBAC

Acceso según rol.

Ejemplo:

- `admin` puede eliminar empleados
- `user` no puede eliminar empleados

### ABAC

Acceso según atributos y contexto.

Ejemplo:

- un coordinador puede editar empleados solo si pertenece a la misma casa hogar
- el empleado no está dado de baja

### En la práctica

Muchas veces se usa un esquema híbrido:

- RBAC para el acceso base
- ABAC para reglas finas

Ejemplo:

- solo el rol `admin` o `coordinador` puede entrar al módulo de empleados
- pero además solo puede editar empleados de su misma sede

## Arquitectura recomendada

Para implementar ABAC en backend normalmente necesitas:

### 1. Autenticación

Primero identificar al usuario, por ejemplo con:

- JWT
- sesión
- OAuth

### 2. Middleware de autorización

Un middleware que evalúe políticas antes de permitir una acción.

### 3. Fuente de atributos

Necesitas obtener atributos desde:

- token JWT
- base de datos
- recurso consultado
- contexto de la petición

### 4. Motor de políticas

Puede ser:

- hecho manualmente en código
- con librerías de autorización
- con un motor externo más avanzado

## Recursos

- [NIST - Attribute Based Access Control](https://csrc.nist.gov/projects/attribute-based-access-control)
- [Video tutorial sobre ABAC](https://youtu.be/zFQHn1nk-uw?si=rO4hYqyuLA0bXp_z)

## Guía paso a paso para implementar ABAC

### Pre requisito: define lo que se protegerá

Antes de iniciar, se debe definir el esquema que se utilizará para políticas, qué se va a proteger y cómo se va a proteger.

Ejemplo:

- usar los identificadores del usuario y de la casa hogar para saber si pertenecen a la misma sede y permitir o negar una acción

### 1. Diseña las políticas

Escribe reglas claras en lenguaje natural antes de programar.

Ejemplos:

- un `admin` puede hacer cualquier acción
- un coordinador puede leer y editar empleados de su misma casa
- un empleado solo puede ver su propio perfil
- solo un supervisor puede aprobar vacaciones

Esto evita programar reglas improvisadas.

### 2. Estructura el JWT correctamente

En el token puedes guardar atributos básicos del usuario, por ejemplo:

- `userId`
- `role`
- `houseId`
- `department`

No conviene meter demasiada información dinámica en el JWT, porque:

- puede desactualizarse
- hace el token más pesado
- complica la revocación

Lo estable sí puede ir en el JWT. Lo cambiante, mejor consultarlo en base de datos.

### 3. Crea un middleware base de autorización

```javascript
const canAccess = (user, policyFn, resource) => {
  if (!user) return false;
  return policyFn(user, resource);
};

const authorize = (policyFn, resource) => (req, res, next) => {
  if (canAccess(req.user, policyFn, resource)) {
    return next();
  }

  return res.status(403).json({ message: 'Access Denied' });
};

module.exports = {
  authorize,
  canAccess,
};
```

Ese middleware debe:

- obtener al usuario autenticado
- obtener el recurso si hace falta
- evaluar la política
- permitir o rechazar

### 4. Crea una función central de política

```javascript
const adminPolicy = (user, resource) => {
  if (user.role === 'admin') return true;

  if (user.role === 'coordinator') {
    if (resource.coordinators.includes(user.id)) return true;
  }

  return false;
};

module.exports = {
  adminPolicy,
};
```

La idea es centralizar reglas para no repartir permisos en todo el proyecto.

### 5. Obtén el recurso antes de evaluar

Si una política depende del recurso, debes cargarlo antes de aplicar la validación.

Ejemplo: para editar un empleado, primero obtienes ese empleado de la base de datos para saber:

- a qué casa pertenece
- quién lo creó
- su estado

Sin eso, no puedes aplicar ABAC de verdad.

### 6. Usa el middleware en las rutas o el validador en el controller

Ejemplo en la ruta:

```javascript
router.get(
  '/profile',
  verifyToken,
  requireRole('admin', 'user'),
  authorize(adminPolicy, { coordinators: userModel.coordinators || [] }),
  userController.getProfile
);
```

Ejemplo en el controller:

```javascript
const resource = {
  coordinators: User.coordinators || [],
};

if (!canAccess(req.user, adminPolicy, resource)) {
  return res.status(403).json({ message: 'Forbidden' });
}
```

Esto puede hacerse en middleware o dentro del controller, dependiendo de cómo se obtengan los atributos necesarios.

### 7. Prueba casos reales

Haz pruebas de autorización como:

- `admin` puede todo
- coordinador solo su casa
- `user` no puede eliminar
- el empleado solo ve su perfil

Esto ayuda a evitar errores graves de seguridad.

## Buenas prácticas

### 1. No hardcodear reglas por todos lados

Centraliza políticas.

### 2. Mantener reglas legibles

Si las reglas se vuelven enormes, sepáralas por recurso o dominio.

### 3. Combinar RBAC y ABAC

Suele ser la mejor decisión en sistemas reales.

### 4. Probar permisos como parte del testing

No dejes la autorización solo a pruebas manuales.

### 5. No confiar solo en el frontend

Toda autorización real debe hacerse en backend.

## Resultado esperado del spike

Al terminar este spike deberías poder responder:

- qué es ABAC y cómo se diferencia de RBAC
- si conviene para tu proyecto
- qué atributos necesitarías guardar
- cómo modelar políticas
- cómo implementar un middleware básico

### Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Manuel Bajos| Ivan | Spike de ABAC para autorización basada en atributos | 07/04/2026 |
