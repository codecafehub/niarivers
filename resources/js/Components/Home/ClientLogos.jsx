// resources/js/Components/Home/ClientLogos.jsx

const logos = [
    { name: 'Innovate Corp', url: 'https://innovatecorp.com/wp-content/uploads/2025/01/innovate-logo.png' },
    { name: 'Vantage Logistics', url: 'https://vantagelgs.com/wp-content/uploads/thegem/logos/logo_724685baf69b404cf057a518620994ad_1x.png' },
    { name: 'Archway Properties', url: 'https://archwayprop.com/templates/yootheme/cache/1b/archway-properties-real-estate-logo-1b576b2c.webp' },
    { name: 'Apex Solutions', url: 'https://img1.wsimg.com/isteam/ip/a77098c0-0ac1-48f9-b6a9-e489fef53d87/blob-0008.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:500,h:500,cg:true' },
    { name: 'Quantum Industries', url: 'https://www.quantumindustries.jp/cdn/shop/files/Qi_Logo_Final_Black.png?v=1704609586&width=360' },
];

export default function ClientLogos() {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">Trusted By Industry Leaders</h2>
                <p className="text-center text-gray-600 text-lg mb-12">We are proud to partner with a diverse range of clients.</p>
                {/* Optional: Increase the horizontal gap for more breathing room */}
                <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
                    {logos.map((logo) => (
                        <img
                            key={logo.name}
                            className="
                                max-h-16 max-w-40  // <-- Increase size & set constraints
                                w-auto object-contain // <-- Ensure correct scaling
                                filter grayscale hover:grayscale-0 // <-- Your existing hover effect
                                transition-all duration-300
                            "
                            src={logo.url}
                            alt={logo.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}