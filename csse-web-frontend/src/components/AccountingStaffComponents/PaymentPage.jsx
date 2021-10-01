import React, { useEffect, useState } from "react";
import { Space, Input, Button, Card, Avatar, List, Tag } from "antd";
import {useHistory,useParams} from "react-router-dom";
import axios from "axios";


const PaymentPage = () => {

  const  history = useHistory();
  const params = useParams();
  
  const sid = params.sid;
  const iid = params.iid;

  const [item,setItem] = useState([]);


  useEffect(() => {

    // if(username === null){
    //   history.push("/login")
    // }

    axios.get("http://localhost:8090/requisition/completed-orders/"+sid+'/'+iid).then((res) => {
      setItem(res.data.Order.Item_No_Item.Item_Name);
    }).catch((err) => {
      console.log(err);
    })
  },[]);

  const makePayment = () => {
    axios.put("http://localhost:8090/requisition/make-payment/"+sid+'/'+iid).then((res) => {
      if(res.data.state == 200){
        alert("Payment successful!");
        history.push("/paid-orders")
      }
      else{
        alert('Something went wrong');
      }
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <div>
   <Card 
   style={{ width: 600, marginTop:'10%', marginLeft:'30%'}}
   type="inner"
   title={item}>
      <p>Site: Malabe</p>
      <p>Total amount: Rs 40 000.00</p>
      <p>Supplier: supplier 001</p>
      <p>Status:  Approved</p>
            <Button onClick={makePayment} type="primary">Confirm the Payment </Button>
    
    </Card>
    </div>
  );
};

export default PaymentPage;
