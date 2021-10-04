import React, { Component } from 'react'
import { Space, Input, Button, Card, Avatar, List, Tag } from "antd";
import { Row, Col } from 'antd';


class AppliedOrders extends Component {
  constructor(props){
    super(props);
    this.state = {
        
    }
  }

  render() {
    return (
      <div>
      <Card title="Applied Orders">
        <Row>
          <Col span={12} style={{paddingRight:'20px'}}>
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
          </Col>
          <Col span={12} style={{paddingRight:'20px'}}>
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
          </Col>
        </Row>
        
      </Card>
    </div>
    )
  }
}

export default AppliedOrders
