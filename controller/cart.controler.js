const db = require('../models/db.model');
const ProductModel = db.Product;
const UserModel = db.User;
const CartModel = db.Cart;

const deleteCart = async (req, res) => {
  const cart = req.params.id;
  try {
    await CartModel.destroy({
      where: {
        id: cart,
      }
    });

    return res.status(200).json({ message: "Delete Cart Successfully!" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
const deleteProductInCart = async (req, res) => {
  const userId = req.params.id;
  const {productId} = req.body
  try {
    const productInUser = await CartModel.findOne({
      where: {
        userId,
      }
    })
    if (productInUser) {
      const product = await CartModel.findOne({
        where:{
          productId,
        }
      })
      if (product) {
        await CartModel.destroy({
          where: {
            productId,
          }
        });
        return res.status(200).json({ message: "Delete Cart Successfully!" })
      }
      return res.status(404).json({message: "Error: Sever don't found product"})
    }   
    return res.status(404).json({ message: "Error: Sever don't found cart of User" })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
const getCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, username, email } = await UserModel.findOne({
      where: {
        id,
      }
    });
    const productid = await CartModel.findAll({
      where: {
        userId: id,
      }
    });

    const userdata = {
      fullName,
      username,
      email,
    };
    const tmt = { ...userdata, ...productid };

    if (username) {
      res.status(200).json(tmt);
    }
    else {
      res.status(404);
      res.json({ message: "Error: server don't found data " });
    }
  } catch (error) {
    res.status(500);
    res.json({ message: "server got error" });
  }
}
const addProductToCart = async (req, res) => {
  try {
    const { id } = req.params;
    const { productId } = req.body
    const data = {
      userId: id,
      productId: productId
    };
    if (data) {
      const product = await CartModel.create(data);
      res.status(200);
      res.json(product);
    }
    else {
      res.status(404);
      res.json({ message: "Error: server don't found input data " });
    }
  } catch (error) {
    res.status(500);
    res.json({ message: error });
  }
}
module.exports = { getCart, addProductToCart, deleteCart, deleteProductInCart };