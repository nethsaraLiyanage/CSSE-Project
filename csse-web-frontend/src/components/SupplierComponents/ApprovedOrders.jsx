import React, { Component } from 'react'
import { Space, Input, Button, Card, Avatar, List, Tag, Badge, Modal} from "antd";
import { Row, Col } from 'antd';
import { Typography} from 'antd';
import moment from "moment";

const { Text } = Typography;

class ApprovedOrders extends Component {
    constructor(props){
        super(props);
        this.state = {
          supplierId:'6',
          myQuotas:[],
          selectedItem:{},
          sendMore:0,
          visible:false
        }
      }
    
      fetchMyQuotas = () =>{
        fetch('http://localhost:8090/supplier/approvedApplyies/'+this.state.supplierId).then(res => res.json()).then(data =>{
          this.setState({myQuotas: data})
        //   console.log(data)
        }).catch(err =>{
          console.log(err);
        })
      }
    
    componentDidMount(){
        this.fetchMyQuotas()
    }
    
    showModal = (item) => {
      this.setState({
        visible:true,
        selectedItem:item,
        sendMore:item.Shipping_Order_Items_Qties[0].Remaining_Qty
      })
      console.log(item)
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
                <Card title="My Approved Orders">
                    <Row>
                        {this.state.myQuotas.map(item => {
                        let color = 'yellow';
                        let status = 'Pending';
                        let disableStatus = ''
                        if(item.status == "pending"){
                            color = 'yellow';
                            status = 'Pending';
                            disableStatus = 'disable'
                        }else if(item.status == "panding"){
                            color = 'yellow';
                            status = 'Pending';
                            disableStatus = 'disable'
                        }else if(item.status == "approved"){
                            color = 'green';
                            status = 'Approved'
                        }else if(item.status == "rejected"){
                            color = 'red';
                            status = 'Rejected';
                            disableStatus = 'disable'
                        }
                        let sendMore = item.Shipping_Order_Items_Qties[0].Remaining_Qty;
                        return(
                            <Col span={12} style={{paddingRight:'20px'}}>
                            {/* <Badge.Ribbon text={status} color={color}> */}
                                <Card
                                type="inner"
                                title={item.Shipping_Order_Items_Qties[0].Total_Qty +" units from "+ item.Shipping_Order_Items_Qties[0].Item_No_Item.Item_Name}
                                >
                                    
                                    {/* <Row style={{marginTop:5}}>
                                        <Col span={6}><Text strong>Deliver as : </Text></Col>
                                        <Col>
                                            <Row>
                                                <p>{item.No_Of_Deliveries} deliveries.</p>
                                            </Row>
                                        </Col>
                                    </Row> */}
                                    
                                    <Row style={{marginTop:5}}>
                                        <Col span={6}><Text strong>Your Price for a unit : </Text></Col>
                                        <Col><p>{item.Sub_Total}/= per unit</p></Col>
                                    </Row>
                                    <Row style={{marginTop:5}}>
                                        <Col span={6}><Text strong>You have to send </Text></Col>
                                        <Col><p><Tag color="#87d068">{sendMore}</Tag> units.</p></Col>
                                    </Row>
                                    <br />
                                    {/* <Text strong>Additional Informations you provided: </Text>
                                    <p>{item.Additional_Description}</p> */}
                                    <Row style={{marginTop:10}}>
                                        <br />
                                        <Col span={16}></Col>
                                        <Col span={6}><Button span={6}  type="primary" block onClick={() => this.showModal(item)}>Send a unit</Button></Col>
                                    </Row>
                                </Card>
                            {/* </Badge.Ribbon> */}
                            <br /><br />
                            </Col>
                        )
                        })}
                    </Row>
                    
                </Card>

                <Modal
                    title="Send a unit"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Row style={{marginTop:5}}>
                    <Col span={6}><Text strong>You have to send </Text></Col>
                    <Col><p><Tag color="#87d068">{this.state.sendMore}</Tag> more Unit(s).</p></Col>
                    </Row>


                    
                </Modal>
            </div>
        )
    }
}

export default ApprovedOrders
