import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside>
      <h2>Admin Panel</h2>

      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
      </ul>
    </aside>
  );
}