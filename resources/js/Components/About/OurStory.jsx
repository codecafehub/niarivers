// resources/js/Components/About/OurStory.jsx

const heroImageUrl = 'images/aboutimg.jpg'; 
export default function OurStory() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">Our Mission & Vision</h2>
                    <p className="text-gray-600 text-lg mt-2 max-w-3xl mx-auto">
                        Building a better future through unwavering commitment to quality, community, and the clients we serve.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                        <p>
                            Founded on the principles of integrity and craftsmanship, Nia Rivers Construction has grown into a leading firm renowned for its innovative solutions and client-centric approach. We believe that every structure we build is a testament to our dedication.
                        </p>
                        <p>
                           Our vision is to be the most trusted and respected construction company in the region, recognized for our collaborative spirit and our ability to deliver landmark projects that stand the test of time. We're not just building structures; we're building lasting relationships.
                        </p>
                    </div>
                    <div>
                         <img
                            src={heroImageUrl}
                            alt="Collaborative meeting with blueprints"
                            className="rounded-lg shadow-xl"
                         />
                    </div>
                </div>
            </div>
        </section>
    );
}