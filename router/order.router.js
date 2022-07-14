const express = require('express');
const getAllOrder = require('../controller/order.controler');
const { verifyToken } = require('../middlewares/verifyToken');
const orderRouter = express.Router();

orderRouter.get( "/viewOrders", verifyToken, getAllOrder ) 

module.exports = orderRouter;