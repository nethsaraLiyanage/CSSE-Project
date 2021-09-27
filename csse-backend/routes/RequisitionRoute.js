const express = require('express')
const DataTypes = require('sequelize/lib/data-types');
const sequelize = require('../sequelize');
const initModels = require("../models/init-models");
const models = initModels(sequelize);
require('dotenv/config');

const router = express.Router({});

//get approved requisitions
router.get('/', async (req, res, _next) => {

    models.Purchase_Order.findAll({
        where: {
            status: 'Pending'
        },
        include: [{
            model:Purchase_Order_Items_Qty, as: 'Purchase_Order_Items_Qties'
        }],
    }).then( data => {
        res.json({Goods_Recipts :data});
    })

});


module.exports = router;


