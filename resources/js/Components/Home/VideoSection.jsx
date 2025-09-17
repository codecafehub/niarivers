// resources/js/Components/Home/VideoSection.jsx

const VideoCard = ({ video }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        {/* Responsive video container using aspect-ratio plugin */}
        <div className="aspect-w-16 aspect-h-9">
            <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
        <div className="p-5 flex-grow">
            <h3 className="text-xl font-bold text-gray-800">{video.title}</h3>
            <p className="text-gray-600 mt-2">{video.description}</p>
        </div>
    </div>
);

export default function VideoSection({ videos }) {
    return (
        <section className="py-16 bg-gray-100"> {/* Alternate background color */}
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">See Our Work in Action</h2>
                <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
                    Videos that capture the scale, detail, and dedication we bring to every site.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <VideoCard key={video.id} video={video} />
                    ))}
                </div>
            </div>
        </section>
    );
}