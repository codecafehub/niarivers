// resources/js/Components/About/ChairmanMessage.jsx

// Use a high-quality, professional portrait of the chairman here.
// For now, we use a placeholder that matches the data in our seeder.
const chairmanPhotoUrl = '/images/cc1.jpg'; // Dr. Ogechi Okachi's photo

export default function ChairmanMessage() {
    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-5 gap-12 items-center">

                    {/* Image Column */}
                    <div className="lg:col-span-2 text-center">
                        <img
                            src={chairmanPhotoUrl}
                            alt="Dr. Ogechi Okachi, hairman"
                            className="w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto object-cover object-top shadow-2xl border-4 border-blue-600"
                        />
                    </div>

                    {/* Message Column */}
                    <div className="lg:col-span-3">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            A Word From Our Chairman
                        </h2>

                        <div className="text-xl text-gray-600 leading-relaxed border-l-4 border-blue-600 pl-6 italic">
                             <p>
                                "At Nia Rivers, we don't just build structures; we build trust. Our foundation is laid upon a commitment to unwavering quality, sustainable innovation, and the communities we are privileged to serve. Every project is a testament to our promise—to build a better, stronger future for everyone. Thank you for considering us as your partner in this vision."
                            </p>
                        </div>

                         <div className="mt-6">
                            <p className="text-2xl font-bold text-gray-900">
                                Dr. Ogechi Okachi
                            </p>
                            <p className="text-lg font-semibold text-blue-700">
                                Chairman NIA Rivers State  Chapter
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}