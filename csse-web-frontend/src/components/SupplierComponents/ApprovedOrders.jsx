import React, { Component } from 'react'
import { Typography, Input, Button, Card, Row, Col, Tag, notification, Modal , Form, InputNumber} from "antd";
import axios from "axios";

const { Text , Title} = Typography;

class ApprovedOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supplierId: '6',
            myQuotas: [],
            selectedItem: {},
            sendMore: 0,
            visible: false,
            innerItemDetail:{},
            ReciptItems: 1,
            deliveryNote: '',
            totalValue: 0,
            deliveryLogItemNo: 0,
        }
    }

    

    fetchMyQuotas = () => {
        fetch('http://localhost:8090/supplier/approvedApplyies/' + this.state.supplierId).then(res => res.json()).then(data => {
            this.setState({ myQuotas: data })
            //   console.log(data)
        }).catch(err => {
            console.log(err);
        })
    }

    componentDidMount() {
        this.fetchMyQuotas()
    }

    showModal = (item) => {
        this.setState({
            visible: true,
            selectedItem: item,
            sendMore: item.Shipping_Order_Items_Qties[0].Remaining_Qty,
            innerItemDetail: item.Shipping_Order_Items_Qties[0].Item_No_Item,
            deliveryLogItemNo : item.Shipping_Order_Items_Qties[0].Item_No
        })
        console.log('item is : ' , item)
    };

    handleOk = () => {
        const data = {
            Delivery_Advice_Note : this.state.deliveryNote,
            Status: "Pending",
            Sub_Total: this.state.totalValue,
            S_Order_Id : this.state.selectedItem.S_Order_Id,
            Item_No : this.state.deliveryLogItemNo,
            ItemCount: this.state.ReciptItems
        }
        const url = "http://localhost:8090/goodsRecipt/createGoodsRecipt";
            axios.post(url, data).then((res) => {
                if(res.data.message === "ok"){
                    notification['success']({
                        message: 'Successfully Created the delivery log!',
                        duration:10,
                        description:
                          'Please check the delivery logs tab to view delivery logs.',
                      });
                      this.setState({ visible: false })
                      setTimeout(function(){ 
                          window.location.replace('/supplier');
                         } , 1000);
                    
                }
                else{
                    alert("Something went wrong");
                }
            })
        
    };

    handleCancel = () => {
        this.setState({ visible: false })
    };

    handleItemCountChange = (e) =>{
        this.setState({ReciptItems:e.target.value});
        let total = Number(this.state.selectedItem.Sub_Total) * Number(e.target.value);
        this.setState({totalValue:total});
        console.log('val tar : ' , this.state.ReciptItems)
    }

    handleDeliveryNoteChange = (e) =>{
        this.setState({deliveryNote:e.target.value});
        console.log('val tar : ' , this.state.deliveryNote)
    }

    render() {
        const layout = {
            labelCol: {
              span: 8,
            },
            wrapperCol: {
              span: 16,
            },
          };


          const onFinish = (values) => {
            console.log(values);
          };

        return (
            <div>
                <Card title="My Approved Orders">
                    <Row>
                        {this.state.myQuotas.map(item => {
                            let color = 'yellow';
                            let status = 'Pending';
                            let disableStatus = ''
                            if (item.status == "pending") {
                                color = 'yellow';
                                status = 'Pending';
                                disableStatus = 'disable'
                            } else if (item.status == "panding") {
                                color = 'yellow';
                                status = 'Pending';
                                disableStatus = 'disable'
                            } else if (item.status == "approved") {
                                color = 'green';
                                status = 'Approved'
                            } else if (item.status == "rejected") {
                                color = 'red';
                                status = 'Rejected';
                                disableStatus = 'disable'
                            }
                            let sendMore = item.Shipping_Order_Items_Qties[0].Remaining_Qty;
                            let display = ""

                            if(sendMore == 0){

                                display = 'disable'

                            }
                            return (
                                <Col span={12} style={{ paddingRight: '20px' }}>
                                    {/* <Badge.Ribbon text={status} color={color}> */}
                                    <Card
                                        type="inner"
                                        title={item.Shipping_Order_Items_Qties[0].Total_Qty + " units from " + item.Shipping_Order_Items_Qties[0].Item_No_Item.Item_Name}
                                    >

                                        {/* <Row style={{marginTop:5}}>
                                        <Col span={6}><Text strong>Deliver as : </Text></Col>
                                        <Col>
                                            <Row>
                                                <p>{item.No_Of_Deliveries} deliveries.</p>
                                            </Row>
                                        </Col>
                                    </Row> */}

                                        <Row style={{ marginTop: 5 }}>
                                            <Col span={6}><Text strong>Your Price for a unit : </Text></Col>
                                            <Col><p>{item.Sub_Total}/= per unit</p></Col>
                                        </Row>
                                        <Row style={{ marginTop: 5 }}>
                                            <Col span={6}><Text strong>You have to send </Text></Col>
                                            <Col><p><Tag color="#87d068">{sendMore}</Tag> units.</p></Col>
                                        </Row>
                                        <br />
                                        {/* <Text strong>Additional Informations you provided: </Text>
                                    <p>{item.Additional_Description}</p> */}
                                        <Row style={{ marginTop: 10 }}>
                                            <br />
                                            <Col span={16}></Col>
                                            <Col span={6}><Button span={6} type="primary" disabled={display} block onClick={() => this.showModal(item)}>Send a unit</Button></Col>
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
                    okText="Create Delivery Log"
                >
                    <Row style={{ marginTop: 5 }}>
                        <Col span={8} offset={1}><Text strong>You have to send : </Text></Col>
                        <Col><p><Tag color="#87d068">{this.state.sendMore}</Tag> more Unit(s).</p></Col>
                    </Row>

                    <Row style={{ marginTop: 5 }}>
                        <Col span={8} offset={1}><Text strong>Item Contained :</Text></Col>
                        <Col><p><Tag color="#87d068">{this.state.innerItemDetail.Item_Name}</Tag></p></Col>
                    </Row>

                    <Form {...layout} name="nest-messages" onFinish={onFinish}>
                        <Form.Item name={['log', 'note']} label="Delivery Advice Note" onChange={e => this.handleDeliveryNoteChange(e)}>
                            <Input.TextArea />
                        </Form.Item>
                        <Form.Item name={['log', 'No_of_Items']} label="No Of Items" 
                        rules={[{ type: 'number', min: 0}]}
                        onChange={e => this.handleItemCountChange(e)}>
                            <InputNumber />
                        </Form.Item>
                    </Form>

                    <Row style={{ marginTop: 5 }}>
                        <Col span={16} offset={1}><Text strong>Total Value of Goods Recipt Items:</Text></Col>
                        <Col><Title level={5}>{Number(this.state.totalValue)}.00 Rs</Title></Col>
                    </Row>
                </Modal>
            </div>
        )
    }
}

export default ApprovedOrders
