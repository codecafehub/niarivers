// resources/js/Components/Header.jsx
import { Link } from '@inertiajs/react';
import NavLink from '@/Components/NavLink';
import { useModal } from '@/Context/ModalContext';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import logo from '@/Images/logo.jpg';
import logo from '../../../public/images/logo.jpg';

// Icons for the mobile menu button
const Bars3Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
);
const XMarkIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
);


export default function Header() {
    const { openModal } = useModal();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => document.body.style.overflow = 'auto';
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Animation variants for Framer Motion
    const menuVariants = {
        hidden: { x: '100%' }, // Start off-screen to the right
        visible: { x: '0%', transition: { type: 'tween', ease: 'circOut' } },
        exit: { x: '100%', transition: { type: 'tween', ease: 'circIn', duration: 0.3 } }
    };

    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
        exit: { opacity: 0, transition: { duration: 0.3 } }
    };

    return (
        <>
            <header className="bg-white/80 backdrop-blur-sm shadow-md fixed top-0 left-0 right-0 z-40">
                <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                    {/* Logo */}
                    <div>
                       <Link href="/" className="flex items-center space-x-2">
                             <img src={logo} alt="NIA Rivers" className="h-14 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8 items-center">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/about">About Us</NavLink>
                        <NavLink href="/contact">Contact Us</NavLink>
                        <NavLink href="/blog">Blog</NavLink>
                        {/* <NavLink href="/projects">Our Work</NavLink> */}
                        <NavLink href="/donation">Donation</NavLink>
                    </div>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex space-x-4">
                        <button onClick={() => openModal('register')} className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">Join Us</button>
                        <button onClick={() => openModal('login')} className="bg-gray-700 text-white font-bold py-2 px-4 rounded hover:bg-gray-800">Log In</button>
                    </div>
                    
                    {/* Mobile Menu Button (Hamburger) */}
                    <div className="md:hidden">
                         {!isMenuOpen && (
                             <button onClick={toggleMenu} className="z-50 relative">
                                <Bars3Icon />
                            </button>
                        )}
                    </div>
                </nav>
            </header>

             {/* --- Animated Mobile Menu --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/50 z-40"
                        />
                        
                        {/* Side Panel */}
                        <motion.div
                            variants={menuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl flex flex-col"
                        >
                            {/* Panel Header */}
                            <div className="flex justify-between items-center p-6 border-b">
                                <Link href="/" onClick={toggleMenu}><h1 className="text-xl font-bold">Nia Rivers Co</h1></Link>
                                <button onClick={toggleMenu}><XMarkIcon /></button>
                            </div>

                             {/* Panel Content */}
                            <div className="flex flex-col items-start p-8 space-y-6 text-xl text-gray-700 flex-grow overflow-y-auto">
                                <NavLink href="/" onClick={toggleMenu}>Home</NavLink>
                                <NavLink href="/about">About Us</NavLink>
                                <NavLink href="/contact">Contact Us</NavLink>
                                <NavLink href="/blog">Blog</NavLink>
                                {/* <NavLink href="/projects">Our Work</NavLink> */}
                                <NavLink href="/donation">Donation</NavLink>
                            </div>
                            
                            {/* Panel Footer (Auth Buttons) */}
                             <div className="p-6 border-t mt-auto flex flex-col space-y-4">
                                <button
                                    onClick={() => { openModal('register'); toggleMenu(); }}
                                    className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700"
                                >Join Us</button>
                                <button
                                    onClick={() => { openModal('login'); toggleMenu(); }}
                                    className="w-full bg-gray-700 text-white font-bold py-3 px-6 rounded hover:bg-gray-800"
                                >Log In</button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}