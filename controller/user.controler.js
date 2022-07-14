const md5 = require('md5');
const { DEFAULT_AVT } = require('../config/common.config');
const { PERMISSION_MEMBER } = require('../config/permission.config');
const db = require('../models/db.model');
const UserModel = db.User

const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.findAll();
    if (users) {
      return res.status(200).json(users);
    }

    return res.status(404).json({ message: "Error: server not found data " });

  } catch (error) {
    return res.status(500).json({ message: "Server got error" });
  }
};
const createUser = async (req, res) => {
  const {   
    username,  
    password,
    email,
  } = req.body
  try {
    const createData = { 
      username,   
      hash_pwd: md5(password),
      iamRole: PERMISSION_MEMBER,
      email,
      avatar: DEFAULT_AVT, 
    };
    await UserModel.create(createData);
    return res.status(201).json(createData);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      // "server is getting error when creating new User account"
    });
  }
}
module.exports = { getAllUser, createUser}