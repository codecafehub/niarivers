// resources/js/Components/Header.jsx

import { Link } from '@inertiajs/react'; // You can keep this for the logo and contact button
import NavLink from '@/Components/NavLink'; // <-- 1. Import our new component

export default function Header() {
    return (
        <header className="
            bg-white shadow-md
            fixed top-0 left-0 right-0
            z-50
            transition-all duration-300
        ">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div>
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-gray-800">Nia Rivers Co</h1>
                    </Link>
                </div>

                {/* 2. Replace the old Links with our clean NavLink component */}
                <div className="hidden md:flex space-x-8 items-center">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About Us</NavLink>
                    <NavLink href="/services">Services</NavLink>
                    <NavLink href="/projects">Our Work</NavLink>
                    <NavLink href="/careers">Careers</NavLink>
                </div>

                <div>
                     <Link
                        href="/contact"
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </nav>
        </header>
    );
}