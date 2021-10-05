const express = require("express");
const sequelize = require("../sequelize");
const initModels = require("../models/init-models");
const models = initModels(sequelize);
require("dotenv/config");

const router = express.Router({});

router.get('/pending/:id',async (req,res)=>{
    const data = await models.Purchase_Order.findAll({
        where : {
            Site_Manager_Id : req.params.id,
            Status : 'Pending'
        }
    })

    if(data != null){
        res.status(200).send(data)
    }else{
        res.status(404).send("no data")
    }
})

router.get('/pending/order/:id',async (req,res)=>{
    const data = await models.Purchase_Order.findOne({
        where : {
            P_Order_Id : req.params.id
        },

        include : [
            {
                model : models.Purchase_Order_Items_Qty, as: 'Purchase_Order_Items_Qties',

                include : [
                    {
                        model : models.Items, as : 'Item_No_Item'
                    }
                ]
            }
        ]
    })

    if(data != null){
        res.status(200).send(data)
    }else{
        res.status(404).send("no data")
    }
})

router.get('/recipt/order/:id',async (req,res)=>{
    const data = await models.Purchase_Order.findOne({
        where : {
            P_Order_Id : req.params.id
        },
        attributes : ['P_Order_Id'],

        include : [
            {
                model : models.Shipping_Order, as: 'Shipping_Orders',
                attributes : ['S_Order_Id'],

                include : [
                    {
                        model : models.Goods_Recipt, as : 'Goods_Recipts',
                        attributes : ['Recipt_No','Delivery_Advice_Note','Ordered_Date','Status','Sub_Total'],

                        include : [
                            {
                                model : models.Item_Supplier, as : 'Item_Supplier',
                                

                                include : [
                                    {
                                        model : models.Supplier_Apply_Quota_Request, as : 'Request',
                                        attributes : ["request_price"],

                                        include : [
                                            {
                                                model : models.GeneralUser, as : 'Supplier',
                                                attributes : ['Name'],
                                                
                                            }
                                        ]
                                    }
                                ]
                            },

                            {
                                model : models.Goods_Recipt_Order_Items_Qty, as : 'Goods_Recipt_Order_Items_Qties'
                            }
                        ]
                    }
                ]
            }
        ]
    })

    if(data != null){
        var shippingOrders = data["Shipping_Orders"];
        var goodRecipts = [];
        for(i = 0; i < shippingOrders.length; i++){

            for(j = 0; j < shippingOrders[i]["Goods_Recipts"].length; j++){
                var itemNos = [];
                for(k = 0; k < shippingOrders[i]["Goods_Recipts"][j]["Goods_Recipt_Order_Items_Qties"].length; k++){
                    itemNos.push(shippingOrders[i]["Goods_Recipts"][j]["Goods_Recipt_Order_Items_Qties"][k]["Item_No"])
                }
                var sendData = {
                    "Recipt_No" : shippingOrders[i]["Goods_Recipts"][j]["Recipt_No"],
                    "Delivery_Advice_Note" : shippingOrders[i]["Goods_Recipts"][j]["Delivery_Advice_Note"],
                    "supplier_name" : shippingOrders[i]["Goods_Recipts"][j]["Item_Supplier"]["Request"]["Supplier"]["Name"],
                    "item_count" : shippingOrders[i]["Goods_Recipts"][j]["Goods_Recipt_Order_Items_Qties"].length,
                    "item_list" : itemNos,
                    "Ordered_Date" : shippingOrders[i]["Goods_Recipts"][j]["Ordered_Date"]
                }
                console.log(sendData);
                goodRecipts.push(sendData) 
            }

            
            
            //goodRecipts.push(shippingOrders[i]["Goods_Recipts"]) 
        }

        res.status(200).send(goodRecipts)
    }else{
        res.status(404).send("no data")
    }
})

router.get('/all/approved',async (req,res)=>{
    const data = await models.Purchase_Order.findAll({
        where : {
            Status : 'Approved'
        }
    })

    if(data != null){
        res.status(200).send(data)
    }else{
        res.status(404).send("no data")
    }
})

router.put("/accept/recipt", async (req, res, _next) => {
    console.log(req.body.Delivery_Mgr_Id);
    console.log(req.body.item_list);
    try {
        // log(req.body.Delivery_Mgr_Id);
        // log(req.body.Recipt_No);
      await models.Goods_Recipt.update(
          {Delivery_Mgr_Id: req.body.Delivery_Mgr_Id},
          {
            where: {
                Recipt_No: req.body.Recipt_No,
            }
          });

        
        for(i = 0; i < req.body.item_list.length; i++){
            const data = await sequelize.query('ApproveGoodsRecipt @GoodsReciptId=' + req.body.Recipt_No + ', @Item_No=' + req.body.item_list[i] + ';').then((result) =>{
                console.log(result);
            })

            console.log(data);
        }
         res.status(200).send("updated");
    }
    catch (e) {
      res.json({ errors: e });
    }
    
});

module.exports = router;