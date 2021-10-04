const express = require("express");
const sequelize = require("../sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
require("dotenv/config");

const router = express.Router({});

//Get requisitions above 100000
router.get("/allRequests", async (req, res, _next) => {
    models.Quota_Request.findAll({
      include:[
        {
          model: models.Items, as: "Purchase_Order_Items_Qties",
        }, 
      ],
    }).then((data) => {
        // console.log(data)
        res.json({ pendingRequisitions: data });
    });
});


module.exports = router;