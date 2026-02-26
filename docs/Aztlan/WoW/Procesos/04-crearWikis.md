---
title: "Crear entradas en la Wiki"
sidebar_position: 4
---

## Propósito

Detallar cómo crear un documento dentro de la wiki de Aztlán Consulting.

## Notas introductorias

Una entrada es un documento dentro del apartado de documentación en la Wiki de Aztlán Consulting.

## Interesados

 - Aztlán Consulting
 - Autor(es) de la entrada o cambio
 - Revisor(es) de la entrada o cambio

## Entradas

 - Entrada en la wiki a crear
 - Plantilla dependiendo del tipo de entrada:
     - [Procesos](../Plantillas/procesos)
     - [Políticas](../Plantillas/politicas)
     - [Estándares](../Plantillas/estandares)
     - [Guías](../Plantillas/guias)

## Descripción

|Pasos|Actividades|Prácticas asociadas al CMMI|Responsables|
|-|-|-|-|
|Entendimiento|Identificar el tema de la entrada a trabajar.|    |Autor de la entrada.|
|Entendimiento|Verificar si ya hay una entrada que aborde el tema identificado. Si la entrada mejora o reemplaza una ya existente, deprecar la entrada anerior.|    |Autor de la entrada.|
|Ejecución|Actualizar a la versión más reciente de la Wiki con un `pull` al repositorio.|    |Autor de la entrada.|
|Ejecución|Crear la rama de desarrollo de la nueva entrada a partir de `develop`.|    |Autor de la entrada.|
|Ejecución|Redactar la entrada conforme a su [plantilla](../../../category/plantillas/) y [proceso](../../../category/procesos/) correspondientes.|    |Autor de la entrada.|
|Ejecución|Subir los cambios a Github con un `push`.|    |Autor de la entrada.|
|Validación|Solicitar un `pull request` en github y a un miembro del departamento que lo revise, y seguir la retroalimentación otorgada.|    |Autor de la entrada y revisor.|
|Documentación|Combinar la rama creada con `develop` y eliminar la rama de desarrollo.|    |Autor de la entrada.|

## Salidas

 - Entrada en la Wiki dentro de Aztlán Consulting