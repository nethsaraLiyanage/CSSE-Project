const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Purchase_Order_Items_Qty', {
    P_Order_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Purchase_Order',
        key: 'P_Order_Id'
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
    paymentStatus: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: "Pending"
    },
    isPublished: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'Purchase_Order_Items_Qty',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Purchase_Order_Items_Qty_pk",
        unique: true,
        fields: [
          { name: "P_Order_Id" },
          { name: "Item_No" },
        ]
      },
    ]
  });
};
