import React, { useEffect, useState } from "react";
import { Space, Input, Button, Card, Avatar, List, Tag } from "antd";
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";
import moment from "moment";
import StaffHeader from "../Common/StaffHeader";

const ViewPlacedOrders = () => {

    const [orders,setOrders] = useState([]);

    useEffect(() => {

        // if(username === null){
        //   history.push("/login")
        // }
        axios.get("http://localhost:8090/requisition/placed-orders").then((res) => {
            console.log(res.data.Orders)
            setOrders(res.data.Orders);
        }).catch((err) => {
            console.log(err);
        })
    },[]);


    return (
        <div>
            <StaffHeader/>
            {orders.map((order) => (
                <Card
                    type="inner"
                    title={order.Item_No_Item.Item_Name}
                >
                    <p>
                       Total Quantity:  
                        <Tag color="#87d068">{order.Total_Qty}</Tag>
                    </p>
                    <p>
                       Remaining Quantity: 
                        <Tag color="#87d068">{order.Remaining_Qty}</Tag>
                    </p>
                    <div style={{ marginTop: 16 }}>
                    { order.Remaining_Qty == 0 &&
                        <Tag color="green">Completed</Tag>
                    }
                    </div>

                    <div style={{ marginTop: 16 }}>
                        { order.Remaining_Qty > 0 &&
                        <Tag color="orange">In progress</Tag>
                        }
                    </div>
                </Card>
            ))}
        </div>
    );
};

export default ViewPlacedOrders;
