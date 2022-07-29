const db = require('../models/db.model');
const OrderDetailModel = db.OrderDetail;
const OrderModel = db.Order;
const getAllOrder = async (req, res) => {
    // try {
    //   const order = await OrderDetailModel.findAll({
    //     where: {
    //       orderId: 
    //     }
    //   });
    //   if (!order) {
    //     return res.status(404).json({ message: "Not found order" });
    //   }
    //   return res.status(200).json(order);
  
    // } catch (error) {
    //   return res.status(500).json({ message: error.message });
    // }
  };

module.exports = {getAllOrder};