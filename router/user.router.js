const express = require('express');
const { getAllUser, createUser } = require('../controller/user.controler');
const { isAdmin} = require('../middlewares/authJwt');
const { verfyToken } = require('../middlewares/verifyToken');
const verfySignup = require('../middlewares/verifySignup');
const userRouter = express.Router();


userRouter.get( "/viewUsers", verfyToken, isAdmin, getAllUser );
userRouter.post( "/createUser", verfyToken, isAdmin, verfySignup, createUser );

module.exports = userRouter;