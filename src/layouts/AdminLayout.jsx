import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

export default function AdminLayout() {
  return (
    <div className="admin-layout">
      <Sidebar />

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}