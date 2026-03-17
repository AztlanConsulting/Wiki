---
title: "Spike Servidor"
sidebar_position: 1
---
## Spike Instalación de Servidor

**Duración:** 1 día
**Funcionalidad:** Infraestructura

## Facilidad de aprendizaje

**Fácil**

## Configuración inicial y de seguridad de un servidor

> Guía de configuración inicial y fortalecimiento de seguridad de un servidor Linux, que incluye actualización del sistema, gestión de usuarios, configuración segura de acceso SSH y establecimiento de políticas básicas de red y firewall

## Glosario

### VPS

**Definición:**
Máquina virtual que ofrece recursos dedicados (CPU, RAM, ROM) dentro de un servidor físico compartido.

### SSH

**Definición:**
Protocolo de red criptográfico que permite el acceso y la gestión remota segura entre servidores y dispositivos.

## Pasos

1. Conectarse vía SSH al servidor
2. Actualizar los paquetes

   ```shell
   sudo apt update
   ```

   ```shell
   sudo apt upgrade
   ```
3. Actualizar el kernel (si es necesario)
   1. ¿Cómo saber si se necesita reiniciar el servidor?

        ```shell
        ls /var/run/reboot-required/var/run/reboot-required
        ```

        Si se tiene un archivo dentro del directorio, es necesario reiniciar

    2. ¿Cómo reiniciar el servidor?

        ```shell
        reboot
        ```

4. Cambiar la contraseña del rootç

    ```shell
    passwd
    ```

5. Crear nuevos usuarios

    ```shell
    aduser new_user
    ```

    1. Añadir el usuario a la lista *sudo*

        ```shell
        usermod -aG sudo new_user
        ```

    2. Comando para revisar en qué listas está el usuario

        ```shell
        groups new_user
        ```

6. Login con SSH Key
    1. [Genera un SSH Key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) en la computadora con la que te vas a conectar al servidor
    2. Recuperar el contenido del archivo *.pub* generado
    3. Crear el directorio en *home* para los certificados

        ```shell
        mkdir .ssh
        ```

    4. Crear el archivo *authorized_keys* dentro del directorio *.ssh/*

        ```shell
        cd .ssh/
        nano authorized_keys
        ```

    5. Copiar el contenido del archivo *.pub* a *authorized_keys*
    6. Probar

        ```shell
        exit
        ```

        1. Entrar de nuevo al servidor (No pedirá contraseña)
7. Deshabilitar el login con contraseña

    ```shell
    sudo nano /etc/ssh/sshd_config
    ```

    1. Modificar la autenticación con contraseña
        1. PasswordAuthentication: yes -> no

    ```shell
    sudo nano /etc/ssh/sshd_config.d/50-cloud-init.conf
    ```
    2. Modificar la autenticación con contraseña
            1. PasswordAuthentication: yes -> no

    ```shell
    sudo service ssh restart
    ```
8. Deshabilitar login con root

    ```shell
    sudo nano /etc/ssh/sshd_config
    ```

    1. #PermitRootLogin without-password -> PermitRootLogin no

9. Añadir políticas de red y firewall
    1. Instalar UFW
        ```shell
        sudo apt install ufw
        ```
    2. Verificar el estado del firewall
        ```shell
        sudo ufw status
        ```
    3. Habilitar el firewall
        ```shell
        sudo ufw enable
        ```
10. Modificar el puerto SSH default
    ```shell
    sudo nano /etc/ssh/sshd_config
    ```
    1. #Port 22 -> Port 2222

    2. **Permitir el nuevo puerto en el firewall**
        ```shell
        sudo ufw allow 2222/tcp
        ```

    3. Reiniciar el servicio SSH
        ```shell
        sudo service ssh restart
        ```

    1. Para poder contectarse al servidor el comando del SSH será
        ```shell
        ssh usuario@ip_servidor -p 2222
        ```
11. Cerrar puertos sin usar
    1. Permitir solo los servicios necesarios
        ```shell
        sudo ufw allow 2222/tcp   # SSH
        sudo ufw allow 80/tcp     # HTTP
        sudo ufw allow 443/tcp    # HTTPS
        ```
    2. Verificar la configuración final
        ```shell
        sudo ufw status verbose
        ```


## Referencias

- [Set up and secure your own server](https://www.youtube.com/watch?v=Q1Y_g0wMwww)

| Version | Creado por:                    | Auditado por: | Descripción   | Fecha      |
| ------- | ------------------------------ | ------------- | -------------- | ---------- |
| 1.0     | Juan Manuel Murillo López |   | Spike Servidor | 16/03/2026 |
