const { PERMISSION_ADMIN, PERMISSION_MEMBER } = require('../config/permission.config');
const db = require('../models/db.model');
const UserModel = db.User;
const AccountModel = db.Account;

//verify if it's admin permission
const isAdmin = async( req, res, next ) => {
    const id = req.userID
    const account = await AccountModel.findOne({ where: { UserId : id }});  
    if (account.iam_role === PERMISSION_ADMIN ){       
        return next();
    }
    return res.status(403).json({
        messege:"forbidden!require admin role",
    });
};
//very if it;s member permission
const isMember = async( req, res, next ) => {
    const id = req.userID;
    const account = await AccountModel.findOne({ where: { UserId : id }});
    console.log(account.dataValues.iam_role);
    if (account.dataValues.iam_role === PERMISSION_ADMIN ){     
        return next();        
    }
    return res.status(403).json({
        messege:"forbidden!require member role",
    });
};


const authJwt = {  
    isAdmin,   
    isMember,
};
module.exports = authJwt;