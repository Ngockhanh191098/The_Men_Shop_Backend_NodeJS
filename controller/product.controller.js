const db = require('../models/db.model');
const ProductModel = db.Product;

const addNewProduct = async (req, res) => {
    const { title, quantity, price, size, description, categoryId, promotionId  } = req.body;
    
}

module.exports = {
    addNewProduct,
};