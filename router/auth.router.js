const express = require('express');
const authRouter = express.Router()

const {signin,signup} =require("../controller/auth.controler");
const verfySingnup = require('../middlewares/verifySignup');

authRouter.post("/signup",verfySingnup,signup);
authRouter.post("/signin",signin);

module.exports = authRouter;