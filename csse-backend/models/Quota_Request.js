const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Quota_Request', {
    Quota_Request_Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Item_No: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Purchase_Order_Items_Qty',
        key: 'P_Order_Id'
      }
    },
    P_Order_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Purchase_Order_Items_Qty',
        key: 'P_Order_Id'
      }
    },
    Start_Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Closing_Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Procument_Staff_ID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GeneralUser',
        key: 'User_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Quota_Request',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Quota_Request_pk",
        unique: true,
        fields: [
          { name: "Quota_Request_Id" },
        ]
      },
    ]
  });
};
