import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, Avatar, List, Tag } from "antd";
import { Link } from "react-router-dom";

const ApprovedRequisition = () => {
  return (
    <div>
      <Card title="Requisition 001">
        <p>Site: Malabe</p>
        <p>Site manager: John Doe</p>
        <p>Date: 2021-10-10</p>
        <Card
          type="inner"
          title="100 Metal bars"
          extra={<Button type="primary">Publish</Button>}
        >
          <Link to="/place-order">
            <Button type="secondary">View Suppliers</Button>
          </Link>
        </Card>
        <Card
          style={{ marginTop: 16 }}
          type="inner"
          title="Cement"
          extra={<Button type="primary">Publish</Button>}
        >
          <Link to="/place-order">
            <Button type="secondary">View Suppliers</Button>
          </Link>
        </Card>
      </Card>
    </div>
  );
};

export default ApprovedRequisition;
