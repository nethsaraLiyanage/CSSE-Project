import React, { Component } from 'react'
import { Space, Input, Button, Card, Avatar, List, Tag, Badge} from "antd";
import { Row, Col } from 'antd';
import { Typography} from 'antd';
import moment from "moment";

const { Text } = Typography;

class AppliedOrders extends Component {
  constructor(props){
    super(props);
    this.state = {
      supplierId:'6',
      myQuotas:[]
    }
  }

  fetchMyQuotas = () =>{
    fetch('http://localhost:8090/supplier/applied/'+this.state.supplierId).then(res => res.json()).then(data =>{
      this.setState({myQuotas: data})
    //   console.log(data)
    }).catch(err =>{
      console.log(err);
    })
}

componentDidMount(){
    this.fetchMyQuotas()
}
  render() {
    return (
      <div>
      <Card title="Applied Orders">
      <Row>
        {this.state.myQuotas.map(item => {
          let color = 'yellow';
          let status = 'Pending'
          if(item.status == "pending"){
            color = 'yellow';
            status = 'Pending'
          }else if(item.status == "panding"){
            color = 'yellow';
            status = 'Pending'
          }else if(item.status == "approved"){
            color = 'green';
            status = 'Approved'
          }else if(item.status == "rejected"){
            color = 'red';
            status = 'Rejected'
          }
          return(
            <Col span={12} style={{paddingRight:'20px'}}>
              <Badge.Ribbon text={status} color={color}>
                <Card
                  type="inner"
                  title={item.Item_No +" units from "+ item.Item_Name}
                >
                    
                    <Row style={{marginTop:5}}>
                      <Col span={6}><Text strong>Deliver as : </Text></Col>
                      <Col>
                          <Row>
                            <p>{item.No_Of_Deliveries} Units at a time.</p>
                          </Row>
                      </Col>
                    </Row>
                    
                    <Row style={{marginTop:5}}>
                        <Col span={6}><Text strong>Your Price for a unit : </Text></Col>
                        <Col><p>{item.request_price}/= per unit</p></Col>
                    </Row>
                    <Row style={{marginTop:5}}>
                        <Col span={6}><Text strong>No of units you approved : </Text></Col>
                        <Col><p><Tag color="#87d068">{item.quantity}</Tag></p></Col>
                    </Row>
                    <br />
                    <Text strong>Additional Informations you provided: </Text>
                    <p>{item.Additional_Description}</p>
                    
                </Card>
              </Badge.Ribbon>
              <br /><br />
            </Col>
          )
        })}
        </Row>
        
      </Card>
    </div>
    )
  }
}

export default AppliedOrders
