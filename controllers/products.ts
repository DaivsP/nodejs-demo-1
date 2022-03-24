import {Request, Response} from 'express';

const Product = require('../models/product');

exports.getAddProduct = (req: Request, res: Response) => {
  res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
};

exports.postAddProduct = (req: Request, res: Response) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

exports.getProducts = (req: Request, res: Response) => {
  Product.fetchAll((products: any) => {
    res.render('shop', {prods: products, pageTitle: 'Shop', path: '/'});
    // console.log('shop.js', adminData.products);
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  });
};