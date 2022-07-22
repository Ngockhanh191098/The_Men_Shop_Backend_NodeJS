const db = require('../models/db.model');
const orderDetailModel = require('../models/orderDetail.model');
const ProductModel = db.Product;
const OrderModel = db.Order;
const OrderDetailModel = db.OrderDetail;
const deleteOrderdetail =  async (req, res) => {
  const oderDetail = req.params.id;

  try {
      await OrderDetailModel.destroy({
          where: {
              id: oderDetail,
          }
      });

      return res.status(200).json({message: "Delete OderDetail Successfully!"})
  } catch (error) {
      return res.status(500).json({message: error.message})
  }}
 
const getOrderDetail =  async (req, res) => {
    try {
      const {id}= req.params;
      const oderDetail = await OrderDetailModel.findOne({where:{
        id,
      }});
      
      if (oderDetail) {
        res.status(200).json(oderDetail);
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
const addOderdetail = async (req, res) => {
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
module.exports = {addOderdetail, getOrderDetail, deleteOrderdetail};