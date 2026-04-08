---
title: "SPK02 - 2FA"
sidebar_position: 2
---

**Duración:** 2 a 3 días  
**Funcionalidad:** Autenticación de dos factores (2FA) en Node.js

## Funcionalidad

2FA (Two-Factor Authentication) es un mecanismo de seguridad donde el usuario debe demostrar su identidad con dos factores distintos. Normalmente se combina:

- Algo que sabe: contraseña
- Algo que tiene: código temporal generado en una app como Google Authenticator

Speakeasy está orientada a la generación y validación de códigos OTP para flujos de 2FA, y la librería `qrcode` permite producir la imagen QR desde Node.js.

En vez de depender únicamente de usuario y contraseña, el login queda así:

- El usuario inicia sesión con sus credenciales.
- Si tiene 2FA activado, el sistema solicita un código temporal.
- El usuario abre su app autenticadora y escribe el código.
- El backend valida el código antes de permitir el acceso.

## Beneficios

- Mayor seguridad en el login.
- Protege contra el robo o filtración de contraseñas.
- Es compatible con aplicaciones conocidas como Google Authenticator.
- Reduce el riesgo de acceso no autorizado en cuentas con privilegios elevados.
- Agrega una capa extra de protección sin requerir hardware especializado.

## Desventajas

- Tiene más complejidad que un login tradicional.
- Puede afectar la experiencia de usuario si el flujo no está bien diseñado.
- Necesita un mecanismo de recuperación seguro si el usuario pierde su celular o elimina la app autenticadora.
- El secreto TOTP debe almacenarse de forma segura, ya que si se expone un atacante podría generar códigos válidos.
- Requiere contemplar escenarios adicionales como respaldo, recuperación y validación en dispositivos con reloj desfasado.

## Facilidad de aprendizaje

**Media**

## Cuándo conviene usar 2FA

2FA conviene cuando:

- Hay login con correo o usuario y contraseña.
- El sistema maneja datos sensibles.
- Existen roles administrativos o privilegios elevados.
- Se quiere reducir el riesgo de acceso no autorizado.

## Arquitectura recomendada

Para implementar 2FA en backend normalmente necesitas:

### 1. Autenticación base

Primero debes tener funcionando el login principal con alguno de estos mecanismos:

- sesión
- JWT
- o tu mecanismo actual de autenticación

### 2. Generación del secreto 2FA

Cuando el usuario activa 2FA, el sistema genera un secreto único. Speakeasy expone `generateSecret`, que devuelve datos como `base32` y `otpauth_url`.

### 3. Código QR

El `otpauth_url` se convierte en QR para que el usuario lo escanee desde su app autenticadora. `qrcode` puede generar ese QR como `Data URL`.

### 4. Validación del token

Cuando el usuario mete el código, el backend lo valida con Speakeasy usando TOTP. El código cambia por tiempo, normalmente en ventanas cortas, por eso debe verificarse en el momento.

### 5. Persistencia

Debes guardar en la base de datos:

- si 2FA está activado
- el secreto TOTP del usuario
- opcionalmente códigos de respaldo
- opcionalmente fecha de activación

## Recursos

