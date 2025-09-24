// resources/js/Pages/Public/Projects/Index.jsx

import PublicLayout from "@/Layouts/PublicLayout";
import { Head, Link } from "@inertiajs/react";

// --- Static Data ---
// We will mimic the structure of our database and add some placeholder data.
const staticProjects = [
    { id: 1, slug: 'downtown-medical-center', title: 'Downtown Medical Center', category: 'Commercial', cover_image_url: '/images/about-hero.jpg' },
    { id: 2, slug: 'corporate-hq-renovation', title: 'Corporate HQ Renovation', category: 'Commercial', cover_image_url: '/images/about-hero.jpg' },
    { id: 3, slug: 'the-grand-avenue-bridge', title: 'The Grand Avenue Bridge', category: 'Infrastructure', cover_image_url: '/images/about-hero.jpg' },
    { id: 4, slug: 'lakefront-modern-residence', title: 'Lakefront Modern Residence', category: 'Residential', cover_image_url: '/images/about-hero.jpg' },
    { id: 5, slug: 'artisan-community-theater', title: 'Artisan Community Theater', category: 'Community', cover_image_url: '/images/about-hero.jpg' },
    { id: 6, slug: 'metro-light-rail-expansion', title: 'Metro Light Rail Expansion', category: 'Infrastructure', cover_image_url: '/images/about-hero.jpg' },
];
// --- End Static Data ---

// This will be a reusable component for displaying a single project in the grid
const ProjectCard = ({ project }) => (
    <div className="group rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2">
        <Link href={`/projects/${project.slug}`}>
            <div className="relative">
                <img src={project.cover_image_url} alt={project.title} className="w-full h-72 object-cover" />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold uppercase px-3 py-1 rounded-full">{project.category}</span>
            </div>
            <div className="p-5 bg-white">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
            </div>
        </Link>
    </div>
);


export default function Index() {
    return (
        <PublicLayout>
            <Head title="Our Work | Nia Rivers Construction" />

            {/* Hero Section for the Projects Page */}
            <div className="bg-gray-800 text-white py-20 text-center">
                 <h1 className="text-5xl font-extrabold">Our Portfolio</h1>
                 <p className="mt-2 text-lg text-gray-300">Explore the projects that define our commitment to excellence.</p>
            </div>

            {/* Main Project Grid */}
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                     {/* We can add filtering controls here in the future */}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {staticProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}