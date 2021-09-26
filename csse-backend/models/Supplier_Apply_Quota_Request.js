const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Supplier_Apply_Quota_Request', {
    Request_Id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    Supplier_ID: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'GeneralUser',
        key: 'User_ID'
      }
    },
    request_price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Supplier_Apply_Quota_Request',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Supplier_Apply_Quota_Request_pk",
        unique: true,
        fields: [
          { name: "Request_Id" },
          { name: "Supplier_ID" },
        ]
      },
    ]
  });
};
