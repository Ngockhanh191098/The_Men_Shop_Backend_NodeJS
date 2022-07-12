const express = require('express');
const { getAllUser } = require('../controller/user.controler');
const { isAdmin} = require('../middlewares/authJwt');
const { verfyToken } = require('../middlewares/verifyToken');
const userRouter = express.Router()

userRouter.get( "/users", verfyToken, isAdmin, getAllUser );   

module.exports = userRouter;