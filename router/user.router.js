const express = require('express');
const { getAllUser } = require('../controller/user.controler');
const { isAdmin, isMember } = require('../middlewares/authJwt');
const { verfyToken } = require('../middlewares/verifyToken');
const userRouter = express.Router()

userRouter.get("/users",verfyToken,isMember,getAllUser);
// userRouter.post("/signin",signin);

module.exports = userRouter;