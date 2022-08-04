const express = require('express');
const { addNewPayment, getPayment } = require('../controller/payment.controller');
const { isMember} = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');
const paymentRouter = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       required:
 *          - method
 *          - total
 *          - orderId
 *       properties:
 *          id:
 *            type: integer
 *            description: primary key unique of order
 *          method:
 *            type: string
 *            description: method checkout of user
 *          total:
 *            type: float
 *            description: total cost of user
 *          orderId:
 *            type: integer
 *            description: id of this order
 */  

paymentRouter.post("/",verifyToken, isMember, addNewPayment);

paymentRouter.get('/:id', verifyToken, getPayment)

module.exports = paymentRouter;