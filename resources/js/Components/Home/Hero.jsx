// resources/js/Components/Home/Hero.jsx

import { useState, useEffect } from 'react';

// 1. Define all your slides here
const slides = [
    {
        id: 1,
        imageUrl: "images/fivefinger.jpg",
        headline: "The Nigeria Institute of Architects",
        subtext: "Rivers State Chapter."
    },
    {
        id: 2,
        imageUrl: "images/stage.jpg",
        headline: "PRECISION & EXCELLENCE",
        subtext: "Delivering projects on time and on budget with unparalleled attention to detail."
    },
    {
        id: 3,
        imageUrl: "images/project.jpg",
        headline: "SAFETY FIRST, ALWAYS",
        subtext: "Our rigorous safety standards protect our team, our clients, and the community."
    }
];

export default function Hero() {
    // 2. State to track the active slide index
    const [currentIndex, setCurrentIndex] = useState(0);

    // 3. useEffect for the auto-play functionality
    useEffect(() => {
        // Set an interval to change the slide every 5 seconds (5000 milliseconds)
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
        }, 5000);

        // Clear the interval when the component unmounts to prevent memory leaks
        return () => clearInterval(intervalId);
    }, []); // Empty dependency array means this effect runs only once on mount

    return (
        <section className="relative h-[70vh] text-white overflow-hidden">
            {/* 4. Map over the slides to render each one */}
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`
                        absolute inset-0 w-full h-full
                        transition-opacity duration-1000 ease-in-out
                        ${index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'}
                    `}
                >
                    {/* Background Image and Overlay */}
                    <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                    <img
                        src={slide.imageUrl}
                        alt={slide.headline}
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Content */}
                    <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
                        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
                            {slide.headline}
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
                            {slide.subtext}
                        </p>
                    </div>
                </div>
            ))}
        </section>
    );
}