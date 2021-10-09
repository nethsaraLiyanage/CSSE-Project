import React, { useEffect, useState } from "react";
import { Space, Input, Button, Card, Avatar, List, Tag } from "antd";
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";
import moment from "moment";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const ViewSupplierRequests = () => {

    const  history = useHistory();
    const params = useParams();
    const [requests,setRequests] = useState([]);

    const pID = params.poid;
    const ItemID = params.iid;

    useEffect(() => {

        axios.get("http://localhost:8090/requisition/supplier-request/"+pID+'/'+ItemID).then((res) => {
            setRequests(res.data.Request);
            console.log(res.data.Request)
        }).catch((err) => {
            console.log(err);
        })
    },[]);

    const placeOrder = (rID, supID, orderDate,quantity, price) => {
      const payload = {
        request_Id: rID,
        supplier: supID,
        order_date: null,
        requested_date:  null,
        p_order: pID,
        item: ItemID,
        quantity: quantity,
        price: price
    }
    console.log(payload);
        axios.post("http://localhost:8090/requisition/request/approve", payload).then((res) => {
          console.log(res.data.state);
          if(res.data.state == 201){
              toast.success("Order Placed Successfully");
            history.push('/placed-orders')
          }
        }).catch((err) => {
            console.log(err);
        })
    }

    const rejectRequest = (rID, supID) => {
        const payload = {
            request_Id: rID,
            supplier: supID,
        }
        console.log(payload);
        axios.put("http://localhost:8090/requisition/request/reject", payload).then((res) => {
            console.log(res.data.state);
            if(res.data.state == 200){
                alert("Request Rejected")
                window.location.reload();
            }
        }).catch((err) => {
            console.log(err);
        })
    }



  return (
    <div>
        <div style={{ marginTop: '10%', marginLeft: '40%' }}>
            { requests.length === 0 &&
            <h1>No suppliers yet</h1>
            }
        </div>
        {requests.map((request) => (
        <Card
          type="inner"
          title={request.Supplier.Name}
          extra={[<Button  disabled={request.status === 'approved'} onClick={ e => placeOrder(request.Request_Id,request.Supplier_ID,null,request.quantity, request.request_price)}
                           type="primary">Place Order</Button>, <Button onClick={ e => rejectRequest(request.Request_Id,request.Supplier_ID)} type="danger">Cancel</Button>]}
        >
            <Space>
            Deliver as :
            <Tag color="#87d068">{request.No_Of_Deliveries}</Tag>
            Units
          </Space>
          <p style={{ marginTop: 16 }}>{request.Additional_Description}</p>
        </Card>
        ))}
    </div>
  );
};

export default ViewSupplierRequests;
