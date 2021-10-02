const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Inventory', {
    Site_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Site',
        key: 'Site_Id'
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
      allowNull: false
    },
    Threshold: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Inventory',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Inventory_pk",
        unique: true,
        fields: [
          { name: "Site_Id" },
          { name: "Item_No" },
        ]
      },
    ]
  });
};
