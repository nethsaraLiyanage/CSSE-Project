import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import CompletedOrders from './CompletedOrders';
import Logo1 from './../../assets/images/logo1.png'
import PaidOrders from './PaidOrders';
const { Header, Content, Footer } = Layout;

class ProcumentStaffDashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedItem:'1'
        }
    }

    render() {
        var component
        if(this.state.selectedItem === '1'){
            component = <CompletedOrders/>
        }else if(this.state.selectedItem === '2'){
            component = <PaidOrders/>
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
                            <Menu.Item key="1" onClick={() => {this.setState({ selectedItem: '1'})}}>Pending Payments</Menu.Item>
                            <Menu.Item key="2" onClick={() => {this.setState({ selectedItem: '2'})}}>Paid Orders</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>Line Manager</Breadcrumb.Item>
                        </Breadcrumb>

                        {component}

                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </>
        )
    }
}

export default ProcumentStaffDashboard;
