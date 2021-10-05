import React, { Component } from 'react'
import { Table, Tag, Space, Button, Modal } from 'antd';
import { Tabs, Radio } from 'antd';
import { List, Avatar } from 'antd';
import { Typography } from 'antd';

const { Title} = Typography;

const { TabPane } = Tabs;

class PastRequesitions extends Component {

  constructor(props){
    super(props);
        this.state = {
            columns:[],
            size: 'large',
            approvedRequisitions:[],
            rejectedRequisitions:[],
            visibleModal:false,
            items:[]
            
        }
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

    onChange = e => {
        this.setState({ size: e.target.value });
    };

    fetchApprovedRequisitions = () =>{
        fetch('http://localhost:8090/lineManager/approved').then(res => res.json()).then(data =>{
          this.setState({approvedRequisitions: data.pendingRequisitions})
          console.log(data)
        }).catch(err =>{
          console.log(err);
        })
    }
  
    fetchRejectedRequisitions = () =>{
        fetch('http://localhost:8090/lineManager/rejected').then(res => res.json()).then(data =>{
          this.setState({approvedRequisitions: data.pendingRequisitions})
          console.log(data)
        }).catch(err =>{
          console.log(err);
        })
    }
    componentDidMount(){
        this.fetchApprovedRequisitions()
        this.fetchRejectedRequisitions()
    }

  render() {
    const { size } = this.state;

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
        }
      ];

    return (
      <>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <h1 style={{textAlign:"center", marginTop:"1%", marginBottom:"3%"}}>Past Requesitions</h1>

            <div>
                <Tabs defaultActiveKey="1" type="card" size={size}>
                    <TabPane tab="Approved Requisitions" key="1">
                        <Table columns={this.state.columns} dataSource={this.state.approvedRequisitions}/>
                    </TabPane>
                    <TabPane tab="Rejected Requisitions" key="2">
                    <Table columns={this.state.columns} dataSource={this.state.rejectedRequisitions}/>
                    </TabPane>
                </Tabs>
            </div>

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

export default PastRequesitions
