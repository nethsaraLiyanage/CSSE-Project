const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Item_Supplier', {
    Item_Supplier_Id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    Request_Id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'Supplier_Apply_Quota_Request',
        key: 'Supplier_ID'
      }
    },
    Supplier_ID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'Supplier_Apply_Quota_Request',
        key: 'Supplier_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Item_Supplier',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Item_Supplier_pk",
        unique: true,
        fields: [
          { name: "Item_Supplier_Id" },
        ]
      },
    ]
  });
};
