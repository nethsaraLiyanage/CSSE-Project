import React, { useEffect, useState } from "react";
import { Space, Input, Button, Card, Avatar, List, Tag } from "antd";

const PaymentPage = () => {
  return (
    <div>
   <Card 
   style={{ width: 600, marginTop:'10%', marginLeft:'30%'}}
   type="inner"
   title="100 metal bars">
      <p>Site: Malabe</p>
      <p>Total amount: Rs 40 000.00</p>
      <p>Supplier: supplier 001</p>
      <p>Status:  Approved</p>
            <Button type="primary">Confirm the Payment </Button>
    
    </Card>
    </div>
  );
};

export default PaymentPage;
