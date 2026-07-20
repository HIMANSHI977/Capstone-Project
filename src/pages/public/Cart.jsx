import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, dispatch } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <div className="cart-item" key={item.id}>
          <img
            src={item.image}
            alt={item.name}
            className="cart-image"
          />

          <div className="cart-info">
            <h3>{item.name}</h3>

            <p>₹{item.price}</p>

            <div className="cart-quantity">

              <button
                onClick={() =>
                  dispatch({
                    type: "DECREASE",
                    payload: item.id,
                  })
                }
              >
                -
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
              className="remove-btn"
              onClick={() =>
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="cart-total">
        <h2>Total: ₹{totalPrice.toLocaleString()}</h2>
      </div>
    </div>
  );
}