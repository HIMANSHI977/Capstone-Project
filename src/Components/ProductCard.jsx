import { useNavigate, useLocation } from "react-router-dom";
import { FiHeart } from "react-icons/fi";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const location = useLocation();

  const { dispatch } = useCart();

  const {
    wishlist,
    dispatch: wishlistDispatch,
  } = useWishlist();

  const isWishlistPage = location.pathname === "/wishlist";

  const isWishlisted = wishlist.some(
    (item) => item.id === product.id
  );

  function handleAddToCart(e) {
    e.stopPropagation();

    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  }

  function handleWishlist(e) {
    e.stopPropagation();

    if (isWishlisted) {
      wishlistDispatch({
        type: "REMOVE_FROM_WISHLIST",
        payload: product.id,
      });
    } else {
      wishlistDispatch({
        type: "ADD_TO_WISHLIST",
        payload: product,
      });
    }
  }

  function handleRemoveWishlist(e) {
    e.stopPropagation();

    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: product.id,
    });
  }

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      {/* Heart Icon */}
      <button
        className="wishlist-btn"
        onClick={handleWishlist}
      >
        <FiHeart
          color={isWishlisted ? "red" : "#333"}
          fill={isWishlisted ? "red" : "none"}
        />
      </button>

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

        {isWishlistPage ? (

          <button
            className="remove-btn"
            onClick={handleRemoveWishlist}
          >
            REMOVE FROM WISHLIST
          </button>

        ) : (

          <button
            className="add-cart-btn"
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>

        )}

      </div>
    </div>
  );
}

export default ProductCard;