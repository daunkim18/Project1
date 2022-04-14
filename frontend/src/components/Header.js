import React, { useState } from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Header() {

  const [openBurger, setOpenBurger] = useState(false);

  var loggedinuser = sessionStorage.getItem('currentUser'); 
  
  const innerHTML = {__html: 'Welcome, ' + loggedinuser}

  function clearSess() {
    sessionStorage.clear();
    window.location.reload();
  }

  return (
    <>
    
      <div className="headerBar">
        <div className="siteName">
          <Link to={"/"}><h1>Revature's Digest</h1></Link>
        </div>

        <div id='welcomeBar' dangerouslySetInnerHTML={innerHTML} />

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
            <li>
              <Link to={"/profile"} className='profileLink'>Profile</Link>
            </li>
            <li>
              <Link to={"/logout"} onClick={() =>{clearSess()}} className='logoutLink'>Logout</Link>
            </li>
          </ul>
            <Link to={"/cart"}>
              <button id="cartIcon">
                <FontAwesomeIcon icon={faCartShopping} />
              </button>
            </Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
              <button id="burgerIcon" onClick={() => setOpenBurger(!openBurger)}>
                <FontAwesomeIcon icon={faBars} />
              </button>

              
        </div>
        
      </div>

      {openBurger && <ul className="navLinksBurger">
              <li>
                <Link to={"/"} onClick={() => setOpenBurger(!openBurger)}>Home</Link>
              </li>
              <li>
                <Link to={"/login"} onClick={() => setOpenBurger(!openBurger)}>Login</Link>
              </li>
              <li>
                <Link to={"/profile"} onClick={() => setOpenBurger(!openBurger)}  className='profileLink'>Profile</Link>
              </li>
              <li>
                <Link to={"/shop"} onClick={() => setOpenBurger(!openBurger)}>Shop</Link>
              </li>
              <li>
                <Link to={"/sell"} onClick={() => setOpenBurger(!openBurger)}>Sell</Link>
              </li>
              <li>
                <Link to={"/logout"}  onClick={() =>{clearSess()}} className='logoutLink'>Logout</Link>
              </li>
      </ul>
    }

    </>
  );
}

export default Header;