import React, { useEffect, useState } from "react";
import { Space, Input, Button, Card, Avatar, List, Tag } from "antd";

const PlaceOrder = () => {
  return (
    <div>
      <Card title="Requisition 001">
        <p>order: 100 metal bars</p>
        <Card
          type="inner"
          title="Supplier 001"
          extra={[<Button  disabled={0 == 0} type="primary">Place Order</Button>, <Button disabled={0 !== 0} type="danger">Cancel</Button>]}
        >
            <Space>
            Deliver as :
            <Tag color="#87d068">1</Tag>
            Units
          </Space>
          <p style={{ marginTop: 16 }}>Supplier note</p>
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Supplier 002"
          extra={[<Button  disabled={0 !== 0} type="primary">Place Order</Button>, <Button disabled={0 == 0} type="danger">Cancel</Button>]}
        >
            <Space>
            Deliver as :
            <Tag color="#87d068">2</Tag>
            Units
          </Space>
          <p style={{ marginTop: 16 }}>Supplier note</p>
       
        </Card>
      </Card>
    </div>
  );
};

export default PlaceOrder;
