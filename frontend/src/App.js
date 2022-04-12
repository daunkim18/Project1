import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// Switch is now Routes

import Signup from './components/SignUp';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Sell from './pages/Sell';
import Profile from './pages/Profile';

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <main>
            <Container className="mt-3">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/logout" element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/shop' element={<Shop />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/sell' element={<Sell />} />
                <Route path='/profile' eleemnt={<Profile />} />
              </Routes>
            </Container>
          </main>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
