const express = require('express');
const { addOderdetail, getOrderDetail, deleteOrderdetail } = require('../controller/orderDetail.controler');
const { verifyToken } = require('../middlewares/verifyToken');
const orderDetailRouter = express.Router();

orderDetailRouter.post('/order/:id/product', verifyToken, addOderdetail);

orderDetailRouter.get('/oder/:id/product', verifyToken, getOrderDetail);

orderDetailRouter.delete('/:id', verifyToken, deleteOrderdetail);


module.exports = orderDetailRouter;