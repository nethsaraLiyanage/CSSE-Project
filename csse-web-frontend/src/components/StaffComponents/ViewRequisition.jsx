import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, DatePicker, List, Tag } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";
import StaffHeader from "../Common/StaffHeader";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();


const Viewequisition = () => {

    const  history = useHistory();
    const params = useParams();

    const rid = params.rid;
    const [site,setSite] = useState();
    const [items,setItems] = useState([]);
    const [manager,setManager] = useState();
    const [orderId,setOrderID] = useState();
    const [closingDate,setClosingDate] = useState();

  

  useEffect( () => {

     axios.get("http://localhost:8090/requisition/approved/"+rid).then((res) => {
        setSite(res.data.Request.Site.Site_Name);
        setItems(res.data.Request.Purchase_Order_Items_Qties);
        setManager(res.data.Request.Site_Manager.Name);
        setOrderID(res.data.Request.P_Order_Id);
    }).catch((err) => {
      console.log(err);
    })
  },[]);

  const makeQuotaRequest = (itemID,orderID) => {

    const userID = localStorage.getItem('user_id');
    const payload = {
      item:itemID,
      order: orderID,
      start_data: null,
      closing_date: setClosingDate,  //closingDate
      userID: userID
    }
    axios.post("http://localhost:8090/requisition/request-quota",payload).then((res) => {
      if (res.data.state == 201){
          toast.success("Quota request posted!");
        history.push('/all-quotas')
    
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

    function onDateSelected(date, dateString) {
        setClosingDate(dateString);
    }



    return (
    <div>
      <StaffHeader/>
      <Card title="Requisition Details">
        <p>Site: {site}</p>
        <p>Site manager:  {manager}</p>
        {items.map((item) => (
        <Card type="inner" title={item.Item_No_Item.Item_Name + ' X ' + item.Total_Qty}
          extra={<Button onClick={ e => makeQuotaRequest(item.Item_No,orderId,null)} type="primary">Publish</Button>}
        >
            Closing Date: <DatePicker onChange={onDateSelected} />
        </Card>
        ))}
      </Card>
      
    </div>
  );
};

export default Viewequisition;
