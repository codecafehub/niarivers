// resources/js/Components/Home/AboutSection.jsx

import { Link } from '@inertiajs/react';

const aboutImageUrl = "images/about-hero.jpg";

export default function AboutSection() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Column */}
                    <div className="wow animate__animated animate__fadeInLeft">
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


                        <div className="text-center mt-12">
                            <Link
                                href="/about"
                                className="bg-transparent border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg"
                            >
                                More About Our Company
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}