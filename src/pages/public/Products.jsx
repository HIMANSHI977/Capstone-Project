import { useState, useEffect } from "react";
import ProductCard from "../../Components/ProductCard";
import { useProducts } from "../../hooks/useProducts";
import "./Products.css";
export default function Products() {
  const { data = [], isLoading, isError, error } = useProducts();

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");

  // Debounced Search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

 if (isLoading) {
  return (
    <div className="products-grid">
      {[...Array(8)].map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-image"></div>

          <div className="skeleton-text short"></div>

          <div className="skeleton-text"></div>

          <div className="skeleton-text"></div>

          <div className="skeleton-button"></div>
        </div>
      ))}
    </div>
  );
}
if (isError) {
  return (
    <div className="error-state">
      <h2>⚠️ Something went wrong</h2>
      <p>Please try again later.</p>
    </div>
  );
}

  // Categories
  const categories = [
    "All",
    ...new Set(data.map((product) => product.category)),
  ];

  // Search + Category Filter
  let filteredProducts = data.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  // Sorting
  if (sortBy === "low-high") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortBy === "high-low") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortBy === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="products-container">

      <div className="products-header">

        <h1>Our Products</h1>

        <div className="filters">

          <input
            type="text"
            placeholder="🔍 Search Products..."
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="category-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option
                key={cat}
                value={cat}
              >
                {cat}
              </option>
            ))}
          </select>

          <select
            className="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="low-high">
              Price: Low → High
            </option>

            <option value="high-low">
              Price: High → Low
            </option>

            <option value="rating">
              Highest Rating
            </option>
          </select>

        </div>

      </div>

      <p className="product-count">
Showing {filteredProducts.length} of {data.length} Products      </p>

      {filteredProducts.length === 0 ? (

        <div className="empty-state">

  <h2>😕 No Products Found</h2>

  <p>
    Try changing the search keyword or category.
  </p>

</div>

      ) : (

        <div className="products-grid">

          {filteredProducts.map((product) => (
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