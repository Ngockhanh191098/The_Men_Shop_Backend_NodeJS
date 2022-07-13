const express = require('express');
const { isAdmin} = require('../middlewares/authJwt');
const { verfyToken } = require('../middlewares/verifyToken');
const { addNewProduct, deleteProduct, getAllProduct } = require('../controller/product.controller');
const productRouter = express.Router();

productRouter.post('/', verfyToken, isAdmin, addNewProduct);

productRouter.get('/', getAllProduct)

productRouter.delete('/:id', verfyToken, isAdmin, deleteProduct);

module.exports = productRouter;