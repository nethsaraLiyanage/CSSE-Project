const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Shipping_Order', {
    S_Order_Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Ordered_Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Required_Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Sub_Total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    P_Order_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Purchase_Order',
        key: 'P_Order_Id'
      }
    },
    Supplier_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GeneralUser',
        key: 'User_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Shipping_Order',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Shipping_Order_pk",
        unique: true,
        fields: [
          { name: "S_Order_Id" },
        ]
      },
    ]
  });
};
