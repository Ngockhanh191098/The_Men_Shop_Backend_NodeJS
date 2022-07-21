const db = require('../models/db.model');
const UserModel = db.User;
const jwt = require('jsonwebtoken');
const authConfig = require("../config/auth.config");
const sendEmail = require("../service/sendEmail");

const forgotPass = async (req, res) => {
    const {email} = req.body;

    try {
        const foundAccount = await UserModel.findOne({
            where: {
                email,
            }
        })

        if (!foundAccount) {
            return res.status(404).json({message: "Not found user with this email!"})
        }

        const payload = {
            email: foundAccount.email,
            id: foundAccount.id,
            username: foundAccount.username
        }

        const tempToken = jwt.sign( payload, authConfig.secrect, { expiresIn: 18000 });

        const link = `http://localhost:3000/reset/${tempToken}`

        await sendEmail(
            `${email}`,
            `EMAIL RESET PASSWORD`,
            'We provide for you a link to reset password',
            `  
                <a href=${link}>Click here</a>
            `
        )
        return res.status(200).json({message: "Sended email!"})
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}

const resetPassword = (req, res) => {

}


module.exports = {
    forgotPass,
    resetPassword
}