const dotenv = require('dotenv');
require('dotenv/config')

const dbConfig = {
    server: process.env.SERVERNAME,
    database: process.env.DATABASENAME,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    port: 1433,
    options: {
          encrypt: true
      }
   };

module.exports = dbConfig;