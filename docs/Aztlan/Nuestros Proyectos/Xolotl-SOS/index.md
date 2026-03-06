---
id: xolotl-index
title: Xólotl - SOS
---

import DocCardList from '@theme/DocCardList';

# 🐶 Xólotl - SOS

## Visión del Proyecto

### • Necesidad

SOS busca reducir los tiempos de respuesta y optimizar sus procesos para gestionar más reportes con mayor rapidez y precisión, aumentando las probabilidades de reencuentro sin depender de tareas manuales que limiten su alcance e impacto.

### • Objetivo del Proyecto

Reducir el tiempo de la publicación de búsqueda a 1 minuto, para generar confianza en el servicio antes del MVP.

### • Objetivo del Equipo

Cumplir el 100% de los entregables del MVP para generar valor real, confianza y satisfacción en la socia formadora.

---

## WBS (Work Breakdown Structure)

<details>
<summary>Código PUML</summary>
```puml
@startwbs
skinparam defaultFontSize 11
skinparam wrapWidth 80

<style>
wbsDiagram {
  .top {
    BackgroundColor #6699FF
    RoundCorner 10
  }
}
</style>


* Proyecto SOS

** Gestión del proyecto
*** Minutas de reuniones
***< Control de versiones de documentación

** Inicio
*** Visión del proyecto <<top>>
****< Necesidad
**** Objetivo del equipo
**** Objetivo del proyecto
*** Plan de comunicación <<top>>
****< Identificar stakeholders
**** Acordar un plan de comunicación con el equipo
**** Acordar un plan de comunicación con los stakeholders
*** WBS del proyecto <<top>>
**** Crear un PVG
*****< Estimar actividades
***** Crear un calendario de actividades
***< Definir alcance del proyecto <<top>>
*** Redactar SRS <<top>>
****< Diccionario de datos
**** Objetivo del proyecto
****< Identificar historias de usuario
**** Identificar req. no-funcionales
****< Identificar información de la aplicación
**** Identificar reglas de negocio
****< Interfaces de la aplicación
*****< Wireframes
***** Diseño de interfaz de alta fidelidad
***< Crear un plan de riesgo <<top>>
****< Definir e identificar riesgos
**** Priorizar riesgos
****< Analizar riesgos altos y críticos con STRIDE
**** Crear un plan de contingencia
***< Plan de calidad <<top>>
****< Crear un proceso de calidad
**** Definir pruebas y proceso de integración
****< Definir etapas de pruebas
**** Criterios de aceptación
*****< READY
***** DONE
***< Seguir prácticas CMMI REQM y PP <<top>>
***< Definición del Stack <<top>>
****< Definición de DONE
**** Identificación de tecnologías
****< Identificación de SPIKES
**** Diagrama de despliegue
*** Kickoff <<top>>
****< Definir MVP
**** Crear presentación


** Construcción
***< Spikes <<top>>
****< Resultado de SPIKE: Integración con redes sociales
**** Resultado SPIKE: Pagos
*** Diseño <<top>>
**** MER / MR
****< Diagrama de paquetes
**** Diagrama de despliegue
**** Diseño del API
*** Desarrollo <<top>>
****< Integración y pruebas
**** WB US <<top>>
***** Integración con redes sociales <<top>>
******< Publicacion automatica en redes
****** Configuración de cuentas SOS
***** Autenticación de cuentas <<top>>
******< Registro de cuentas
****** Login/ Logout
*****< Módulo de medios <<top>>
******< Previsualización del poster
******  Subir evidencias de publicación
****** Publicación del póster
******< Publicación de encontrado
***** Módulo de reporte de mascotas perdidas <<top>>
******< Registro de reporte
****** Formulario de reporte
******< Notificación de mascota encontrada
*****< Módulo de búsqueda <<top>>
****** Búsqueda de grupos de Facebook
******< Búsqueda de veterinaria y refugios
****** Consulta de mascotas perdidas
***** Módulo de pagos <<top>>
******< Selección de plan
****** Plan personalizado
******< Pago y contratación de servicio
****** Compra de extensión del plan
****** Compra de talleres y manual
*****< Módulo de información <<top>>
****** Dashboard de administradora
******< Consulta de colaboradoras
****** Información de planes contratados
******< Perfil e informacion del cliente
****** Información pública de la empresa


** Transición
***< Despliegue <<top>>
****< Ambiente de producción
**** Aplicación desplegada

*** Validación del cliente <<top>>
**** Aprobación de la socia
****< MVP Autorizado

***< Entrega <<top>>
****< Manuales de usuario
**** Documentación Técnica


@endwbs
```
</details>

![img alt](../../../../static/img/WBS-Xolotl.png)

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0 | Santiago Alducin | Sebastián Pérez |  Creación Inicial  | 28/02/2026 |

---

## Planes

<DocCardList />