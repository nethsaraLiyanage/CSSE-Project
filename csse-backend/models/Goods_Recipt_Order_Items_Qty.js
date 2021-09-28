const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Goods_Recipt_Order_Items_Qty', {
    Recipt_No: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Goods_Recipt',
        key: 'Recipt_No'
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
    }
  }, {
    sequelize,
    tableName: 'Goods_Recipt_Order_Items_Qty',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Goods_Recipt_Order_Items_Qty_pk",
        unique: true,
        fields: [
          { name: "Recipt_No" },
          { name: "Item_No" },
        ]
      },
    ]
  });
};
