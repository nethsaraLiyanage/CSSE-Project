const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Items', {
    Item_No: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Item_Name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    Description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    Estimated_Unit_Price: {
      type: DataTypes.FLOAT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Items',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Items_pk",
        unique: true,
        fields: [
          { name: "Item_No" },
        ]
      },
    ]
  });
};
