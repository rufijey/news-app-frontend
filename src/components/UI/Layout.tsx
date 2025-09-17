import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.tsx";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
}
