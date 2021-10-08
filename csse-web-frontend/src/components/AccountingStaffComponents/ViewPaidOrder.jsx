import React, { useEffect, useState } from "react";
import { Form, Col, Button, Card, DatePicker, List, Tag } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";
import AccountStaffHeader from "../Common/AccountStaffHeader";


const ViewPaidOrder = () => {

    const  history = useHistory();
    const params = useParams();

    const sid = params.sid;
    const iid = params.iid;

    const [site,setSite] = useState();
    const [item,setItem] = useState();
    const [quantity,setQuantity] = useState();
    const [date,setDate] = useState();
    const [amount,setAmount] = useState();
    const [supplier,setSupplier] = useState();


  

  useEffect( () => {

     axios.get("http://localhost:8090/requisition/paid-orders/"+sid+"/"+iid).then((res) => {

      setItem(res.data.Order.Item_No_Item.Item_Name);
      setSite(res.data.Order.S_Order.P_Order.Site.Site_Name);
      setDate(res.data.Order.S_OrderOrdered_Date);
      setAmount(res.data.Order.S_Order.P_Order.Sub_Total);
      setSupplier(res.data.Order.S_Order.Supplier.Name);
      setQuantity(res.data.Order.Total_Qty);

    }).catch((err) => {
      console.log(err);
    })
  },[]);


    return (
        <div>
            <AccountStaffHeader/>
    <div style={{marginLeft:'30%', marginTop: '10%', padding: '20px', width: '40%', border: '3px solid black'}}>
      <Card title={supplier}>

        <p>Item: {item}</p>
        <p>Quantity: {quantity} </p>
        <p>Order date: {date}</p>
        <p>Deliverd to :  {site}</p>
        <p>Paid Amount: Rs {amount}</p>

      </Card>
    </div>
        </div>
  );
};

export default ViewPaidOrder;
