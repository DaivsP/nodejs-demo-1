export {};
const express = require('express');

const router = express.Router();

const products: any = [];

router.get('/add-product', (req: any, res: any) => {
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
  // console.log("in the next middleware");
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req: any, res: any) => {
  products.push({title: req.body.title});
  res.redirect('/');
});

exports.routes = router;
exports.products = products;