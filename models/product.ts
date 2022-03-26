export {};
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/path');

const p = path.join(
  rootDir,
  'data',
  'products.json',
);

const getProductsFromFile = (cb: any) => {
  fs.readFile(p, (err: Error, fileContent: any) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  title;
  imageUrl;
  description;
  price;
  
  constructor(title: string, imageUrl: string, description: string, price: number) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  
  static fetchAll(cb: any) {
    getProductsFromFile(cb);
  }
  
  save() {
    getProductsFromFile((products: any) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err: Error) => {
        console.log(err);
      });
    });
  }
};
