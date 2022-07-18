const db = require('../models/db.model');
const OrderModel = db.Order
const getAllOrder = async (req, res) => {
    try {
      const order = await OrderModel.findAll();
      if (order) {
        return res.status(200).json(order);
      }
  
      return res.status(404).json({ message: "Error: server not found data " });
  
    } catch (error) {
      return res.status(500).json({ message: "Server got error" });
    }
  };

module.exports = getAllOrder;