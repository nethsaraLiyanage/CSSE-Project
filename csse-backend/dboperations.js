const sql = require("mssql");
const dbConfig = require("./dbconfig");
const dotenv = require('dotenv');
require('dotenv/config');

async function getData(){

    const connection = await sql.connect(dbConfig, (err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('database connected');
        }
    });


    return connection
}

module.exports = {
    getConnection : getData()
}