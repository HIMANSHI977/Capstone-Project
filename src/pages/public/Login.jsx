import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("isAdmin", "true");
    navigate("/admin");
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Admin Sign In</h1>

        <p>
          This is a mock login — any email/password combination signs you in
          as an admin.
        </p>

        <label>Email</label>
        <input
          type="email"
          placeholder="admin@cartify.com"
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="anything works"
        />

        <button onClick={handleLogin}>
          Login as Admin
        </button>
      </div>
    </div>
  );
}