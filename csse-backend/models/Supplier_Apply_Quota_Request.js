const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Supplier_Apply_Quota_Request', {
    Request_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Supplier_ID: {
      type: DataTypes.INTEGER,
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
    },
    Additional_Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    No_Of_Deliveries: {
      type: DataTypes.INTEGER,
      allowNull: true
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
