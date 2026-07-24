import { useNavigate, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { useCart } from "../../context/CartContext";

import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    data: product,
    isLoading,
    isError,
  } = useProduct(id);

  const { dispatch } = useCart();

  if (isLoading) {
    return (
      <div className="details-loading">
        <h2>Loading Product...</h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="details-loading">
        <h2>Something went wrong!</h2>
      </div>
    );
  }

  return (
    <div className="details-wrapper">

      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back to Shop
      </button>

      <div className="details-container">

        <div className="details-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="details-info">

          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <h3>{product.brand}</h3>

          <p className="rating">
            ⭐ {product.rating} / 5
          </p>

          <h2 className="price">
            ₹{product.price.toLocaleString()}
          </h2>

          <p className="description">
            {product.description ||
              "Crafted with premium quality materials, designed to bring timeless elegance and comfort to your everyday lifestyle."}
          </p>

          <p className="stock">
            <strong>Availability:</strong>{" "}
            {product.stock > 0 ? (
              <span className="in-stock">
                In Stock ({product.stock})
              </span>
            ) : (
              <span className="out-stock">
                Out of Stock
              </span>
            )}
          </p>

          <button
            className="add-cart-btn"
            onClick={() =>
              dispatch({
                type: "ADD_TO_CART",
                payload: product,
              })
            }
          >
            ADD TO CART
          </button>

        </div>

      </div>

    </div>
  );
}