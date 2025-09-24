// resources/js/Pages/Public/Services/Index.jsx

import PublicLayout from "@/Layouts/PublicLayout";
import { Head, Link } from "@inertiajs/react";
import CTASection from "@/Components/Home/CTASection";
import Icon from '@/Components/Icon'; // Import our new reusable component

// --- Static Data (using the simple iconName string) ---
const staticServices = [
    {
        id: 1,
        slug: 'general-contracting',
        title: 'General Contracting',
        short_description: 'We manage every aspect of your project, from initial planning to final handover, ensuring quality and adherence to budget and schedule.',
        iconName: 'wrench-screwdriver',
    },
    {
        id: 2,
        slug: 'design-build',
        title: 'Design-Build',
        short_description: 'Our integrated design-build approach streamlines your project, fostering collaboration and innovation for a seamless workflow from concept to completion.',
        iconName: 'building-office',
    },
    {
        id: 3,
        slug: 'construction-management',
        title: 'Construction Management',
        short_description: 'Leverage our expertise for professional oversight on scheduling, cost control, safety, and quality assurance for your complex projects.',
        iconName: 'clipboard-document-list',
    },
    {
        id: 4,
        slug: 'pre-construction-planning',
        title: 'Pre-Construction Planning',
        short_description: 'We lay the groundwork for success with detailed feasibility studies, site analysis, and conceptual budgeting to mitigate risks before breaking ground.',
        iconName: 'chart-pie',
    },
    {
        id: 5,
        slug: 'safety-consulting',
        title: 'Safety Consulting',
        short_description: 'Our certified safety professionals ensure your project adheres to the strictest safety standards, protecting your team and investment.',
        iconName: 'shield-check',
    },
    {
        id: 6,
        slug: 'community-engagement',
        title: 'Community Engagement',
        short_description: 'We believe in building more than just structures. We build communities through transparent communication and local engagement.',
        iconName: 'user-group',
    }
];
// --- End Static Data ---

const ServiceCard = ({ service }) => (
    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
        <div className="flex-grow">
            {/* Render the icon using our Icon component */}
            <Icon name={service.iconName} />

            <h3 className="text-2xl font-bold text-gray-800 mt-4 mb-2">{service.title}</h3>
            <p className="text-gray-600 ">{service.short_description}</p>
        </div>
        <div className="mt-6">
            <Link
                href={`/services/${service.slug}`}
                className="font-semibold text-blue-600 hover:text-blue-800"
            >
                Learn More &rarr;
            </Link>
        </div>
    </div>
);


export default function Index() {
    return (
        <PublicLayout>
            <Head title="Our Services | Nia Rivers Construction" />

            {/* Hero Section */}
            <div className="relative h-[40vh] bg-gray-900">
                 <img
                    src="/images/about-hero.jpg" // Add your image here
                    alt="Blueprint of a construction project"
                    className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 h-full flex items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
                        Our Services
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                         <h2 className="text-3xl font-bold text-gray-800">What We Do</h2>
                         <p className="mt-4 text-lg text-gray-600">
                            At Nia Rivers, we offer a comprehensive suite of construction services tailored to meet the unique demands of each project. From the initial blueprint to the final build, our team provides expert guidance and unparalleled craftsmanship.
                         </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {staticServices.map((service) => (
                            <ServiceCard key={service.id} service={service} />
                        ))}
                    </div>
                </div>
            </div>

            <CTASection />
        </PublicLayout>
    );
}