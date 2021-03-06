const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Payment', {
    Payment_Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Ammount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    S_OrderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Shipping_Order',
        key: 'S_Order_Id'
      }
    },
    Account_Staff_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'GeneralUser',
        key: 'User_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Payment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Payment_pk",
        unique: true,
        fields: [
          { name: "Payment_Id" },
        ]
      },
    ]
  });
};
