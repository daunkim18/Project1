import React, {Component} from 'react'
import axios from 'axios';
import '../styles/Shop.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inventoryData: []
        };
    }

    getShopData() {
        axios.get(`http://localhost:3001/storeinventory`).then((response) => {
            const data = response.data

            let cartItems = [];
            
            const shopData = data.map(book =>
                <div classname='shopInventory'>
                    <div id='bookCard'>
                        <img src={book.book_img} width=
                        '100%' height='100%'/>
                        <h3>{book.book_name}</h3>
                        <h5>By {book.author_name}</h5>
                        ${book.price}
                        <br/>
                        <b>Stock:</b> {book.stock}
                        <br/>
                        <button type='submit' className='addCartBtn' id={book.book_name} onClick={function cart()
                            { 
                                cartItems.push(book.book_name); localStorage.setItem("currentCart", JSON.stringify(cartItems));

                            }
                        }>
                            <FontAwesomeIcon icon={faCartShopping}/> Add to Cart</button>
                    </div>
                </div>
                )

                this.setState({
                    shopData
                })
            })

            
        .catch((error) => {
            console.log(error)
        })
    }
    componentDidMount(){
        this.getShopData()

}
    
    render() {
    return (
        <>
            <div classname='shopSection'>
            <center>
                <h1>Find out what's waiting for you today!</h1>
                <p>Puruse our wide variety of books! We are always restocking and buying what our customers want!</p>
            </center> 
            {this.state.shopData}
            </div>
            <div id='clear-both'></div>
            </>
      )
    }
}