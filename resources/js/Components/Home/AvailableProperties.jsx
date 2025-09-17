// resources/js/Components/Home/AvailableProperties.jsx
import { Link } from '@inertiajs/react';

// --- Sub-component for a single Property Listing ---
const PropertyCard = ({ property }) => {
    // Dynamically set the color of the status badge
    const statusClasses = {
        'For Sale': 'bg-green-600 text-white',
        'Coming Soon': 'bg-blue-600 text-white',
        'Under Contract': 'bg-yellow-500 text-white',
    };

    return (
        <div className="group bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
            <Link href={`/properties/${property.slug}`}>
                <div className="relative">
                    {/* Status Badge */}
                    <div className={`absolute top-4 left-4 z-10 px-3 py-1 text-sm font-semibold rounded-full ${statusClasses[property.status] || 'bg-gray-600 text-white'}`}>
                        {property.status}
                    </div>

                    <img
                        src={property.imageUrl}
                        alt={property.address}
                        className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                </div>

                <div className="p-5">
                    <h3 className="text-2xl font-bold text-gray-800">{property.price}</h3>
                    <p className="text-gray-600 mt-1 truncate">{property.address}</p>

                    {/* Stats with Icons */}
                    <div className="flex items-center justify-between text-gray-700 mt-4 border-t pt-4">
                        <span className="flex items-center space-x-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor"><path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4z" /><path d="M3 10h14v7a1 1 0 01-1 1H4a1 1 0 01-1-1v-7z" /><path d="M8 2h4a1 1 0 011 1v2a1 1 0 01-1 1H8a1 1 0 01-1-1V3a1 1 0 011-1z" /></svg>
                             <span>{property.beds} Beds</span>
                        </span>
                        <span className="flex items-center space-x-2">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.383V20m0-13.617a2.25 2.25 0 00-4.5 0v13.617a2.25 2.25 0 004.5 0V6.383zm4.5 1.575a2.25 2.25 0 00-4.5 0v12.042a2.25 2.25 0 004.5 0V7.958z" /></svg>
                            <span>{property.baths} Baths</span>
                        </span>
                        <span className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H4zm.293 3.293a1 1 0 011.414 0L10 9.586l4.293-4.293a1 1 0 111.414 1.414L11.414 11l4.293 4.293a1 1 0 01-1.414 1.414L10 12.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 11 4.293 6.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                            <span>{property.sqft} sqft</span>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};


// --- Main Section Component ---
export default function AvailableProperties({ properties }) {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Available Properties</h2>
                    <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
                        Explore our selection of move-in ready and upcoming properties built to the highest standards.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map(property => (
                        <PropertyCard key={property.id} property={property} />
                    ))}
                </div>

                <div className="text-center mt-12">
                        <Link
                        href="/properties"
                        className="bg-transparent border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg"
                    >
                        View All Listings
                    </Link>
                </div>
            </div>
        </section>
    );
}