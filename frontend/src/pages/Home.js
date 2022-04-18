import React from 'react';
import '../styles/Home.css';
import Slider1 from '../components/Slider1';

function Home() {

  let noLogin = "no user";

  if (sessionStorage.getItem('currentUser') == null ){
    sessionStorage.setItem('currentUser', JSON.stringify(noLogin));
  }
  

  return (
    <div id='homePage'>

      <div className="featuredScroll">
          <Slider1 />
      </div>


      <div className="sectionTitle">
        <h2>Best Sellers</h2>
      </div>
      <div className="bestSellers">
        <Slider1 />
      </div>
      <div className="sectionTitle">
        <h2>New Arrivals</h2>
      </div>
      <div className="newArrivals">
      <Slider1 />
      </div>
    </div>
  );
}

export default Home;
