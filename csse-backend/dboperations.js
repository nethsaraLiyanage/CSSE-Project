var sql = require("mssql");
const dbConfig = require("./dbconfig");

async function getData(){
    // try{
    //     await sql.connect(dbConfig);
    //     console.log("Connected to database");
    // }catch(err){
    //     console.log("DB Connection error : " , err);
    // }
    var Connection = require('tedious').Connection;  
    var config = {  
        server: 'mahendra-sql-server.database.windows.net',  //update me
        authentication: {
            type: 'default',
            options: {
                userName: 'mahendra-admin', //update me
                password: '1040SL*@M001'  //update me
            }
        },
        options: {
            // If you are on Microsoft Azure, you need encryption:
            encrypt: true,
            database: 'Procurement_System_DB'  //update me
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