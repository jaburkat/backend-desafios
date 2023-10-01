# Mocking y manejo de errores

## Start

1. Configuración del archivo .env.development (default) o .env.production o .env.staging:

**Parámetros a configurar:** 

- PORT
- URL MONGO LOCAL
- URL MONGO ATLAS
- NOMBRE DB
- COOKIE KEY
- SECRET KEY
- GITHUB CLIENT ID
- GITHUB SECRET KEY
- GITHUB CALLBACK URL
- JWT SECRET
- JWT EXPIRES IN
- JWT ALGORITH
- ADMIN EMAIL
- ADMIN PASSWORD
- NODE MAILER USER
- NODE MAILER PASSWORD
- TWILIO ACCOUNT SID
- TWILIO AUTH TOKEN
- TWILIO PHONE NUMBER


2. Instalación de dependencias e iniciar servidor:
    ```shell
    npm install
    ```

    ```shell
    npm start
    ```
3. Ingresar a la APP:

    ```
    http://localhost:<PORT>
    ```

## Credenciales Admin

### Email:

```
adminCoder@coder.com
```

### Password:

```
adminCod3r123
```


## Postman Collections

- En la carpeta `postman_collections`, encontrarás los archivos necesarios para importar las colecciones en Postman y realizar pruebas en el proyecto. Las colecciones proporcionan ejemplos de solicitudes HTTP para interactuar con la API y probar su funcionalidad.

- Importante: Como el proyecto cuenta con un Middleware de autorización hay que realizar los siguientes pasos en Postman:

  1.0 - Ir a Resquest -> Cookies -> Manage Cookies

  2.0 - Seleccionar en Type a domain name: localhost

  3.0 - Add Cookie: Cookie_3=value; Path=/; Expires=Tue, 24 Sep 2024 13:22:17 GMT; (Cookie de ejemplo)

  3.1 - Loguearse como Admin o como User según corresponda para testear la ruta

  3.2 - Una vez logueado ingresar a Application -> Cookies -> http://localhost:8080 y copiar el value del token jwt.

  3.3 - En el Template de la cookie de Postman reemplazar Cookie_3 por jwt y value por el value del token copiado.

  3.4 - Debe quedar un código como el siguiente (el token a continuación es un ejemplo):

  jwt=ey123456789wolrtjlwkjt.eyJfaWQiOiI2NGY3YzBkY2ZmMzY2NmQ4YTdjMDA0MDciLCJlbWFpbCI6InVzZXJAY29ycmVvLmNvbSIsInJvbGUiOiJhZG1pbiIsImZpcnN0X25hbWUiOiJ1c2VyIiwibGFzdF9uYW1lIjoidXNlciIsImFnZSI6MzMsImNhcnQiOiI2NGY3YzBkY2ZmMzY2NmQ4YTdjMDA0MDkiLCJpYXQiOjE2OTQwNTU5OTgsImV4cCI6MTY5NDE0MjM5OH0.hIYn2frVQCVNBMGI5E4sRkTqCTBhSHQ0Th0uSOUtabc; Path=/; Expires=Tue, 24 Sep 2024 13:22:17 GMT;

  3.5 - Tener en cuenta que los token de las cookies expiran por lo que para realizar varios tests hay que loguearse y volver a copiar el token.
