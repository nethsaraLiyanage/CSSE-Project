import React, { useEffect, useState } from "react";
import { Space, Input, Button, Card, Table, List, Tag } from "antd";
import axios from "axios";
import { Link, useHistory,useParams } from "react-router-dom";
import AccountStaffHeader from "../Common/AccountStaffHeader";

const CompletedOrders = () => {

  const  history = useHistory();

  const [orders,setOrders] = useState([]);

  const columns = [
    {
      title: 'S_Order_Id',
      dataIndex: 'S_Order_Id',
      key: 'S_Order_Id',
    },
    {
      title: 'Total_Qty',
      dataIndex: 'Total_Qty',
      key: 'Total_Qty',
    },
    {
      title: 'Item',
      dataIndex: 'Item',
      key: 'Item',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
           <Link to={`payment/${record.S_Order_Id}/${record.itemId}`}>
          <Button>Pay</Button>
          </Link>
        </Space>
      ),
    },
  ];


  useEffect(() => {

    const user = localStorage.getItem('user_id');
    if(user === null){
      history.push("/");
    }

    axios.get("http://localhost:8090/requisition/completed-orders").then((res) => {
      const orders = res.data.Order;
      const data = [];
      orders.forEach(order => {
        const input = {
          S_Order_Id: order.S_Order_Id,
          Total_Qty: order.Total_Qty,
          Item: order.Item_No_Item.Item_Name,
          itemId: order.Item_No
        }
        data.push(input);
      });
      setOrders(data);
    }).catch((err) => {
      console.log(err);
    })
  },[]);


  return (
    <div>
      <AccountStaffHeader/>
      <Table columns={columns} dataSource={orders} />
    </div>
  );
};

export default CompletedOrders;
