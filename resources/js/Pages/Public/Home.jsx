// resources/js/Pages/Public/Home.jsx

import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";
import Hero from "@/Components/Home/Hero";
import HomeServices from "@/Components/Home/HomeServices"; 
import AboutSection from "@/Components/Home/AboutSection";
import FeaturedProjects from "@/Components/Home/FeaturedProjects";
import VideoSection from "@/Components/Home/VideoSection"; 
import TestimonialSection from "@/Components/Home/TestimonialSection";
import CTASection from "@/Components/Home/CTASection";
import StatsSection from "@/Components/Home/StatsSection";
import ClientLogos from "@/Components/Home/ClientLogos";
import AvailableProperties from "@/Components/Home/AvailableProperties";
import TeamSection from "@/Components/About/TeamSection";
// import { Head, Link } from "@inertiajs/react";
import HomeTeamSection from "@/Components/Home/HomeTeamSection";   
import PricingSection from "@/Components/Home/PricingSection"; 

// --- STATIC DATA ---
// Let's create some sample project data.
// We'll use placeholder images from `picsum.photos` for a nice look.
const staticProjects = [
    {
        id: 1,
        slug: 'downtown-medical-center',
        title: 'Downtown Medical Center',
        location: 'New York, NY',
        cover_image_url: 'https://picsum.photos/id/10/800/600',
    },
    {
        id: 2,
        slug: 'corporate-headquarters-reno',
        title: 'Corporate HQ Renovation',
        location: 'Boston, MA',
        cover_image_url: 'https://picsum.photos/id/20/800/600',
    },
    {
        id: 3,
        slug: 'the-grand-avenue-bridge',
        title: 'The Grand Avenue Bridge',
        location: 'Chicago, IL',
        cover_image_url: 'https://picsum.photos/id/30/800/600',
    },
];



// Let's create some sample property data.
// This can be used later if we add a Properties component.
const staticProperties = [
    {
        id: 1,
        slug: '123-maple-grove-lane',
        imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1740&q=80',
        status: 'For Sale',
        price: '$875,000',
        address: '123 Maple Grove Lane, Westwood, CA',
        beds: 4,
        baths: 3,
        sqft: '2,800',
    },
    {
        id: 2,
        slug: '45-river-oaks-blvd',
        imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1740&q=80',
        status: 'Under Contract',
        price: '$1,250,000',
        address: '45 River Oaks Blvd, Northshore, FL',
        beds: 5,
        baths: 5,
        sqft: '4,200',
    },
    {
        id: 3,
        slug: 'the-pinnacle-residences',
        imageUrl: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1587&q=80',
        status: 'Coming Soon',
        price: 'Starting from $650,000',
        address: 'The Pinnacle Residences, Downtown',
        beds: 3,
        baths: 2,
        sqft: '1,950',
    },
];

// Let's create some sample service data.
const staticServices = [
    {
        id: 1,
        title: 'General Contracting',
        short_description: 'Comprehensive project management from start to finish.',
        // We'll use Heroicons SVG for a clean, modern look
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.472-2.472a3.375 3.375 0 00-4.773-4.773L6.75 5.25l-2.472 2.472a3.375 3.375 0 004.773 4.773z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Design-Build',
        short_description: 'A seamless, unified workflow from concept to completion.',
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Construction Management',
        short_description: 'Expert oversight for budget, schedule, and quality assurance.',
        icon: (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 18V7.125C4.5 6.504 5.004 6 5.625 6H9" />
            </svg>
        ),
    }
];

//compile a list of static videos
const staticVideos = [
    {
        id: 1,
        title: "Commercial Building Timelapse",
        description: "From foundation to finish, see our team's coordinated effort in action.",
        youtubeId: "VP7JF9p9y5g", // Correct ID
    },
    {
        id: 2,
        title: "Modern Office Renovation",
        description: "Transforming an outdated space into a state-of-the-art corporate headquarters.",
        youtubeId: "0nS4WMXG-jM", // Correct ID
    },
    {
        id: 3,
        title: "Infrastructure Project Highlights",
        description: "Showcasing the precision and scale of our civil engineering projects.",
        youtubeId: "AKu_DpPDATM", // Correct ID
    },
];

// --- Let's create some sample testimonials data.
// We'll use this later when we add a Testimonials component.
const staticTestimonials = [
    {
        id: 1,
        quote: "Nia Rivers transformed our vision into a reality, exceeding our expectations at every turn. Their professionalism and attention to detail were second to none. We couldn't be happier with the result.",
        author: "John D. Carter",
        company: "CEO, Innovate Corp",
    },
    {
        id: 2,
        quote: "The entire process was seamless. They kept us informed, stayed on schedule, and delivered a high-quality facility on budget. A truly reliable and skilled construction partner.",
        author: "Samantha Chen",
        company: "Director of Operations, Vantage Logistics",
    },
    {
        id: 3,
        quote: "Their commitment to safety and quality on our project was remarkable. The team was collaborative, responsive, and a pleasure to work with from start to finish.",
        author: "Michael Rodriguez",
        company: "Project Manager, Archway Properties",
    },
];

// --- END OF STATIC DATA ---

// Notice we remove the `featuredProjects` prop from the function definition for now.
export default function Home( { teamMembers } ) {
    return (
        <PublicLayout>
            <Head title="Home | Nia Rivers Construction" />

            <Hero />
            <HomeServices services={staticServices} /> {/* Pass the static data as a prop */}
            <AboutSection />
            <StatsSection />
            <FeaturedProjects projects={staticProjects} />
               {/* Your check here is also perfect */}
            {teamMembers && teamMembers.length > 0 && (
                <HomeTeamSection teamMembers={teamMembers} />
            )}
            

            {/* <AvailableProperties properties={staticProperties} /> */}
            <VideoSection videos={staticVideos} />
            <ClientLogos /> 
            {/* <TestimonialSection testimonials={staticTestimonials} />  */}
            <PricingSection />
            <CTASection />

            {/* We can add a Call To Action component later */}
            {/* <CTA /> */}
        </PublicLayout>
    );
}