// resources/js/Pages/Public/Contact.jsx
import PublicLayout from "@/Layouts/PublicLayout";
import { Head, usePage } from "@inertiajs/react";

import ContactHero from "@/Components/Contact/ContactHero";
import ContactDetailsAndMap from "@/Components/Contact/ContactDetailsAndMap";
import ContactForm from "@/Components/Contact/ContactForm";

export default function Contact() {
    const { props } = usePage();

    return (
        <PublicLayout>
            <Head title="Contact Us | Nia Rivers Construction" />

            <ContactHero />

            {/* If props.flash exists, then try to access props.flash.success */}
            {props.flash?.success && (
                 <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 container mx-auto my-6 rounded">
                    <p className="font-bold">Success</p>
                    <p>{props.flash.success}</p>
                </div>
            )}

            <div className="container mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
                <ContactDetailsAndMap />
                <ContactForm />
            </div>

        </PublicLayout>
    );
}