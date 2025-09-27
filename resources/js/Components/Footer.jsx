// resources/js/Components/Footer.jsx
import { Link } from '@inertiajs/react';
// import Logo from './Logo'; // Assuming you have a Logo component

// A small reusable component for social icons
const SocialIcon = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
        {children}
    </a>
);

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300">
            <div className="container mx-auto px-6 py-12">
                
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    
                    {/* Column 1: Logo & About */}
                    <div className="md:col-span-4 lg:col-span-2">
                        <Link href="/" className="flex items-center gap-x-2">
                            {/* <Logo className="h-10 w-auto text-white" /> */}
                            <span className="text-2xl font-bold text-white">Nia Rivers Chapter</span>
                        </Link>
                        <p className="mt-4 text-gray-400 max-w-sm">
                            Building a legacy of quality and integrity. We are a premier construction firm dedicated to bringing visions to life.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="font-semibold text-white uppercase tracking-wider">Navigation</h3>
                        <div className="mt-4 flex flex-col space-y-2">
                            <Link href="/about" className="hover:text-white">About Us</Link>
                            <Link href="/contact" className="hover:text-white">Contact Us</Link>
                            <Link href="/contact" className="hover:text-white">Blog</Link>
                            <Link href="/donation" className="hover:text-white">Donation</Link>
                        </div>
                    </div>

                    {/* Column 3: Contact */}
                     <div>
                        <h3 className="font-semibold text-white uppercase tracking-wider">Contact</h3>
                        <div className="mt-4 space-y-2">
                            <p>123 Construction Ave, Metropolis</p>
                            <p>contact@niarivers.com</p>
                            <p>(123) 456-7890</p>
                        </div>
                    </div>
                    
                    {/* Column 4: Social */}
                    <div className="md:col-span-2 lg:col-span-1">
                         <h3 className="font-semibold text-white uppercase tracking-wider">Connect With Us</h3>
                        <div className="mt-4 flex space-x-5">
                             <SocialIcon href="https://linkedin.com">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                             </SocialIcon>
                             <SocialIcon href="https://twitter.com">
                                 <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.616 1.911 2.396 3.227 4.534 3.266-1.79 1.487-4.075 2.305-6.527 2.305-1.35 0-2.457-.078-3.328-.198 2.287 1.532 4.965 2.407 7.795 2.407 9.172 0 14.34-7.854 13.921-14.771z"/></svg>
                             </SocialIcon>
                              <SocialIcon href="https://facebook.com">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </SocialIcon>
                            <SocialIcon href="https://instagram.com">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.012 3.584-.07 4.85c-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.85s.012-3.584.07-4.85c.148-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z"/></svg>
                            </SocialIcon>
                            <SocialIcon href="https://youtube.com">
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                            </SocialIcon>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center text-sm">
                    <p className="text-gray-400">
                         &copy; {new Date().getFullYear()} Nia Rivers Co. All rights reserved.
                    </p>
                     <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}