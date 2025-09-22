// resources/js/Components/Contact/ContactDetailsAndMap.jsx
export default function ContactDetailsAndMap() {
    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-8">
                We're here to help and answer any question you might have. We look forward to hearing from you.
            </p>
            <div className="space-y-4 text-lg">
                <div className="flex items-center space-x-3">
                    {/* SVG Icon */}
                    <p><span className="font-semibold">Address:</span> 123 Construction Ave, Metropolis, USA</p>
                </div>
                 <div className="flex items-center space-x-3">
                    {/* SVG Icon */}
                    <p><span className="font-semibold">Phone:</span> (123) 456-7890</p>
                </div>
                 <div className="flex items-center space-x-3">
                    {/* SVG Icon */}
                    <p><span className="font-semibold">Email:</span> contact@niarivers.com</p>
                </div>
            </div>

            {/* Embedded Google Map */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                 <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.610229863953!2d-73.98801208459426!3d40.74844087932791!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1617300762309!5m2!1sen!2sus"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Company Location"
                ></iframe>
            </div>
        </div>
    );
}