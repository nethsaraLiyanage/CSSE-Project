const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Payment', {
    Payment_Id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    Date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Ammount: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    Recipt_No: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'Goods_Recipt',
        key: 'Recipt_No'
      }
    },
    Account_Staff_Id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'GeneralUser',
        key: 'User_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Payment',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Payment_pk",
        unique: true,
        fields: [
          { name: "Payment_Id" },
        ]
      },
    ]
  });
};
