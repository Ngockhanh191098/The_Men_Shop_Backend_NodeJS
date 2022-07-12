const db = require('../models/db.model');
const getAllUser =  async (req, res) => {
    try {
      const users = await UserModel.findAll();
      if (users) {
        return res.status(200).json(users);
      }
      else{
        return res.status(404).json({ message: "Error: server not found data " });
      }
    } catch (error) {
        return res.status(500).json({ message: "Server got error" });
    } 
};
module.exports={ getAllUser }