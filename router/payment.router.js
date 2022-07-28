const express = require('express');
const { addNewPayment } = require('../controller/payment.controller');
const { isMember} = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');
const paymentRouter = express.Router();

paymentRouter.post('/',verifyToken, isMember, addNewPayment)



module.exports = paymentRouter;