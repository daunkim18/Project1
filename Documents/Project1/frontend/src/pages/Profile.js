import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/Profile.css';


function Profile() {
    
    const [firstname, setFirst] = useState('');
    const [lastname, setLast] = useState('');
    const [orders, setOrders] = useState([]);

    let currentuser = JSON.parse(sessionStorage.getItem('currentUser')); 
  
    useEffect(() => {
    axios.get(`http://localhost:3001/username/${currentuser}`).then((response) => {
          let userData=response.data[0];
          setFirst(userData.firstname);
          setLast(userData.lastname);
          console.log(userData);
        })
        .catch((error) => {
            console.log(error)
        })
    }, []);

    const OrderItem = ({
        orderid,
        username, 
        orders,
        order_date
      }) => (
        <div>
            <h4>Order #{orderid}</h4>
            <b>Order Date:</b> {order_date}
            <br/>
            {orders}
            <br/><br/>
        </div>
    );

    useEffect(() => {
        axios.get(`http://localhost:3001/profileorders/${currentuser}`).then((response) => {
              let orderData=response.data;
              setOrders(orderData)
              console.log(orderData);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);



    return(
        <>
        <div id='profileArea'>
            <h1>Welcome, {firstname} {lastname}.</h1>
            <br/><br/>

            <h1>Order History</h1>
            <div>
            {orders.map(orders => <OrderItem key={orders.orderid} {...orders} />)}
            </div>

        </div>
        </>
    )
}

export default Profile;