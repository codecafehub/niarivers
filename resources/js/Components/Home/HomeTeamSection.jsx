// resources/js/Components/Home/HomeTeamSection.jsx

import { Link } from '@inertiajs/react';
// This is the beautiful card component we created for the About Us page. Let's reuse it!
import TeamMemberCard from '@/Components/About/TeamMemberCard';

export default function HomeTeamSection({ teamMembers }) {
    return (
        <section className="bg-white-100 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Meet Our Experts</h2>
                    <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
                        The leadership team guiding our commitment to quality and innovation.
                    </p>
                </div>

                {/* Team Member Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map(member => (
                        <TeamMemberCard key={member.id} member={member} />
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <Link
                        href="/about" // This links to the main About Us page
                        className="bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 transition duration-300 text-lg"
                    >
                        View All Team Members
                    </Link>
                </div>
            </div>
        </section>
    );
}