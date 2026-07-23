import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

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

      <div className="login-container">

        <div className="login-title">

          <h1>Welcome Back</h1>

          <p>
            Sign in to access the Velora Admin Dashboard
          </p>

        </div>

        <form
          className="login-form"
          onSubmit={handleSubmit}
        >

          <div className="input-group">

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

          </div>

          <div className="input-group">

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

          </div>

          <button
            type="submit"
            className="login-btn"
          >
            SIGN IN
          </button>

        </form>

        <div className="login-footer">

          <p>
            Secure access to the Velora Admin Panel
          </p>

        </div>

      </div>

    </div>
  );
}