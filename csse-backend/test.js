const express = require('express')
const app = express()
var Request = require('tedious').Request
var TYPES = require('tedious').TYPES;
const sql = require('mssql')
require('dotenv/config');
const dboperations = require('./dboperations')

const router = express.Router({});


router.get('/', async (req, res, _next) => {

    const request = new sql.Request()
    request.stream = true;
    request.query('select * from dbo.GeneralUser;')


    const data = []; 

    request.on('row',row =>{
        data.push(row)
        console.log(row);
    })

    request.on('done', () =>{
        res.send(data)
    })
    
});

module.exports = router;


