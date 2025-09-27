// resources/js/Components/Blog/BlogPostModal.jsx

export default function BlogPostModal({ post, onClose }) {
    if (!post) return null;

    return (
        // The root element is simple. The outer <Dialog.Panel> will handle overflow.
        <div>
             {/* Cover Image */}
            <figure className="relative">
                <img src={post.cover_image_url} alt={post.title} className="w-full h-64 object-cover" />
                 {/* Close Button */}
                 <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-black/30 text-white rounded-full p-1.5 hover:bg-black/50 transition-colors z-10"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </figure>

             {/* Content Area */}
            <div className="p-8 mt-5 max-h-[70vh] overflow-y-auto">
                {/* Header Info */}
                 <div className="mb-6 mt-3">
                     <p className="text-blue-600 font-semibold">{post.category || 'Insights'}</p>
                    <h1 className="text-3xl font-extrabold text-gray-900 mt-1">
                        {post.title}
                    </h1>
                     <div className="flex items-center mt-3 text-sm text-gray-500">
                        {/* Author Avatar (placeholder) */}
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 mr-3">
                            {post.author.name.charAt(0)}
                        </div>
                        <span>By {post.author.name} on {post.published_at}</span>
                    </div>
                </div>

                {/* Body Content */}
                <article
                    className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </div>
    );
}