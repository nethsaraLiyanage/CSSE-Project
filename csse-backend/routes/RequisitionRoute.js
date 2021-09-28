const express = require("express");
const DataTypes = require("sequelize/lib/data-types");
const sequelize = require("../sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
require("dotenv/config");

const router = express.Router({});

//Get approved requisitions
router.get("/approved", async (req, res, _next) => {
  models.Purchase_Order.findAll({
    where: {
      status: "Pending",
    },
    include: [
      {
        model: models.Purchase_Order_Items_Qty,
        as: "Purchase_Order_Items_Qties",
      },
    ],
  }).then((data) => {
    res.json({ Goods_Recipts: data });
  });
});

//Get one approved requisition
router.get("/approved/:id", async (req, res, _next) => {
  models.Purchase_Order.findOne({
    where: {
      P_Order_Id: req.params.id,
    },
    include: [
      {
        model: models.Purchase_Order_Items_Qty,
        as: "Purchase_Order_Items_Qties",
      },
    ],
  }).then((data) => {
    res.json({ Request: data });
  });
});

//Post Quota request
router.post("/request-quota", async (req, res, _next) => {
  const quota = models.Quota_Request.build({
    P_Order_Id: req.body.order,
    Item_No: req.body.item,
    Start_Date: req.body.start_date,
    Closing_Date: req.body.closing_date,
    Procument_Staff_ID: req.body.userID,
  });

  await quota.save().then((quota) => {
    res.json({ Quota: quota });
  });
});

//Approve supplier request
router.post("/request/approve", async (req, res, _next) => {
  try {
    const supplier_item = models.Item_Supplier.build({
      Request_Id: req.body.request_Id,
      Supplier_ID: req.body.supplier,
    });
    await supplier_item.save();

    const shipping_order = models.Shipping_Order.build({
      Ordered_Date: req.body.order_date,
      Status: "pending",
      Required_Date: req.body.requested_date,
      Sub_Total: req.body.total,
      P_Order_Id: req.body.p_order,
    });

    await shipping_order.save().then(async (data) => {
      const shipping_order_qty = await models.Shipping_Order_Items_Qty.build({
        S_Order_Id: data.get({ plain: true }).S_Order_Id,
        Item_No: req.body.item,
        Remaining_Qty: req.body.quantity,
        Total_Qty: req.body.quantity,
      });
      await shipping_order_qty.save();

      res.json({ message: "Order Placed Successfully" });
    });
  } catch (e) {
    res.json({ errors: e });
  }
});

//Get all supplier requests for one quota request
router.get("/supplier-request/:id", async (req, res, _next) => {
  models.Supplier_Apply_Quota_Request.findAll({
    where: {
      Request_Id: req.params.id,
    },
    include: [
      {
        model: models.GeneralUser,
        as: "Supplier",
      },
    ],
  }).then((data) => {
    res.json({ Request: data });
  });
});

//Get all quota requests
// router.get('/quota-request', async (req, res, _next) => {

//     await models.Quota_Request.findAll({
//         include: [{
//             model:models.Purchase_Order_Items_Qty, as: 'Item_No_Purchase_Order_Items_Qty',
//         }],
//     }).then( data => {

//         res.json({id :data});
//     })

// });

//Get all completed orders
router.get("/completed-orders", async (req, res, _next) => {
  await models.Shipping_Order_Items_Qty.findAll({
    where: {
      paymentStatus: "Pending",
    },
    include: [
      {
        model: models.Items,
        as: "Item_No_Item",
      },
    ],
  }).then((data) => {
    res.json({ CompletedOrders: data });
  });
});

//Get one order
router.get("/completed-orders/:sid/:iid", async (req, res, _next) => {
  await models.Shipping_Order_Items_Qty.findOne({
    where: {
      S_Order_Id: req.params.sid,
      Item_No: req.params.iid,
    },
    include: [
      {
        model: models.Items,
        as: "Item_No_Item",
      },
    ],
  }).then((data) => {
    res.json({ Order: data });
  });
});

//Get all paid orders
router.get("/completed-orders", async (req, res, _next) => {
    await models.Shipping_Order_Items_Qty.findAll({
      where: {
        paymentStatus: "completed",
      },
      include: [
        {
          model: models.Items,
          as: "Item_No_Item",
        },
      ],
    }).then((data) => {
      res.json({ CompletedOrders: data });
    });
  });


//make payment for one completed order
router.put("/make-payment/:sid/:iid", async (req, res, _next) => {
  await models.Shipping_Order_Items_Qty.update(
    { paymentStatus: "completed" },
    {
      where: {
        S_Order_Id: req.params.sid,
        Item_No: req.params.iid,
      },
    }
  ).then((data) => {
    res.json({ payment: data });
  });
});

module.exports = router;
