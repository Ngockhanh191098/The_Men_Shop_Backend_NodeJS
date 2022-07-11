module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define(
        "Order",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isIn: ["Pending", "Checked out"]
                }
            }
        },
        {
            timestamp: true,
        }
    );

    return Order;
}