const path = require('path');
const express = require('express');
const rootDir = require('../utils/path');

const router = express.Router();
const adminData = require('./admin');

router.get('/', (req: any, res: any, next: any) => {
  res.render('shop');
  // console.log('shop.js', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;