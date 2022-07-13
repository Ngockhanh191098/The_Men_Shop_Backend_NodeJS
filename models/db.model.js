const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Product = require('./product.model') (sequelize, DataTypes);
db.User = require('./user.model') (sequelize, DataTypes);
db.Order = require('./order.model') (sequelize, DataTypes);
db.OrderDetail = require('./orderDetail.model') (sequelize, DataTypes);
db.Promotion = require('./promotion.model') (sequelize, DataTypes);
db.Category = require('./category.model') (sequelize, DataTypes);
db.Cart = require('./cart.model') (sequelize, DataTypes);

db.Category.hasMany(db.Product, {
    foreignKey: {
        name: "categoryId",
    },
    as: "products"
});
db.Product.belongsTo( db.Category, {
    foreignKey: {
        name: "categoryId",
    },
    as: "category"
});

db.Promotion.hasMany(db.Product, {
    foreignKey: {
        name: "promotionId",
    },
    as: "products"
});
db.Product.belongsTo(db.Promotion, {
    foreignKey: {
        name: "promotionId",
    },
    as: "promotion"
});

db.User.hasMany(db.Cart, {
    foreignKey: {
        name: "userId",
    },
    as: "carts"
});
db.Cart.belongsTo(db.User, {
    foreignKey: {
        name: "userId",
    },
    as: "user"
});

db.Product.hasMany( db.Cart, {
    foreignKey: {
        name: "productId",
    },
    as: "carts"
});
db.Cart.belongsTo( db.Product, {
    foreignKey: {
        name: "productId",
    },
    as: "product"
});

db.User.hasMany(db.Order, {
    foreignKey: {
        name: "userId",
    },
    as: "orders"
});
db.Order.belongsTo(db.User, {
    foreignKey: {
        name: "userId",
    },
    as: "user"
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

db.Product.hasMany( db.OrderDetail, {
    foreignKey: {
        name: "productId",
    },
    as: "orderDetails"
});
db.OrderDetail.belongsTo( db.Product, {
    foreignKey: {
        name: "productId",
    },
    as: "product"
});


db.User.sync();
db.Category.sync();
db.Promotion.sync();
db.Product.sync();
db.Cart.sync();
db.Order.sync();
db.OrderDetail.sync();

module.exports = db;