const express = require('express')
var DataTypes = require('sequelize/lib/data-types');
var sequelize = require('../sequelize');
require('dotenv/config');

var GeneralUser = require("../models/GeneralUser")(sequelize, DataTypes);


const router = express.Router({});

//retrive data
router.get('/', async (req, res, _next) => {

    GeneralUser.findAll().then( data => {
        res.json({Users:data});
    })
  

});


module.exports = router;


