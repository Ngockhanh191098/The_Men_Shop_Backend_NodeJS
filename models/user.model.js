
module.exports = ( sequelize, DataTypes ) => {
    const User = sequelize.define(
        "User",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            fullName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [3,30],  
                }
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [3,30],  
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isEmail: true
                }
            },
            hash_pwd: {
                type: DataTypes.STRING,
                allowNull: false
            },
            avatar: {
                type: DataTypes.STRING,
                allowNull: false
            },
            iam_role: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            timestamp: true,
        }
    );

    return User;
}