import { useParams } from "react-router-dom";
import { getProductById } from "../data/products";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart ,cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    useEffect(() => {
        const foundProduct = getProductById(id);
        if(!foundProduct) {
            navigate("/"); 
            return;
        }
        setProduct(foundProduct);

    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }
     const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

    return <div className ="page">
        <div className="container">
            <div className="product-details">
                <div className="product_detail_image">
                <img src={product.image} alt={product.name} />
                </div>
                <div className="product_detail_content">
                <h1 className="product_name">{product.name}</h1>
                <p className="product_description">{product.description}</p>
                <p className="product_price">${product.price}</p>
                <p className ="product_description">{product.description}</p>
                <button className="btn btn-primary" onClick={() => addToCart(product.id)}>
                    Add to Cart {productQuantityLabel}
                </button>
                </div>
            </div>
        </div>
    </div>;
}