import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="empty-cart">

        <h1>Shopping Bag</h1>

        <p>Your shopping bag is currently empty.</p>

        <Link
          to="/products"
          className="shop-btn"
        >
          CONTINUE SHOPPING
        </Link>

      </div>
    );
  }

  return (
    <div className="cart-container">

      <div className="cart-header">

        <h1>Shopping Bag</h1>

        <span>
          {cart.length} {cart.length === 1 ? "Item" : "Items"}
        </span>

      </div>

      <div className="cart-layout">

        {/* LEFT */}

        <div className="cart-products">

          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
                className="cart-image"
              />

              <div className="cart-info">

                <div>

                  <h2>{item.name}</h2>

                  <p className="cart-category">
                    {item.category}
                  </p>

                  <p className="cart-price">
                    ₹{item.price.toLocaleString()}
                  </p>

                </div>

                <div className="cart-actions">

                  <div className="cart-quantity">

                    <button
                      onClick={() =>
                        dispatch({
                          type: "DECREASE",
                          payload: item.id,
                        })
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        dispatch({
                          type: "INCREASE",
                          payload: item.id,
                        })
                      }
                    >
                      +
                    </button>

                  </div>

                  <button
                    className="remove-cart-btn"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_CART",
                        payload: item.id,
                      })
                    }
                  >
                    REMOVE
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* RIGHT */}

        <div className="cart-summary">

          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Subtotal</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>

          <div className="summary-row">
            <span>Shipping</span>
            <span>FREE</span>
          </div>

          <div className="summary-row">
            <span>Tax</span>
            <span>₹0</span>
          </div>

          <div className="summary-row total">
            <span>Total</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>

          <button className="checkout-btn">
            PROCEED TO CHECKOUT
          </button>

        </div>

      </div>

    </div>
  );
}