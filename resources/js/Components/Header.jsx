// resources/js/Components/Header.jsx
import { Link } from '@inertiajs/react';

export default function Header() {
    return (
        <header className="
            bg-white shadow-md           // Your existing classes
            fixed top-0 left-0 right-0   //  <-- Pin to the top, full width
            z-50                         //  <-- Ensure it's above other content
            transition-all duration-300  //  <-- (Optional) For smooth future effects
        ">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div>
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-gray-800">Nia Rivers Co</h1>
                    </Link>
                </div>
                <div className="hidden md:flex space-x-6 items-center">
                    <Link href="/about" className="text-gray-600 hover:text-blue-600">About Us</Link>
                    <Link href="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
                    <Link href="/projects" className="text-gray-600 hover:text-blue-600">Our Work</Link>
                    <Link href="/careers" className="text-gray-600 hover:text-blue-600">Careers</Link>
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