import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-navbar text-navbar flex flex-col md:flex-row justify-between items-center px-6 py-4 mt-6">
            <div className="text-sm text-gray-400">
                © {new Date().getFullYear()} News. All rights reserved.
            </div>
            <div className="flex items-center gap-4 mt-2 md:mt-0">
                <Link to="/about" className="hover:text-blue-400">About</Link>
                <Link to="/contact" className="hover:text-blue-400">Contact</Link>
            </div>
        </footer>
    );
}
