const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {
    sequelize.define('reservation', {
        customerName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tableNumber: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        }
    });
};