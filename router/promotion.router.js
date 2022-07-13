const express = require('express');
const {addPromotion, getPromotion, deletePromotion, updatePromotion} = require('../controller/promotion.controller');
const { isAdmin} = require('../middlewares/authJwt');
const { verfyToken } = require('../middlewares/verifyToken');
const promotionRouter = express.Router();

promotionRouter.post('/', verfyToken, isAdmin, addPromotion);

promotionRouter.get('/', verfyToken, isAdmin, getPromotion);

promotionRouter.delete('/:id', verfyToken, isAdmin, deletePromotion);

promotionRouter.put('/:id', verfyToken, isAdmin, updatePromotion);




module.exports = promotionRouter;