const { PERMISSION_ADMIN, PERMISSION_MEMBER } = require('../config/permission.config')

module.exports = (sequelize, DataTypes) => {
    const Account = sequelize.define(
        "Account",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            iam_role: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isIn: [PERMISSION_ADMIN,PERMISSION_MEMBER]
                }
            },
            emailCode: {
                type: DataTypes.INTEGER,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            hash_pwd: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            timestamp: true,
        }
    );

    return Account;
}