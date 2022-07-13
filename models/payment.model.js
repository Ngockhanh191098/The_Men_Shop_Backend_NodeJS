module.exports = ( sequelize, DataTypes ) => {
    const Payment = sequelize.define(
        "Payment",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            paymentMethod: {
                type: DataTypes.STRING,
                allowNull: false
            },
            total: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        },
        {
            timestamp: true,
        }
    );
    return Payment;
}