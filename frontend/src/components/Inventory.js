import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function Inventory() {
    const baseURL =`http://localhost:3001/storeinventory`;
    let inventoryData;

    axios.get(baseURL).then((response) => {
         inventoryData=response.data[0];
})

    return (
        <p> {inventoryData} </p>
      )
}

export default Inventory;