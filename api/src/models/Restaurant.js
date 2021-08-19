const { DataTypes } = require('sequelize');
// Defining model with function
// connecting with sequelize.


module.exports = (sequelize) => {
  sequelize.define('restaurant', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    restaurantPhoto: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
  });
};
