const express = require('express');
const { isAdmin} = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');
const { addNewProduct, deleteProduct, getAllProduct } = require('../controller/product.controller');
const productRouter = express.Router();

productRouter.post('/', verifyToken, isAdmin, addNewProduct);

productRouter.get('/', getAllProduct)

productRouter.delete('/:id', verifyToken, isAdmin, deleteProduct);

module.exports = productRouter;