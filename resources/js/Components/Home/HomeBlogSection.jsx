// resources/js/Components/Home/HomeBlogSection.jsx
import PostCard from "@/Components/Blog/PostCard";
import { Link } from '@inertiajs/react';

export default function HomeBlogSection({ posts }) {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                 <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800">News & Insights</h2>
                    <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
                        Stay updated with our latest projects, company news, and industry trends.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map(post => (
                        <PostCard key={post.id} post={post} />
                    ))}
                </div>

                <div className="text-center mt-12">
                     <Link
                        href="/blog"
                        className="inline-flex items-center gap-x-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                     >
                        <span>View All Posts</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                     </Link>
                </div>
            </div>
        </section>
    );
}