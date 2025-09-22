import { Link } from "react-router-dom";
import AuthLinks from "../auth/AuthLinks.tsx";
import ThemeToggleButton from "./ThemeToggleButton.tsx";

export default function Navbar() {
    return (
        <nav className="bg-navbar text-navbar flex justify-between items-center px-6 py-3">
            <Link to="/" className="font-heading text-3xl text-primary hover:text-blue-400">
                News
            </Link>
            <div className="flex items-center gap-4 text-lg">
                <AuthLinks />
                <ThemeToggleButton />
            </div>
        </nav>
    );
}
