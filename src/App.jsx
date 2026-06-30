import {Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';
import Checkout from './pages/Checkout.jsx';
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/auth" element={<Auth />} />
        <Route path ="/checkout" element={<Checkout />} />
      </Routes>

    </div>
  );
}

export default App
