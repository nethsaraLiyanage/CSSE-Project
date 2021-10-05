const express = require("express");
const sequelize = require("../sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
require("dotenv/config");

const router = express.Router({});

//line manager login

//Get requisitions above 100000
router.get("/above", async (req, res, _next) => {
    models.Purchase_Order.findAll({
      where: {
        status: "Pending",
      },
      include:[
        {
          model: models.Purchase_Order_Items_Qty, as: "Purchase_Order_Items_Qties",
          include:[
            {
                model: models.Items, as: "Item_No_Item",
            }
          ]
        }, 
      ],
    }).then((data) => {
        // console.log(data)
        res.json({ pendingRequisitions: data });
    });
});

//Get single requisition
router.get('/single/:id', async (req, res, _next) => {
  models.Purchase_Order.findOne({
    where: {
      P_Order_Id: req.params.id,
    },
    include:[
      {
        model: models.Purchase_Order_Items_Qty, as: "Purchase_Order_Items_Qties",
        include:[
          {
              model: models.Items, as: "Item_No_Item",
          }
        ]
      }, 
    ],
  }).then((data) => {
      // console.log(data)
      res.json(data);
  });
});

//Approve supplier request
router.put("/request/accept/:id", async (req, res, _next) => {

    try {
      await models.Purchase_Order.update(
          {Status: 'Approved'},
          {
            where: {
                P_Order_Id: req.params.id,
            }
          });
         res.json({ state: 200, message: 'Requisition Approved' });
    }
    catch (e) {
      res.json({ errors: e });
    }
    
});

//Reject supplier request
router.put("/request/reject/:id", async (req, res, _next) => {

  try {
    await models.Purchase_Order.update(
        {Status: 'Rejected'},
        {
          where: {
              P_Order_Id: req.params.id,
          }
        });
       res.json({ state: 200, message: 'Requisition Rejeted' });
  }
  catch (e) {
    res.json({ errors: e });
  }
  
  
});

//Get approved
router.get("/approved", async (req, res, _next) => {
  models.Purchase_Order.findAll({
    where: {
      status: "Approved",
    },
    include:[
      {
        model: models.Purchase_Order_Items_Qty, as: "Purchase_Order_Items_Qties",
        include:[
          {
              model: models.Items, as: "Item_No_Item",
          }
        ]
      }, 
    ],
  }).then((data) => {
      // console.log(data)
      res.json({ pendingRequisitions: data });
  });
});


//Get rejected requisitions
router.get("/approved", async (req, res, _next) => {
  models.Purchase_Order.findAll({
    where: {
      status: "Rejected",
    },
    include:[
      {
        model: models.Purchase_Order_Items_Qty, as: "Purchase_Order_Items_Qties",
        include:[
          {
              model: models.Items, as: "Item_No_Item",
          }
        ]
      }, 
    ],
  }).then((data) => {
      // console.log(data)
      res.json({ pendingRequisitions: data });
  });
});

module.exports = router;