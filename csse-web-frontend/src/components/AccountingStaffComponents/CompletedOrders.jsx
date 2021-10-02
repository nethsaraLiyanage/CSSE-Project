import React, { useEffect, useState } from "react";
import { Space, Input, Button, Card, Avatar, List, Tag } from "antd";
import axios from "axios";
import { Link } from "react-router-dom";

const CompletedOrders = () => {

  const [orders,setOrders] = useState([]);

  useEffect(() => {

    // if(username === null){
    //   history.push("/login")
    // }

    axios.get("http://localhost:8090/requisition/completed-orders").then((res) => {
      setOrders(res.data.CompletedOrders);
    }).catch((err) => {
      console.log(err);
    })
  },[]);


  return (
    <div>
      <Card title="Completed Orders">
      {orders.map((order) => (
        <Card
          type="inner"
          title={order.Item_No_Item.Item_Name}
          extra={
            <Link to={`payment/${order.S_Order_Id}/${order.Item_No}`}>
          <Button type="primary">Proceed to payment</Button>
          </Link>
        }
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
