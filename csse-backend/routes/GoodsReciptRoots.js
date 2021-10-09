const express = require("express");
const sequelize = require("../sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
require("dotenv/config");

const router = express.Router({});

//Add new Purchase order
router.post("/createGoodsRecipt", async (req, res, _next) => {
    console.log('Inside Create GoodsRecipt');
    try {
      const Goods_Recipt = models.Goods_Recipt.build({
        Delivery_Advice_Note: req.body.Status,
        Ordered_Date: sequelize.fn("GETDATE"),
        Status: req.body.Status,
        Sub_Total: req.body.Sub_Total,
        S_Order_Id: req.body.S_Order_Id,
        Item_Supplier_Id: 44,
      });
      await Goods_Recipt.save()
      .then(async(data)=>{
          console.log('Data is : ' , data)
        let selectedItem = req.body.Item_No;
          if(selectedItem != null){
              let Goods_Recipt_Order_Items_Qty = models.Goods_Recipt_Order_Items_Qty.build({
                Recipt_No: data.Recipt_No,
                Item_No: req.body.Item_No,
                Remaining_Qty: req.body.ItemCount == null ? 12 : req.body.ItemCount,
                Total_Qty: req.body.ItemCount == null ? 12 : req.body.ItemCount,
              });
              await Goods_Recipt_Order_Items_Qty.save()
              .then(()=>{
                console.log('Items Entry Created');
                res.json({status:200 , message:"ok"});
              })
              .catch((err) => {
                console.log('Error in saving Items : ' , err);
                res.json({status:400, error:err});
              })
            
          }
      })
      .catch((err) => {
        console.log('Error in saving Goods recipt : ' , err);
        res.status = 400;
        res.json({status:400, error:err});
      })
    } catch (err) {
      res.json({ error: err });
    }
  });

  module.exports = router;