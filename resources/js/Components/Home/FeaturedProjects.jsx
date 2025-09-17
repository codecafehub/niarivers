// resources/js/Components/Home/FeaturedProjects.jsx

import { Link } from '@inertiajs/react';

// Sub-component for a single project card
const ProjectCard = ({ project }) => (
    <div className="group overflow-hidden rounded-lg shadow-lg">
        <Link href={`/projects/${project.slug}`}>
            <div className="relative">
                 <img
                    src={project.cover_image_url} // Now using the static data URL
                    alt={project.title}
                    className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                 <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300"></div>
            </div>
            <div className="p-5 bg-white">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                <p className="text-gray-500 mt-1">{project.location}</p>
            </div>
        </Link>
    </div>
);


export default function FeaturedProjects({ projects }) {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Our Work</h2>
                    <p className="text-gray-600 text-lg mt-2">A selection of our finest projects.</p>
                </div>

                {/* This will now display our 3 static projects */}
                {projects && projects.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">No featured projects to display yet.</p>
                )}


                <div className="text-center mt-12">
                     <Link
                        href="/projects"
                        className="bg-transparent border-2 border-blue-600 text-blue-600 font-bold py-3 px-8 rounded hover:bg-blue-600 hover:text-white transition-all duration-300 text-lg"
                    >
                        View All Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}