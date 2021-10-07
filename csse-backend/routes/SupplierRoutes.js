const express = require("express");
const sequelize = require("../sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
require("dotenv/config");

const router = express.Router({});

//Get all quota requests
router.get('/quota-requests', async (req, res, _next) => {

  await models.Quota_Request.findAll({
      include: [{
          model:models.Purchase_Order_Items_Qty, as: 'P_Order',
        include: [
          {
            model: models.Items, as: 'Item_No_Item'
          }
        ]
      }]
  }).then( data => {
      res.json(data);
  })

});

//Get all quota requests
router.get("/pending-quotas", async (req, res, _next) => {
  const [results, metadata] = await sequelize.query("SELECT * FROM Quota_Request WHERE P_Order_Id NOT IN  (SELECT P_Order_Id FROM Shipping_Order)");
  res.json({ state:200, quotas: results });
});

//Get all applied requests for a supplier
router.get("/applied/:id", async (req, res, _next) => {
  try{
  const [results, metadata] = await sequelize.query("SELECT * FROM Quota_Request FULL OUTER JOIN Supplier_Apply_Quota_Request ON Quota_Request.Quota_Request_Id = Supplier_Apply_Quota_Request.Request_Id FULL OUTER JOIN Items ON Quota_Request.Item_No = Items.Item_No  where Supplier_Apply_Quota_Request.Supplier_ID = "+req.params.id+"" );
  res.json(results);
  }
  catch(e){
    res.json({ state:400, quotas: e });
  }
});

//Get all applied requests for a supplier which are approved
router.get("/approvedApplyies/:id", async (req, res, _next) => {
  try{
  const [results, metadata] = await sequelize.query("SELECT * FROM Quota_Request FULL OUTER JOIN Supplier_Apply_Quota_Request ON Quota_Request.Quota_Request_Id = Supplier_Apply_Quota_Request.Request_Id FULL OUTER JOIN Items ON Quota_Request.Item_No = Items.Item_No  where Supplier_Apply_Quota_Request.Supplier_ID = "+req.params.id+" and Supplier_Apply_Quota_Request.status = 'approved'" );
  res.json(results);
  }
  catch(e){
    res.json({ state:400, quotas: e });
  }
});

//Post supplier Apply
router.post("/supplierApply", async (req, res, _next) => {
  try {
    
      const supplier_apply = models.Supplier_Apply_Quota_Request.build({
        No_Of_Deliveries: req.body.No_Of_Deliveries,
        Additional_Description: req.body.Additional_Description,
        quantity: req.body.quantity,
        request_price: req.body.request_price,
        Supplier_ID: req.body.supplier_ID,
        Request_Id: req.body.Request_Id,
        status: "pending"
      });

      // console.log('called', supplier_apply )

      await supplier_apply.save().then((supplier_apply) => {
        res.json({state: 201});
      });
  }
  catch (e) {
    res.json({errors: e});
  }
});

//Get all applied requests for a supplier which are approved
// router.get('/approvedApplyies/:id', async (req, res, _next) => {

//   await models.Shipping_Order.findAll({
//     where: {
//       Supplier_Id : req.params.id
//     },
//       include: [{
//           model:models.Shipping_Order_Items_Qty, as: 'Shipping_Order_Items_Qties',
//         include: [
//           {
//             model: models.Items, as: 'Item_No_Item'
//           }
//         ]
//       }]
//   }).then( data => {
//       res.json(data);
//   })

// });

module.exports = router;