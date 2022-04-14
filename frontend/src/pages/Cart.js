import React from 'react';


function Cart() {

    const cartData = JSON.stringify(localStorage.getItem('currentCart'));

    return (
        <>
            <div id='cartSpace'>
                <h1>Cart Items</h1>
                
                <div className='cartBox'>
                    {cartData}
                </div>
                
            </div>
        </>
    )
}

export default Cart;