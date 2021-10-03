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

module.exports = router;