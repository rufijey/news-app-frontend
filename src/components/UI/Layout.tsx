import { Outlet } from "react-router-dom";
import AdSlot from "./AdSlot.tsx";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />

            <div className="flex flex-grow gap-4 p-6">
                <div className="flex-none">
                    <AdSlot code="ad-frame" />
                </div>

                <main className="flex-grow">
                    <Outlet />
                </main>

                <div className="flex-none">
                    <AdSlot code="ad-frame1" />
                </div>
            </div>
            <Footer />
        </div>
    );
}
