var sql = require("mssql");
const dbConfig = require("./dbconfig");
const dotenv = require('dotenv');
require('dotenv/config');

async function getData(){
    // try{
    //     await sql.connect(dbConfig);
    //     console.log("Connected to database");
    // }catch(err){
    //     console.log("DB Connection error : " , err);
    // }
    var Connection = require('tedious').Connection;  
    var config = {  
        server: process.env.SERVERNAME,  //update me
        authentication: {
            type: 'default',
            options: {
                userName: process.env.USERNAME, //update me
                password: process.env.PASSWORD  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: process.env.DATABASENAME  //update me
        }
    };  
    var connection = new Connection(config);  
    connection.on('connect', function(err) {  
        // If no error, then good to proceed.
        console.log("Connected");  
    });
    
    connection.connect();
}

module.exports = {
    getConnection : getData()
}