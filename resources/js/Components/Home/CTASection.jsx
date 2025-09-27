// resources/js/Components/Home/CTASection.jsx
import { Link } from '@inertiajs/react';

export default function CTASection() {
    return (
        <section className="bg-blue-600">
            <div className="container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-extrabold text-white">
                    Ready to build your next project?
                </h2>
                <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
                    Let's discuss how Nia Rivers can bring your vision to life. We're committed to partnership and excellence from the ground up.
                </p>
                

                <div className="text-center mt-12">
                    <Link
                        href="/contactut" // This links to the main About Us page
                        className="inline-flex items-center gap-x-2 bg-white text-blue-600 font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 hover:text-white"
                    >
                        <span>Get In Touch</span>
                        
                        {/* Arrow Icon */}
                        <svg xmlns="http://www.w.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                </div>

                
            </div>
        </section>
    );
}