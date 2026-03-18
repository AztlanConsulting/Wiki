---
title: "SPK10 - Google Sheets API"
sidebar_position: 10
---

**Duración:** 1 día  
**Funcionalidad:** Lectura y Escritura de datos en Hojas de Cálculo

## Beneficios

- **Interfaz Familiar:** Permite que usuarios no técnicos (como el equipo de administración) visualicen y editen datos fácilmente.
- **Base de Datos Ligera:** Ideal para prototipos o proyectos como "Compospet" que actualmente usan Excel.
- **Historial de Versiones:** Google gestiona automáticamente el respaldo y los cambios realizados en el documento.
- **Colaboración Real-time:** Múltiples procesos o usuarios pueden insertar datos sin bloqueos complejos.

## Desventajas

- **Latencia:** No es adecuada para aplicaciones que requieren miles de transacciones por segundo.
- **Límites de Celdas:** Existe un tope físico de 10 millones de celdas por archivo.
- **Integridad de Datos:** Un usuario con acceso de edición puede borrar columnas manualmente y romper el mapeo del código.

## Facilidad de aprendizaje

**Fácil - Media**

## Recursos

- [Documentación oficial de Sheets API](https://developers.google.com/sheets/api/guides/concepts)
- [Referencia de métodos (v4)](https://developers.google.com/sheets/api/reference/rest)
- [Guía de lectura y escritura de valores](https://developers.google.com/sheets/api/guides/values)
- [Google Sheets API - Node.js Quickstart](https://developers.google.com/sheets/api/quickstart/nodejs)

## Tutorial: Operaciones Comunes

> Interacción con celdas y rangos mediante el ID del documento.

### 1. Identificar el Spreadsheet ID
El ID es la cadena larga que aparece en la URL del navegador:
`docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0J/edit` → **ID:** `1A2B3C4D5E6F7G8H9I0J`

### 2. Escribir/Actualizar Datos (Node.js)
Para registrar una nueva entrada (ej. una recolección de compost) al final de una tabla.

```javascript
const { google } = require('googleapis');
const sheets = google.sheets({ version: 'v4', auth: oAuth2Client });

const spreadsheetId = 'TU_SPREADSHEET_ID';
const range = 'Entregas!A1'; // Nombre de la hoja y celda de inicio
const values = [['2026-03-18', 'Recolección Zona Sur', '15kg']];

await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: 'USER_ENTERED', // Interpreta fechas y números automáticamente
    requestBody: { values },
});
```

### 3. Leer Datos de un Rango
Para obtener la lista de registros almacenados.

```javascript
const res = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: 'Entregas!A2:C50',
});

const rows = res.data.values; 
// Devuelve un arreglo de arreglos: [['2026-03-18', '...', '...'], [...]]
```

## Conceptos de Estructura

| Recurso | Definición | Ejemplo |
| :--- | :--- | :--- |
| **Spreadsheet** | El archivo completo de Google Sheets. | `Logística_Compospet_2026` |
| **Sheet** | Pestaña individual (Tab). | `Inventario` o `Usuarios` |
| **A1 Notation** | Forma de referenciar rangos. | `'Hoja1'!A1:B10` |
| **Value Input** | Cómo se procesa el dato enviado. | `RAW` (texto plano) o `USER_ENTERED` |

### Control de versiones
| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Kamila Martínez | Yessica Lora | Spike de Google Sheets API | 18/03/2026 |
