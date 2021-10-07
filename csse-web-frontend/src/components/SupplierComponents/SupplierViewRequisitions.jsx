import React, { Component } from 'react'
import { Space , Input, Button, Card, InputNumber, List, Tag, message } from "antd";
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';
import { Typography} from 'antd';
import moment from "moment";

const { Text } = Typography;
const { TextArea } = Input;

class SupplierViewRequisitions extends Component {
  constructor(props){
    super(props);
    this.state = {
        supplierId:'6',
        quotas:[],
        No_Of_Deliveries:1,
        Additional_Description:'',
        quantity:1,
        request_price:''

    }
  }

  onNumberChange1 = (value) => {
    this.setState({No_Of_Deliveries : value})
    // console.log('changed1', value);
  }
  onNumberChange2 = (value) => {
    this.setState({quantity : value})
    // console.log('changed2', value);
  }
  handleChange = (e) =>{
    this.setState({[e.target.name]:e.target.value})
    console.log({[e.target.name]:e.target.value})
  }

  fetchQuotas = () =>{
      fetch('http://localhost:8090/supplier/quota-requests').then(res => res.json()).then(data =>{
        this.setState({quotas: data})
      //   console.log(data)
      }).catch(err =>{
        console.log(err);
      })
  }

  componentDidMount(){
      this.fetchQuotas()
  }

  handleSubmit = (item) => {

    const data = {
      No_Of_Deliveries: this.state.No_Of_Deliveries,
      Additional_Description: this.state.Additional_Description,
      quantity: item.P_Order.Total_Qty,
      request_price: this.state.request_price,
      supplier_ID: this.state.supplierId,
      Request_Id:item.Quota_Request_Id
    }
    console.log(data);

    fetch('http://localhost:8090/supplier/supplierApply',{
        method : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body : JSON.stringify(data)
    }).then(res => res.json()).then(data =>{
        console.log(data.state)

        if(data.state == 201){
            message.success('Successfully applied for the request!');
            setTimeout(() => {
              window.location.reload()
          }, 1000);
        }
            
    }).catch(err =>{
            console.log(err)
    })
  }

  render() {
    return (
      <div>
        <Card title="All Published Requests">

          <Row>

            {this.state.quotas.map(item => {
              return(
                <Col span={12} style={{paddingRight:'20px'}}>
                  <Card
                    type="inner"
                    title={item.P_Order.Total_Qty +" units from "+ item.P_Order.Item_No_Item.Item_Name}
                  >
                      <Row>
                        <Col span={12}>
                          <Text strong>Ordered date : </Text>
                          <Text type="success" style={{marginLeft:'10px'}}>{moment(item.Start_Date).format("YYYY-MM-DD")}</Text>
                        </Col>
                        <Col span={12}>
                          <Text strong>Closing date : </Text>
                          <Text type="warning" style={{marginLeft:'10px'}}>{moment(item.Closing_Date).format("YYYY-MM-DD")}</Text>
                        </Col>
                      </Row>
                      <br />
                      {/* <hr /> */}
                      <Row style={{marginTop:5}}>
                        <Col span={6}><Text strong>Deliver as : </Text></Col>
                        <Col>
                            <Row>
                              <InputNumber name='No_Of_Deliveries' 
                                min={1} 
                                max={item.P_Order.Total_Qty} 
                                defaultValue={1} 
                                style={{marginLeft:'20px'}} 
                                onChange={this.onNumberChange1}
                                rules={[
                                  {
                                    required: true,
                                    message: 'Please input your No Of Deliveries!',
                                  },
                                ]}
                              />
                              <p style={{marginLeft:'10px'}}>Units.</p>
                            </Row>
                        </Col>
                      </Row>
                      
                      <Row style={{marginTop:5}}>
                          <Col span={6}><Text strong>Your Price for a unit : </Text></Col>
                          <Col><Input name='request_price' 
                                  placeholder="Input only the number"  
                                  onChange={this.handleChange}
                                  rules={[
                                    {
                                      required: true,
                                      message: 'Please input your price!',
                                    },
                                  ]}
                                />
                          </Col>
                      </Row>
                      {/* <Row style={{marginTop:5}}>
                          <Col span={6}><Text strong>No of units you can provide : </Text></Col>
                          <Col><InputNumber name='quantity' min={1} max={item.P_Order.Total_Qty} defaultValue={1} style={{marginLeft:'20px'}} onChange={this.onNumberChange2}/></Col>
                      </Row> */}
                      <br />
                      <Text strong>Additional Informations : </Text>
                      <TextArea 
                        name='Additional_Description' 
                        style={{ marginTop: 16 }} 
                        placeholder="Additional informations" 
                        rows={4} 
                        onChange={this.handleChange}
                        rules={[
                          {
                            required: false,
                            message: 'Please input your No Of Deliveries!',
                          },
                        ]}
                      />
                      <br />
                      <Row style={{marginTop:10}}>
                        <br />
                          <Col span={16}></Col>
                          <Col span={6}><Button span={6} type="primary" block onClick={()=> this.handleSubmit(item)}>Apply</Button></Col>
                      </Row>
                  </Card>
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

export default SupplierViewRequisitions
