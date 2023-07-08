# PRIMERA PRE ENTREGA

### START

```
npm start
```

## ENDPOINTS POSTMAN TEST

---

### ENDPOINTS PRODUCTOS

#### Agregar producto.

- Método: POST
- URL: `localhost:8080/api/products`

Cuerpo de la solicitud (body):

```json
{
    "title": "Producto Prueba",
    "description": "Esto es una prueba",
    "price": 656,
    "status": true,
    "thumbnail": "https://example.com/test.png",
    "code": "11111-111",
    "stock": 111
}
```

#### Mostrar todos los productos.
- Método: POST
- URL: `http
localhost:8080/api/products`


#### Mostrar producto por ID.
- Método: GET
- URL: `http
localhost:8080/api/products/2`


#### Mostrar cierta cantidad de productos.
- Método: GET
- URL: `http
localhost:8080/api/products?limit=6`


#### PUT: Editar un producto (Un item a la vez).
- Método: PUT
- URL: `http
localhost:8080/api/products/21`

Cuerpo de la solicitud (body):
```json
{
    "stock": 666
  }
```

#### Eliminar producto por su ID.
- Método: DELETE
- URL: `http
localhost:8080/api/products/20`

---

### ENDPOINTS CARRITO

#### Crear carrito (ID Autogenerado).
- Método: POST
- URL: `http
localhost:8080/api/carts`

#### Mostrar productos de un carrito.
- Método: GET
- URL: `http
localhost:8080/api/carts/1`

#### Agregar productos al carrito.
- Método: POST
- URL: `http
localhost:8080/api/carts/2/products/5`