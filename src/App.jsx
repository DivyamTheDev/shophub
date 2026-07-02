import {Routes} from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Auth from './pages/Auth.jsx';
import Checkout from './pages/Checkout.jsx';
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import  AuthProvider  from './context/AuthContext.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import './App.css'
import CartProvider from './context/CartContext.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <CartProvider>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/auth" element={<Auth />} />
        <Route path ="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>   
      <footer>
        <p>💜 ShopHub | Crafted with React & JavaScript by <strong>Divyam Chaudhary</strong></p>
      </footer> 
    </div>
    </CartProvider>
     </AuthProvider>
  );
}

export default App
