import React, { Component } from 'react'
import { Table, Tag, Space, Button } from 'antd';

class PastRequesitions extends Component {

  constructor(props){
    super(props);
    this.state = {
        columns:[],
    }
}

  render() {

    this.state.columns = [
      {
          title: 'Appointment ID',
          dataIndex: 'appointmentId',
          key: 'appointmentId',
          render: text => <a>{text}</a>,
      },
      {
          title: 'Appointment Date',
          dataIndex: 'appointmentDate',
          key: 'appointmentDate',
      },
      {
          title: 'Time',
          dataIndex: 'appointmentTimeSlot',
          key: 'appointmentTimeSlot',
      },
      {
          title: 'Doctor',
          dataIndex: 'doctor',
          key: 'doctor',
      },
      {
          title: 'Status',
          key: 'appointmentStatus',
          dataIndex: 'appointmentStatus',
          
          render: appointmentStatus => (
              <>
                  {
                      appointmentStatus.map(item => {
                          let color = item == "true" ? 'green' : 'red'
                          let status = item == "true" ? 'Approved' : 'Pending'
                          return(
                              <Tag color={color}>
                                  {status.toUpperCase()}
                              </Tag>
                          )
                      })
                      
                  }
              </>
          ),
      },
      {
          title: 'Action',
          dataIndex: 'appointmentId',
          key: 'appointmentId',
          render: (text, record) => (
              <Space size="middle">
                  {/* <Link to={"/appointment/" + record._id}>Show Appointment</Link> */}
                  
                  <Button type="primary" onClick={()=> this.showDrawer(record)}>
                      View
                  </Button>

                  {/* <Popconfirm
                      title="Are you sure yo want to delete this appointment?"
                      onConfirm={() => this.onDelete(record.appointmentId)}
                      onCancel={cancel}
                      okText="Delete"
                  >
                      <Button type="danger" >
                          Delete
                      </Button>
                  </Popconfirm>  */}
              </Space>
          ),
      },
  ];

    return (
      <>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <h1 style={{textAlign:"center", marginTop:"1%", marginBottom:"3%"}}>Past Requesitions</h1>
                
          <Table columns={this.state.columns} dataSource={this.state.appointments}/>
        </div>
      </>
    )
  }
}

export default PastRequesitions
