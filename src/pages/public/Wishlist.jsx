import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";
import ProductCard from "../../Components/ProductCard";
import "./Wishlist.css";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div className="wishlist-container">

      <div className="wishlist-header">

        <div className="wishlist-title">

          <h1>My Wishlist</h1>

          <p>
            Save your favourite pieces for later.
          </p>

        </div>

        <span className="wishlist-count">
          {wishlist.length} {wishlist.length === 1 ? "Item" : "Items"}
        </span>

      </div>

      {wishlist.length === 0 ? (

        <div className="wishlist-empty">

          <h2>No Products Added to Wishlist</h2>

          <p>
            You haven't added any products to your wishlist yet.
            Browse our latest collection and save your favourites.
          </p>

          <Link
            to="/products"
            className="continue-shopping-btn"
          >
            CONTINUE SHOPPING
          </Link>

        </div>

      ) : (

        <div className="wishlist-grid">

          {wishlist.map((product) => (

            <ProductCard
              key={product.id}
              product={product}
            />

          ))}

        </div>

      )}

    </div>
  );
}