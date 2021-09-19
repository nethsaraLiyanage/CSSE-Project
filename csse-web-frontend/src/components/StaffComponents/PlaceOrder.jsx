import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, Avatar, List, Tag } from "antd";

const PlaceOrder = () => {
  return (
    <div>
      <Card title="Requisition 001">
        <p>order: 100 metal bard</p>
        <Card
          type="inner"
          title="Supplier 001"
          extra={<Button type="primary">Place Order</Button>}
        >
          <p>Supplier note</p>
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Supplier 002"
          extra={<Button type="primary">Place Order</Button>}
        >
          <p>Supplier note</p>
       
        </Card>
      </Card>
    </div>
  );
};

export default PlaceOrder;
