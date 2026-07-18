import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("isAdmin", "true");

    navigate("/admin");
  }

  return (
    <div>
      <h1>Login Page</h1>

      <button onClick={handleLogin}>
        Login as Admin
      </button>
    </div>
  );
}