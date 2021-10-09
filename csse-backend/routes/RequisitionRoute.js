const express = require("express");
const sequelize = require("../sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
const moment = require("moment");
require("dotenv/config");
const _ = require("lodash");

const router = express.Router({});

//Get approved requisitions
router.get("/approved", async (req, res, _next) => {
  models.Purchase_Order.findAll({
    where: {
      status: "Approved",
    },
    include: [
      {
        model: models.Site,
        as: "Site",
      },
      {
        model: models.GeneralUser,
        as: "Site_Manager",
      },
      {
        model: models.Items,
        as: "Item_No_Items_Purchase_Order_Items_Qties",
      },
    ],
  }).then((data) => {
    res.json({ status: 200, Goods_Recipts: data });
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
        model: models.Site,
        as: "Site",
      },
      {
        model: models.GeneralUser,
        as: "Site_Manager",
      },
      {
        model: models.Purchase_Order_Items_Qty,
        as: "Purchase_Order_Items_Qties",
        where: {
          isPublished: 0,
        },
        include: [
          {
            model: models.Quota_Request,
            as: "Quota_Requests",
          },
          {
            model: models.Items,
            as: "Item_No_Item",
          },
        ],
      },
    ],
  }).then((data) => {
    res.json({ Request: data });
  });
});

//Post Quota request
router.post("/request-quota", async (req, res, _next) => {
  try {
    const isExist = await models.Quota_Request.findOne({
      where: {
        P_Order_Id: req.body.order,
        Item_No: req.body.item,
      },
    });

    if (isExist == null) {
      const quota = models.Quota_Request.build({
        P_Order_Id: req.body.order,
        Item_No: req.body.item,
        Start_Date: sequelize.fn("GETDATE"),
        Closing_Date: sequelize.fn("GETDATE"),
        Procument_Staff_ID: req.body.userID,
      });

      await quota.save().then((quota) => {
        res.json({ state: 201, Quota: quota });
      });

      await models.Purchase_Order_Items_Qty.update(
          { isPublished: true },
          {
            where: {
              P_Order_Id: req.body.order,
              Item_No: req.body.item,
            },
          }
      );

    } else {
      res.json({ state: 200, Quota: isExist });
    }
  } catch (e) {
    res.json({ errors: e });
  }
});

//Approve supplier request
router.post("/request/approve", async (req, res, _next) => {
  try {
    await models.Supplier_Apply_Quota_Request.update(
      { status: "approved" },
      {
        where: {
          Request_Id: req.body.request_Id,
          Supplier_ID: req.body.supplier,
        },
      }
    );

    const supplier_item = models.Item_Supplier.build({
      Request_Id: req.body.request_Id,
      Supplier_ID: req.body.supplier,
    });

    await supplier_item.save().then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
  });

    const shipping_order = models.Shipping_Order.build({
      Ordered_Date: sequelize.fn("GETDATE"),
      Status: "pending",
      Required_Date: req.body.requested_date,
      Sub_Total: req.body.price,
      P_Order_Id: req.body.p_order,
      Supplier_Id: req.body.supplier
    });

    await shipping_order.save().then(async (data) => {
      const shipping_order_qty = await models.Shipping_Order_Items_Qty.build({
        S_Order_Id: data.get({ plain: true }).S_Order_Id,
        Item_No: req.body.item,
        Remaining_Qty: req.body.quantity,
        Total_Qty: req.body.quantity,
      });
      await shipping_order_qty.save();

      res.json({ state: 201, message: "Order Placed Successfully" });
    });
  } catch (e) {
    res.json({ errors: e });
  }
});

//Reject supplier request
router.put("/request/reject", async (req, res, _next) => {
  try {
    await models.Supplier_Apply_Quota_Request.update(
      { status: "rejected" },
      {
        where: {
          Request_Id: req.body.request_Id,
          Supplier_ID: req.body.supplier,
        },
      }
    );
    res.json({ state: 200, message: "Request rejected" });
  } catch (e) {
    res.json({ errors: e });
  }
});

//Get all supplier requests for one quota request
router.get("/supplier-request/:pid/:iid", async (req, res, _next) => {
  models.Quota_Request.findOne({
    where: {
      P_Order_Id: req.params.pid,
      Item_No: req.params.iid,
    },
  }).then((data) => {
    const qid = data.get({ plain: true }).Quota_Request_Id;

    models.Supplier_Apply_Quota_Request.findAll({
      where: {
        Request_Id: qid,
        status: "pending",
      },
      include: [
        {
          model: models.GeneralUser,
          as: "Supplier",
        },
      ],
    }).then((data) => {
      res.json({ state: 200, Request: data });
    });
  });
});

//Get one quota request
router.get("/quota-request/:pid/:iid", async (req, res, _next) => {
  models.Quota_Request.findOne({
    where: {
      P_Order_Id: req.params.pid,
      Item_No: req.params.iid,
    },
  }).then((data) => {
    res.json({ state: 200, Request: data });
  });
});

