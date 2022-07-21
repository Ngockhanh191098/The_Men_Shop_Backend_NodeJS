const express = require('express');
const { forgotPass } = require('../controller/account.controller');
const accountRouter = express.Router()


accountRouter.post( "/forgot-pass", forgotPass);


module.exports = accountRouter;