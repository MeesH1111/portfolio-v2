import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center text-[1.5em] p-[0.5em] mx-[1em] mb-[1em]">
            <div>
                <Link to="/" title="">
                    <img src="src\assets\logo.png" width="176px" className="hover:-translate-y-1 duration-200 ease-[cubic-bezier(0.78,0,0.22,1)]" />
                </Link>
            </div>

            <div className="flex gap-6">
                <Link to="/about" title="">About</Link>
                <Link to="/projects" title="">Projects</Link>
            </div>
        </nav>
    )
}