const express = require('express');
const { getAllUser, createUser, deleteUser, updateRole, getUserByUsername, changePassword } = require('../controller/user.controler');
const { isAdmin} = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');
const verfySignup = require('../middlewares/verifySignup');
const findUser = require('../middlewares/findUser');
const userRouter = express.Router();

userRouter.get( "/", verifyToken, isAdmin, getAllUser );

userRouter.get('/:username', verifyToken, getUserByUsername);

userRouter.post( "/", verifyToken, isAdmin, verfySignup, createUser );

userRouter.delete( "/:id", verifyToken, isAdmin, deleteUser );

userRouter.put( "/:id", verifyToken, isAdmin, findUser, updateRole );

userRouter.put('/', verifyToken, changePassword);

module.exports = userRouter;