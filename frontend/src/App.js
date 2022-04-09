import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Product from './pages/Product';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';
import { Store } from './Store';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import CartScreen from './pages/CartScreen';
// Switch is now Routes
import SigninScreen from './pages/SigninScreen';
import SignupScreen from './pages/SignupScreen';

function App() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column site-container">
          <Header>
            <Navbar bg="dark" variant="dark">
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand>Revature's Digest</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                  <Link to="/cart" className="nav-link">
                    Cart
                    {cart.cartItems.length > 0 && (
                      <Badge pill bg="danger">
                        {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                      </Badge>
                    )}
                  </Link>
                </Nav>
              </Container>
            </Navbar>
          </Header>
          <main>
            <Container className="mt-3">
              <Routes>
                <Route path="/cart" element={<CartScreen />} />
                <Route path="/product/:slug" element={<Product />} />
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SigninScreen />} />
                <Route path="/signup" element={<SignupScreen />} />
              </Routes>
            </Container>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
