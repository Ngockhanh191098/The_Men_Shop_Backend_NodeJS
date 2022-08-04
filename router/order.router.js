const express = require('express');
const { getAllOrder, getOrderByIdUser } = require('../controller/order.controler');
const { isAdmin, isMember } = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');
const orderRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Order:
 *       type: object
 *       required:
 *          - userId
 *       properties:
 *          id:
 *            type: integer
 *            description: primary key unique of order
 *          userId:
 *            type: integer
 *            description: id of user ordered
 */  

orderRouter.get( "/", verifyToken, isAdmin, getAllOrder);

orderRouter.get('/:id', verifyToken, isMember, getOrderByIdUser)

module.exports = orderRouter;