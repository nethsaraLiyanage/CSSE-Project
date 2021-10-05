const express = require('express')
var DataTypes = require('sequelize/lib/data-types');
var sequelize = require('../sequelize');
const initModels = require("../models/init-models");
const models = initModels(sequelize);
require('dotenv/config');

const router = express.Router({});

//Get Sites By Site Manager
router.get("/getSiteByManagerId/:id", async (req, res, _next) => {
    await models.GeneralUser.findAll({
      where: {
        User_ID: req.params.id,
      },
      include: [
        {
          model: models.Site,
          as: "Sites",
        }
      ],
    }).then((data) => {
      res.json({ data: data });
    });
  });

module.exports = router;