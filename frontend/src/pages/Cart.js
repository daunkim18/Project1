import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons';

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
            ${price}
            <br/><br/>
            <button className="addBtn"><FontAwesomeIcon icon={faPlus}/> Add</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span id='bookQuantity'>0</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className='minusBtn'><FontAwesomeIcon icon={faMinus} /> Subtract</button>
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

    const clearCart = ()  => {
        localStorage.clear();
        window.location.reload();
    }

    console.log(cart);
    return (
        <>
        <div id='cartSpace'>
            <h1>Cart Items</h1>

        <div className='cartSection'>
                <div>
                    {cart.map(cart => <BookItem key={cart.book_name} {...cart} />)}
                </div>

        </div>

        <div id='clear-both'></div>

        <div id='checkoutBtns'>
            <button className='checkoutBtn' onClick={submitButton}><FontAwesomeIcon icon={faCartShopping}/> Checkout</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className='clearBtn' onClick={clearCart}><FontAwesomeIcon icon={faTimes}/> Clear Cart</button>
        </div>

        <div id='clear-both'></div>

        </div>
        </>
      )
}

export default Cart;