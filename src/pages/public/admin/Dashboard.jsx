import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      category: "Audio",
      price: 4999,
      stock: 24,
      image: "https://picsum.photos/60?random=1",
    },
    {
      id: 2,
      name: "Smart Watch",
      category: "Wearables",
      price: 8999,
      stock: 18,
      image: "https://picsum.photos/60?random=2",
    },
    {
      id: 3,
      name: "Mechanical Keyboard",
      category: "Accessories",
      price: 6499,
      stock: 15,
      image: "https://picsum.photos/60?random=3",
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      category: "Audio",
      price: 2799,
      stock: 32,
      image: "https://picsum.photos/60?random=4",
    },
  ];

  const totalProducts = products.length;

  const lowStock = products.filter((product) => product.stock < 20).length;

  const inventoryValue = products.reduce(
    (total, product) => total + product.price * product.stock,
    0
  );

  function handleLogout() {
    localStorage.removeItem("isAdmin");
    navigate("/login");
  }

  return (
    <div className="dashboard">

      <div className="dashboard-header">
        <div>
          <h1>Inventory Dashboard</h1>
          <p>Manage your Cartify products.</p>
        </div>

        <button className="add-btn">+ Add Product</button>
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
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
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

              <td>{product.category}</td>

              <td>₹{product.price}</td>

              <td>{product.stock}</td>

              <td>
                <button>Edit</button>
                <button style={{ marginLeft: "10px" }}>Delete</button>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

      <div style={{ marginTop: "30px" }}>
        <button onClick={handleLogout}>Logout</button>
      </div>

    </div>
  );
}