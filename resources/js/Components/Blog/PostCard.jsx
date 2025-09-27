// resources/js/Components/Blog/PostCard.jsx
import { Link } from '@inertiajs/react';

export default function PostCard({ post }) {
    // The onClick handler will be passed from the parent to open a modal
    const handleClick = post.onClick || (() => {});
    
    // The href can link to the blog page with a query to auto-open the modal
    const href = post.href || `/blog?post=${post.slug}`;

    return (
        <div onClick={handleClick} className="group cursor-pointer">
            <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-2 h-full flex flex-col bg-white">
                {/* Image Container */}
                <Link href={href} className="block relative h-56">
                    <img
                        src={post.cover_image_url}
                        alt={post.title}
                        className="w-full h-full object-cover"
                    />
                </Link>
                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                     <p className="text-sm text-gray-500">{post.published_at}</p>
                    <h3 className="mt-2 text-xl font-bold text-gray-800 flex-grow">
                         <Link href={href} className="hover:text-blue-600 transition-colors">
                            {post.title}
                         </Link>
                    </h3>
                     <div className="mt-4 flex items-center">
                        {/* We'll use a default author image for now */}
                        {/* <img src={post.author?.photo_url || '/images/logo-icon.png'} alt={post.author.name} className="w-10 h-10 rounded-full" /> */}
                        <div className="ml-3">
                             <p className="text-sm font-semibold text-gray-800">{post.author.name}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}