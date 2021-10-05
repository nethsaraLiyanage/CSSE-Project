const express = require("express");
const sequelize = require("../sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
require("dotenv/config");

const router = express.Router({});

router.post("/login", async (req, res) => {
    try {
      let email = req.body.email;
      let password = req.body.password;
      const user = await models.GeneralUser.findOne({
        where: {
            Email: email,
            Password: password
          },
      });
      if (user) {
        res.json({ status: 200, user: user});
      } else {
        res.json({ status: 404, message: "Login failed" });
      }
    } catch (err) {
      res.json({ error: err });
    }
  });

module.exports = router;