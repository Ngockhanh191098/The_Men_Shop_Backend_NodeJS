module.exports = ( sequelize, DataTypes ) => {
    const Fruit = sequelize.define(
        "Fruit",
        {
            id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            mass: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            image: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price: {
                type: DataTypes.STRING,
                allowNull: false
            },
            origin: {
                type: DataTypes.STRING,
                allowNull: false
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
        },
        {
            timestamp: true,
        }
    );

    return Fruit;
}