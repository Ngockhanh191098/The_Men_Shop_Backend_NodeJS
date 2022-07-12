const md5 = require("md5");
const jwt = require("jsonwebtoken");
const {User} = require("../models/user.model")
const authConfig = require("../config/auth.config");

exports.signup = async(req,res)=>{
    const {
        fullName,
        username,
        email,
        password       
    }= req.body
    try {
        const createData = {
            fullName,
            username,
            email,
            hash_pwd : md5(password),      
        };
        await User.create(createData);       
        return res.status(201).json(createData);    
    } catch(error){
        return res.status(500).json({message:error.message});
    }
};
exports.signin = async (req,res)=>{
    const{userName,password}=req.body;

    //check username in database
    const foundUser = await User.findOne({where:{
        userName,
    }});
    if(!foundUser){
        return res.status(404).json({
            message:"invalid username",
        });
    }
    if(md5(password) !== foundUser.pwd_hash){
        return res.status(404).json({
            message:"invalid password",
        });
    }

    //generate token
    const token = jwt.sign({id:foundUser.id},
        authConfig.secrect,{expiresIn:86400,});

    return res.status(200).json({
        id: foundUser.id,
        userName: foundUser.userName,
        email:foundUser.email,
        accessToken : token
    });
};
