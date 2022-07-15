const db = require("../models/db.model");
const UserModel = db.User
const findUser = async ( req, res, next ) => {
    const data = req.body;
    const found = await UserModel.findOne({
        where:{
            username:data.username
        },
    });
    if( !found ){
        return res.status( 400 ).json({ message:"Cannot found username !!!" })
    }  
    next()  
};
module.exports = findUser