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
            model:models.Purchase_Order_Items_Qty, as: 'Purchase_Order_Items_Qties'
        }],
    }).then( data => {
        res.json({Goods_Recipts :data});
    })

});

//Post Quota request
router.post('/', async (req, res, _next) => {

        const quota = models.Quota_Request.build({
            P_Order_Id: req.body.order,
            Item_No: req.body.item,
            Start_Date: req.body.start_date,
            Closing_Date: req.body.closing_date,
            Procument_Staff_ID: req.body.userID
        })

        await quota.save().then(quota => {
            res.json({Quota :quota});
        })
});

router.put('/', async (req, res, _next) => {

    models.Purchase_Order_Items_Qty.findOne({
        where: {
            P_Order_Id: 'PO001',
            Item_No: 'I0001'
        }
    }).then(data => {


    });

});


module.exports = router;


