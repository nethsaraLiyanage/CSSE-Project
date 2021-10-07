const express = require("express");
const sequelize = require("../sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
require("dotenv/config");

const router = express.Router({});

//Get all paid orders
router.get("/InventoryBySite/:id", async (req, res, _next) => {
  await models.Inventory.findAll({
    where: {
      Site_Id: req.params.id,
    }
  }).then((data) => {
    res.json({ data: data });
  });
});

module.exports = router;