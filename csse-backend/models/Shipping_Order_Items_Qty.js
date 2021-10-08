const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Shipping_Order_Items_Qty', {
    S_Order_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Shipping_Order',
        key: 'S_Order_Id'
      }
    },
    Item_No: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Items',
        key: 'Item_No'
      }
    },
    Remaining_Qty: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Total_Qty: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    payment_status: {
      type: DataTypes.CHAR(50),
      allowNull: true,
      defaultValue: "pending"
    }
  }, {
    sequelize,
    tableName: 'Shipping_Order_Items_Qty',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Shipping_Order_Items_Qty_pk",
        unique: true,
        fields: [
          { name: "S_Order_Id" },
          { name: "Item_No" },
        ]
      },
    ]
  });
};
