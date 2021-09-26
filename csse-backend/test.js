const express = require('express')
const app = express()
var Request = require('tedious').Request
var TYPES = require('tedious').TYPES;
const sql = require('mssql')
require('dotenv/config');
const dboperations = require('./dboperations')

const router = express.Router({});

//retrive data
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


//insert data
router.post('/', async (req, res, _next) => {

    const ps = new sql.PreparedStatement();
    ps.input('id',sql.VarChar(5))
    ps.input('name',sql.VarChar(10))
    ps.input('pass',sql.VarChar(10))
    ps.input('email',sql.VarChar(20))
    ps.input('type',sql.VarChar(20))

    ps.prepare('insert into GeneralUser values(@id,@name,@pass,@email,@type);', err =>{
        if(err) {
            console.log(err);
        }

        ps.execute({id:'U0003',name:'Nethsara',pass:'nethsara',email:'nethsara@test.com',type:'Site Manager'},(err, result) =>{
            if(err){
                console.log(err);
            }
    
            ps.unprepare(err =>{
                if(err){
                    console.log(err);
                }
            })
        })
    })

    
});

module.exports = router;


