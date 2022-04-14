import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../styles/Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function Cart() {

    const [cart, setCart] = useState([]);

    let currentcart;
    currentcart = JSON.parse(localStorage.getItem("currentCart"));

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

    console.log(cart);

    return (
        <>
            <div classname='shopSection'>
            <center>
                <h1>Find out what's waiting for you today!</h1>
                <p>Puruse our wide variety of books! We are always restocking and buying what our customers want!</p>
            </center>
            <div>
                {cart.map(cart => <BookItem key={cart.book_name} {...cart} />)}
            </div>
            </div>
            <div id='clear-both'></div>
            </>
      )
}

export default Cart;