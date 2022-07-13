const db = require('../models/db.model');
const PromotionModel = db.Promotion;

const addPromotion = async (req, res) => {
    const { promotion } = req.body;
    console.log(promotion)
    try {
        const newPromotion = await PromotionModel.create({
            promotion: promotion,
        });

        return res.status(201).json({
            message: "Add Promotion Successfully!",
            newPromotion
        })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

const getPromotion = async (req, res) => {
    try {
        const promotion = await PromotionModel.findAll();

        return res.status(200).json(promotion)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

const deletePromotion = async (req, res) => {
    const promoId = req.params.id;
    try {
        await PromotionModel.destroy({
            where: {
                id: promoId
            }
        });

        return res.status(200).json({message: "Delete Promotion Successfully!"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

const updatePromotion = async (req, res) => {
    const promoId = req.params.id;
    const { promotion } = req.body;
    try {
        await PromotionModel.update(
            {promotion},{
                where: {
                    id: promoId,
                 }   
            });

        return res.status(200).json({ message: "Update Promotion Successfully!" })
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}



module.exports = {
    addPromotion,
    getPromotion,
    deletePromotion,
    updatePromotion
};