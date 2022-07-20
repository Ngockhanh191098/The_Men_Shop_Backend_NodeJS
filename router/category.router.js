const express = require('express');
const { isAdmin } = require('../middlewares/authJwt');
const { verifyToken } = require('../middlewares/verifyToken');
const { addCategory, deleteCategory, getCategory, updateCategory } = require("../controller/category.controller");
const categoryCheck = require('../middlewares/categoryCheck');
const categoryRouter = express.Router();

categoryRouter.get('/', getCategory)

categoryRouter.post('/', verifyToken, isAdmin, categoryCheck, addCategory);

categoryRouter.delete('/:id', verifyToken, isAdmin, deleteCategory);

categoryRouter.put('/:id', verifyToken, isAdmin, updateCategory);




module.exports = categoryRouter;