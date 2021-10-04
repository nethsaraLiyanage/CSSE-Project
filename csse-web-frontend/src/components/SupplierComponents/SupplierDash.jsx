import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo1 from './../../assets/images/logo1.png';


import SupplierViewRequisitions from './SupplierViewRequisitions';
import SupplierOrders from './SupplierOrders';
import AppliedOrders from './AppliedOrders';

const { Header, Content, Footer } = Layout;

class SupplierDash extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedItem:'1'
        }
    }

  render() {
    var component
    if(this.state.selectedItem === '1'){
        component = <SupplierViewRequisitions/>
    }else if(this.state.selectedItem === '2'){
        component = <AppliedOrders/>
    }else if(this.state.selectedItem === '3'){
        component = <SupplierOrders/>
    }else if(this.state.selectedItem === '4'){
        // component = <MakeAppointments/>
    }

    return (
      <>
        <Layout className="layout">
          <Header>
            {/* <div className="logo" >
                <img src={Logo1} alt="" width={"130px"} />
            </div> */}
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={this.state.selectedItem}>
                <Menu.Item><img src={Logo1} alt="" width={"130px"} /></Menu.Item>
                <Menu.Item key="1" onClick={() => {this.setState({ selectedItem: '1'})}}>Requests</Menu.Item>
                <Menu.Item key="2" onClick={() => {this.setState({ selectedItem: '2'})}}>Applied Requests</Menu.Item>
                <Menu.Item key="3" onClick={() => {this.setState({ selectedItem: '3'})}}>Completed Requests</Menu.Item>
              {/* {new Array(5).fill(null).map((_, index) => {
                const key = index + 1;
                return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
              })} */}
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Supplier</Breadcrumb.Item>
            </Breadcrumb>
            
            {component}

          </Content>
          <Footer style={{ textAlign: 'center' }}>Designed @2021 Created by REG_WE_03</Footer>
        </Layout>
      </>
    )
  }
}

export default SupplierDash