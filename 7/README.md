# Segunda pre entrega del Proyecto Final

## Start

1. Configuración del archivo .env.example y luego renombrarlo:

- PORT
- URL MONGO LOCAL
- URL MONGO ATLAS
- NOMBRE DE LA DB

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
## Endpoints

**localhost:<PORT>/**  
Incio.

**localhost:<PORT>/products**  
Ingresa a la tienda virtual.

**localhost:<PORT>/chat**  
Ingresa al chat.

**localhost:<PORT>/home**  
Obtiene la lista estática de productos agregados hasta el momento.

**localhost:<PORT>/realtimeproducts**  
Obtiene la lista dinámica de productos con la implementación de Websocket. 


## Postman Collections

- En la carpeta `postman_collections`, encontrarás los archivos necesarios para importar las colecciones en Postman y realizar pruebas en el proyecto.
