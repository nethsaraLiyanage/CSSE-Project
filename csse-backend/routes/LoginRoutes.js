const express = require("express");
const sequelize = require("../sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
require("dotenv/config");

const router = express.Router({});

//get specific user with email and password
router.post('/', async (req, res, _next) => {
    console.log(req.body.password);
    const data = await models.GeneralUser.findOne({
        where : {
            Email : req.body.email,
            Password : req.body.password
        }
    });

    if(data != null){
        res.send(data)
    }else{
        res.status(404).json({state : 404, err : 'not found'})
    }
});

module.exports = router;