const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/path');

const p = path.join(rootDir, 'data', 'products.json');

const getProductsFromFile = (callBack: any) => {
  fs.readFile(p, ((err: Error, data: any) => {
    if (err) {
      callBack([]);
    } else {
      callBack(JSON.parse(data));
    }
  }));
};

module.exports = class Product {
  private title: string;
  
  constructor(title: string) {
    this.title = title;
  }
  
  static fetchAll(callBack: any) {
    getProductsFromFile(callBack);
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