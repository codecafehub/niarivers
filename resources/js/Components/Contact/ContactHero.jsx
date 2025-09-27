// resources/js/Components/Contact/ContactHero.jsx
const contactImageUrl = "images/fivefinger.jpg"; 
export default function ContactHero() {
    return (
         <div className="relative bg-gray-900 h-[70vh] text-white overflow-hidden">
             <img
                src={contactImageUrl}
                alt="Our team collaborating"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 h-full flex items-center justify-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
                    Get In Touch
                </h1>
            </div>
        </div>
    );
}