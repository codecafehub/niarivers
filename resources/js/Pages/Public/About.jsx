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