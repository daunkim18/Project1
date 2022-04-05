import React from 'react';
import '../styles/Home.css';

function Home() {
    return (
        <>
            <div className='featuredScroll'>
                Featured News/Books
            </div>

            <div className='sectionTitle'><h2>Best Sellers</h2></div>
            <div className='bestSellers'>
                Best Sellers section
            </div>

            <div className='sectionTitle'><h2>New Arrivals</h2></div>
            <div className='newArrivals'>
                New Arrivals section
            </div>
        </>
    )
}

export default Home;