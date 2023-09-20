// models/invoice.ts
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Invoice", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    totalCost: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    paymentMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    productInfo: {
      type: DataTypes.STRING,
    },
    invoiceNumber: {
      type: DataTypes.STRING,
    },
    customerInfo: {
      type: DataTypes.STRING,
    },
    paymentDetails: {
      type: DataTypes.STRING,
    },
    taxes: {
      type: DataTypes.DECIMAL(10, 2),
    },
    discounts: {
      type: DataTypes.DECIMAL(10, 2),
    },
    dueDate: {
      type: DataTypes.DATE,
    },
    notes: {
      type: DataTypes.TEXT,
    },
    currency: {
      type: DataTypes.STRING,
    },
    paymentStatus: {
      type: DataTypes.STRING,
    },
    attachedFile: {
      type: DataTypes.STRING,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
