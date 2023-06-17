class ProductManager {
  constructor() {
    this.products = [];
    this.lastId = 0;
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    // Validar que todos los campos sean obligatorios
    if (![title, description, price, thumbnail, code, stock].every(Boolean)) {
      console.log("Error: Todos los campos son obligatorios.");
      return;
    }

    // Validar que el campo "code" no se repita
    if (this.products.some((product) => product.code === code)) {
      console.log(`Error: El código ${code} ya está en uso.`);
      return;
    }

    this.lastId++;
    const product = {
      id: this.lastId,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    this.products.push(product);
  }

  getProductById(id) {
    const product = this.products.find((product) => product.id === id);
    if (product) {
      return product;
    } else {
      console.log("Error: Producto no encontrado.");
    }
  }

  getProducts() {
    return this.products;
  }
}


// **** TEST ****

// Crear una instancia de la clase "ProductManager"
const productManager = new ProductManager();
// Obtener los productos recién creada la instancia (debe devolver un arreglo vacío)
console.log(productManager.getProducts());

// Añadir productos
productManager.addProduct("Producto 1", "Descripción del producto 1", 10.99, "/ruta/imagen1.jpg", "P1", 5);
productManager.addProduct("Producto 2", "Descripción del producto 2", 19.99, "/ruta/imagen2.jpg", "P2", 8);
productManager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

// Obtener los productos después de agregar el producto anterior (debe contener el producto agregado)
console.log(productManager.getProducts());

// Intentar agregar un producto con el mismo código (debe arrojar un error)
productManager.addProduct("Otro producto", "Descripción de otro producto", 150, "Imagen", "abc123", 10);

// Obtener un producto por su ID (producto existente)
const product = productManager.getProductById(3);
console.log(product);

// Obtener un producto por su ID (producto no encontrado)
const nonExistentProduct = productManager.getProductById(6);











