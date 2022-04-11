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
          </a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button id="burgerIcon">
              <FontAwesomeIcon icon={faBars} />
            </button>
            <select>
              <option value="login" href= "frontend/components/Login">Login</option>
              <option value="shop">Shop</option>
              <option value="sell">Sell</option>
              <option value="news">News</option>
            </select>
        </div>
      </div>

    </>
  );
}

export default Header;
