const express = require('express')
const app = express()
var Request = require('tedious').Request
var TYPES = require('tedious').TYPES;
const sql = require('mssql');
var GeneralUser = require("./models/GeneralUser");
var DataTypes = require('sequelize/lib/data-types');
var sequelize = require('./sequelize');
var Goods_Recipt = require("./models/Goods_Recipt")(sequelize, DataTypes);
require('dotenv/config');
const dboperations = require('./dboperations')

const router = express.Router({});

//retrive data
router.get('/', async (req, res, _next) => {

    Goods_Recipt.findAll().then( data => {
        res.json({Users:data});
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


