import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  const { dispatch } = useCart();

  function handleAddToCart(e) {
    // Prevent the card click from firing
    e.stopPropagation();

    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3 className="product-name">
          {product.name}
        </h3>

        <p className="product-brand">
          {product.brand}
        </p>

        <div className="product-meta">
          <span className="product-price">
            ₹{product.price}
          </span>

          <span className="product-rating">
            ⭐ {product.rating}
          </span>
        </div>

        <button
          className="add-cart-btn"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}