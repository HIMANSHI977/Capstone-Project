import { createContext, useContext, useReducer } from "react";

const WishlistContext = createContext();

function wishlistReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      if (state.find(item => item.id === action.payload.id)) {
        return state;
      }

      return [...state, action.payload];

    case "REMOVE_FROM_WISHLIST":
      return state.filter(item => item.id !== action.payload);

    default:
      return state;
  }
}

export function WishlistProvider({ children }) {
  const [wishlist, dispatch] = useReducer(
    wishlistReducer,
    []
  );

  return (
    <WishlistContext.Provider
      value={{ wishlist, dispatch }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}