// models/shoppingCart.js
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ShoppingCart", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    customerId: {
      type: DataTypes.UUID, // Cambia el tipo de dato según tus necesidades
      allowNull: false,
    },
    productId: {
      type: DataTypes.UUID, // Cambia el tipo de dato según tus necesidades
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
