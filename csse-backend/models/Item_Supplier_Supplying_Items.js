const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Item_Supplier_Supplying_Items', {
    Item_Supplier_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    agreed_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Item_Supplier_Supplying_Items',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Item_Supplier_Supplying_Items_pk",
        unique: true,
        fields: [
          { name: "Item_Supplier_Id" },
          { name: "Item_No" },
        ]
      },
    ]
  });
};
