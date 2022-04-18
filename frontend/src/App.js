import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// Switch is now Routes

import Signup from './components/SignUp';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Sell from './pages/Sell';
import Profile from './pages/Profile';
import Admin from './pages/Admin';


import FAQ from './xpages/FAQ';
import About from './xpages/AboutUs';
import Contact from './xpages/ContactUs';
import ToS from './xpages/TOS';
import Careers from './xpages/Careers';
import Locations from './xpages/Locations';
import Events from './xpages/Events';

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/sell' element={<Sell />} />
                <Route path='/profile' element={<Profile />} />



                <Route path='/faq' element={<FAQ/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/contact' element={<Contact/>} />
                <Route path='/tos' element={<ToS/>} />
                <Route path='/careers' element={<Careers/>} />
                <Route path='/locations' element={<Locations/>} />
                <Route path='/events' element={<Events/>} />
              </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
