// resources/js/Components/Home/TestimonialSection.jsx

import { useState, useEffect } from 'react';

// You can create a reusable Arrow icon component later if you wish
const PrevArrow = (props) => (
    <button {...props} className="absolute top-1/2 left-4 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
    </button>
);

const NextArrow = (props) => (
     <button {...props} className="absolute top-1/2 right-4 -translate-y-1/2 z-30 p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
    </button>
);

export default function TestimonialSection({ testimonials }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastSlide = currentIndex === testimonials.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(goToNext, 7000); // Auto-slide every 7 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, [currentIndex]); // Reset timer on manual navigation

    return (
        <section className="bg-gray-800 text-white py-16">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>
                <div className="relative max-w-4xl mx-auto h-64 md:h-48">
                    {/* Navigation Arrows */}
                    <PrevArrow onClick={goToPrevious} />
                    <NextArrow onClick={goToNext} />

                    {/* Testimonial Slides */}
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`
                                absolute inset-0 w-full h-full flex flex-col justify-center items-center px-8
                                transition-opacity duration-1000 ease-in-out
                                ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                            `}
                        >
                            <p className="text-xl md:text-2xl italic leading-relaxed">
                                "{testimonial.quote}"
                            </p>
                            <footer className="mt-6">
                                <span className="font-bold text-lg">{testimonial.author}</span>
                                <span className="text-gray-400">, {testimonial.company}</span>
                            </footer>
                        </div>
                    ))}

                    {/* Navigation Dots */}
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`
                                    w-3 h-3 rounded-full transition-colors
                                    ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-500 hover:bg-gray-400'}
                                `}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}