const jwt = require("jsonwebtoken");
const config= require("../config/auth.config");

const verfyToken = ( req, res, next ) => {
    let token = req.headers[ "x-access-token"];

    //return 403 error if token not found
    if( !token ){
        return res.status( 403 ).json({
            messege:" Notoken provided!",
        });
    }
    
    //verify jwt token
    jwt.verify( token, config.secrect, ( err, decoded ) => {
        if( err ){
            return res.status( 403 ).json({
                messege:"Forbiden! Requeries a token to access",
            });
        }
        req.userID = decoded.id;
        next();
    });
};
module.exports = { verfyToken }