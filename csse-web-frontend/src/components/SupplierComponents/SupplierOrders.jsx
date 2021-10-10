import React, { Component } from "react";
import { Modal, Space, Button, Card, Avatar, List, Tag } from "antd";
import { Link } from "react-router-dom";
import { Row, Col } from 'antd';

class SupplierOrders extends Component {
  constructor(props){
    super(props);
    this.state = {
      supplierId:'6',
      myQuotas:[],
      selectedItem:{},
      sendMore:0,
      payment:{},
      visible:false
    }
  }

  fetchMyQuotas = () =>{
    fetch('http://localhost:8090/supplier/completed/'+this.state.supplierId).then(res => res.json()).then(data =>{
      this.setState({myQuotas: data})
    //   console.log(data)
    }).catch(err =>{
      console.log(err);
    })
  }

componentDidMount(){
    this.fetchMyQuotas()
}

  showModal = (id) => {
    fetch('http://localhost:8090/supplier/payment/'+id).then(res => res.json()).then(data =>{
      this.setState({payment: data})
    //   console.log(data)
    }).catch(err =>{
      console.log(err);
    })
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

        {this.state.myQuotas.map(item => {
          let color = 'yellow'
          let status =  item.Shipping_Order_Items_Qties[0].payment_status;
          let txt = 'Pending'
          let display = 'disable'
          if(status == 'approved'){
            color = '#87d068';
            txt = 'Approved';
            display = ''
          }
          return(
            <Col span={12} style={{paddingRight:'20px'}}>
            <Card 
              style={{ marginTop: 16 }} 
              type="inner" 
              title={item.Shipping_Order_Items_Qties[0].Total_Qty +" units from "+ item.Shipping_Order_Items_Qties[0].Item_No_Item.Item_Name}
            >
              {/* <p>Deliverd as {item.No_Of_Deliveries} unit(s).</p> */}
              <Space>
                Supply Status:
                <Tag color='green'>{item.Status}</Tag>
              </Space>
              <br />
              <Space style={{ marginTop: 16 }}>
                Payment:
                <Tag color={color}>{txt}</Tag>
                <Button type="secondary" disabled={display} onClick={()=> this.showModal(item.S_Order_Id)}>
                  View Payment Details
                </Button>
                <Modal
                  title="Payment"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <p>Payment ID : {this.state.payment.Payment_Id}</p>
                  <br />
                  <p>Paid Date : {this.state.payment.Date}</p>
                  <br />
                  <p>Paid Amount : Rs {this.state.payment.Ammount}.00</p>
                </Modal>
              </Space>
            </Card>
          </Col>

          )
        })}
        </Row>
        
      </Card>
    </div>
    )
  }
}

export default SupplierOrders
