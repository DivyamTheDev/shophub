import { Link } from 'react-router-dom';
import { getProducts } from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';


export default function Home() {
    const products= getProducts();
  return (
    <div className="page">
    <div className="home-hero">
        <h1 className="home-hero-title">Welcome to ShopHub</h1>
        <p className="home-hero-subtitle">Your one-stop shop for all your needs.</p>
    </div>    
    <div className="container">
        <h2 className="page-title">Our products</h2>
        <div className="product-grid">
            {products.map((product) => (
               <ProductCard product={product} key={product.id}/>

                ) ) }
            </div>
        </div>
        </div>
   
  );
}
