import React, { useEffect, useState } from "react";
import { Space , Input, Button, Card, InputNumber, List, Tag } from "antd";
import { Link } from "react-router-dom";

const SupplierViewRequisitions = () => {

    const { TextArea } = Input;

  return (
    <div>
      <Card title="Published request">
        <Card
          type="inner"
          title="100 Metal bars"
          extra={<Link to="/applied-orders"><Button type="primary">Apply</Button></Link>}
        >
          <p>Site: Malabe</p>
          <p>Order date: 2021-11-11</p>
          <Space>
          <p>Deliver as: </p>
          <InputNumber min={1} max={10} defaultValue={1} />
          <p>Units</p>
          </Space>
          <TextArea  style={{ marginTop: 16 }} placeholder="Additional informations" rows={4} />

        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Cement"
          extra={<Button type="primary">Apply</Button>}
        >
         <p>Site: Malabe</p>
          <p>Order date: 2021-11-11</p>
          <Space>
          <p>Deliver as: </p>
          <InputNumber min={1} max={10} defaultValue={1} />
          <p>Units</p>
          </Space>
          <TextArea  style={{ marginTop: 16 }} placeholder="Additional informations" rows={4} />
       
        </Card>
      </Card>
    </div>
  );
};

export default SupplierViewRequisitions;
