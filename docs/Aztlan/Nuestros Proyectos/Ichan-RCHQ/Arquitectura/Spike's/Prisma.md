---
title: "SPK06 - Prisma"
sidebar_position: 6
---

**Duración:** 1 a 2 días  
**Funcionalidad:** Integración de Prisma ORM en un proyecto backend con Node.js

## Funcionalidad

Integrar Prisma ORM dentro de un proyecto backend en Node.js para gestionar la base de datos de forma sencilla, tipada y escalable.

Permite:

- modelar la base de datos con un `schema`
- generar automáticamente queries tipadas
- manejar migraciones
- conectarse a múltiples bases de datos como PostgreSQL, MySQL y SQLite

## Beneficios

- Ayuda a proteger contra SQL Injection al evitar concatenación manual de queries.
- Permite queries más limpias que SQL crudo.
- Incluye migraciones automatizadas.
- Tiene integración sencilla en proyectos Node.js.
- Cuenta con excelente documentación y comunidad.

## Desventajas

- La abstracción puede ocultar detalles importantes del SQL subyacente.
- Tiene una curva inicial si nunca se ha usado un ORM.
- Si no se administran bien los cambios de esquema, se puede afectar la información existente.
- Requiere entender la diferencia entre `migrate`, `db push` y la generación del cliente.

## Facilidad de aprendizaje

**Media**

## Recursos

- [Documentación oficial de Prisma](https://www.prisma.io/docs)
- [Videotutorial prisma](https://youtu.be/RebA5J-rlwg?si=QTq-GpXuNNMQOLLy)

## Tutorial básico

### 1. Instalar Prisma y sus herramientas

Dentro de tu proyecto:

```bash
npm install prisma --save-dev
npm install @prisma/client
npm install @prisma/adapter-pg pg dotenv
```

Si el proyecto usa PostgreSQL y tipos adicionales, también puede ser útil:

```bash
npm install @types/pg --save-dev
```

### 2. Inicializar Prisma

```bash
npx prisma init
```

Esto crea:

- `prisma/`
- `schema.prisma`
- `.env`

### 3. Configurar la base de datos

En `.env`:

```env
DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/mi_db"
```

Ejemplo para PostgreSQL:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mi_db"
```

### 4. Modificar modelos en `schema.prisma`

Agrega un modelo de prueba, por ejemplo:

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
}
```

### 5. Configurar `prisma.config.ts` o el entorno de Prisma

Se debe asegurar que Prisma lea correctamente `process.env.DATABASE_URL` en la configuración correspondiente.

Si el proyecto presenta problemas de tipado con `prisma.config.ts`, una alternativa es:

- pasar de `prisma.config.ts` a `prisma.config.js`
- o agregar un `tsconfig.json` adecuado para soportar TypeScript

La intención es evitar errores de configuración antes de correr migraciones.

### 6. Ejecutar migración

```bash
npx prisma migrate dev
```

También existe:

```bash
npx prisma db push
```

Esto puede:

- crear la base de datos si no existe
- aplicar cambios al esquema
- generar el cliente de Prisma

`migrate dev` es preferible cuando quieres historial de migraciones. `db push` se usa más para prototipos o sincronización rápida sin generar migraciones formales.

### 7. Usar Prisma en tu código

Ejemplo con Express:

```javascript
const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

app.get('/test', async (req, res) => {
  const user = { texto: 'Manuel' };

  try {
    const sent = await prisma.usuario.create({
      data: user,
    });

    res.json(sent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error creating user' });
  }
});
```

Este ejemplo muestra cómo crear un registro desde una ruta usando Prisma Client.

### 8. Prisma Studio

```bash
npx prisma studio
```

Esto abre una interfaz visual tipo panel administrativo para explorar la base de datos.

## Resultado esperado

Al final del spike deberías poder:

- conectar tu backend a la base de datos con Prisma
- crear modelos básicos
- ejecutar migraciones
- hacer operaciones CRUD desde tu API

### Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Manuel Bajos | Oswaldo | Spike de instalación e integración de Prisma en Node.js | 07/04/2026 |
