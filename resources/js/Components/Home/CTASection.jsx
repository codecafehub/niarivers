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
                <div className="mt-8">
                    <Link
                        href="/contact"
                        className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-gray-200 hover:scale-105 transform transition-all duration-300 text-lg"
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </section>
    );
}