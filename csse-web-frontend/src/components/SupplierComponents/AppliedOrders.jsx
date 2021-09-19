import React, { useEffect, useState } from "react";
import { Space, Input, Button, Card, Avatar, List, Tag } from "antd";

const AppliedOrders = () => {
  return (
    <div>
      <Card title="Applied Orders">
        <Card
          type="inner"
          title="100 Metal bars"
          extra={<Button type="danger">Cancel</Button>}
        >
          <p>Site:  Malabe</p>
          <p>Order date:  2021-11-11</p>
          <Space>
            Deliver as :
            <Tag color="#87d068">1</Tag>
            Units
          </Space>
          <p style={{ marginTop: 16 }}>Additional Information: demo</p>
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Supplier 002"
          extra={<Button type="danger">Cancel</Button>}
        >
         <p>Site:  Malabe</p>
          <p>Order date:  2021-11-11</p>
          <Space>
            Deliver as :
            <Tag color="#87d068">3</Tag>
            Units
          </Space>
          <p style={{ marginTop: 16 }}>Additional Information: demo</p>
        </Card>
      </Card>
    </div>
  );
};

export default AppliedOrders;
