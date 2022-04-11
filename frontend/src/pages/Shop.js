import React from 'react';
import Inventory from '../components/Inventory'
import axios from 'axios';

function Shop() {

    const baseURL =`http://localhost:3001/storeinventory`;

    let inventoryData;

    axios.get(baseURL).then((response) => {
         inventoryData=response.data;
         console.log(inventoryData);
    })
    
    return (

        <div classname='shopSection'>
            <center>
                <h1>Find out what's waiting for you today!</h1>
                <p>Puruse our wide variety of books! We are always restocking and buying what our customers want!</p>
            </center>

            <ul>
                {inventoryData.map((item) =>(
                    <li key={inventoryData.bookid}>
                    {inventoryData.book_name} is ${inventoryData.price}
                     </li>
                ))}
                
            </ul>
            
        </div>
    )

}

export default Shop;