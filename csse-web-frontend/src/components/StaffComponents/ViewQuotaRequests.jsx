import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, Avatar, List, Tag } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import {useHistory,useParams} from "react-router-dom";


const ViewQuotaRequest = () => {

    const  history = useHistory();
    const params = useParams();


    const [quotas,setQuotas] = useState([]);




    useEffect( () => {

        axios.get("http://localhost:8090/requisition/quota-requests").then((res) => {
                setQuotas(res.data.quotas);
                console.log(res.data.quotas);
        }).catch((err) => {
            console.log(err);
        })
    },[]);


    const viewSuppliers = (pid, iid) => {
                history.push('/place-order/'+pid+'/'+iid)
    }

    return (
        <div>
            <Card title="Requisition 001">

                {quotas.map((quota) => (
                    <Card type="inner" title={quota.Quota_Request_Id}
                    >
                        <Button onClick={ e => viewSuppliers(quota.P_Order_Id,quota.Item_No)} type="secondary">View Suppliers</Button>
                    </Card>
                ))}
            </Card>

        </div>
    );
};

export default ViewQuotaRequest;