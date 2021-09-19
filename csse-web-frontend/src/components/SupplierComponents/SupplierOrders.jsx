import React, { useEffect, useState } from "react";
import { Modal, Space, Button, Card, Avatar, List, Tag } from "antd";
import { Link } from "react-router-dom";

const SupplierOrders = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div>
      <Card title="My Orders">
        <Card type="inner" title="100 Metal bars">
          <p>Site: Malabe</p>
          <Space>
            Status:
            <Tag color="#87d068">Completed</Tag>
          </Space>
          <br />
          <Space style={{ marginTop: 16 }}>
            Payment:
            <Tag color="#108ee9">Pending</Tag>
          </Space>
        </Card>
        <Card style={{ marginTop: 16 }} type="inner" title="Cement">
          {" "}
          <p>Site: Malabe</p>
          <Space>
            Status:
            <Tag color="#87d068">Completed</Tag>
          </Space>
          <br />
          <Space style={{ marginTop: 16 }}>
            Payment:
            <Tag color="#108ee9">Completed</Tag>
            <Button type="secondary" onClick={showModal}>
              view
            </Button>
            <Modal
              title="Payment"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <p>Item: 100 metal bars</p>
              <p>Status: Completed</p>
              <p>Payment: Rs 40000.00</p>
            </Modal>
          </Space>
        </Card>
      </Card>
    </div>
  );
};

export default SupplierOrders;
