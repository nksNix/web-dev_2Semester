import './Orders.css'
import Order from '../Order/Order';
import React, { useEffect, useState } from 'react';

function Orders(){
    const [shopList, setShowpList] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:3050/orders', {method: "GET"})
            .then(x => x.json())
            .then(x => setShowpList(x));
    }, [])
    return (
        <div id="content">
            {shopList.map(x => <Order props={x}/>)}
        </div>
    );
}

export default Orders;