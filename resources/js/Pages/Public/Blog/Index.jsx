// resources/js/Pages/Public/Blog/Index.jsx
import { useState, useEffect } from 'react';
import PublicLayout from "@/Layouts/PublicLayout";
import { Head, usePage, router } from "@inertiajs/react";
import PostCard from '@/Components/Blog/PostCard';
import Modal from '@/Components/Modal';
import BlogPostModal from '@/Components/Blog/BlogPostModal';

export default function Index({ posts }) {

    const heroImageUrl = 'images/hall.jpg'; 
    // --- State Management ---
    const [selectedPost, setSelectedPost] = useState(null);
    const { url } = usePage();

    // --- Modal Controls ---
    const openModal = (post) => {
        setSelectedPost(post);
        // Update URL to make it shareable, without reloading the page
        router.get('/blog', { post: post.slug }, { preserveState: true, replace: true });
    };

    const closeModal = () => {
        setSelectedPost(null);
         // Update URL to remove the query parameter
        router.get('/blog', {}, { preserveState: true, replace: true });
    };

    // --- URL Handling on Initial Load ---
    // This effect runs once when the page loads to check for a 'post' query.
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const postSlugFromUrl = queryParams.get('post');

        if (postSlugFromUrl) {
            const postToOpen = posts.find(p => p.slug === postSlugFromUrl);
            if (postToOpen) {
                setSelectedPost(postToOpen);
            }
        }
    }, []); // Empty array ensures this only runs on mount

    return (
        <PublicLayout>
            <Head title="Blog | Nia Rivers Construction" />
            
            {/* Hero Section */}
            

            <div className="relative bg-gray-900 h-[70vh] text-white overflow-hidden">
             <img
                src={heroImageUrl}
                alt="Our team collaborating"
                className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
                 
                 <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center drop-shadow-lg">
                   News & Insights
                </h1>
               <p className="mt-2 text-lg text-gray-300">Our latest articles, announcements, and industry analysis.</p>
            </div>
        </div>
            
            {/* Main Post Grid */}
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map(post => (
                            // The card's onClick now opens the modal
                            <div key={post.id} onClick={() => openModal(post)}>
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* The Modal itself */}
            <Modal show={!!selectedPost} onClose={closeModal} maxWidth="2xl">
                <BlogPostModal post={selectedPost} onClose={closeModal} />
            </Modal>
        </PublicLayout>
    );
}