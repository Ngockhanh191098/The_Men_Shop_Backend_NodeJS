const Sequelize = require('sequelize');

module.exports = new Sequelize( 'men_shop_db', 'root', 'admin', {
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorAliases: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});