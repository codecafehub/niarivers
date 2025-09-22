// resources/js/Components/About/OurProcess.jsx
const steps = [
    { number: '01', title: 'Consultation & Discovery', description: 'We begin by understanding your vision, goals, and project requirements down to the smallest detail.' },
    { number: '02', title: 'Design & Planning', description: 'Our architects and engineers create detailed blueprints and strategic plans to ensure flawless execution.' },
    { number: '03', title: 'Construction & Management', description: 'With expert oversight, we manage every phase of construction, ensuring we stay on schedule and on budget.' },
    { number: '04', title: 'Handover & Support', description: 'We deliver your finished project, ensuring your complete satisfaction and providing support for the future.' }
];

export default function OurProcess() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Our Proven Process</h2>
                </div>
                <div className="grid md:grid-cols-4 gap-8">
                    {steps.map(step => (
                        <div key={step.number} className="p-6 bg-white rounded-lg shadow-sm">
                            <span className="text-5xl font-extrabold text-blue-200">{step.number}</span>
                            <h3 className="text-xl font-bold text-gray-800 mt-2 mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}