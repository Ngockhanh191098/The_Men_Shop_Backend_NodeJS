const express = require('express');
const app = express.Router()

const {signin,signup} =require("../controller/auth.controler");
const verfySingnup = require('../middlewares/verifySignup');

    app.post("/api/v1/auth/signup",verfySingnup,signup);
    app.post("/api/v1/auth/signin",signin);

module.exports = app