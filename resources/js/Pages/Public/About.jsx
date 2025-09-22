// resources/js/Pages/Public/About.jsx
import PublicLayout from "@/Layouts/PublicLayout";
import { Head } from "@inertiajs/react";

// We will create these components next
import AboutHero from "@/Components/About/AboutHero";
import OurStory from "@/Components/About/OurStory";
import TeamSection from "@/Components/About/TeamSection";
import CTASection from "@/Components/Home/CTASection"; // We can reuse this!
import CoreValues from "@/Components/About/CoreValues"; // <-- New
import OurProcess from "@/Components/About/OurProcess"; // <-- New
import JoinTeam from "@/Components/About/JoinTeam"; // <-- New

// --- Static Data ---
// Structure this to match our database model
const staticTeamMembers = [
    {
        id: 1,
        name: 'Eleanor Vantage',
        title: 'Founder & CEO',
        photoUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'Marcus Thorne',
        title: 'Chief Operating Officer',
        photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 3,
        name: 'Jenna Sullivan',
        title: 'Head of Project Management',
        photoUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
     {
        id: 4,
        name: 'David Chen',
        title: 'Lead Architect',
        photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
];
// --- End Static Data ---

export default function About() {
    return (
        <PublicLayout>
            <Head title="About Us | Nia Rivers Construction" />

            <AboutHero />
            <OurStory />
             <CoreValues />   {/* <-- Add this */}
            <TeamSection teamMembers={staticTeamMembers} />
            <OurProcess />   {/* <-- Add this */}
            <JoinTeam />  
        <CTASection />
        </PublicLayout>
    );
}