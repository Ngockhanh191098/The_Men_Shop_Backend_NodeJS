const db = require('../models/db.model');
const OrderModel = db.Order;

const getAllOrder = async (req, res) => {
    try {
      const orders = await OrderModel.findAll({
        include: ["user"]
      });
      const responseData = [];

      orders.map((order) => {
        responseData.push({
          orderId: order.dataValues.id,
          createdAt: order.dataValues.createdAt,
          username: order.user.username,
          email: order.user.email
        })
      })

      if (!orders) {
        return res.status(404).json({ message: "Not found order" });
      }
      return res.status(200).json(responseData);
  
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
};

// const getOrderByIdUser = (req, res) => {
//     const idUser = req.params.id;
//     console.log(idUser);
// }

module.exports = {
  getAllOrder,
  // getOrderByIdUser
};