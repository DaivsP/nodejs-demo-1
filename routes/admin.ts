export {};
const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

router.get('/add-product', productsController.getAddProduct);
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));

router.post('/add-product', productsController.postAddProduct);

module.exports = router;