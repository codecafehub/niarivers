// resources/js/Components/About/JoinTeam.jsx
import { Link } from '@inertiajs/react';
import { useModal } from '@/Context/ModalContext';

const joinImageUrl = "images/about-hero.jpg"; 
 

export default function JoinTeam() {
    const { openModal } = useModal();
    return (
        <section className="relative bg-gray-800 text-white">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url(${joinImageUrl})` }}
            ></div>
            <div className="relative container mx-auto px-6 py-16 text-center">
                <h2 className="text-4xl font-extrabold">
                    Become Part of Our Vision
                </h2>
                <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
                    We are always looking for passionate, skilled individuals to join the Nia Rivers family. Discover a career where you can build the future.
                </p>
                <div className="mt-8">
                    <button
                        onClick={() => openModal('register')}
                        className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Join Us
                    </button>
                </div>
            </div>
        </section>
    );
}