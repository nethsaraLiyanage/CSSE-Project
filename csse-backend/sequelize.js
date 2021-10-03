const dotenv = require('dotenv');
const { Sequelize } = require('sequelize');

require('dotenv/config');



//initialize sequlize
const sequelize = new Sequelize(process.env.DATABASENAME, 'mahendra-admin', process.env.PASSWORD, {
    host: process.env.SERVERNAME,
    dialect: 'mssql',
    dialectOptions: { 
      options: {
        encrypt: true,
      }
    }
})

try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


module.exports = sequelize;
