import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

export default function AdminLayout() {
  return (
    <div className="admin-container">
      <Sidebar />

      <div className="admin-main">
        <Outlet />
      </div>
    </div>
  );
}