import Product from './manager/product.js';
import ProductManager from './manager/productManager.js';

// Crear una instancia de la clase ProductManager
const productManager = new ProductManager();

// Resto del código 

// Obtener los productos (debe devolver un arreglo vacío)
console.log(productManager.getProducts()); // []

// Agregar un producto
const productToAdd = new Product("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
productManager.addProduct(productToAdd);

// Obtener los productos nuevamente (debe aparecer el producto recién agregado)
console.log(productManager.getProducts());

// Obtener un producto por id
const productId = productManager.getProducts()[0].id; // Obtener el id del primer producto en la lista
const productById = productManager.getProductById(productId);
console.log(productById);

// Actualizar un producto
