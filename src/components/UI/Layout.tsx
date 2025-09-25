import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex flex-grow gap-4 p-6">
                <main className="flex-grow">
                    <Outlet />
                </main>
            </div>
            <Footer />
        </div>
    );
}
