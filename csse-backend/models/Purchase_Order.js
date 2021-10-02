const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Purchase_Order', {
    P_Order_Id: {
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
    Site_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Site',
        key: 'Site_Id'
      }
    },
    Site_Manager_Id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'GeneralUser',
        key: 'User_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Purchase_Order',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Purchase_Order_pk",
        unique: true,
        fields: [
          { name: "P_Order_Id" },
        ]
      },
    ]
  });
};
