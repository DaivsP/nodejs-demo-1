export {};
const express = require('express');
const path = require('path');
const rootDir = require('../utils/path');

const router = express.Router();

const products: any = [];

router.get('/add-product', (req: any, res: any, next: any) => {
  console.log("in the next middleware");
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req: any, res: any, next: any) => {
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.routes = router;
exports.products = products;