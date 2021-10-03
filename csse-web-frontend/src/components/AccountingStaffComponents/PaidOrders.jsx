import React, { useEffect, useState } from "react";
import { Space, Input, Button, Card, Avatar, List, Tag } from "antd";
import axios from "axios";

const CompletedOrders = () => {

  const [orders,setOrders] = useState([]);

  useEffect(() => {

    // if(username === null){
    //   history.push("/login")
    // }

    axios.get("http://localhost:8090/requisition/paid-orders").then((res) => {
      setOrders(res.data.paidOrders);
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
        title={order.Item_No_Item.Item_Name}
      >
        <p>Site: Malabe</p>
        <p>Order date: 2021-11-11</p>
        <p>Supplier : </p>
        <p>Order value : Rs 40 000.00</p>

      </Card>
     ))}
    </Card>
  </div>
  );
};

export default CompletedOrders;
