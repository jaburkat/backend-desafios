import fs from 'fs';

export default class ProductManager {
  constructor(path) {
    this.path = path;
  }

  // Agrega un producto al archivo de datos
  async addProducts(product) {
    try {
      // Lee los datos existentes del archivo
      let dataProduct = await fs.promises.readFile(this.path, 'utf-8');
      let dataProdParse = JSON.parse(dataProduct);

      // Realiza validaciones en el objeto del producto
      if (
        !dataProdParse.some((num) => num.code === product.code) &&
        product.title !== "" &&
        product.description !== "" &&
        product.price > 0 &&
        product.thumbnail !== "" &&
        product.stock >= 0
      ) {
        // Agrega el nuevo producto al arreglo de datos existente
        const data = dataProdParse
          ? [...dataProdParse, { ...product, id: dataProdParse.length + 1 }]
          : [{ ...product, id: dataProdParse.length + 1 }];

        // Escribe los datos actualizados en el archivo
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(data, null, 2)
        );

        console.log(`Producto agregado con el id: ${dataProdParse.length + 1}`);
      } else {
        // Si la validación falla, muestra un mensaje de error
        const salida = dataProdParse.some((num) => num.code === product.code)
          ? 'El producto ya fue agregado'
          : 'Los campos no pueden estar vacios';

        console.log(salida);
      }
    } catch (error) {
      console.log("Error en la escritura", error);
    }
  }

  // Obtiene todos los productos del archivo de datos
  async getProducts() {
    let dataProduct = await fs.promises.readFile(this.path, "utf-8");
    let dataProdParse = JSON.parse(dataProduct);
    if (dataProdParse.length) {
      return dataProdParse;
    } else {
      console.log('No hay productos');
    }
  }

  // Obtiene un producto por su ID del archivo de datos
  async getProductById(id) {
    try {
      let dataProduct = await fs.promises.readFile(this.path, "utf-8");
      let dataProdParse = JSON.parse(dataProduct);
      let product = dataProdParse.find((product) => product.id === id);
      if (product) {
        return product;
      } else {
        console.log(`No se encontró el producto con el id: ${id}`);
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Actualiza un producto con un ID y una propiedad específica
  async updateProducts(id, prop, newValue) {
    try {
      let dataProduct = await fs.promises.readFile(this.path, "utf-8");
      let dataProdParse = JSON.parse(dataProduct);
      let productIndex = dataProdParse.findIndex((product) => product.id === id);

      if (productIndex > -1) {
        // Actualiza la propiedad del producto con el nuevo valor
        dataProdParse[productIndex][prop] = newValue;

        // Escribe los datos actualizados en el archivo
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(dataProdParse, null, 2)
        );

        console.log('Actualizado con éxito');
      } else {
        console.log(`No existe el producto con el id ${id}`);
        return null;
      }
    } catch (error) {
      console.log("Error al actualizar el producto", error);
    }
  }

  // Elimina un producto por su ID del archivo de datos
  async deleteProduct(id) {
    try {
      let dataProduct = await fs.promises.readFile(this.path, "utf8");
      let dataProdParse = JSON.parse(dataProduct);
      let product = dataProdParse.find((product) => product.id === id);
      if (product) {
        // Filtra el arreglo de datos para eliminar el producto
        const dataProdFilter = dataProdParse.filter(
          (product) => product.id !== id
        );

        // Escribe los datos actualizados en el archivo
        await fs.promises.writeFile(
          this.path,
          JSON.stringify(dataProdFilter, null, 2)
        );

        console.log('Producto eliminado con éxito');
      } else {
        console.log(`No existe el producto con el id: ${id}`);
      }
    } catch (error) {
      console.log('Error al eliminar el producto', error);
    }
  }
}
