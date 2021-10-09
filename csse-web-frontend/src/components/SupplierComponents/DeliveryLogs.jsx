import React, { Component } from 'react'
import { Typography, Input, Button, Card, Row, Col, Tag, Space, Table, Layout, InputNumber } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
const { Content } = Layout;

const { Text, Title } = Typography;

class DeliveryLogs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            supplierId: '6',
            myQuotas: [],
            selectedItem: {},
            sendMore: 0,
            visible: false,
            innerItemDetail: {},
            ReciptItems: 1,
            deliveryNote: '',
            totalValue: 0,
            deliveryLogItemNo: 0,

            searchText: '',
            searchedColumn: '',
            Data: {},
            InProgressAppointments: [],
            Goods_Recipts:[]
        }
    }

    fetchMyGoodsRecipts = () => {
        fetch('http://localhost:8090/goodsRecipt/getGoodReciptsBySupplierId/6').then(res => res.json()).then(data => {
            this.setState({ InProgressAppointments: data.data[0] })
            this.setState({ Goods_Recipts: data.data[0].Goods_Recipts })
            console.log('inside fetch');
            console.log(this.state.InProgressAppointments);
        }).catch(err => {
            console.log(err);
        })
    }

    componentDidMount() {
        this.fetchMyGoodsRecipts()
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };




    render() {
        const columns = [
            {
                title: 'Recipt No',
                dataIndex: 'id',
                key: 'id',
                render: text => <a>{text}</a>,
                ...this.getColumnSearchProps('id'),
            },
            {
                title: 'Delivery Advice Note',
                dataIndex: 'Delivery_Advice_Note',
                key: 'Delivery_Advice_Note',
                render: text => <a>{text}</a>,
                ...this.getColumnSearchProps('Delivery_Advice_Note'),
            },
            {
                title: 'Ordered Date',
                dataIndex: 'Ordered_Date',
                key: 'Ordered_Date',
                render: text => <a>{text}</a>,
                ...this.getColumnSearchProps('Ordered_Date'),
            },
            {
                title: 'Sub Total',
                dataIndex: 'Sub_Total',
                key: 'Sub_Total',
                render: text => <a>{text}</a>,
                ...this.getColumnSearchProps('Sub_Total'),
            },
            {
                title: 'Item Name',
                dataIndex: 'Item_Name',
                key: 'Item_Name',
                ...this.getColumnSearchProps('Item_Name'),
            },
            {
                title: 'Status',
                key: 'Status',
                dataIndex: 'Status',
                render: status => (
                    <>
                        {(status => {
                            let color = 'green';
                            if (status === 'New') {
                                color = 'volcano';
                            }
                            else if (status === 'Sample Collected') {
                                color = 'geekblue';
                            }
                            else if (status === 'Closed') {
                                color = 'green';
                            }
                            return (
                                // <p style={{color:'green'}}>{state.toUpperCase()}</p>
                                <Tag color={color} key={status}>
                                    {status.toUpperCase()}
                                </Tag>
                            );
                        })}
                    </>
                ),
                ...this.getColumnSearchProps('status'),
            },
            // {
            //     title: 'Action',
            //     key: 'action',
            //     dataIndex: 'action',
            //     render: (text, record) => (
            //         <div>
            //             <Tag color={'geekblue'}>
            //                 <a onClick={() => {
            //                     localStorage.setItem("selected_labTest",text);
            //                     window.location.replace('/edit-tests')
            //                 }}>Edit Test Report</a>
            //             </Tag>
            //         </div>

            //     ),
            // },
        ];


        var processedTestList = [];
        this.state.Goods_Recipts.map((item)=>{ 
                var testObj = {}
                testObj.id = item.Recipt_No;
                testObj.Delivery_Advice_Note = "Test Advice Note";
                testObj.Ordered_Date = item.Ordered_Date;
                testObj.Sub_Total = item.Sub_Total;
                testObj.Item_Name = item.Goods_Recipt_Order_Items_Qties[0].Item_No_Item.Item_Name;
                testObj.Status = item.Status;
                processedTestList.push(testObj);
                console.log('appointment List : ' , processedTestList);
        }); 

        if (processedTestList == []) {
            return null;
        }


        return (
            <div>
                <Card title="My Delivery logs">
                    <Row>
                        <div>
                            <Content
                                className="site-layout-background"
                                style={{
                                    padding: 24,
                                    margin: 16,
                                }}
                            >
                                <Row justify='start'>
                                    <Title level={3}>Tests In Progress</Title>
                                </Row>
                                <Row>
                                    <Col span={24}>
                                        <Table columns={columns} dataSource={processedTestList} pagination={{ pageSize: 3 }} />
                                    </Col>
                                </Row>
                            </Content>
                        </div>
                    </Row>

                </Card>

            </div>
        )
    }
}

export default DeliveryLogs
