---
title: 'GUI08 - Guía para llenar la matriz de riesgos'
sidebar_position: 8
---

# GUI08 - Guía para llenar la matriz de riesgos

## Propósito
Documentar y actualizar correctamente los riesgos en la matriz, asegurando consistencia en su registro, evaluación y seguimiento.

---

## Desarrollo

### Paso 1: Verificar duplicidad
1. Revisar la matriz de riesgos para confirmar que el riesgo no haya sido registrado previamente.
2. Si ya existe, actualizar su información (ej. probabilidad, impacto, fechas) en lugar de crear uno nuevo.

---

### Paso 2: Registrar información general del riesgo

Completar los siguientes campos:

1. **ID del riesgo**
2. **Nombre del riesgo**
3. **Descripción / Consecuencia**
4. **Categoría (Nivel NIST):**
   - Nivel 1: Empresarial  
   - Nivel 2: Proceso  
   - Nivel 3: Sistema / Arquitectura  
   - Nivel 4: Software / Seguridad  

---

### Paso 3: Análisis de seguridad (si aplica)

#### 3.1 Modelo CIA (si aplica)

Marcar los campos correspondientes:

- **C (Confidencialidad)**
- **I (Integridad)**
- **A (Disponibilidad)**

> Se llena únicamente cuando el riesgo afecta información o servicios.

---

#### 3.2 Modelo STRIDE (solo Nivel 4)

Marcar los tipos de amenaza que aplican:

- **S – Spoofing**
- **T – Tampering**
- **R – Repudiation**
- **I – Information Disclosure**
- **D – Denial of Service**
- **E – Elevation of Privilege**

> Solo se completa para riesgos de Nivel 4.

---

### Paso 4: Evaluación del riesgo

1. **Probabilidad (1–10)**
2. **Impacto (1–10)**
3. **Magnitud = Probabilidad × Impacto**

---

### Paso 5: Planes de acción

1. **Plan de mitigación (obligatorio):**
   - Crear o vincular el documento correspondiente

2. **Plan de contingencia:**
   - Obligatorio si la magnitud ≥ 60
   - Opcional en otros casos

---

### Paso 6: Asignación y seguimiento

1. **Responsable del riesgo**
2. **Fecha de registro**
3. **Fecha de revisión**

> El responsable debe monitorear el riesgo periódicamente.

---

### Paso 7: Priorización

1. Ordenar la matriz de forma descendente según la **magnitud del riesgo**.
2. Los riesgos con mayor magnitud deben atenderse primero.

---

### Paso 8: Control histórico (si aplica)

Registrar cambios relevantes del riesgo:

- Fecha
- Magnitud original
- ID del riesgo

> Esto permite dar seguimiento a la evolución del riesgo.

---

## Notas importantes

- No duplicar riesgos en la matriz
- Asegurar que todos los riesgos tengan:
  - Nivel definido
  - Probabilidad e impacto
  - Responsable asignado
- Aplicar correctamente:
  - CIA → solo si aplica
  - STRIDE → solo Nivel 4

---

## Recursos adicionales

- **GUI09 - Identificación de riesgos** – [Link](../Guías/GUI09_Identificar_Riesgos.md)
- **Plantilla de matriz de riesgos** – [Link](https://docs.google.com/spreadsheets/d/1kg_PnTUw6GnHll7XnYxqXmGK9umSope4nmvp1Qzt5Nc/edit?usp=sharing)

---

## Control de versiones

| Version | Creado por | Auditado por | Descripción | Fecha |
|--------|-----------|-------------|------------|------|
| 1.0 | Manuel Bajos Rivera, Alejandra | Juan Manuel Murillo | Versión inicial | 02/03/2026 |
| 2.0 | Manuel Bajos Rivera, Alejandra | Pendiente | Alineación con CIA, STRIDE y niveles NIST | 14/04/2026 |