const products: any = [];

module.exports = class Product {
  private title: string;
  
  constructor(title: string) {
    this.title = title;
  }
  
  save() {
    products.push(this);
  }
  
  static fetchAll() {
    return products;
  }
};