import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  function submitNews() {
    window.alert("You have signed up for Revature's Digest newsletter!");
  }

  return (
    <>
      <hr />
      <div className="footerSection">
        <div className="subscriptionForm">
          <form id="mailingList">
            <h3>NEWSLETTER</h3>
            Subscribe to our mailing list for updates and news!
            <br />
            <br />
            <input type="email" placeholder="name@email.com" />
            &nbsp;&nbsp;
            <input type="submit" className="newsSubmit" onClick={submitNews} />
          </form>
        </div>
        <br />
        <div className="helpSection">
          <h3>Help</h3>
          <ul>
            <li>
              <Link to={'/about'}>About Us</Link>
            </li>
            <li>
              <Link to={'/faq'}>F.A.Q.</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact Us</Link>
            </li>
            <li>
              <Link to={'/tos'}>Terms of Use</Link>
            </li>
          </ul>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="exploreSection">
          <h3>Explore</h3>
          <ul>
            <li>
              <Link to={'/careers'}>Careers</Link>
            </li>
            <li>
              <Link to={'/locations'}>Store Locations</Link>
            </li>
            <li>
              <Link to={'/events'}>Events</Link>
            </li>
          </ul>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <div className="extraSection">
          <h3>Connect</h3>
          <ul>
            <li>
              <a href="https://www.youtube.com/" target="_blank">
                YouTube
              </a>
            </li>
            <li>
              <a href="https://twitter.com/" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footerBar">
        Copyright © 2022 Daun, Matthew, Shabana, Uyenvy
      </div>
    </>
  );
}

export default Footer;
