/* ************************************************************************** */
/* /src/public/js/carts/index.js - .js de /src/views/carts.handlebars */
/* ************************************************************************** */


/* Función para eliminar un producto */
function removeProduct(cartId, productId, rowElement) {
    const url = `/api/carts/${cartId}/product/${productId}`;
    
    fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('Producto eliminado del carrito:', data);
      
      // Eliminar la fila correspondiente del DOM
      rowElement.remove();
    })
    .catch(error => {
      console.error('Error al eliminar el producto:', error);
    });
  }
  