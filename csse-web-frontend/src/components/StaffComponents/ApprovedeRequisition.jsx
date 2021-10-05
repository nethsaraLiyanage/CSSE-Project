import React, { useEffect, useState } from "react";
import {Form, Input, Button, Card, Avatar, List, Tag, Space, Table} from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";


const ApprovedRequisition = () => {

  const  history = useHistory();

  const [requests,setRequests] = useState([]);

  const columns = [
    {
      title: 'Site',
      dataIndex: 'Site',
      key: 'Site',
    },
    {
      title: 'Manager',
      dataIndex: 'manager',
      key: 'manager',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
          <Space size="middle">
            <Link to={`view-requisition/${record.pid}`}>
              <Button>View</Button>
            </Link>
          </Space>
      ),
    },
  ];

  useEffect(() => {

    axios.get("http://localhost:8090/requisition/approved").then((res) => {
      const orders = res.data.Goods_Recipts;
      const data = [];
      orders.forEach(order => {
        const input = {
          Site: order.Site.Site_Name,
          manager: order.Site_Manager.Name,
          pid: order.P_Order_Id
        }
        data.push(input);
      });
      setRequests(data);
      // setRequests(res.data.Goods_Recipts);
    }).catch((err) => {
      console.log(err);
    })
  },[]);

  const makeQuotaRequest = (itemID,orderID, sDate, cDate) => {

    const user = 7;
    const payload = {
      item:itemID,
      order: orderID,
      start_data: sDate,
      closing_date: cDate,
      userID: user
    }
    axios.post("http://localhost:8090/requisition/request-quota",payload).then((res) => {
      console.log(res.data);
      if (res.data.state == 201){
        alert('Quota request posted!');
        isPosted(orderID,itemID);
      }
      else if (res.data.state == 200){
        alert('Quota request already exist!');
      }
      else{
        alert('Something went wrong');
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  const isPosted = (pid, iid) => {
    axios.get("http://localhost:8090/requisition/quota-request/"+pid+'/'+iid).then((res) => {
      if (res.data.state == 200){
        return true;
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  const viewSuppliers = (pid, iid) => {
    axios.get("http://localhost:8090/requisition/quota-request/"+pid+'/'+iid).then((res) => {
      if (res.data.state == 200){
        history.push('/place-order/'+pid)
      }
      else{
        alert('Something went wrong')
      }
    }).catch((err) => {
      console.log(err);
    })
  }

  return (
    <div>
      <Table columns={columns} dataSource={requests} />
    </div>
  );
};

export default ApprovedRequisition;
