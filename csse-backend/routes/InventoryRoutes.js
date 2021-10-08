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

//Add new Item to inventory
router.post("/addItem", async (req, res, _next) => {
  console.log('Inside addItem');
  try {

    const Inventory = models.Inventory.build({
      Site_Id: req.body.selected_Site_Id,
      Item_No: req.body.item_No,
      Threshold: req.body.threshold,
      Remaining_Qty: 0,
    });
    await Inventory.save()
    .then((data)=>{
      res.json({status:200});
    })
    .catch((err) => {
      console.log('Error adding item : ' , err);
      res.status = 400;
      res.json({status:400, error:err});
    })
  } catch (err) {
    res.json({ error: err });
  }
});

module.exports = router;