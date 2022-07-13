module.exports = ( sequelize, DataTypes ) => {
    const Promotion = sequelize.define(
        "Promotion",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            promotion: {
                type: DataTypes.STRING,
                allowNull: false,
            }
        },
        {
            timestamp: true,
        }
    );

    return Promotion;
}