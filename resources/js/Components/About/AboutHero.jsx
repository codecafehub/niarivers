// resources/js/Components/About/AboutHero.jsx
import React from 'react';
// import AboutImg from '@/Assets/about-hero.jpg'; // Ensure you have an appropriate image in your assets

const heroImageUrl = 'images/about-hero.jpg'; 
export default function AboutHero() {
    return (
        <div className="relative bg-gray-900 h-[70vh] text-white overflow-hidden">
             <img
                src={heroImageUrl}
                alt="Our team collaborating"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 h-full flex items-center justify-center">
                <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
                    About Nia Rivers
                </h1>
            </div>
        </div>
    );
}