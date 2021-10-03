import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, Avatar, List, Tag } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";


const ApprovedRequisition = () => {

  const  history = useHistory();

  const [requests,setRequests] = useState([]);

  useEffect(() => {

    // if(username === null){
    //   history.push("/login")
    // }

    axios.get("http://localhost:8090/requisition/approved").then((res) => {
      setRequests(res.data.Goods_Recipts);
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

      {requests.map((request) => (
      <Card title="Requisition 001"
      extra={[ <Link to ={`view-requisition/${request.P_Order_Id}`}>
      <a key="list-loadmore-more">View</a></Link>]}>
        <p>Site: {request.Site.Site_Name}</p>
        <p>Site manager:  {request.Site_Manager.Name}</p>
        {/* {request.Item_No_Items_Purchase_Order_Items_Qties.map((item) => (
        <Card type="inner" title={item.Item_Name + ' X ' + item.Purchase_Order_Items_Qty.Total_Qty}
          extra={<Button onClick={ e => makeQuotaRequest(item.Item_No,request.P_Order_Id,null,null)} type="primary">Publish</Button>}
        >
            <Button onClick={ e => viewSuppliers(request.P_Order_Id,item.Item_No)} type="secondary">View Suppliers</Button>
        </Card>
        ))} */}
      </Card>
      ))}
    </div>
  );
};

export default ApprovedRequisition;
