import React, { useState,  useEffect} from 'react';
import '../styles/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


function Header() {

  const [openBurger, setOpenBurger] = useState(false);
  const [profile, setProfile] = useState();
  const [cart, setCart] = useState();

  var loggedinuser = JSON.parse(sessionStorage.getItem('currentUser')); 
  console.log(loggedinuser);

  function clearSess() {
    localStorage.clear();
    sessionStorage.clear();
    window.alert('You have been successfully logged out.');
    window.location.reload();
  }

  const hideItem = (
    <>
    </>
  );

  const profileLink = (
    <>
      <Link to={"/profile"} className='profileLink'>Profile</Link>
    </>
    );

  const cartLink = (
    <a href="/cart">
                    <Link to={"/cart"}>
                      <button id="cartIcon">
                        <FontAwesomeIcon icon={faCartShopping} />
                      </button>
                    </Link>
    </a>
  );

  
  useEffect(() => {
  if (loggedinuser == "admin@admin.com") {
      setCart(hideItem);
  }
  else if (loggedinuser == "no user"){
      setCart(hideItem);
  } else {
      setCart(cartLink);
  }
  }, []);

  useEffect(() => {
  if (loggedinuser == "admin@admin.com") {
    setProfile(hideItem);
  }
  else if (loggedinuser == "no user"){
    setProfile(hideItem);
  } else {
    setProfile(profileLink);
  }
  }, []);
 
  return (
    <>
      <div className="headerBar">
        <div className="siteName">
          <Link to={"/"}><h1>Revature's Digest</h1></Link>
        </div>

        <div className="navBar">
          <ul className="navLinks">
          {loggedinuser === "admin@admin.com" ? 
                    <>
                    <li>
                    <Link to={"/admin"}>Admin Controls</Link>
                    </li>
                    </>
          : hideItem}
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/shop"}>Shop</Link>
            </li>
            {loggedinuser === "admin@admin.com" ? 
                    <li>
                    <Link to={"/sell"}>Sell</Link>
                    </li>
            : hideItem}
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              {profile}
            </li>
            <li>
              <Link to={"/"} onClick={clearSess} className='logoutLink'>Logout</Link>
            </li>
          </ul>
            {cart}
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
                <Link to={"/logout"}  onClick={clearSess} className='logoutLink'>Logout</Link>
              </li>
      </ul>
    }

    </>
  );
}

export default Header;