- [Speakeasy en npm](https://www.npmjs.com/package/speakeasy)
- [qrcode en npm](https://www.npmjs.com/package/qrcode)
- [Video tutorial de 2FA con Node.js](https://youtu.be/KQya9i6czhM?si=N1kNMQMyGqjoAkLV)
-[Github de speakeasyjs](https://github.com/speakeasyjs/speakeasy?tab=readme-ov-file)

## Guía paso a paso para implementar 2FA

### Pre requisito: define cómo se usará

Antes de iniciar, define en qué flujo se aplicará 2FA. Por ejemplo:

- si será opcional al inicio y obligatorio después
- si se validará en cada login
- si se validará solo en dispositivos nuevos
- si se validará solo en acciones sensibles

### 1. Asegúrate de tener el login base funcionando

Primero debe existir autenticación normal:

- login con correo o usuario
- validación de contraseña
- sesión o JWT

### 2. Instala dependencias

```bash
npm install speakeasy qrcode
```

Speakeasy se usa para generar y verificar códigos OTP, y `qrcode` para mostrar el QR de enrolamiento.

### 3. Agrega campos al usuario

Tu modelo de usuario debería guardar algo como:

- `twoFactorEnabled: Boolean`
- `twoFactorSecret: String`
- `twoFactorTempSecret: String` opcional durante activación

Ejemplo conceptual:

```javascript
twoFactorEnabled: false,
twoFactorSecret: null
```

### 4. Genera el secreto del usuario y manda el QR

Cuando el usuario quiera activar 2FA, generas un secreto y con el `otpauth_url` generas un QR:

```javascript
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

exports.twoFactorAuth = async (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'Bad Request' });
  }

  try {
    const { id } = req.body;
    const tempSecret = speakeasy.generateSecret();
    // Guardar tempSecret en base de datos asociado al userId para verificacion posterior

    const qrlImage = await QRCode.toDataURL(tempSecret.otpauth_url);

    res.json({
      id: id,
      secret: tempSecret.base32,
      otpauth_url: tempSecret.otpauth_url,
      qrlImage: qrlImage
    });
  } catch (error) {
    console.error('Error in 2FA setup:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
```

`generateSecret()` devuelve varios formatos, incluyendo `base32` y `otpauth_url`, que luego se usan para la app autenticadora y el QR.

### 5. Pide un código para confirmar activación

Después de escanear el QR, el usuario debe ingresar un código de su app. El backend valida ese código antes de marcar 2FA como activo.

```javascript
exports.verifyTwoFactorAuth = (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'Bad Request' });
  }

  const { token, userId } = req.body;

  try {
    const user = User; // Obtener usuario desde base de datos usando userId

    // Obtener temp secret del usuario desde base de datos usando userId
    const { base32: secret } = user.tempSecret;
    let verified = speakeasy.totp.verify({
      secret: secret,
      encoding: 'base32',
      token: token
    });

    if (verified) {
      // Guardar secret como permanente y eliminar temp secret
      user.secret = user.tempSecret;
      res.json({ verified: true, message: '2FA verification successful' });
    } else {
      res.status(401).json({ verified: false, message: 'Invalid 2FA token' });
    }
  } catch (error) {
    console.error('Error in 2FA setup:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
```

Si el código es correcto:

- guardas el secreto real
- activas `twoFactorEnabled = true`

### 6. Crea una ruta para validar el código 2FA

```javascript
router.post('validate-2fa', userController.validateTwoFactorAuth);

exports.validateTwoFactorAuth = (req, res) => {
  if (!req.body) {
    return res.status(400).json({ message: 'Bad Request' });
  }

  const { token, userId } = req.body;

  try {
    const user = User; // Obtener usuario desde base de datos usando userId

    const { base32: secret } = user.secret;
    let tokenValidate = speakeasy.totp.verify({
      secret: secret,
      encoding: 'base32',
      token: token,
      window: 1
    });

    if (tokenValidate) {
      res.json({ validated: true, message: '2FA verification successful' });
    } else {
      res.status(401).json({ validated: false, message: 'Invalid 2FA token' });
    }
  } catch (error) {
    console.error('Error in 2FA setup:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};
```

### 7. Entrega acceso real solo después del segundo factor

Hasta que el código TOTP sea válido:

- no abras sesión definitiva
- no generes token completo
- no permitas entrar a recursos protegidos

Esto evita que el 2FA sea solo decorativo.

### 8. Prueba casos reales

Prueba al menos estos escenarios:

- usuario con contraseña correcta y 2FA correcto
- usuario con contraseña correcta y 2FA incorrecto
- usuario sin 2FA activado
- usuario que intenta reutilizar flujo incompleto
- usuario que activa 2FA pero no confirma
- usuario con reloj del dispositivo algo desfasado

## Buenas prácticas

### 1. No guardar el secreto en texto expuesto

Debes proteger bien el secreto TOTP, porque con él se pueden generar códigos válidos.

### 2. Activar 2FA solo después de verificar el primer código

No marques 2FA como activo apenas generas el QR; primero confirma que el usuario realmente lo configuró.

### 3. Tener flujo de recuperación

Debes considerar:

- códigos backup
- reconfiguración segura
- soporte administrativo controlado

### 4. No confiar solo en el frontend

Toda validación del código debe hacerse en backend.

### 5. Combinarlo con otras capas

2FA mejora la autenticación, pero no sustituye:

- hash seguro de contraseñas
- autorización RBAC o ABAC
- control de sesiones

## Resultado esperado del spike

Al terminar este spike deberías poder responder:

- qué es 2FA y para qué sirve
- qué diferencia hay entre login normal y login con 2FA
- cómo funciona TOTP
- cómo usar Speakeasy para generar y validar códigos
- cómo generar el QR para Google Authenticator
- si conviene aplicarlo a todo el sistema o solo a usuarios críticos

### Control de versiones

| Version | Creado por: | Auditado por: | Descripción | Fecha |
|---------|------------|--------------|---------------|-------|
| 1.0     | Manuel Bajos | Ivan | Spike de 2FA con Node.js | 07/04/2026 |
