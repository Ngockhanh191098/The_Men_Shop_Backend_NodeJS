const express = require('express');
const { isAdmin } = require('../middlewares/authJwt');
const { verfyToken } = require('../middlewares/verifyToken');
const { addCategory, deleteCategory, getCategory, updateCategory } = require("../controller/category.controller");
const categoryCheck = require('../middlewares/categoryCheck');
const categoryRouter = express.Router();

categoryRouter.get('/', verfyToken, getCategory)

categoryRouter.post('/', verfyToken, isAdmin, categoryCheck, addCategory);

categoryRouter.delete('/:id', verfyToken, isAdmin, deleteCategory);

categoryRouter.put('/:id', verfyToken, isAdmin, updateCategory);




module.exports = categoryRouter;