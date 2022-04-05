import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// Switch is now Routes

function App() {
  return (
    <>
      <Router>
        <Header />
        
        <Home />

        <Footer />

      </Router>
    </>
  );
}

export default App;
