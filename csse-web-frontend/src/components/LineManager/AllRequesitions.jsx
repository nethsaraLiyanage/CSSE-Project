import React, { Component } from 'react'
import { Table, Tag, Space, Button, Popconfirm, Modal, message } from 'antd';
import { List, Avatar } from 'antd';
import { Typography } from 'antd';

const { Title} = Typography;

class AllRequesitions extends Component {

    constructor(props){
        super(props);
        this.state = {
            columns:[],
            requisitions:[],
            items:[],
            visibleModal:false,
        }
    }
    
    fetchRequisitions = () =>{
        fetch('http://localhost:8090/lineManager/above').then(res => res.json()).then(data =>{
          this.setState({requisitions: data.pendingRequisitions})
          console.log(data)
        }).catch(err =>{
          console.log(err);
        })
    }
  
    componentDidMount(){
        this.fetchRequisitions()
    }

    showModal = (record) => {
        
        console.log(record.P_Order_Id)

        fetch('http://localhost:8090/lineManager/single/'+record.P_Order_Id).then(res => res.json()).then(data =>{
          this.setState({items: data.Purchase_Order_Items_Qties})
          console.log(data.Purchase_Order_Items_Qties)
        }).catch(err =>{
          console.log(err);
        })

        this.setState({
            visibleModal : true
        });
    };

    handleOk = () => {
        this.setState({
            visibleModal : false
        });
    };
    
    handleCancel = () => {
        this.setState({
            visibleModal : false
        });
    };

    approve = (record) => {
        console.log(record.P_Order_Id)

        fetch("http://localhost:8090/lineManager/request/accept/" + record.P_Order_Id, {
            method: "PUT",
            body: JSON.stringify({status : "Approved"})
        }).then(res => res.json()).then(data => {
            message.success('Requisition Approved successfully!');

            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }).catch(err =>{
            console.log(err);
        })
    }
    reject = (record) => {
      console.log(record.P_Order_Id)

      fetch("http://localhost:8090/lineManager/request/reject/" + record.P_Order_Id, {
            method: "PUT",
            body: JSON.stringify({status : "Rejected"})
        }).then(res => res.json()).then(data => {
            message.success('Requisition Rejected successfully!');

            setTimeout(() => {
                window.location.reload()
            }, 1000);
        }).catch(err =>{
            console.log(err);
        })
    }

  render() {

    this.state.columns = [
      {
          title: 'Requisition ID',
          dataIndex: 'P_Order_Id',
          key: 'P_Order_Id',
          render: text => <a>{text}</a>,
      },
      {
          title: 'Orderd Date',
          dataIndex: 'Ordered_Date',
          key: 'Ordered_Date',
      },
      {
          title: 'Required Date',
          dataIndex: 'Required_Date',
          key: 'Required_Date',
      },
      {
          title: 'Items',
          dataIndex: 'P_Order_Id',
          key: 'P_Order_Id',
          render: (text, record) => (
            <Space size="middle">
                {/* <Link to={"/appointment/" + record._id}>Show Appointment</Link> */}
                
                <Button onClick={()=> this.showModal(record)}>
                    View Items
                </Button>

            </Space>
        ),
      },
      {
          title: 'Actions',
          dataIndex: 'P_Order_Id',
          key: 'P_Order_Id',
          render: (text, record) => (
              <Space size="middle">
                  {/* <Link to={"/appointment/" + record._id}>Show Appointment</Link> */}
                  
                  

                  <Popconfirm
                      title="Are you sure you want to approve this requisition?"
                      onConfirm={()=> this.approve(record)}
                    //   onCancel={cancel}
                      okText="Approve"
                  >
                      <Button type="primary" >
                          Approve
                      </Button>
                  </Popconfirm> 
                  <Popconfirm
                      title="Are you sure you want to reject this requisition?"
                      onConfirm={() => this.reject(record)}
                    //   onCancel={cancel}
                      okText="Reject"
                  >
                      <Button type="danger" >
                        Reject
                      </Button>
                  </Popconfirm> 
              </Space>
          ),
      },
    ];

    return (
      <>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <h1 style={{textAlign:"center", marginTop:"1%", marginBottom:"3%"}}>All Requesitions</h1>
                
          <Table columns={this.state.columns} dataSource={this.state.requisitions}/>

          <Modal title="Items for Requisition" visible={this.state.visibleModal} onOk={this.handleOk} onCancel={this.handleCancel}>
            <List
                itemLayout="horizontal"
                dataSource={this.state.items}
                renderItem={item => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://www.seekpng.com/png/detail/34-342762_construction-next-item-fire-french-key-tool-png.png" />}
                        title={<a>{item.Item_No_Item.Item_Name}</a>}
                        description={item.Item_No_Item.Description}
                    />
                    <Title level={5} type="danger">{item.Total_Qty}</Title>
                </List.Item>
                )}
            />
          </Modal>
        </div>
      </>
    )
  }
}

export default AllRequesitions
