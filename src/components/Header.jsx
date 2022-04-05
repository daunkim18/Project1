import React, {useState} from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Login from './Login'

function Header() {

   const [burgerOpen, setBurgerOpen] = useState(false);
   const toggleBurger = () => {
        setBurgerOpen(!burgerOpen);
   }
    
    return (
        <>
            <div className='headerBar'>
                <div className='siteName'>
                    <h1>Bookstore Name</h1>
                </div>

                <div className='navBar'>
                    <ul className='navLinks'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/Categories">Shop</a></li>
                        <li><a href="/Marketplace">Marketplace</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>

                    <button id='cartIcon'>
                        <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button id='burgerIcon' onClick={toggleBurger}>
                            <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
            {burgerOpen && (
            <ul className='navBurger'>
                <li><a href="/">Home</a></li>
                <li><a href="/">Login</a></li>
                <li><a href="/Shop">Shop</a></li>
                <li><a href="/Marketplace">Marketplace</a></li>
            </ul>
            )}
            
        </>
    )
}

export default Header;