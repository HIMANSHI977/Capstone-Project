import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/useProducts";
import { useCart } from "../../context/CartContext";

export default function ProductDetails() {

  const { id } = useParams();

  const { data: product, isLoading, isError } = useProduct(id);

  const { dispatch } = useCart();

  if (isLoading) return <h2>Loading...</h2>;

  if (isError) return <h2>Something went wrong!</h2>;

  return (
    <div className="details-container">

      <div className="details-image">

        <img
          src={product.image}
          alt={product.name}
        />

      </div>

      <div className="details-info">

        <span>{product.category}</span>

        <h1>{product.name}</h1>

        <h3>{product.brand}</h3>

        <p>⭐ {product.rating}</p>

        <h2>₹{product.price}</h2>

        <p>{product.description}</p>

        <p>
          <strong>Stock:</strong> {product.stock}
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
          Add to Cart
        </button>

      </div>

    </div>
  );
}