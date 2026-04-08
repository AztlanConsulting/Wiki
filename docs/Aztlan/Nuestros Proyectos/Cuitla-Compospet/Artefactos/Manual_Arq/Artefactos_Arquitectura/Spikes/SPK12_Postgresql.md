---
title: "SPK12 - PostgreSQL Spike"
sidebar_position: 12
---

**Duración:** 1 día  
**Funcionalidad:** Base de Datos 

PostgreSQL es una base de datos relacional, por lo que se adapta bien a sistemas donde existen entidades relacionadas entre sí, por ejemplo: un usuario puede tener muchas solicitudes, una solicitud puede tener horarios, y un cliente puede tener movimientos de saldo.

## Beneficios
- Es una base de datos relacional robusta pues cumple con las características ACID
- En Ubuntu puede instalarse directamente con `apt`, lo que facilita su adopción en el servidor.
- Permite trabajar con usuarios, permisos y privilegios de forma segura.
- Es adecuada para modelar información estructurada del proyecto.
- Facilita escalar el proyecto más adelante pues es capaz de ajustarse al número de CPU y a la cantidad de memoria disponible de forma óptima.
- Estabilidad y confiabilidad
- Facilidad para aprender cuando tienes conocimientos previos en SQL. 

## Desventajas

- Es lento en inserciones y actualizaciones en bases de datos pequeñas, PostgreSQL está diseñado para ambientes de alto volumen.
- No tiene soporte oficial. PostgreSQL cuenta con foros oficiales de comunidad
- La interfaz de manejo de postgresql es poco intuitiva y difícil de manejar

## Facilidad de aprendizaje

**Fácil**  

## Recursos

- [PostgreSQL en Ubuntu](https://www.postgresql.org/download/linux/ubuntu/)
- [Install and configure PostgreSQL](https://ubuntu.com/server/docs/how-to/databases/install-postgresql/)
- [PostgreSQL in 100 Seconds](https://www.youtube.com/watch?v=n2Fluyr3lbc)
- [Razones para elegir POSTGRESQL](https://www.youtube.com/watch?v=eg-YERl3iEc)
- [Creating a Database](https://www.postgresql.org/docs/current/tutorial-createdb.html)
- [Accessing a Database](https://www.postgresql.org/docs/current/tutorial-accessdb.html)

## Tutorial

**Instalación en un servidor**

1.  Instalación Postgresql en el Servidor Ubuntu 24.04

```bash
    sudo apt install postgresql
```
2. Crear Rol/Usuario en Postgresql, para poder conectarse

```bash
    sudo su - postgres
    psql -U postgres

    CREATE ROLE cuitla26 LOGIN CREATEDB;

    sudo su - postgres
    psql compospetbd
    CREATE USER ________ WITH PASSWORD “________”;
```

3. Se cambiará el puerto de la BD para más seguridad

4. Crear Base de datos

```bash
    createdb compospetbd
```

5. Acceso a las bases de datos

```bash
    psql compospetbd
```

[Documentación Postgresql Compospet](https://docs.google.com/document/d/1QXJiha9g6gh5MoR-EbYLULS2_-xZbUYKRYKi7TGZhm0/edit?tab=t.0)


| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | -Yessica Lora Vazquez   |  Juan Manuel Murillo | Spike Postgresql.  | 16/02/2026 |
| 1.0     | -Yessica Lora Vazquez   |  Juan Manuel Murillo | Acualización Postgresql.  | 21/03/2026 |
