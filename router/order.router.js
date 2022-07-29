const express = require('express');
const { getAllOrder } = require('../controller/order.controler');
const { isAdmin } = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');
const orderRouter = express.Router();

orderRouter.get( "/", verifyToken, isAdmin, getAllOrder )

module.exports = orderRouter;