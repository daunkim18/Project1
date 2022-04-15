import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Cart() {

    const [cart, setCart] = useState([]);

    let currentcart;
    let currentuser;
    currentcart = JSON.parse(localStorage.getItem("currentCart"));
    currentuser = JSON.parse(sessionStorage.getItem('currentUser')); 
    let d = new Date();
    let date = d.toLocaleString();

    const BookItem = ({
        book_name,
        price, 
        author_name, 
        stock,
        book_img
      }) => (
        <div classname='shopInventory'>
        <div id='bookCard'>
            <img src={book_img} width=
            '100%' height='100%'/>
            <h3>{book_name}</h3>
            <h5>By {author_name}</h5>
            ${price}
            <br/>
            <b>Stock:</b> {stock}
            <br/>
        </div>
        </div>
    );

    useEffect(() => {
    currentcart.map((book) =>
        axios.get(`http://localhost:3001/cart/${book}`).then((response) => {
            const data = response.data
            setCart(data)
        })
        .catch((error) => {
            console.log(error)
        })
    )}, [currentcart.length]);

    console.log(currentuser);
    console.log(currentcart);
    console.log(date);

    let orderData ={
        username: currentuser,
        order: currentcart,
        date: date
    };

    const submitButton = (event) => {
        axios.post(`http://localhost:3001/checkout`,orderData).then((response) => {
            
        })
        .catch((error) => {
            console.log(error)
        })
    }

    console.log(cart);
    return (
        <>
        <div id='cartSpace'>
            <h1>Cart Items</h1>

            <div className='cartBox'>
            </div>

        <div className='cartSection'>
            <h1>Cart Order</h1>
                <div>
                    {cart.map(cart => <BookItem key={cart.book_name} {...cart} />)}
                </div>
            <br/>
            <button className='checkoutBtn' onClick={submitButton}><FontAwesomeIcon icon={faCartShopping}/> Checkout</button>
        </div>

        <div id='clear-both'></div>
        </div>
        </>
      )
}

export default Cart;