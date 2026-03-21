---
title: "SPK07 - SSL Hostinger"
sidebar_position: 7
---

**Duración:** 1 día  
**Funcionalidad:** SSL


## Beneficios
- **Seguridad:** Cifrado de comunicación entre cliente y servidor con el protocolo HTTPS
- **Mejora en SEO:** Mejora el posicionamiento en buscadores y genera confianza
- **Certificados:** Hostinger renueva automáticamente los certificados

## Desventajas
- **Certificado básico:** Es un SSL de validación de dominio, no valida empresa
- **Limitaciones de subdominios:** Cada dominio/subdominio requiere su propio certificado
- **Dependencia a Hostinger:** Si se requiere migrar se tienen que reinstalar los certificados

## Facilidad de aprendizaje
**Nivel:** Fácil

### Por qué es fácil
- La configuración es simple
- Hay mucha documentación

### Tiempo estimado de aprendizaje
- **Uso básico:** 1 hora
- **Configuración para producción:** 2 horas

## Recursos
- [How to Install Lifetime SSL at Hostinger](https://www.hostinger.com/support/1583258-how-to-install-lifetime-ssl-at-hostinger/)

## Tutorial básico

### 1. ¿Qué es el SSL de Hostinger?
Hostinger proporciona certificados SSL gratuitos que:
- Se renuevan automáticamente mientras el sitio está alojado en Hostinger
- Garantizan una configuración segura mediante HTTPS

### 2. Instalación de Nginx

``` shell
sudo apt update
sudo apt install nginx
```
``` shell
sudo systemctl status nginx
```

### 3. Configuración de reverse proxy
``` shell
sudo vi /etc/nginx/sites-aviable/api
```
``` yaml
server {
    listen 80;
    server_name compospetmx.org;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 4. Instalación de SSL con Let's Encrypt
``` shell
sudo apt install certbot python3-cerbot-nginx
```
``` shell
sudo cerbot --nginx -d compospetmx.org
```


### 5. Validación

[compospetmx.org](https://compospetmx.org)

``` shell
curl -I https://compospetmx.org
```

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Juan Manuel Murillo | Alejandra Arredondo | Primera versión del spike del certificado SSL | 17/03/2026 |
| 1.1 | Juan Manuel Murillo | Luisa Fernanda Valdez | Actualización del spike del certificado SSL | 17/03/2026 |