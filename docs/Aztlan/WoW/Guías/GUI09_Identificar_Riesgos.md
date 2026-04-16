---
title: 'GUI09 - Guía para identificar riesgos'
sidebar_position: 9
---

# Guía para identificar riesgos

## Propósito
Identificar si una situación representa un riesgo para el proyecto, clasificándola por nivel y determinando su impacto para definir acciones adecuadas.

---

## Desarrollo

### Paso 1: 
Identificar si la situación que se presenta resulta en un riesgo para el proyecto.

**Definición de riesgo:**
La posibilidad de que ocurra un evento incierto que, si sucede, genere un impacto negativo sobre un objetivo.

### Paso 2: 
Si el riesgo identificado, no esta categorizado ya en la matriz de riesgos. Categorizar el riesgo mediante el uso de las categorías impuestas por Nist-30:
 - Nivel 1: Empresarial: Eventos que no permitan a la organización seguir con su misión, no es obligatoria la relación entre sistema y riesgo.
    - Pregunta Guía: ¿Qué nos impide existir?

 - Nivel 2: Riesgo de Proceso: Eventos que impida que un proceso del negocio se ejecute correctamente.
    - Pregunta Guía: ¿Qué nos impide operar?

 - Nivel 3: Riesgo de sistema: Fallas técnicas entre componentes o diseño del sistema.
    - Pregunta Guía: ¿Qué puede fallar técnicamente?

 - Nivel 4: Riesgo de software: Vulnerabilidad que atacante puede explotar.
    - Pregunta Guía: ¿Dónde está la vulnerabilidad?

### Paso 3:
Evaluar el impacto del riesgo solo cuando aplique, usando el modelo CIA:
	- Confidentiality (Confidencialidad)
	- Integrity (Integridad)
	- Availability (Disponibilidad)

¿Cuándo aplica CIA?

| Nivel | ¿Aplica? | ¿Cuándo si aplica? | 
|---------|------------|--------------|
| 1 | Opcional | Si afecta información crítica (ej. datos sensibles como biométricos) |
| 2 | Opcional | Si se manejan datos sensibles (ej. datos sensibles como biométricos) |
| 3 | Recomendado | Temas de disponibilidad e integridad (ej. Como se guardan los datos.)|
| 4 | Obligatorio | Vulnerabilidades impactan a la CIA (ej. SQL Injection.)|

### Paso 4:
Para riesgos de Nivel 4 (software / seguridad), desglosar el riesgo usando STRIDE:
	- S – Spoofing (Suplantación de identidad)
        - Ejemplo: Correos falsos de suplantación de identidad.
	- T – Tampering (Manipulación de datos)
        - Manipular el jwt para intentar cambiar permisos.
	- R – Repudiation (Negación de acciones)
        - Hacer una acción como borrar una cuenta y negar haberlo hecho.
	- I – Information Disclosure (Divulgación de información)
        - Exponer credenciales de los usuarios en respuesta a petición http.
	- D – Denial of Service (Denegación de servicio)
        - Ataque de multiple request para saturar el servidor.
	- E – Elevation of Privilege (Escalación de privilegios)
        - Un usuario accede a rutas de admin.

Se marca los que aplican al riesgo.

### Paso 5:
Se debe definir la probabilidad y el impacto.
 #### Probabilidad:
 Que tan probable es que pase este riesgo.
 | Rango | Significado | Descripción |
|---------|------------|------------|
| 1 - 3 | Baja | Es poco probable que pasa|
| 4 - 6 | Media | Depende de ciertas condiciones para que pase|
| 7 - 9 | Alta | Es muy probable que ocurra|
| 10 | Muy Alta | Es casi un hecho que va a ocurrir|

 #### Impacto:
 Que tanto impacta al proyecto es que pase este riesgo.
 | Rango | Significado | Descripción|
|---------|------------|------------|
| 1 - 3 | Bajo | Afectación mínima|
| 4 - 6 | Mediano | Afecta parcialmente funcionalidades o tiempos|
| 7 - 9 | Alto | Afecta entregables importantes|
| 10 | Muy Alto | Compromete el proyecto|


### Paso 6:
Si la multiplicación es mayor a 60 de magnitud se debe hacer plan de contigencia obligatoriamente, si no es opcional hacerlo pero es obligatorio hacer el de mitigación.

 - [plantilla de plan de mitigación](https://docs.google.com/document/d/1yQxyKJmiR-31bMU0Vqs5VS_ep6a76-8DL_jFzwIwaag/edit?tab=t.0)
 - [plantilla de plan de contingencia](https://docs.google.com/document/d/1CNlOT4qTa4TzSRxFtI0rXmQdKPviGf-Ic-GUjdoT9Nw/edit?tab=t.0#heading=h.om8qcnxbojwp)


---

## Recursos adicionales

- **Presentación de profes** – [Link del recurso](https://docs.google.com/presentation/d/1OP84fzOxRnP73p1dNPN07R50teAGS1XHPBug4Fko7s8/edit?slide=id.g3c0d82a8e31_0_873&pli=1#slide=id.g3c0d82a8e31_0_873)
- **NIST-30** – [Link del recurso](https://www.pmg-ssi.com/2021/08/metodologia-nist-sp-800-30-para-el-analisis-de-riesgos-en-sgsi/)

## Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Manuel Bajos Rivera, Alejandra | Juan Manuel Murillo | Guía para identificar riesgos  | 02/03/2026 |
| 2.0 |  Manuel Bajos Rivera, Alejandra | Pendiente | Guía para identificar riesgos  | 14/04/2026 |
