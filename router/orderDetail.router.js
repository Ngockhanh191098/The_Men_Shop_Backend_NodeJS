const express = require('express');
const { getOrderDetail } = require('../controller/orderDetail.controler');
const { verifyToken } = require('../middlewares/verifyToken');
const orderDetailRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     OrderDetail:
 *       type: object
 *       required:
 *          - quantityProduct
 *          - orderId
 *          - productId
 *       properties:
 *          id:
 *            type: integer
 *            description: primary key unique of order
 *          quantityProduct:
 *            type: integer
 *            description: quantity of product ordered
 *          orderId:
 *            type: integer
 *            description: id of order
 *          productId:
 *            type: integer
 *            description: id of product
 */  


orderDetailRouter.get('/:id', verifyToken, getOrderDetail);



module.exports = orderDetailRouter;