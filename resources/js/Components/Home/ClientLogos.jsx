// resources/js/Components/Home/ClientLogos.jsx

const logos = [
    { name: 'Innovate Corp', url: 'https://innovatecorp.com/wp-content/uploads/2025/01/innovate-logo.png' },
    { name: 'Vantage Logistics', url: 'https://vantagelgs.com/wp-content/uploads/thegem/logos/logo_724685baf69b404cf057a518620994ad_1x.png' },
    { name: 'Archway Properties', url: 'https://archwayprop.com/templates/yootheme/cache/1b/archway-properties-real-estate-logo-1b576b2c.webp' },
    { name: 'Apex Solutions', url: 'https://img1.wsimg.com/isteam/ip/a77098c0-0ac1-48f9-b6a9-e489fef53d87/blob-0008.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:500,h:500,cg:true' },
    { name: 'Quantum Industries', url: 'https://www.quantumindustries.jp/cdn/shop/files/Qi_Logo_Final_Black.png?v=1704609586&width=360' },
];



const LogoItem = ({ url, name }) => (
    <div className="flex-shrink-0 mx-8 flex justify-center items-center w-48 h-16">
        <img
            src={url}
            alt={name}
            className="max-h-12 w-auto object-contain filter grayscale opacity-70 transition-all duration-300 ease-in-out"
        />
    </div>
);

export default function ClientLogos() {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto px-6">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-2">Trusted By Industry Leaders</h2>
                <p className="text-center text-gray-600 text-lg mb-12">We are proud to partner with a diverse range of clients.</p>
                {/* Optional: Increase the horizontal gap for more breathing room */}
                <div className="relative mt-10 group" style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="animate-marquee">
                        {/* Render the logos once */}
                        {logos.map((logo) => (
                            <LogoItem key={logo.name} {...logo} />
                        ))}
                        {/* Render them a second time for the seamless loop */}
                        {logos.map((logo) => (
                            <LogoItem key={`${logo.name}-clone`} {...logo} aria-hidden="true" />
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}


