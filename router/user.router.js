const express = require('express');
const { getAllUser, createUser, deleteUser } = require('../controller/user.controler');
const { isAdmin} = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');
const verfySignup = require('../middlewares/verifySignup');
const findUser = require('../middlewares/findUser');
const userRouter = express.Router();

userRouter.get( "/viewUsers", verifyToken, isAdmin, getAllUser );
userRouter.post( "/createUser", verifyToken, isAdmin, verfySignup, createUser );
userRouter.delete( "/delete", verifyToken, isAdmin, findUser, deleteUser );
module.exports = userRouter;