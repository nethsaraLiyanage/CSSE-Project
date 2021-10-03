import React, { Component } from 'react'
import { Table, Tag, Space, Button} from 'antd';

class AllItems extends Component {

    constructor(props){
        super(props);
        this.state = {
            items:[]
        }
    }

    fetchItems = () =>{
        fetch('http://localhost:8090/item/allItems').then(res => res.json()).then(data =>{
          this.setState({items: data})
        //   console.log(data)
        }).catch(err =>{
          console.log(err);
        })
    }
  
    componentDidMount(){
        this.fetchItems()
    }

    render() {

        this.state.columns = [
            {
                title: 'Item No',
                dataIndex: 'Item_No',
                key: 'Item_No',
                render: text => <a>{text}</a>,
            },
            {
                title: 'Item Name',
                dataIndex: 'Item_Name',
                key: 'Item_Name',
            },
            {
                title: 'Item Description',
                dataIndex: 'Description',
                key: 'Description',
            },
            {
                title: 'Item Status',
                dataIndex: 'Status',
                key: 'Status',
            },
            {
                title: 'Estimated Unit Price',
                dataIndex: 'Estimated_Unit_Price',
                key: 'Estimated_Unit_Price',
                
            },
          ];

        return (
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <h1 style={{textAlign:"center", marginTop:"1%", marginBottom:"3%"}}>All Items</h1>
                        
                <Table columns={this.state.columns} dataSource={this.state.items}/>

            </div>
        )
    }
}

export default AllItems
