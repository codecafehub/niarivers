// resources/js/Components/Contact/ContactHero.jsx
const contactImageUrl = "images/about-hero.jpg"; 
export default function ContactHero() {
    return (
         <div className="relative h-[40vh] bg-gray-900">
             <img
                src={contactImageUrl} // Add an image here
                alt="Contact Nia Rivers Construction"
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