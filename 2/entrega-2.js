import { promises as fs } from "fs";

class ProductManager {
  constructor() {
    this.path = "./productos.txt";
    this.products = [];
  }

  static id = 0;

  // Agregar un producto
  addProduct = async (title, description, price, thumbnail, code, stock) => {
    ProductManager.id++;
    let newProduct = {
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
      id: ProductManager.id
    };

    this.products.push(newProduct);
    console.log(newProduct);
    await fs.writeFile(this.path, JSON.stringify(this.products, null, 2));
  };

  // Leer los productos desde el archivo
  readProducts = async () => {
    let respuesta = await fs.readFile(this.path, "utf-8");
    return JSON.parse(respuesta);
  };

  // Obtener todos los productos
  getProducts = async () => {
    let respuesta2 = await this.readProducts();
    console.log(respuesta2);
  };

  // Obtener un producto por su ID
  getProductById = async (id) => {
    let respuesta3 = await this.readProducts();
    let product = respuesta3.find((product) => product.id === id);
    if (!product) {
      console.log("El ID del producto no existe");
    } else {
      console.log(product);
    }
  };

  // Eliminar un producto por su ID
  deleteProductById = async (id) => {
    let respuesta3 = await this.readProducts();
    let productIndex = respuesta3.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      console.log("El ID del producto no existe");
      return;
    }
    respuesta3.splice(productIndex, 1);
    await fs.writeFile(this.path, JSON.stringify(respuesta3, null, 2));
    console.log("Producto Eliminado");
  };

  // Actualizar un producto por su ID
  updateProductById = async ({ id, ...producto }) => {
    let respuesta3 = await this.readProducts();
    let productIndex = respuesta3.findIndex((product) => product.id === id);
    if (productIndex === -1) {
      console.log("El ID del producto no existe");
      return;
    }
    respuesta3[productIndex] = { ...producto, id };
    await fs.writeFile(this.path, JSON.stringify(respuesta3, null, 2));
    console.log("Producto Actualizado");
  };
}

// Función asíncrona que utiliza await para asegurarse de que las operaciones se completen antes de continuar con la siguiente.
async function run() { 
  const productos = new ProductManager();

  // Agregar productos de ejemplo
  await productos.addProduct("Producto1", "Descripcion 1", 1000, "imagen1", "pro1", 100);
  await productos.addProduct("Producto2", "Descripcion 2", 1500, "imagen2", "pro2", 150);
  await productos.addProduct("Producto3", "Descripcion 3", 2000, "imagen3", "pro3", 200);

  // Obtener todos los productos
  await productos.getProducts();

  // Obtener un producto por su ID
  await productos.getProductById(3);

  // Eliminar un producto por su ID
  await productos.deleteProductById(6);

  // Actualizar un producto por su ID
  await productos.updateProductById({
    id: 1,
    title: "Producto1 Update",
    description: "Descripcion 1 Update",
    price: 600,
    thumbnail: "imagen1 Update",
    code: "pro1Update",
    stock: 200
  });
}

run();


