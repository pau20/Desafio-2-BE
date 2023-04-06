class Product {
    constructor(title, description, price, thumbnail, code, stock) {
      this.id = new Date().getTime(); // Generar un id único usando la fecha actual
      this.title = title;
      this.description = description;
      this.price = price;
      this.thumbnail = thumbnail;
      this.code = code;
      this.stock = stock;
    }
  }
  
  export default Product;
  