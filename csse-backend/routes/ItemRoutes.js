const express = require("express");
const sequelize = require("../sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
require("dotenv/config");

const router = express.Router({});

//Get approved items
router.get("/allItems", async (req, res, _next) => {
    models.Items.findAll().then((data) => {
      res.json(data);
    });
});

//Get all paid orders
router.get("/ItemsBySite/:id", async (req, res, _next) => {
  await models.Site.findOne({
    where: {
      Site_Id: req.params.id,
    },
    include: [
      {
        model: models.Inventory,
        as: "Inventories",
        include:[
          {
            model: models.Items,
            as: "Item_No_Item"
          }
        ]
      },
    ],
  }).then((data) => {
    res.json({ status: 200 , data: data });
  });
});

module.exports = router;