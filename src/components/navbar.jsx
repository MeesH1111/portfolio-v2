import { Link } from "react-router";
import logo from "../assets/logo.png";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center text-[1.5em] p-[0.5em] mx-[1em] mb-[1em] max-sm:flex-col max-sm:gap-4 max-sm:underline">
            <div>
                <Link to="/">
                    <img src={logo} alt="Portfolio home" width="176" className="hover:-translate-y-1 duration-200 ease-[cubic-bezier(0.78,0,0.22,1)]" />
                </Link>
            </div>

            <div className="flex gap-6">
                <Link to="/about" className="hover:-translate-y-1 duration-200 ease-[cubic-bezier(0.78,0,0.22,1)]">About</Link>
                <Link to="/projects" className="hover:-translate-y-1 duration-200 ease-[cubic-bezier(0.78,0,0.22,1)]">Projects</Link>
            </div>
        </nav>
    )
}