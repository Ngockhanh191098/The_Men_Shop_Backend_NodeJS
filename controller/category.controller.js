const db = require('../models/db.model');
const CategoryModel = db.Category;

const getCategory = async (req, res) => {
    try {
        const categoryList = await CategoryModel.findAll();
        return res.status(200).json(categoryList);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const addCategory = async (req, res) => {
    const {categoryName} = req.body;
    try {
        await CategoryModel.create({name: categoryName})
        return res.status(201).json({message: "Add Category Successfully!"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

const deleteCategory = async (req, res) => {
    const cateId = req.params.id;
    try {
        await CategoryModel.destroy({
            where: {
                id: cateId
            }
        });
        return res.status(200).json({message: "Delete Category Successfully!"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const updateCategory = async (req, res) => {
    const cateId = req.params.id;
    const {categoryName} = req.body;
    try {
        await CategoryModel.update(
            {categoryName},{
                where: {
                    id: cateId,
                 }   
            });

        return res.status(200).json({ message: "Update Category Successfully!" })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

module.exports = {
    getCategory,
    addCategory,
    deleteCategory,
    updateCategory
}