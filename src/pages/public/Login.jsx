import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

function handleSubmit(e) {
  e.preventDefault();

  if (!email.trim() || !password.trim()) {
    alert("Please enter email and password");
    return;
  }

  localStorage.setItem("isAdmin", "true");
  localStorage.setItem("adminEmail", email);

  navigate("/admin");
}
  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Admin Login</h1>

        <p>
          Login to access the Cartify Admin Dashboard
        </p>

        <form onSubmit={handleSubmit} className="login-form">

          <label>Email</label>

          <input
            type="email"
            placeholder="admin@cartify.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">
            Login as Admin
          </button>

        </form>

        

      </div>
    </div>
  );
}