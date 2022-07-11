module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define(
        "OrderDetail",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            quantity: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            timestamp: true,
        }
    );

    return OrderDetail;
}