//Get all quota requests
router.get("/quota-requests", async (req, res, _next) => {
  try{
  await models.Quota_Request.findAll({
    include: [
      {
        model: models.Purchase_Order_Items_Qty,
        as: "P_Order",
        where: {
          isPublished: true,
        },
        include: [
          {
            model: models.Items,
            as: "Item_No_Item",
          }, //returns item
          {
            model: models.Purchase_Order,
            as: "P_Order",
            include: [
              {
                model: models.Site,
                as: "Site",
              },
            ]
          },
        ],
      },
    ],
  }).then((data) => {
    const result =  _.uniqBy(data, e => { return e.Quota_Request_Id });
    res.json({ quotas: data });
  });
}
catch(e){
  res.json({ error: e });
}
});

//Get all completed orders
router.get("/completed-orders", async (req, res, _next) => {
  await models.Shipping_Order_Items_Qty.findAll({
    where: {
      payment_status: "pending",
      Remaining_Qty: 0,
    },
    include: [
      {
        model: models.Items,
        as: "Item_No_Item",
      },
      {
        model: models.Shipping_Order,
        as: "S_Order",
      },
    ],
  }).then((data) => {
    res.json({ Order: data });
  });
});

//Get one order
router.get("/completed-orders/:sid/:iid", async (req, res, _next) => {
  await models.Goods_Recipt.findOne({
    where: {
      S_Order_Id: req.params.sid,
    },
    include: [
      {
        model: models.Item_Supplier,
        as: "Item_Supplier",
      },
      {
        model: models.Items,
        as: "Item_No_Items",
      },
    ],
  }).then((data) => {
    const reqId = data.get({ plain: true }).Item_Supplier.Request_Id;

    models.Supplier_Apply_Quota_Request.findOne({
      where: {
        Request_Id: reqId,
      },
      include: [
        {
          model: models.GeneralUser,
          as: "Supplier",
        },
      ],
    }).then((other) => {
      res.json({ Order: data, other: other });
    });
  });
});

//Get all placed orders
router.get("/placed-orders", async (req, res, _next) => {
  await models.Shipping_Order_Items_Qty.findAll({
    include: [
      {
        model: models.Items,
        as: "Item_No_Item",
      },
      {
        model: models.Shipping_Order,
        as: "S_Order",
        include:[
          {
            model: models.GeneralUser,
            as: "Supplier",
          }
        ]
      },
    ],
  }).then((data) => {
    res.json({ Orders: data });
  });
});

//Get all paid orders
router.get("/paid-orders", async (req, res, _next) => {
  await models.Shipping_Order_Items_Qty.findAll({
    where: {
      payment_status: "completed",
    },
    include: [
      {
        model: models.Items,
        as: "Item_No_Item",
      },
      {
        model: models.Shipping_Order,
        as: "S_Order",
        include: [
          {
            model: models.GeneralUser,
            as: "Supplier",
          }
        ],
      },
    ],
  }).then((data) => {
    res.json({ orders: data });
  });
});

//Get one paid order
router.get("/paid-orders/:sid/:iid", async (req, res, _next) => {
  await models.Shipping_Order_Items_Qty.findOne({
    where: {
      S_Order_Id: req.params.sid,
      Item_No: req.params.iid
    },
    include: [
      {
        model: models.Shipping_Order,
        as: "S_Order",
        include: [
          {
            model: models.GeneralUser,
            as: "Supplier",
          },
          {
            model: models.Purchase_Order,
            as: "P_Order",
            include: [
              {
                model: models.Site,
                as: "Site",
              }
            ],
          }
        ],
      },
      {
        model: models.Items,
        as: "Item_No_Item",
      },
    ],
  }).then((data) => {
    res.json({ Order: data });
  });
});

//make payment for one completed order
router.put("/make-payment/:sid/:iid", async (req, res, _next) => {
  console.log(moment().format());
  const paymentSlip = await models.Payment.build({
    Date: sequelize.fn("GETDATE"),
    Amount: req.body.amount,
    S_OrderId: req.body.s_Id,
    Account_Staff_Id: req.body.user_ID,
  });

  await paymentSlip.save().then((data) => {
    const pid = data.get({ plain: true }).Payment_Id;

    const Invoice = models.Invoice.build({
      Issued_Date: sequelize.fn("GETDATE"),
      Approver_Name: null,
      Amount: req.body.amount,
      Invoice_Url: null,
      Payment_Id: pid,
    });

    Invoice.save();
  });

  await models.Shipping_Order_Items_Qty.update(
    { payment_status: "completed" },
    {
      where: {
        S_Order_Id: req.params.sid,
        Item_No: req.params.iid,
      },
    }
  ).then((data) => {
    res.json({ state: 200, payment: data });
  });
});

router.get("/my-request/:id", async (req, res, _next) => {
  try {
    const [results, metadata] = await sequelize.query(
      "SELECT * FROM Quota_Request FULL OUTER JOIN Supplier_Apply_Quota_Request ON Quota_Request.Quota_Request_Id = Supplier_Apply_Quota_Request.Request_Id FULL OUTER JOIN Items ON Quota_Request.Item_No = Items.Item_No  where Supplier_Apply_Quota_Request.Supplier_ID = " +
        req.params.id +
        ""
    );
    res.json({ state: 200, quotas: results });
  } catch (e) {
    res.json({ state: 400, quotas: e });
  }
});

module.exports = router;
