import React, { useEffect, useState } from "react";
import { Space, Button, Card } from "antd";
import {useHistory,useParams} from "react-router-dom";
import axios from "axios";


const PaymentPage = () => {

  const  history = useHistory();
  const params = useParams();
  
  const sid = params.sid;
  const iid = params.iid;

  const [item,setItem] = useState();
  const [amount,setAmount] = useState();
  const [date,setDate] = useState();
  const [supplier,setSupplier] = useState();
  const [reciptNo,setRno] = useState();


  useEffect(() => {

    axios.get("http://localhost:8090/requisition/completed-orders/"+sid+'/'+iid).then((res) => {

        setItem(res.data.Order.Item_No_Items[0].Item_Name);
        setAmount(res.data.Order.Sub_Total);
        setRno(res.data.Order.Recipt_No);
        setDate(res.data.Order.Ordered_Date);
        setSupplier(res.data.other.Supplier.Name);

    }).catch((err) => {
      console.log(err);
    })
  },[]);

  const makePayment = () => {

      const payLoad = {
          recipt_ID: reciptNo,
          user_ID: 6,
          amount: amount
      }
    axios.put("http://localhost:8090/requisition/make-payment/"+sid+'/'+iid, payLoad).then((res) => {
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
      <p>Total amount: {amount}</p>
      <p>Supplier: {supplier}</p>
      <p>Ordered Date:  {date}</p>
            <Button onClick={makePayment} type="primary">Confirm the Payment </Button>
    
    </Card>
    </div>
  );
};

export default PaymentPage;
