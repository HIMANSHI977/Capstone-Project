import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("isAdmin");

    navigate("/login");
  }

  return (
    <>
      <h1>Admin Dashboard</h1>

      <button onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}