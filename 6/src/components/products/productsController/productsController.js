// Importar el servicio de productos 
const ProductsServices = require('../productsServices/productsServices');

//Definir la clase 'ProductsController' 
class ProductsController {
  // Obtener todos los productos 
  getAllProducts = async (req, res, next) => {
    // Obtener el límite de productos de los parámetros de consulta
    const limit = req.query.limit;
    // Llamar al método getAllProducts de ProductsServices 
    await ProductsServices.getAllProducts(limit, res);
  };

  // Agregar un nuevo producto 
  addProduct = async (req, res, next) => {
    // Obtener los datos del producto de los campos de payload 
    const payload = req.body;
    // Obtener las imágenes de los archivos adjuntos 
    const images = req.files;
    // Llamar al método addProduct de ProductsServices 
    await ProductsServices.addProduct(payload, images, res, req);
  };

  // Obtener un producto por ID 
  getProductById = async (req, res, next) => {
    // Obtener el ID del producto de los parámetros de la solicitud 
    const { pid } = req.params;
    // Llamar al método getProductById de ProductsServices 
    await ProductsServices.getProductById(pid, res);
  };

  // Actualizar un producto 
  updateProduct = async (req, res, next) => {
    // Obtener el ID del producto de los parámetros de la solicitud 
    const { pid } = req.params;
    // Obtener los campos de actualización de la solicitud 
    const updateFields = req.body;
    // Llamar al método updateProduct de ProductsServices 
    await ProductsServices.updateProduct(pid, updateFields, res, req);
  };

  // Eliminar un producto 
  deleteProduct = async (req, res, next) => {
    // Obtener el ID del producto de los parámetros de la solicitud 
    const { pid } = req.params;
    // Llamar al método deleteProduct de ProductsServices 
    await ProductsServices.deleteProduct(pid, res, req);
  };
}

// Exportar una instancia de la clase 'ProductsController' 
module.exports = new ProductsController();
