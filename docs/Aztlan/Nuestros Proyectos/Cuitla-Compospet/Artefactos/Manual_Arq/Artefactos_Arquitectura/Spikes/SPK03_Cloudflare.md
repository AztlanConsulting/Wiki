---
title: "SPK03 - Cloudflare"
sidebar_position: 3
---

**Duración:** 1 día  
**Funcionalidad:** Seguridad, OWASP, WAF, DDoS, DNS, SSL


## Beneficios
- **Mejora el rendimiento:** Usa CDN global para cargar el contenido más rápido.
- **Seguridad integrada:** Protege contra ataques como DDoS y tráfico malicioso.
- **Escalabilidad:** Maneja grandes volúmenes de tráfico automáticamente.
- **Implementación rápida:** Se puede activar cambiando los DNS del dominio.
- **Plan gratuito:** Permite usar muchas funciones sin costo inicial.

## Desventajas
- **Dependencia de un proveedor externo:** El tráfico pasa por Cloudflare.
- **Funciones avanzadas de pago:** Algunas herramientas requieren planes premium.
- **Posibles falsos positivos:** Puede bloquear usuarios legítimos por seguridad.
- **Debugging más complejo:** Puede ser difícil identificar dónde ocurre un error.

## Facilidad de aprendizaje
**Nivel:** Fácil a intermedio

### Por qué es fácil
- Interfaz web bastante clara  
- Integración rápida con dominios  
- Documentación muy completa  
- Muchas configuraciones funcionan con valores por defecto  

### Qué puede requerir más aprendizaje
- Configuración avanzada de caching  
- Uso de Cloudflare Workers  
- Reglas de WAF y seguridad  
- Manejo de headers y edge logic  

### Tiempo estimado de aprendizaje
- **Uso básico:** 1–2 horas  
- **Configuración para producción:** 1–2 días  
- **Uso avanzado (Workers, reglas, optimización):** varias semanas de práctica  

## Recursos
- https://www.youtube.com/watch?v=ue375N4JXXs  
- https://www.youtube.com/watch?v=I2mv4456l74  

## Tutorial básico

### 1. Cómo funciona Cloudflare

Cloudflare actúa como **proxy entre los usuarios y tu servidor**.

**Flujo básico:**
Usuario → Cloudflare → Tu servidor

Esto permite que Cloudflare:
- Filtre tráfico malicioso  
- Proteja contra ataques  
- Optimice el contenido antes de que llegue al usuario  

### 2. Configuración de DNS

Para usar Cloudflare debes:
- Agregar tu dominio en Cloudflare  
- Cambiar los nameservers del dominio a los que te proporciona Cloudflare  
- Configurar registros DNS (A, CNAME, etc.)

Cuando el **ícono de nube está naranja**, el tráfico pasa por Cloudflare y puede aplicar seguridad.

### 3. SSL (HTTPS)
Cloudflare puede gestionar **certificados SSL/TLS**.

Modos comunes:
- **Flexible:** HTTPS entre usuario y Cloudflare.  
- **Full:** HTTPS entre usuario, Cloudflare y servidor.  

Para producción normalmente se usa **Full o Full Strict**.

Esto permite:
- Cifrar el tráfico  
- Habilitar HTTPS fácilmente  

### 4. Protección contra DDoS

Cloudflare incluye **mitigación automática de DDoS**.

Lo mínimo que debes hacer:

- Activar la protección por defecto  
- Monitorear tráfico en el dashboard de seguridad  

Cloudflare detecta patrones de tráfico masivo y los bloquea antes de que lleguen al servidor.

### 5. WAF (Web Application Firewall)

El **WAF** protege contra ataques a aplicaciones web.

Debes:
- Activar el WAF  
- Habilitar reglas administradas  

El WAF analiza cada request HTTP y bloquea ataques como:
- SQL Injection  
- Cross-Site Scripting (XSS)  
- Path traversal  

### 6. Reglas OWASP

Cloudflare incluye reglas basadas en **OWASP Foundation**.

Debes:

- Activar el **OWASP Core Rule Set**  
- Configurar acción (block, challenge o log)

Estas reglas protegen contra vulnerabilidades comunes de aplicaciones web.

### 7. Reglas básicas de seguridad

También es útil saber crear:
- **Firewall rules:** bloquear IPs o países  
- **Rate limiting:** limitar número de requests  
- **Bot protection:** detectar bots maliciosos  

## Lo mínimo que debes saber
- Cambiar **nameservers y DNS**  
- Configurar **SSL/TLS**  
- Activar **protección DDoS**  
- Habilitar **WAF**  
- Activar **OWASP rules**  
- Crear **reglas básicas de firewall**

## Pasos para implementar Cloudflare en una web

1. **Crear una cuenta en Cloudflare**  
   Registrarse y agregar el dominio de la página web.

2. **Agregar el dominio al dashboard**  
   Cloudflare escanea automáticamente los registros DNS existentes.

3. **Cambiar los nameservers del dominio**  
   En el proveedor del dominio (GoDaddy, Namecheap, etc.) reemplazar los nameservers por los que proporciona Cloudflare.

4. **Verificar los registros DNS**  
   Confirmar que los registros **A, CNAME o MX** estén correctos.

5. **Activar el proxy de Cloudflare**  
   Asegurarse de que el dominio tenga la **nube naranja** para que el tráfico pase por Cloudflare.

6. **Configurar SSL/TLS**  
   En la sección **SSL/TLS**, seleccionar normalmente **Full o Full (Strict)** para habilitar HTTPS.

7. **Activar protección DDoS**  
   Cloudflare la aplica automáticamente cuando el tráfico pasa por su red.

8. **Habilitar el WAF**  
   Ir a **Security → WAF** y activar las reglas administradas.

9. **Activar reglas OWASP**  
   Habilitar el **OWASP Core Rule Set** para bloquear vulnerabilidades comunes.

10. **Probar la página**  
   Verificar que el sitio cargue correctamente usando HTTPS y revisar el panel de **Security/Analytics** para confirmar que el tráfico está pasando por Cloudflare.

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Fátima Figueroa | Alejandra Arredondo | Primera versión del spike de Cloudflaew | 13/03/2026 |