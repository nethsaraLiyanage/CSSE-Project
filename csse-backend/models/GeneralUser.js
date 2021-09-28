const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('GeneralUser', {
    User_ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    Email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    Type: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'GeneralUser',
    schema: 'dbo',
    timestamps: false,
    indexes: [
      {
        name: "GeneralUser_pk",
        unique: true,
        fields: [
          { name: "User_ID" },
        ]
      },
    ]
  });
};
