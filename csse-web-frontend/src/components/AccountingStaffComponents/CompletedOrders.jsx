import React, { useEffect, useState } from "react";
import { Space, Input, Button, Card, Avatar, List, Tag } from "antd";

const CompletedOrders = () => {
  return (
    <div>
      <Card title="Completed Orders">
        <Card
          type="inner"
          title="Metal bars"
          extra={<Button type="primary">Proceed to payment</Button>}
        >
          <p>Site: Malabe</p>
          <p>Order date: 2021-11-11</p>
          <p>Supplier : supplier 001</p>
          <p>Order value : Rs 40 000.00</p>
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Cement"
          extra={<Button type="primary">Proceed to payment</Button>}
        >
          <p>Site: Malabe</p>
          <p>Order date: 2021-11-11</p>
          <p>Supplier : supplier 001</p>
          <p>Order value : Rs 40 000.00</p>
        </Card>
      </Card>
    </div>
  );
};

export default CompletedOrders;
