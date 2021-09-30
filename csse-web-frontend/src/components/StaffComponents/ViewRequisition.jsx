import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, Avatar, List, Tag } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";


const Viewequisition = () => {

    const  history = useHistory();
    const params = useParams();

    const rid = params.rid;
    const [site,setSite] = useState();
    const [items,setItems] = useState([]);
    const [manager,setManager] = useState();
    const [orderId,setOrderID] = useState();

  

  useEffect( () => {

    // if(username === null){
    //   history.push("/login")
    // }

     axios.get("http://localhost:8090/requisition/approved/"+rid).then((res) => {
        setSite(res.data.Request.Site.Site_Name);
        setItems(res.data.Request.Item_No_Items_Purchase_Order_Items_Qties);
        setManager(res.data.Request.Site_Manager.Name);
        setOrderID(res.data.Request.P_Order_Id);
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

  const viewSuppliers = (pid, iid) => {
    axios.get("http://localhost:8090/requisition/quota-request/"+pid+'/'+iid).then((res) => {
      if (res.data.state == 200){
        history.push('/place-order/'+pid+'/'+iid)
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
      <Card title="Requisition 001">
        <p>Site: {site}</p>
        <p>Site manager:  {manager}</p>
        {items.map((item) => (
        <Card type="inner" title={item.Item_Name + ' X ' + item.Purchase_Order_Items_Qty.Total_Qty}
          extra={<Button onClick={ e => makeQuotaRequest(item.Item_No,orderId,null,null)} type="primary">Publish</Button>}
        >
            <Button onClick={ e => viewSuppliers(orderId,item.Item_No)} type="secondary">View Suppliers</Button>
        </Card>
        ))}
      </Card>
      
    </div>
  );
};

export default Viewequisition;
