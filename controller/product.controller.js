const db = require('../models/db.model');
const ProductModel = db.Product;

const addNewProduct = async (req, res) => {
    const newProduct = req.body;

    try {
        const file = req.file;
        const filename = file.filename;

        const createProduct = await ProductModel.create({
            title: newProduct.title,
            price: newProduct.price,
            image: filename,
            size: newProduct.size,
            description: newProduct.description,
            categoryId: newProduct.categoryId,
        });
        console.log(createProduct);
        return res.status(201).json(createProduct);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
};

const getAllProduct = async (req, res) => {
    try {
        const allProduct = await ProductModel.findAll();
        if(!allProduct) {
            return res.status(404).json({message: "Not fount product!"});
        }

        return res.status(200).json({
            message: "Get Product Successfully!",
            allProduct
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const getProductPagination = async (req, res) => {
    let { offset, limit } = req.query;
    offset = typeof offset === "string" ? parseInt(offset) : offset;
    limit = typeof limit === "string" ? parseInt(limit) : limit;

    let { count, rows } = await ProductModel.findAndCountAll({
        offset,
        limit
    });

    // transform rows
    rows = rows.map((row) => {
        return row.dataValues;
    });
    
    return res.status(200).json({
        count,
        limit,
        offset,
        rows
    })
}

const deleteProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        await ProductModel.destroy({
            where: {
                id: productId,
            }
        });

        return res.status(200).json({message: "Delete Product Successfully!"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};
const updateProduct = async (req, res) => {
    const productId = req.params.id;
    const {title, price, image, size, description} = req.body;
    try {
        await ProductModel.update(
            { title, price, image, size, description },{
                where: {
                    id: productId,
                 }   
            });

        return res.status(200).json({ message: "Update Products Successfully!" })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }

}

module.exports = {
    addNewProduct,
    deleteProduct,
    getAllProduct,
    updateProduct,
    getProductPagination
};