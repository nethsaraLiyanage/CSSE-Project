import React, { Component } from "react";
import { Modal, Space, Button, Card, Avatar, List, Tag } from "antd";
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';

class SupplierOrders extends Component {
  constructor(props){
    super(props);
    this.state = {
        visible:false
    }
  }

  showModal = () => {
    this.setState({visible:true})
  };

  handleOk = () => {
    this.setState({visible:false})
  };

  handleCancel = () => {
    this.setState({visible:false})
  };

  render() {
    return (
      <div>
      <Card title="My Orders">

        <Row>
          <Col span={12} style={{paddingRight:'20px'}}>
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
                <Button type="secondary" onClick={this.showModal}>
                  view
                </Button>
                <Modal
                  title="Payment"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <p>Item: 100 metal bars</p>
                  <p>Status: Completed</p>
                  <p>Payment: Rs 40000.00</p>
                </Modal>
              </Space>
            </Card>
          </Col>

          <Col span={12} style={{paddingRight:'20px'}}>
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
                <Button type="secondary" onClick={this.showModal}>
                  view
                </Button>
                <Modal
                  title="Payment"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <p>Item: 100 metal bars</p>
                  <p>Status: Completed</p>
                  <p>Payment: Rs 40000.00</p>
                </Modal>
              </Space>
            </Card>
          </Col>
        </Row>
        
      </Card>
    </div>
    )
  }
}

export default SupplierOrders
