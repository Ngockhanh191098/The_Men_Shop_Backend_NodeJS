const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Fruit = require('./fruit.model') (sequelize, DataTypes);
db.User = require('./user.model') (sequelize, DataTypes);
db.Account = require('./account.model') (sequelize, DataTypes);
db.Order = require('./order.model') (sequelize, DataTypes);
db.OrderDetail = require('./orderDetail.model') (sequelize, DataTypes);
db.Category = require('./category.model') (sequelize, DataTypes);
db.Cart = require('./cart.model') (sequelize, DataTypes);

db.User.hasOne( db.Account );
db.Account.belongsTo( db.User );

db.Category.hasMany( db.Fruit, {
    foreignKey: {
        name: "categoryId",
    },
    as: "fruits"
});
db.Fruit.belongsTo( db.Category, {
    foreignKey: {
        name: "categoryId",
    },
    as: "category"
});

db.Account.hasMany( db.Cart, {
    foreignKey: {
        name: "accountId",
    },
    as: "carts"
});
db.Cart.belongsTo( db.Account, {
    foreignKey: {
        name: "accountId",
    },
    as: "account"
});

db.Fruit.hasMany( db.Cart, {
    foreignKey: {
        name: "fruitId",
    },
    as: "carts"
});
db.Cart.belongsTo( db.Fruit, {
    foreignKey: {
        name: "fruitId",
    },
    as: "fruit"
});

db.Account.hasMany( db.Order, {
    foreignKey: {
        name: "accountId",
    },
    as: "orders"
});
db.Order.belongsTo( db.Account, {
    foreignKey: {
        name: "accountId",
    },
    as: "account"
});

db.Order.hasMany( db.OrderDetail, {
    foreignKey: {
        name: "orderId",
    },
    as: "orderDetails"
});
db.OrderDetail.belongsTo( db.Order, {
    foreignKey: {
        name: "orderId",
    },
    as: "order"
});


db.User.sync();
db.Account.sync();
db.Category.sync();
db.Fruit.sync();
db.Cart.sync();
db.Order.sync();
db.OrderDetail.sync();

module.exports = db;