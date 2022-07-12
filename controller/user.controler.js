const db = require('../models/db.model');
const UserModel = db.User;

const getAllUser=  async (req, res) => {
    try {
      const users = await UserModel.findAll();
      if (users) {
        res.status(200).json(users);
      }
      else{
        res.status(404).json({ message: "Error: server not found data " });
      }
    } catch (error) {
      res.status(500).json({ message: "Server got error" });
    } 
};
module.exports={getAllUser}