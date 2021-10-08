import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import Logo1 from './../../assets/images/logo1.png'
import {useHistory} from "react-router-dom";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const AccountStaffHeader = () => {

    const  history = useHistory();

    const logout = () => {
        localStorage.clear();
        history.push('/');
    }


    return (
        <Layout className="layout">
            <Header>

                <Menu theme="dark" mode="horizontal">
                    <Menu.Item><img src={Logo1} alt="" width={"130px"} /></Menu.Item>
                    <Menu.Item key="1" ><Link to ="/completed-orders">Pending Payments</Link></Menu.Item>
                    <Menu.Item key="2" ><Link to ="/paid-orders">Paid Orders</Link></Menu.Item>
                    <Menu.Item onClick={logout} key="3" >Logout</Menu.Item>
                </Menu>
            </Header>
            {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
    )

}

export default AccountStaffHeader;
