import React, { useEffect, useState } from "react";
import { Input, Button, Card, Avatar, List, Tag } from "antd";
import axios from "axios";
import {Link, useHistory} from "react-router-dom";
import AccountStaffHeader from "../Common/AccountStaffHeader";

const CompletedOrders = () => {

  const [orders,setOrders] = useState([]);

  useEffect(() => {



    axios.get("http://localhost:8090/requisition/paid-orders").then((res) => {
      setOrders(res.data.orders);
    }).catch((err) => {
      console.log(err);
    })
  },[]);

  return (
    <div>
      <AccountStaffHeader/>
    <Card title="Paid Orders">
    {orders.map((order) => (
      <Card
        type="inner"
        title={order.S_Order.Supplier.Name}
      >
        <p>Order ID: {order.S_Order_Id}</p>
        <p>Payment Status : {order.payment_status} </p>

      <Link to = {`paid-orders/${order.S_Order_Id}/${order.Item_No}`}>
        <Button  type="secondary">View</Button>
        </Link>

      </Card>
     ))}
    </Card>
  </div>
  );
};

export default CompletedOrders;
