// resources/js/Components/Home/HomeServices.jsx
import { Link } from '@inertiajs/react';

export default function HomeServices({ services }) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
                <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                    We provide a range of expert services to meet the diverse needs of our clients.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            {service.icon} {/* Display the SVG icon */}
                            <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.short_description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                            <Link
                                href="/services" // Link to a future services page
                                className="bg-transparent border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg"
                            >
                                 Learn More About Our Services
                            </Link>
                        </div>
            </div>
        </section>
    );
}