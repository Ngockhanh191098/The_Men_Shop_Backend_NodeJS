const db = require('../models/db.model');
const AccountModel = db.Account;
const getAllUser =  async ( req, res ) => {
    try {
      const account = await AccountModel.findAll();
      if ( account ) {  
        res.status( 200 ).json( account );
      }
      else{
        res.status( 404 ).json({ message: "Error: server don't found data " });
      }
    } catch ( error ) {
      res.status( 500 ).json({ message: "server got error" });
    } 
};
module.exports={ getAllUser }