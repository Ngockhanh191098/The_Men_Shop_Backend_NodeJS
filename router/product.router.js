const express = require('express');
const { isAdmin} = require('../middlewares/authJwt');
const { verfyToken } = require('../middlewares/verifyToken');
const productRouter = express.Router();

productRouter.post('/product', verfyToken, isAdmin, (req, res) => {
    
});


module.exports = productRouter;