const db = require('../models/db.model');
const UserModel = db.User;

const getAllUser=  async (req, res) => {
    try {
      const users = await UserModel.findAll();
      if (users) {
        res.status(200);
        res.json(users);
      }
      else{
        res.status(404);
        res.json({ message: "Error: server don't found data " });
      }
    } catch (error) {
      res.status(500);
      res.json({ message: "server got error" });
    } 
};
module.exports={getAllUser}