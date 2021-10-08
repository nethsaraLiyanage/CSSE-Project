const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Invoice', {
    Invoice_Id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Issued_Date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Approver_Name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    Ammount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Invoice_Url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Payment_Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Payment',
        key: 'Payment_Id'
      }
    }
  }, {
    sequelize,
    tableName: 'Invoice',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Invoice_pk",
        unique: true,
        fields: [
          { name: "Invoice_Id" },
        ]
      },
    ]
  });
};
