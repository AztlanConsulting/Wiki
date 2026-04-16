---
title: "SPK16 - Prisma"
---

## Plantilla Spike

**Duración:** 1 día  
**Funcionalidad:** backend 

## Beneficios

- Facilita la conexión entre Node.js y PostgreSQL
- Claridad y mantenibilidad del código
- Seguridad y reducción de errores en consultas
- Reduce errores al hacer consultas y operaciones CRUD
- Compatibilidad con JavaScript y posible evolución a TypeScript
- Ergonomía adicional en VS Code

## Desventajas

- Requiere aprender su sintaxis y flujo de trabajo
- Algunas consultas complejas pueden necesitar SQL manual

## Facilidad de aprendizaje

**Fácil**  


## Recursos Externos

- [Prisma](https://www.prisma.io/docs/orm)
- [Prisma con PostgreSQL](https://www.prisma.io/docs/prisma-orm/quickstart/prisma-postgres)
- [CRUD](https://www.prisma.io/docs/orm/prisma-client/queries/crud)
- [Prisma Migrate](https://www.prisma.io/docs/orm/prisma-migrate)

## Tutorial básico

**Instalación y configuración de Prisma ORM ** 

1. Instalar instancias. 
    - npm install prisma @types/pg --save-dev
    - npm install @prisma/client @prisma/adapter-pg pg dotenv

2. Inicializa Prisma

    - npx prisma init
    - Ajustar el .env 

3. Traer el esquema desde la base de datos

    - npx prisma db pull

4. Generar el cliente
    - npx prisma generate

5. Crear prisma.js para establecer la comunicación con la base de datos

``` javascript

require("dotenv").config(); 
const { PrismaClient } = require("../generated/prisma"); 
const { PrismaPg } = require("@prisma/adapter-pg"); 
const { Pool } = require("pg"); 

const pool = new Pool({ 
connectionString: process.env.DATABASE_URL, 
}); 

const adapter = new PrismaPg(pool); 
const prisma = new PrismaClient({ adapter }); 
module.exports = prisma;


```

6. Importar prisma al modelo

    - const prisma = require('../config/prisma');

7. Actualiza las consultas de tu aplicación para usar Prisma ORM.

    - await prisma.user.findUnique(...)
    - await prisma.user.findMany(...)
    - await prisma.user.create(...)
    - await prisma.user.update(...)
    - await prisma.user.delete(...)
    - await prisma.user.upsert(...)



[Documentación DBeaver](https://docs.google.com/document/d/1QXJiha9g6gh5MoR-EbYLULS2_-xZbUYKRYKi7TGZhm0/edit?tab=t.1gdkgimajo7e)

"Ejemplo (Lo mínimo que necesita saber uno de tu investigación y pasos a seguir)" 

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.1     | -Yessica Lora Vazquez   |  Juan Manuel Murillo | Plantilla inicial para guías.  | 31/03/2026 |