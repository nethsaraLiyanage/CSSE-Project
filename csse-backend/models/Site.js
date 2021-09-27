const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Site', {
    Site_Id: {
      type: DataTypes.CHAR(5),
      allowNull: false,
      primaryKey: true
    },
    Site_Name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Location: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Address: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    Site_Manager_Id: {
      type: DataTypes.CHAR(5),
      allowNull: true,
      references: {
        model: 'GeneralUser',
        key: 'User_ID'
      }
    }
  }, {
    sequelize,
    tableName: 'Site',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "Site_pk",
        unique: true,
        fields: [
          { name: "Site_Id" },
        ]
      },
    ]
  });
};
