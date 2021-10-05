const dotenv = require('dotenv');
require('dotenv/config')

const dbConfig = {
    server: process.env.SERVERNAME,
    database: process.env.DATABASENAME,
    user: 'mahendra-admin',
    password: process.env.PASSWORD,
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
      }
   };

module.exports = dbConfig;