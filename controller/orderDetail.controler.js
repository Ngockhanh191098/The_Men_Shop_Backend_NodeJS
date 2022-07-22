const db = require('../models/db.model');
const orderDetailModel = require('../models/orderDetail.model');
const ProductModel = db.Product;
const OrderModel = db.Order;
const OrderDetailModel = db.OrderDetail;
const deleteOrderdetail =  async (req, res) => {
  const {userId} = req.params.id;

  try {
      await OrderDetailModel.destroy({
          where: {
              id: {userId},
          }
      });

      return res.status(200).json({message: "Delete OrderDetail Successfully!"})
  } catch (error) {
      return res.status(500).json({message: error.message})
  }}
 
const getOrderDetail =  async (req, res) => {
    try {
      const {id}= req.params;
      const {userId} = await OrderModel.findOne({where:{
        id,
      }});
      const productid = await OrderDetailModel.findAll({where:{
        orderId : id,
      }});
      const userdata = {
        userId,
        ...productid
      }; 
      if (userId) {
        res.status(200).json(userdata);
      }
      else{
        res.status(404);
        res.json({ message: "Error: server don't found data " });
      }
    } catch (error) {
      res.status(500);
      res.json({ message: "server got error" });
    } 
  }
const addOrderdetail = async (req, res) => {
    try {    
      const {id}= req.params;
      const {productId, quantityProduct}= req.body
      const data = {   
        orderId: id,   
        productId :productId,
        quantityProduct,
      };
      if (data) {
        const product = await OrderDetailModel.create(data);
        res.status(200);
        res.json(product);
      }
      else{
        res.status(404);
        res.json({ message: "Error: server don't found input data " });
      }
    } catch (error) {
      res.status(500);
      res.json({ message:error});
    }    
  }
module.exports = {addOrderdetail, getOrderDetail, deleteOrderdetail};