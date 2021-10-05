import React, { Component } from 'react'
import { Layout } from 'antd';

import { Form, Input, Button, Checkbox} from 'antd';
import Logo1 from './../../assets/images/logo1.png'
import Logo2 from './../../assets/images/logo2.png'

const { Header } = Layout;

class LMlogin extends Component {
  render() {
    return (
        <div style={{backgroundColor:"#EDEDED"}}>

        <Header className="site-layout-background" style={{ padding: "1.2%", display:"flex", backgroundColor:"#001529"}} >
          <img src={Logo1} alt="" width={'100px'} height={'40px'} style={{marginLeft:"2%", marginRight:"2%"}} />
        </Header>

        <div className="log-card" style={{width:"80%", margin:"3% 10% 2% 10%", backgroundColor:"white", borderRadius:"2%", padding:"5%"}}>
          <div className="heading" style={{display:"flex", margin: "auto", width: "40%"}}>
            <h1 style={{marginTop:"8%"}}>Welcome back!</h1>
            <img src={Logo2} alt="" style={{width:"200px", height:"80px", marginLeft:"3%",marginTop:"1%"}}/>
          </div>

          <div style={{marginLeft:"10%", marginTop:"5%", width:"60%", textAlign:"center"}}>
            <Form
              name="basic"
              labelCol={{span: 8,}}
              wrapperCol={{span: 16,}}
              initialValues={{remember: true,}}
            //   onFinish={onFinish}
            //   onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  {
                    required: true,
                    message: 'Please input your email!',
                  },
                ]}
              >
                <Input name="email" onChange={this.handleChange}/>
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Please input your password!',
                  },
                ]}
              >
                <Input.Password name="password" onChange={this.handleChange}/>
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button type="primary" htmlType="submit" onClick={this.handleSubmit} style={{width:"100%"}} >
                  Login
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        
        <p style={{textAlign:"center", paddingBottom:"1.2%"}}>Designed @2021 Created by REG_WE_03</p>

      </div>
    )
  }
}

export default LMlogin
