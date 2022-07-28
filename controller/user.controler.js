const md5 = require('md5');
const { DEFAULT_AVT } = require('../config/common.config');
const { PERMISSION_MEMBER } = require('../config/permission.config');
const db = require('../models/db.model');
const UserModel = db.User

const getAllUser = async (req, res) => {
  try {
    const users = await UserModel.findAll({
      where: {
        iamRole: "member"
      }
    });
    if (users) {
      return res.status(200).json(users);
    }

    return res.status(404).json({ message: "Error: server not found data " });

  } catch (error) {
    return res.status(500).json({ message: "Server got error" });
  }
};

const getUserByUsername = async (req, res) => {
    const username = req.params.username;
    try {
      const user = await UserModel.findOne({
        where: {
          username,
        }
      });

      if(!user) {
        return res.status(404).json({message: "User not found!"});
      }
      return res.status(200).json({
        id: user.id,
        username: user.username,
        email: user.email,
        avatar: user.avatar
      })
    } catch (error) {
      return res.status(500).json({message: error.message})
    }

}

const changePassword = async (req, res) => {
    const {username} = req.query;
    const {currentPassword, newPassword } = req.body; 
    try {
    const user = await UserModel.findOne({
      where: {
        username,
      }
    })
    if(!user) {
      return res.status(404).json({message: "User not found"})
    }
    if(md5(currentPassword) !== user.hashPwd) {
      return res.status(400).json({message: "Current password is incorrect!"})
    }

    const hashPwd = md5(newPassword);

      await UserModel.update({hashPwd: hashPwd},{
        where: {
          username: username
        }
      });

      return res.status(200).json({message: "Update password successfully!"})
    } catch (error) {
      return res.status(500).json({message: error.message})
    }
}

const createUser = async (req, res) => {
  const {   
    username,  
    password,
    email,
  } = req.body
  try {
    const createData = { 
      username: username,   
      hashPwd: md5(password),
      iamRole: PERMISSION_MEMBER,
      email: email,
      avatar: DEFAULT_AVT, 
    };
    await UserModel.create(createData);
    return res.status(201).json({
      message: "Add user successfully!",
      createData
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message
      // "server is getting error when creating new User account"
    });
  }
}
const deleteUser =  async (req, res) => {

  const {id} = req.params;
  try {
      await UserModel.destroy({
          where: {
            id: id,
          }
      });
      return res.status(200).json({message: "Delete User Successfully!"})
  } catch (error) {
      return res.status(500).json({message: error.message})
  }
};
const updateRole = async (req, res) => {
  const {username} = req.body;
  const {iamRole} = req.body;
  try {
      await UserModel.update(
          {iamRole},{
              where: {
                  username,
               }   
          });

      return res.status(200).json({ message: "Update Role Successfully!" })
  } catch (error) {
      return res.status(500).json({message: error.message})
  }
}
module.exports = { 
  getAllUser, 
  createUser, 
  deleteUser, 
  updateRole,
  getUserByUsername,
  changePassword
}