const express = require('express');
const { addProductToCart, getCart, deleteCart, deleteProductInCart } = require('../controller/cart.controler');
const { isMember} = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');

const cartRouter = express.Router();

cartRouter.post('/user/:id/product', verifyToken, isMember, addProductToCart);

cartRouter.get('/user/:id/product', verifyToken, isMember, getCart);

cartRouter.delete('/:id', verifyToken, isMember, deleteCart );

cartRouter.delete("/user/:id", verifyToken, isMember, deleteProductInCart)

module.exports = cartRouter;