import React from 'react';
import './Styles.css';
import img1 from './map.png';

function Locations() {
  return (
    <div className="mainSpace">
      <center>
        <h1>Locations</h1>
        Prefer the smell and environment of a real bookstore? <br />
        We have several locations across the states! <br />
        Revature's Digest is located at 11730 Plaza America Dr. 2nd Floor
        Reston, VA
        <img src={img1} alt="a stack of books" />
      </center>
    </div>
  );
}

export default Locations;
