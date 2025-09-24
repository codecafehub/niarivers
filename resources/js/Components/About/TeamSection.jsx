// resources/js/Components/About/TeamSection.jsx
import { useState, useMemo } from 'react'; // <-- Import hooks
import TeamMemberCard from "@/Components/About/TeamMemberCard";
import Modal from "@/Components/Modal";
import TeamMemberModal from './TeamMemberModal';
import TeamFilter from './TeamFilter'; // <-- Import our new filter component


export default function TeamSection({ teamMembers }) {
    // --- State Management ---
    const [selectedMember, setSelectedMember] = useState(null);
    const [activeFilter, setActiveFilter] = useState('executive'); // Default to 'executive'

    const openModal = (member) => setSelectedMember(member);
    const closeModal = () => setSelectedMember(null);

    // --- Filtering Logic ---
    // useMemo will re-calculate this list ONLY when teamMembers or activeFilter changes.
    // This is very efficient.
    const filteredMembers = useMemo(() => {
        if (!teamMembers) return []; // Guard clause for safety
        return teamMembers.filter(member => member.team_category === activeFilter);
    }, [teamMembers, activeFilter]); // Dependencies array

    // --- Dynamic Headline ---
    const getHeadline = () => {
        switch (activeFilter) {
            case 'executive':
                return 'Meet Our Leadership';
            case 'member':
                return 'Our Dedicated Team';
            case 'past_executive':
                return 'Our Esteemed Alumni';
            default:
                return 'Our Team';
        }
    };


    return (
        <>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    {/* The Filter Component */}
                    <TeamFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />

                    <div className="text-center mb-12">
                        {/* The headline now changes based on the filter */}
                        <h2 className="text-4xl font-bold text-gray-800">{getHeadline()}</h2>
                    </div>

                    {/* Conditional rendering for an empty filter result */}
                    {filteredMembers.length > 0 ? (
                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* We map over the FILTERED list */}
                            {filteredMembers.map(member => (
                                <div key={member.id} onClick={() => openModal(member)}>
                                     <TeamMemberCard member={member} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12 px-6 bg-white rounded-lg shadow-md">
                             <h3 className="text-2xl font-semibold text-gray-700">No Members Found</h3>
                             <p className="text-gray-500 mt-2">There are currently no team members in this category.</p>
                        </div>
                    )}
                </div>
            </section>

             <Modal show={!!selectedMember} onClose={closeModal}>
                 <TeamMemberModal member={selectedMember} onClose={closeModal} />
            </Modal>
        </>
    );
}