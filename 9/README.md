# Refactor a nuestro login

## Start

1. Configuración del archivo .env.example y luego renombrarlo:

**Parámetros a configurar:** 

- PORT
- URL MONGO LOCAL
- URL MONGO ATLAS
- NOMBRE DB
- NOMBRE SESSIONS
- COOKIE KEY
- SECRET KEY
- GITHUB CLIENT ID
- GITHUB SECRET KEY
- GITHUB CALLBACK URL

   ```bash
   cp .env.example .env
   ```

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
## Credenciales Admin:

### Email:

```
adminCoder@coder.com
```

### Password:

```
adminCod3r123
```

## Postman Collections

- En la carpeta `postman_collections`, encontrarás los archivos necesarios para importar las colecciones en Postman y realizar pruebas en el proyecto.
