// resources/js/Components/About/CoreValues.jsx

const values = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        title: 'Integrity',
        description: 'We uphold the highest standards of integrity in all of our actions, building relationships based on trust and transparency.'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Quality',
        description: 'From materials to craftsmanship, we are committed to delivering unparalleled quality that stands the test of time.'
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
        ),
        title: 'Safety',
        description: 'The safety of our team, our clients, and our communities is our foremost priority, enforced through rigorous standards.'
    }
];

export default function CoreValues() {
    return (
        <section className="bg-white py-16">
            <div className="container mx-auto px-6">
                 <div className="grid md:grid-cols-3 gap-12 text-center">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="mb-4">{value.icon}</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">{value.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                    ))}
                 </div>
            </div>
        </section>
    );
}