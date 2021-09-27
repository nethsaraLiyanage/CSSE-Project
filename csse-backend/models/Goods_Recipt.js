const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Goods_Recipt', {
    Recipt_No: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    Delivery_Advice_Note: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Ordered_Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Delivery_Date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Sub_Total: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    S_Order_Id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'Shipping_Order',
        key: 'S_Order_Id'
      }
    },
    Item_Supplier_Id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      references: {
        model: 'Item_Supplier',
        key: 'Item_Supplier_Id'
      }
    },
    Delivery_Mgr_Id: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      references: {
        model: 'GeneralUser',
        key: 'User_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Goods_Recipt',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Goods_Recipt_pk",
        unique: true,
        fields: [
          { name: "Recipt_No" },
        ]
      },
    ]
  });
};
