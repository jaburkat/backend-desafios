import express from "express";
import ProductManager from './class/productManager.js';

// Crea una instancia de ProductManager y proporciona la ruta del archivo de productos
const productos = new ProductManager('./src/data/productos.txt');

// Inicializa la aplicación Express
const app = express();
const PORT = process.env.PORT || 8080;

// Configura los middleware para analizar datos JSON y codificados en URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta para obtener todos los productos
app.get('/products', async (req, res) => {
  let products = await productos.getProducts();
  let { limit } = req.query;

  if (limit) {
    products.length = limit;
  }

  res.json(products);
});

// Ruta para obtener un producto específico por su ID
app.get('/products/:pid', async (req, res) => {
  const productId = parseInt(req.params.pid);
  const product = await productos.getProductById(productId);

  if (!product) {
    return res.send({ error: 'El producto no existe!' });
  }

  res.json(product);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto: ${PORT}`);
});
