const express = require('express');
const { getAllOrder } = require('../controller/order.controler');
const { isAdmin, isMember } = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');
const orderRouter = express.Router();

orderRouter.get( "/", verifyToken, isAdmin, getAllOrder);

orderRouter.get('/:id', verifyToken, isMember, (req, res) => {
    
})

module.exports = orderRouter;