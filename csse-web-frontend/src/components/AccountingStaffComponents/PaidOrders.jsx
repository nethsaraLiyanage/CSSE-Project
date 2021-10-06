import React, { useEffect, useState } from "react";
import { Space, Input, Button, Card, Avatar, List, Tag } from "antd";
import axios from "axios";

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
    <Card title="Paid Orders">
    {orders.map((order) => (
      <Card
        type="inner"
        title={order.Name}
      >
        <p>Order ID: {order.S_Order_Id}</p>
        <p>Payment Status : {order.payment_status} </p>

      </Card>
     ))}
    </Card>
  </div>
  );
};

export default CompletedOrders;
