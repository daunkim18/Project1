import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function Cart() {

    const [cart, setCart] = useState([]);

    let currentcart;
    let currentuser;
    currentcart = JSON.parse(localStorage.getItem("currentCart"));
    currentuser = sessionStorage.getItem('currentUser');
    let d = new Date();
    let date = d.toLocaleString();

    const BookItem = ({
        book_name,
        price, 
        author_name, 
        stock,
        book_img
      }) => (
        <div className='cartInventory'>
            <div id='bookCard'>
                <img src={book_img} width=
                '100%' height='100%'/>
                <h3>{book_name}</h3>
                <h5>By {author_name}</h5>
                ${price}
                <br/>
                <button className='addBtn'><FontAwesomeIcon icon={faPlus}/> Add</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className='bookQuantity'>0</span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button className='minusBtn'><FontAwesomeIcon icon={faMinus}/> Remove</button>
            </div>
        </div>
    );

    useEffect(() => {
    currentcart.map((book) =>
        axios.get(`http://localhost:3001/cart/${book}`).then((response) => {
            let data = response.data
            setCart(data)
        })
        .catch((error) => {
            console.log(error)
        })
    )}, [currentcart.length]);

    const submitButton = (event) => {
        axios.post(`http://localhost:3001/checkout`,currentuser,currentcart,date).then((response) => {
            
        })
        .catch((error) => {
            console.log(error)
        })
    }

    console.log(cart);

    return (
        <>
            <div className='cartSection'>
                <h1>Cart Order</h1>
                    <div>
                        {cart.map(cart => <BookItem key={cart.book_name} {...cart} />)}
                    </div>
                <br/>
                <button className='checkoutBtn' onClick={submitButton}><FontAwesomeIcon icon={faCartShopping}/> Checkout</button>
            </div>

            <div id='clear-both'></div>
        </>
      )
}

export default Cart;