// resources/js/Components/Home/AboutSection.jsx

import { Link } from '@inertiajs/react';

const aboutImageUrl = "images/project.jpg";

export default function AboutSection() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="wow animate__animated animate__fadeInLeft hover:scale-105 transition-transform duration-300 cursor-pointer h-200 md:h-300 lg:h-400">
                        <img
                            src={aboutImageUrl}
                            alt="Nia Rivers team planning a construction project"
                            className="rounded-lg shadow-xl w-full"
                        />
                    </div>

                    {/* Text Content Column */}
                    <div className="wow animate__animated animate__fadeInRight">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Building on a Foundation of Trust
                        </h2>
                        <p className="text-xl text-gray-600 mb-6 italic">
                            Our Commitment to Quality, Safety, and Integrity.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Nia Rivers is more than just a construction company; we are a team of dedicated professionals committed to building lasting relationships with our clients and communities. Our approach is founded on transparency, collaboration, and a relentless pursuit of excellence.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            From initial planning to final handover, we manage every detail to ensure your project is not only visually stunning but also built to the highest standards of safety and durability.
                        </p>
                       
                        <p className="text-gray-700 leading-relaxed mt-4">
                            Join us on a journey where your vision meets our expertise, resulting in spaces that inspire and endure.
                        </p>


                        <div className="text-center mt-12">
                             <Link
                                href="/about" // This links to the main About Us page
                                className="inline-flex items-center gap-x-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                            >
                                <span>Read More About Us</span>
                                
                                {/* Arrow Icon */}
                                <svg xmlns="http://www.w.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}