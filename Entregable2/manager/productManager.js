import Product from './product.js';
import path from 'path';
import fs from 'fs';

class ProductManager {
  constructor() {
    Product.this.products = [];
    this.productsFilePath = path.join(__dirname, 'products.json'); // Ruta del archivo para guardar los productos
    this.loadProducts(); // Cargar los productos del archivo al inicializar la clase
  }

  // Resto del código de la clase ProductManager
  loadProducts() {
    try {
      const productsData = fs.readFileSync(this.productsFilePath, 'utf-8');
      this.products = JSON.parse(productsData);
    } catch (error) {
      // Si ocurre un error al leer el archivo, se asume que no existe o está vacío
      // y se crea un archivo vacío para almacenar los productos
      fs.writeFileSync(this.productsFilePath, '[]');
    }
  }

  saveProducts() {
    fs.writeFileSync(this.productsFilePath, JSON.stringify(this.products, null, 2));
  }

  getProducts() {
    return this.products;
  }

  addProduct(product) {
    this.products.push(product);
    this.saveProducts();
  }

  getProductById(id) {
    const product = this.products.find(product => product.id === id);
    if (!product) {
      throw new Error("Producto no encontrado.");
    }
    return product;
  }

  updateProduct(id, updatedProduct) {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      throw new Error("Producto no encontrado.");
    }
    // Actualizar el producto conservando su id
    this.products[productIndex] = { ...updatedProduct, id };
    this.saveProducts();
  }

  deleteProduct(id) {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      throw new Error("Producto no encontrado.");
    }
    // Eliminar el producto de la lista
    this.products.splice(productIndex, 1);
    this.saveProducts();
  }
}

export default ProductManager;
