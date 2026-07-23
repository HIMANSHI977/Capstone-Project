import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Dashboard.css'
import { useProducts } from "../../../hooks/useProducts";
import { useAddProduct } from "../../../hooks/useAddProduct";
import { useUpdateProduct } from "../../../hooks/useUpdateProduct";
import { useDeleteProduct } from "../../../hooks/useDeleteProduct";

export default function Dashboard() {
  const navigate = useNavigate();

  const { data: products = [], isLoading } = useProducts();

  const addMutation = useAddProduct();
  const updateMutation = useUpdateProduct();
  const deleteMutation = useDeleteProduct();

  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    category: "",
    price: "",
    stock: "",
    rating: "",
    image: "",
    description: "",
  });

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const totalProducts = products.length;

  const lowStock = products.filter(
    (item) => Number(item.stock) < 20
  ).length;

  const inventoryValue = products.reduce(
    (total, item) =>
      total +
      Number(item.price || 0) *
      Number(item.stock || 0),
    0
  );

  function handleLogout() {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  }

  function clearForm() {
    setFormData({
      name: "",
      brand: "",
      category: "",
      price: "",
      stock: "",
      rating: "",
      image: "",
      description: "",
    });

    setEditingId(null);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleAdd() {
    clearForm();
    setShowModal(true);
  }

  function handleEdit(product) {
    setEditingId(product.id);

    setFormData({
      name: product.name,
      brand: product.brand,
      category: product.category,
      price: product.price,
      stock: product.stock,
      rating: product.rating,
      image: product.image,
      description: product.description,
    });

    setShowModal(true);
  }

  function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Delete this product?"
    );

    if (!confirmDelete) return;

    deleteMutation.mutate(id);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const product = {
      ...formData,
      price: Number(formData.price),
      stock: Number(formData.stock),
      rating: Number(formData.rating),
    };

    if (editingId) {
      updateMutation.mutate({
        id: editingId,
        product,
      });
    } else {
      addMutation.mutate(product);
    }

    setShowModal(false);
    clearForm();
  }
  return (
  <div className="dashboard">

    <div className="dashboard-header">

      <div>
        <h1>Inventory Dashboard</h1>
        <p>Manage your Cartify products</p>
      </div>

      <div className="dashboard-actions">

        <button
          className="add-btn"
          onClick={handleAdd}
        >
          + Add Product
        </button>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>

    <div className="dashboard-cards">

      <div className="card">
        <h3>Total Products</h3>
        <h2>{totalProducts}</h2>
      </div>

      <div className="card">
        <h3>Low Stock</h3>
        <h2>{lowStock}</h2>
      </div>

      <div className="card">
        <h3>Inventory Value</h3>
        <h2>₹{inventoryValue.toLocaleString()}</h2>
      </div>

    </div>

    <table className="products-table">

      <thead>

        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Brand</th>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Rating</th>
          <th>Actions</th>
        </tr>

      </thead>

      <tbody>

        {products.map((product) => (

          <tr key={product.id}>

            <td>
              <img
                src={product.image}
                alt={product.name}
                width="60"
              />
            </td>

            <td>{product.name}</td>

            <td>{product.brand}</td>

            <td>{product.category}</td>

            <td>₹{product.price}</td>

            <td>

              {Number(product.stock) < 20 ? (

                <span style={{ color: "red", fontWeight: "bold" }}>
                  {product.stock}
                </span>

              ) : (

                product.stock

              )}

            </td>

            <td>⭐ {product.rating}</td>

            <td>

              <button
                type="button"
                className="edit-btn"
                onClick={() => handleEdit(product)}
              >
                Edit
              </button>

              <button
                type="button"
                className="delete-btn"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

    {showModal && (

      <div className="modal-overlay">

        <div className="modal">

          <h2>
            {editingId ? "Edit Product" : "Add Product"}
          </h2>

          <form
            className="product-form"
            onSubmit={handleSubmit}
          >

            <input
              name="name"
              placeholder="Product Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              name="brand"
              placeholder="Brand"
              value={formData.brand}
              onChange={handleChange}
              required
            />

            <input
              name="category"
              placeholder="Category"
              value={formData.category}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="stock"
              placeholder="Stock"
              value={formData.stock}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              step="0.1"
              name="rating"
              placeholder="Rating"
              value={formData.rating}
              onChange={handleChange}
              required
            />

            <input
              name="image"
              placeholder="Image URL"
              value={formData.image}
              onChange={handleChange}
              required
            />

            <textarea
              rows="4"
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
            />

            <div className="modal-buttons">

              <button
                type="button"
                className="cancel-btn"
                onClick={() => {
                  clearForm();
                  setShowModal(false);
                }}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="save-btn"
              >
                {editingId ? "Update Product" : "Save Product"}
              </button>

            </div>

          </form>

        </div>

      </div>

    )}

  </div>
);
}