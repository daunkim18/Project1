import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Login from './components/Login';
import Footer from './components/Footer';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
// Switch is now Routes

import Signup from './components/SignUp';

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
                <Route path='/signup' element={<Signup />} />
              </Routes>
            </Container>
          </main>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
