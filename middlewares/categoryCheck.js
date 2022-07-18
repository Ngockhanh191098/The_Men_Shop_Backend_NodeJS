const db = require('../models/db.model');
const CategoryModel = db.Category;

const categoryCheck = async (req, res, next) => {
    const {name} = req.body;

    const foundCate = await CategoryModel.findOne({
        where: {
<<<<<<< HEAD
            name: categoryName
=======
            name,
>>>>>>> a6459443fff63791ec6988a0de71a7d34ce83d98
        }
    });

    if (foundCate) {
        return res.status(400).json({message: "Category is already exist"})
    }

    next();
}


module.exports = categoryCheck;