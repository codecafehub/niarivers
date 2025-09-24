// resources/js/Components/Home/PricingSection.jsx
import { Link } from '@inertiajs/react';
import { useModal } from '@/Context/ModalContext';
// --- Static Data ---
// We will structure all the pricing info in an array of objects.
// This makes it easy to manage and loop through.
const pricingTiers = [
    {
        name: 'Student',
        price: '3,000',
        slug: 'student',
        frequency: '/ YEAR',
        features: ['Access to community forums', 'Student networking events', 'Monthly newsletter'],
        isFeatured: false,
    },
    {
        name: 'Graduate',
        price: '7,500',
        slug: 'graduate',
        frequency: '/ YEAR',
        features: ['All Student benefits', 'Access to job board', 'Member-only webinars'],
        isFeatured: false,
    },
    {
        name: 'Associate',
        price: '10,000',
        slug: 'associate',
        frequency: '/ YEAR',
        features: ['All Graduate benefits', 'Discount on conferences', 'Digital publications'],
        isFeatured: false,
    },
    {
        name: 'Full Membership',
        price: '20,000',
        slug: 'full-membership',
        frequency: '/ YEAR',
        features: ['All Associate benefits', 'Voting rights', 'Professional certification access', 'Featured directory listing'],
        isFeatured: true, // This will make it stand out
    },
    {
        name: 'Fellow',
        price: '30,000',
        slug: 'fellow',
        frequency: '/ YEAR',
        features: ['All Full Member benefits', 'Eligible for board positions', 'Exclusive Fellow events'],
        isFeatured: false,
    },
    {
        name: 'Architectural Technologist',
        price: '3,000',
        slug: 'architectural-technologist',
        frequency: '/ YEAR',
        features: ['Specialized resources', 'Technologist forums', 'Monthly newsletter'],
        isFeatured: false,
    },
];

// Reusable component for the checkmark icon
const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);


// Reusable sub-component for a single pricing card
const PricingCard = ({ tier }) => {
     const { openModal } = useModal();
    const cardBaseClasses = "border rounded-lg p-8 flex flex-col transition-transform duration-300 hover:scale-105";
    const cardNormalClasses = "bg-white border-gray-200 shadow-md";
    const cardFeaturedClasses = "bg-gray-800 text-white border-blue-600 shadow-2xl relative";

    const buttonBaseClasses = "w-full text-center font-bold py-3 px-6 rounded transition-colors duration-300 mt-auto";
    const buttonNormalClasses = "bg-blue-600 text-white hover:bg-blue-700";
    const buttonFeaturedClasses = "bg-white text-blue-600 hover:bg-gray-200";

    return (
        
        <div className={`${cardBaseClasses} ${tier.isFeatured ? cardFeaturedClasses : cardNormalClasses}`}>
             {tier.isFeatured && (
                <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">
                    Best Value
                </div>
            )}
            <h3 className="text-2xl font-semibold text-center">{tier.name}</h3>
            <div className="mt-4 text-center">
                <span className="text-5xl font-extrabold">₦{tier.price}</span>
                <span className={`text-lg font-medium ${tier.isFeatured ? 'text-gray-300' : 'text-gray-500'}`}>{tier.frequency}</span>
            </div>
            <ul className={`mt-6 space-y-3 text-lg ${tier.isFeatured ? 'text-gray-300' : 'text-gray-600'}`}>
                {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <CheckIcon />
                        <span className="ml-3">{feature}</span>
                    </li>
                ))}
            </ul>
            {/* <Link href="/join" className={`${buttonBaseClasses} ${tier.isFeatured ? buttonFeaturedClasses : buttonNormalClasses}`}>
                Join Now
            </Link> */}
            <button
                onClick={() => openModal('register', { tier: tier.slug })} // Pass tier slug
                className={`${buttonBaseClasses} ${tier.isFeatured ? buttonFeaturedClasses : buttonNormalClasses}`}
            >
                Join Now
            </button>
        </div>

        
    );
};


export default function PricingSection() {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Membership Tiers</h2>
                    <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
                        Choose the plan that's right for your professional journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                    {pricingTiers.map((tier) => (
                        <PricingCard key={tier.name} tier={tier} />
                    ))}
                </div>
            </div>
        </section>
    );
}