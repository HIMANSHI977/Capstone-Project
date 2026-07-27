import { useNavigate, useParams } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { useCart } from "../../context/CartContext";
import "./ProductDetails.css";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: products = [],
    isLoading,
    isError,
  } = useProducts();

  const { dispatch } = useCart();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>Something went wrong.</h2>;
  }

  if (!product) {
    return <h2>Product not found.</h2>;
  }

  return (
    <div className="details-wrapper">
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      <div className="details-container">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="details-info">
          <span className="product-category">
            {product.category}
          </span>

          <h1>{product.name}</h1>

          <h3>{product.brand}</h3>

          <p>⭐ {product.rating}</p>

          <h2>₹{product.price}</h2>

          <p>
            {product.description ||
              "No description available."}
          </p>

          <p>
            Stock: {product.stock}
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