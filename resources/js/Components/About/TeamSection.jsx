// resources/js/Components/About/TeamSection.jsx
const TeamMemberCard = ({ member }) => (
    <div className="text-center">
        <img
            src={member.photoUrl}
            alt={`Photo of ${member.name}`}
            className="w-40 h-40 rounded-full mx-auto shadow-lg object-cover"
        />
        <h3 className="mt-4 text-xl font-bold text-gray-800">{member.name}</h3>
        <p className="text-blue-600 font-semibold">{member.title}</p>
    </div>
);

export default function TeamSection({ teamMembers }) {
    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Meet Our Leadership</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                    {teamMembers.map(member => (
                        <TeamMemberCard key={member.id} member={member} />
                    ))}
                </div>
            </div>
        </section>
    );
}