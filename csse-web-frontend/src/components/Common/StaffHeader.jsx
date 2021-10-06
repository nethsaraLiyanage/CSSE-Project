import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo1 from './../../assets/images/logo1.png'
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const StaffHeader = () => {

 const  history = useHistory();


        return (
                <Layout className="layout">
                    <Header>
    
                        <Menu theme="dark" mode="horizontal">
                            <Menu.Item><img src={Logo1} alt="" width={"130px"} /></Menu.Item>
                            <Menu.Item key="1" ><Link to ="/approved-requisition">Approved Requesitions</Link></Menu.Item>
                            <Menu.Item key="2" ><Link to ="/all-quotas">Published Quota Requests</Link></Menu.Item>
                            <Menu.Item key="3" ><Link to ="/placed-orders">Placed Orders</Link></Menu.Item>
                        </Menu>
                    </Header>
                    {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
                </Layout>
        )
    
}

export default StaffHeader;
