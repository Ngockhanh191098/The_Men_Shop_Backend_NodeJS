const express = require('express');
const {getAllOrder, addOrder } = require('../controller/order.controler');
const { verifyToken } = require('../middlewares/verifyToken');
const orderRouter = express.Router();

orderRouter.get( "/viewOrders", verifyToken, getAllOrder ) 
orderRouter.post('/:id', verifyToken, addOrder);

module.exports = orderRouter;