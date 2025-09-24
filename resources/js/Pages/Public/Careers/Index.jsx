// resources/js/Pages/Public/Careers/Index.jsx

import PublicLayout from "@/Layouts/PublicLayout";
import { Head, Link } from "@inertiajs/react";

// --- Static Data (structure remains the same) ---
const staticJobOpenings = [
    {
        id: 1,
        slug: 'senior-project-manager',
        title: 'Senior Project Manager',
        location: 'New York, NY',
        type: 'Full-time',
        excerpt: 'Lead our most ambitious projects from conception to completion, ensuring excellence and client satisfaction.'
    },
    {
        id: 2,
        slug: 'site-superintendent',
        title: 'Site Superintendent',
        location: 'Boston, MA',
        type: 'Full-time',
        excerpt: 'Oversee all on-site activities, manage subcontractors, and ensure the highest standards of safety and quality are met.'
    },
    {
        id: 3,
        slug: 'construction-estimator',
        title: 'Construction Estimator',
        location: 'Remote',
        type: 'Contract',
        excerpt: 'Develop accurate cost estimates for a variety of commercial and residential projects.'
    },
];
// --- End Static Data ---

// REFINED sub-component for a single job listing card
const JobCard = ({ job }) => (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all duration-300 hover:shadow-xl hover:border-blue-300">
        <div className="flex flex-col sm:flex-row justify-between gap-4">

            {/* --- Left Side: Title, Excerpt, and Button --- */}
            <div className="flex-grow">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                    <Link href={`/careers/${job.slug}`} className="hover:text-blue-600 transition-colors">
                        {job.title}
                    </Link>
                </h3>
                {/* Excerpt */}
                <p className="text-gray-600 mb-4">{job.excerpt}</p>
                {/* View Details Button */}
                <div>
                     <Link
                        href={`/careers/${job.slug}`}
                        className="inline-block bg-blue-600 text-white font-bold py-2 px-5 rounded hover:bg-blue-700 transition duration-300 p-2"
                    >
                        View Details
                    </Link>
                </div>
            </div>

            {/* --- Right Side: Metadata Tags (Pills) --- */}
            <div className="flex-shrink-0 flex sm:flex-col items-start sm:items-end gap-2">
                 {/* Location Tag */}
                <span className="flex items-center bg-gray-100 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {job.location}
                </span>
                {/* Job Type Tag */}
                 <span className="flex items-center bg-blue-100 text-blue-700 text-sm font-semibold px-3 py-1 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z" clipRule="evenodd" />
                    </svg>
                    {job.type}
                </span>
            </div>

        </div>
    </div>
);

export default function Index() {
    const hasJobs = staticJobOpenings.length > 0;

    return (
        <PublicLayout>
            <Head title="Careers | Nia Rivers Construction" />

            {/* Hero Section */}
            <div className="relative h-[40vh] bg-gray-900">
                <img src="/images/about-hero.jpg" alt="A team working together" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <div className="relative z-10 h-full flex items-center justify-center">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">Build Your Future With Us</h1>
                </div>
            </div>

            {/* Why Work With Us Section */}
             <section className="py-16 bg-white">
                <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                     <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Join Nia Rivers?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed space-y-4">
                           At Nia Rivers, we're more than a construction company—we're a family. We invest in our employees' growth, foster a culture of collaboration and safety, and believe in building not just great structures, but great careers. Here, your work has a tangible impact on the community, and you'll be supported by a team that values your contribution.
                        </p>
                    </div>
                     <img src="/images/about-hero.jpg" alt="Team members collaborating happily" className="rounded-lg shadow-xl" />
                </div>
            </section>

            {/* Job Listings Section */}
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-4 ">Current Openings</h2>
                    {hasJobs ? (
                        <div className="space-y-6 max-w-4xl mx-auto">
                            {staticJobOpenings.map(job => (
                                <JobCard key={job.id} job={job} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-600 p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
                            <h3 className="text-2xl font-bold mb-2">No Open Positions Currently</h3>
                            <p>
                                We are always looking for talented individuals to join our team. If you believe you would be a great fit, feel free to send us your resume at <a href="mailto:careers@niarivers.com" className="text-blue-600 font-semibold">careers@niarivers.com</a>.
                            </p>
                        </div>
                    )}
                </div>
            </div>

        </PublicLayout>
    );
}