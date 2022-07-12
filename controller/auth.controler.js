const md5 = require("md5");
const jwt = require("jsonwebtoken");
const db = require('../models/db.model');
const UserModel = db.User;
const AccountModel = db.Account
const authConfig = require("../config/auth.config");
const { PERMISSION_MEMBER, PERMISSION_ADMIN } = require("../config/permission.config");

exports.signup = async(req,res)=>{
    const {
        fullName,
        username,
        email,
        password       
    } = req.body
    try {
        const createData = {
            fullName,
            username,
            email,
            hash_pwd : md5(password),      
        };
        await UserModel.create(createData);       
        return res.status(201).json(createData);    
    } catch(error){
        return res.status(500).json({message:error.message});
    }
};
exports.signin = async ( req, res ) => {
    const{ username, password } = req.body;

    //check username in database
    const foundUser = await UserModel.findOne({
        where: {
                    username
                }
    });
    if( !foundUser ) {
        return res.status(404).json({
            message:"invalid username",
        });
    }
    if( md5(password) !== foundUser.hash_pwd){
        return res.status(404).json({
            message:"invalid password",
        });
    }

    //generate token
    const token = jwt.sign( {id:foundUser.id},
        authConfig.secrect,{expiresIn:86400,});

    

    res.status(200).json({
        id: foundUser.id,
        username: foundUser.username,
        email: foundUser.email,
        accessToken : token
    });

    const dataAccount = {
        username: foundUser.username,
        hash_pwd: foundUser.hash_pwd,
        iam_role: PERMISSION_MEMBER,
        UserId: foundUser.id
    }
    try {
        const accountFound = await AccountModel.findOne({
            where: {
                username: foundUser.username
            }
        });

        if (accountFound) {
            return;
        }

        await AccountModel.create(dataAccount);       
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
};
