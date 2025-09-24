// resources/js/Components/Header.jsx
import { Link } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import { useModal } from '@/Context/ModalContext'; // <-- 1. Import the hook

export default function Header() {
    const { openModal } = useModal(); // <-- 2. Get the openModal function

    return (
        <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                 <div>
                    <Link href="/">
                        <h1 className="text-2xl font-bold text-gray-800">Nia Rivers Co</h1>
                    </Link>
                </div>
                <div className="hidden md:flex space-x-8 items-center">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About Us</NavLink>
                    <NavLink href="/contact">Contact Us</NavLink>
                    <NavLink href="/services">Services</NavLink>
                    <NavLink href="/projects">Our Work</NavLink>
                    {/* <NavLink href="/careers">Careers</NavLink> */}
                </div>

                 {/* 3. These are now buttons that trigger an action */}
                <div className="hidden md:flex space-x-4">
                     <button
                        onClick={() => openModal('register')}
                        
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Join Us
                    </button>
                    <button
                        onClick={() => openModal('login')}
                        className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
                    >
                        Log In
                    </button>
                </div>
            </nav>
        </header>
    );
}