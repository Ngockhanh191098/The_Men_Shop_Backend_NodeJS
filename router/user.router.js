const express = require('express');
const { getAllUser, createUser } = require('../controller/user.controler');
const { isAdmin} = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');
const verfySignup = require('../middlewares/verifySignup');
const userRouter = express.Router();


userRouter.get( "/viewUsers", verifyToken, isAdmin, getAllUser );
userRouter.post( "/createUser", verifyToken, isAdmin, verfySignup, createUser );

module.exports = userRouter;