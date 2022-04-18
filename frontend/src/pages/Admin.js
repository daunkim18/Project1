import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';

function Admin() {

    const [orders, setOrders] = useState([]);
    const [sales, setSales] = useState([]);
    const [contact, setContact] = useState([]);

    let currentuser = sessionStorage.getItem('currentUser'); 

    const OrderItem = ({
      orderid,
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

  const SalesItem = ({
    requestid,
    email,
    phone_number,
    book_title,
    book_author
  }) => (
    <div>
        <h2>Request ID {requestid}</h2>
        <h4>Email{email}</h4>
        <b>Phone Number</b> {phone_number}
        <br/>
        <b>Book Title</b> {book_title}
        <b>Book Author</b> {book_author}
        <br/><br/>
    </div>
  );

  const ContactItem = ({
    contactid,
    email,
    phone_number,
    inquiry_type,
    inquiry_message
  }) => (
    <div>
        <h2>Contact ID {contactid}</h2>
        <h4>Email{email}</h4>
        <b>Phone Number</b> {phone_number}
        <br/>
        <b>Inquiry Type</b> {inquiry_type}
        <br/>
        <b>Inquiry Message</b> {inquiry_message}
        <br/><br/>
    </div>
  );
    
    useEffect(() => {
        axios.get(`http://localhost:3001/adminorders`).then((response) => {
              let orderData=response.data;
              setOrders(orderData)
              console.log(orderData);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    useEffect(() => {
      axios.get(`http://localhost:3001/adminsales`).then((response) => {
            let salesData=response.data;
            setSales(salesData)
            console.log(salesData);
          })
          .catch((error) => {
              console.log(error)
          })
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3001/admincontact`).then((response) => {
          let contactData=response.data;
          setContact(contactData)
          console.log(contactData);
        })
        .catch((error) => {
            console.log(error)
        })
  }, []);



    return(
        <>
        <div id='adminArea'>
            <h1>Welcome, Admin.</h1>
            <br/><br/>

            <h1>Order History of All Users</h1>
            <div>
            {orders.map(orders => <OrderItem key={orders.orderid} {...orders} />)}
            </div>

            <h1>Book Sales Requests:</h1>
            <div>
            {sales.map(sales => <SalesItem key={sales.requestid} {...sales} />)}
            </div>

            <h1>Inquiries from All Customers:</h1>
            <div>
            {contact.map(contact => <ContactItem key={contact.contactid} {...contact} />)}
            </div>

        </div>
        </>
    )
}

export default Admin;