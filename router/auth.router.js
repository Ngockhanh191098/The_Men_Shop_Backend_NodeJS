const express = require('express');
const authRouter = express.Router()
const { signin, signup } =require("../controller/auth.controler");
const verfySignup = require('../middlewares/verifySignup');



authRouter.post( "/signin", signin );
authRouter.post( "/signup", verfySignup, signup );

module.exports = authRouter;