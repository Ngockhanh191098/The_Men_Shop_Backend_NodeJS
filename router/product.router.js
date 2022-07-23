const express = require('express');
const { isAdmin} = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');
const { addNewProduct, deleteProduct, getAllProduct, updateProduct, getProductPagination, getProductWithCategoryId, getProductBySearch, getProductById } = require('../controller/product.controller');
const productRouter = express.Router();

productRouter.post('/', verifyToken, isAdmin, addNewProduct);

productRouter.get('/', getProductPagination);

productRouter.get('/:id', verifyToken, getProductById)

productRouter.get('/category/:id', getProductWithCategoryId);

productRouter.get('/search', getProductBySearch)

productRouter.delete('/:id', verifyToken, isAdmin, deleteProduct);

productRouter.put('/:id', verifyToken, isAdmin, updateProduct );

module.exports = productRouter;