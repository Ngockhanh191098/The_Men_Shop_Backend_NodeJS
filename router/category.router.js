const express = require('express');
const { isAdmin } = require('../middlewares/authJwt');
const { verfyToken } = require('../middlewares/verifyToken');
const { addCategory, deleteCategory, getCategory } = require("../controller/category.controller");
const categoryCheck = require('../middlewares/categoryCheck');
const categoryRouter = express.Router();

categoryRouter.get('/category', verfyToken, getCategory)

categoryRouter.post('/category', verfyToken, isAdmin, categoryCheck, addCategory);

categoryRouter.delete('/category/:id', verfyToken, isAdmin, deleteCategory)




module.exports = categoryRouter;