const express = require('express');
const { addOrderdetail, getOrderDetail, deleteOrderdetail } = require('../controller/orderDetail.controler');
const { verifyToken } = require('../middlewares/verifyToken');
const orderDetailRouter = express.Router();

orderDetailRouter.post('/order/:id/product', verifyToken, addOrderdetail);

orderDetailRouter.get('/order/:id/product', verifyToken, getOrderDetail);

orderDetailRouter.delete('/:id', verifyToken, deleteOrderdetail);


module.exports = orderDetailRouter;