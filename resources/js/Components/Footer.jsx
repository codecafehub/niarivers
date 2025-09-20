// resources/js/Components/Header.jsx
import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-gray-600">
                    &copy; {new Date().getFullYear()} Nia Rivers. All rights reserved.||
                </div>
                <div className="space-x-6">
                    <Link href="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link>
                    <Link href="/terms" className="text-gray-600 hover:text-blue-600">Terms of Service</Link>
                    <Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</Link>
                </div>
            </div>
        </footer>
    );
}