import React, { Component } from 'react'
import { Space , Input, Button, Card, InputNumber, List, Tag } from "antd";
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';

const { TextArea } = Input;

class SupplierViewRequisitions extends Component {
  render() {
    return (
      <div>
        <Card title="Published request">

          <Row>
            <Col span={12} style={{paddingRight:'20px'}}>
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
              
            </Col>

            <Col span={12}>
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
              
            </Col>
          </Row>
        </Card>
      </div>
    )
  }
}

export default SupplierViewRequisitions
