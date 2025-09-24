// resources/js/Pages/Public/About.jsx

import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";

// Import all the section components for the page
import AboutHero from "@/Components/About/AboutHero";
import OurStory from "@/Components/About/OurStory";
import TeamSection from "@/Components/About/TeamSection";
import CoreValues from "@/Components/About/CoreValues";
import OurProcess from "@/Components/About/OurProcess";
import JoinTeam from "@/Components/About/JoinTeam";
import ChairmanMessage from "@/Components/About/ChairmanMessage";

// --- Static Data ---
const staticTeamMembers = [
    {
        id: 1,
        name: 'Eleanor Vantage',
        title: 'Founder & CEO',
        photoUrl: '/images/cc2.jpg', // Use local images
    },
    {
        id: 2,
        name: 'Marcus Thorne',
        title: 'Chief Operating Officer',
        photoUrl: '/images/cc1.jpg',
    },
    {
        id: 3,
        name: 'Jenna Sullivan',
        title: 'Head of Project Management',
        photoUrl: '/images/about-hero.jpg',
    },
     {
        id: 4,
        name: 'David Chen',
        title: 'Lead Architect',
        photoUrl: '/images/about-hero.jpg',
    },
    {
        id: 4,
        name: 'David Chen',
        title: 'Lead Architect',
        photoUrl: '/images/about-hero.jpg',
    },
    {
        id: 4,
        name: 'David Chen',
        title: 'Lead Architect',
        photoUrl: '/images/about-hero.jpg',
    },
     {
        id: 1,
        name: 'Eleanor Vantage',
        title: 'Founder & CEO',
        photoUrl: '/images/cc2.jpg', // Use local images
    },
    {
        id: 2,
        name: 'Marcus Thorne',
        title: 'Chief Operating Officer',
        photoUrl: '/images/cc1.jpg',
    },
    
];
// --- End Static Data ---

export default function About({ teamMembers }) {
    return (
        <PublicLayout>
            <Head title="About Us | Nia Rivers Construction" />

            <AboutHero />
            <OurStory />
            <ChairmanMessage />
            <CoreValues />
            {/* Pass the full list of members down to the smart component */}
            <TeamSection teamMembers={teamMembers} />
            {/* <OurProcess /> */}
            <JoinTeam />
        </PublicLayout>
    );
}