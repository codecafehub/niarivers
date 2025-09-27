// resources/js/Components/Home/HomeTeamSection.jsx

import { Link } from '@inertiajs/react';
import { useState } from 'react'; // <-- 1. Import useState

// Import all the components we need
import TeamMemberCard from '@/Components/About/TeamMemberCard';
import Modal from '@/Components/Modal';
import TeamMemberModal from '@/Components/About/TeamMemberModal';

export default function HomeTeamSection({ teamMembers }) {
    // 2. Add state management for the modal
    const [selectedMember, setSelectedMember] = useState(null);

    const openModal = (member) => setSelectedMember(member);
    const closeModal = () => setSelectedMember(null);

    return (
        <> {/* <-- Use a fragment to wrap the section and the modal */}
            <section className="bg-gray-50 py-16"> {/* Used bg-gray-50 for a subtle look */}
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-800">Meet Our Leadership</h2>
                        <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
                            The dedicated team guiding our commitment to quality and innovation.
                        </p>
                    </div>

                    {/* Team Member Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 cursor-pointer">
                        {teamMembers.map(member => (
                            // 3. Make each card clickable by wrapping it in a div with an onClick handler
                            <div key={member.id} onClick={() => openModal(member)}>
                                <TeamMemberCard member={member} />
                            </div>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="text-center mt-16">
                        <Link
                            href="/about"
                            className="inline-flex items-center gap-x-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            <span>View All Team Members</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        </Link>
                    </div>
                </div>
            </section>

             {/* 4. The Modal itself. This will show when 'selectedMember' is not null. */}
             <Modal show={!!selectedMember} onClose={closeModal}>
                <TeamMemberModal member={selectedMember} onClose={closeModal} />
            </Modal>
        </>
    );
}