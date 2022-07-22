const db = require('../models/db.model');
const OrderModel = db.Order;
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
const addOrder = async (req, res) => {
  try {    
    const {id}= req.params;    
    const data = {   
      userId: id,         
    };
    if (data) {
      const order = await OrderModel.create(data);
      res.status(200);
      res.json(order);
    }
    else{
      res.status(404);
      res.json({ message: "Error: server don't found input data " });
    }
  } catch (error) {
    res.status(500);
    res.json({ message:error});
  }    
};
module.exports = {getAllOrder, addOrder};