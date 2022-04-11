import React from 'react';
import '../styles/Home.css';
import Slider1 from '../components/Slider1';

function Home() {
  return (
    <div>

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
