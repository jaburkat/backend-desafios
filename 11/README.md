# Reestructura de nuestro servidor

## Start

1. Configuración del archivo .env.example y luego renombrarlo:

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

## Postman Collections

- En la carpeta `postman_collections`, encontrarás los archivos necesarios para importar las colecciones en Postman y realizar pruebas en el proyecto.
