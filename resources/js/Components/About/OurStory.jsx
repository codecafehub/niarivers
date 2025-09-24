// resources/js/Components/About/OurStory.jsx
import ReadMore from '@/Components/Common/ReadMore'; // <-- 1. Import our new component

export default function OurStory() {
    // 2. We combine the paragraphs into a single string for truncation logic.
    const storyContent = [
        {
            type: 'paragraph',
            text: 'Founded on the principles of integrity and craftsmanship, Nia Rivers Construction has grown into a leading firm renowned for its innovative solutions and client-centric approach.'
        },
        {
            type: 'paragraph',
            text: "We believe that every structure we build is a testament to our dedication. Our vision is to be the most trusted and respected construction company in the region, recognized for our collaborative spirit and our ability to deliver landmark projects that stand the test of time. We're not just building structures; we're building lasting relationships."
        },
        {
            type: 'heading',
            text: 'Our Expertise'
        },
        {
            type: 'paragraph',
            text: 'Our team of seasoned professionals brings a wealth of experience across various sectors, ensuring that we can tackle projects of any scale and complexity. From residential developments to large-scale commercial ventures, we approach each project with the same level of enthusiasm and commitment to excellence.'
        },
        {
            type: 'heading',
            text: 'Commitment to Safety'
        },
        {
            type: 'paragraph',
            text: "At Nia Rivers, safety is not just a priority; it's a core value that underpins everything we do. We are committed to maintaining the highest safety standards to protect our team, clients, and the communities we serve. Our proactive approach to safety management ensures that every project is executed without incident."
        },
        {
            type: 'paragraph',
            text: "Sustainability and innovation are at the heart of our operations, driving us to build a better and more resilient future."
        }
    ];
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Left Column: Our Story with "Read More" */}
                    <div className="text-lg text-gray-700 leading-relaxed space-y-4">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            Building a Legacy of Trust & Excellence
                        </h2>

                        {/* 3. We wrap the text in the ReadMore component */}
                        <ReadMore content={storyContent} initialChunksVisible={1} />
                    </div>

                    {/* Right Column: Mission & Vision Cards (Unchanged) */}
                    <div className="space-y-6">
                        {/* ... your Mission and Vision cards from before ... */}
                         <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200">
                             <div className="flex items-center gap-x-4">
                                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                </div>
                                <div><h3 className="text-2xl font-bold text-gray-800">Our Mission</h3></div>
                            </div>
                            <p className="mt-4 text-gray-600 text-lg">To build a better future for our clients and communities through an unwavering commitment to quality, safety, and sustainable construction practices.</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-8 shadow-sm border border-gray-200">
                           <div className="flex items-center gap-x-4">
                                <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
                                </div>
                                <div><h3 className="text-2xl font-bold text-gray-800">Our Vision</h3></div>
                            </div>
                            <p className="mt-4 text-gray-600 text-lg">To be the region's most trusted and respected construction partner, recognized for our innovation, collaborative spirit, and the enduring legacy of our work.</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}