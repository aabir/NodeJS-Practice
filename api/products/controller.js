let config = require('../config')
let products = config.getDB().get('products');

function getProducts() {
  return products;
}

function getProduct(id) {
  return products.find((prod) => prod.id === Number(id));
}

function createProduct(product) {
  products.push(product).write();
}

function deleteProduct(id) {
  products = products.remove({id: Number(id)}).write();
}

module.exports = {
  getProduct,
  getProducts,
  createProduct,
  deleteProduct,
};
