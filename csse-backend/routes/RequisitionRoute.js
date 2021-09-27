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
router.post('/request-quota', async (req, res, _next) => {

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

//Approve supplier request
router.post('/request/approve', async (req, res, _next) => {

 try {
     const supplier_item = models.Item_Supplier.build({
         Request_Id: req.body.request_Id,
         Supplier_ID: req.body.supplier,
     });
     await supplier_item.save();

     const shipping_order = models.Shipping_Order.build({
         Ordered_Date: req.body.order_date,
         Status: 'pending',
         Required_Date: req.body.requested_date,
         Sub_Total: req.body.total,
         P_Order_Id: req.body.p_order
     });

     await shipping_order.save().then(async data => {
         const shipping_order_qty =  await models.Shipping_Order_Items_Qty.build({
             S_Order_Id: data.get({plain:true}).S_Order_Id,
             Item_No: req.body.item,
             Remaining_Qty: req.body.quantity,
             Total_Qty: req.body.quantity,
         });
         await shipping_order_qty.save();

         res.json({message: 'Order Placed Successfully'});
     })
 }
 catch (e) {
     res.json({errors: e});
 }
});


module.exports = router;


