import React, {Component} from 'react'
import axios from 'axios';
import '../styles/Shop.css';

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
                console.log(data)
                const shopData = data.map(book =>
                    <div id='shopInventory'>
                        <h3>{book.book_name}</h3>
                        <h5>{book.authorname}</h5>
                        ${book.price}
                        <br/>
                        Stock: {book.stock}
                        <br/>
                        <button type='submit' id='addCartBtn'>Add to Cart</button>
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
            <div classname='shopSection'>
            <center>
                <h1>Find out what's waiting for you today!</h1>
                <p>Puruse our wide variety of books! We are always restocking and buying what our customers want!</p>
            </center> 
            {this.state.shopData}
            </div>
    )
    }
}