require('dotenv').config()
const Sequelize = require('sequelize');

module.exports = new Sequelize( 'men_shop_db', 'root', process.env.PASS_DB, {
    host: 'localhost',
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});