import React, { useState } from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';


function Header() {

  return (
    <>
      <div className="headerBar">
        <div className="siteName">
          <h1>Revature's Digest</h1>
        </div>

        <div className="navBar">
          <ul className="navLinks">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            <li>
              <Link to={"/sell"}>Sell</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
          <a href="/cart">
            <Link to={"/cart"}>
              <button id="cartIcon">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button id="burgerIcon">
              <FontAwesomeIcon icon={faBars} />
            </button>
          </a>
        </div>
      </div>
      
      //add drop-down menu here

    </>
  );
}

export default Header;
