// resources/js/Components/About/TeamMemberModal.jsx

// Reusable component for social links inside the modal
const SocialLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-600 transition-colors">
        {children}
    </a>
);

export default function TeamMemberModal({ member, onClose }) {
    // Return null if no member is selected. This is a safety check.
    if (!member) {
        return null;
    }

    return (
        <div className="p-6 relative">
             {/* Close Button */}
             <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors z-10"
                aria-label="Close modal"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>

            {/* Modal Content */}
            <div className="flex flex-col sm:flex-row gap-6">
                {/* Left Side: Photo */}
                <div className="flex-shrink-0 text-center">
                    <img src={member.photo_url} alt={`Photo of ${member.name}`} className="w-40 h-40 rounded-full mx-auto object-cover object-top shadow-lg" />
                </div>
                {/* Right Side: Details */}
                <div className="text-center sm:text-left">
                     <h2 className="text-3xl font-bold text-gray-800">
                        {/* We now use the 'title' prop for the prefix */}
                        {member.title && `${member.title} `}{member.name}
                    </h2>
                    {/* And the 'position' prop for the job title */}
                    <p className="text-xl font-semibold text-blue-600 mt-1">{member.position}</p>
                    <p className="mt-4 text-gray-700 leading-relaxed">{member.bio}</p>

                     {/* Social Links */}
                    <div className="mt-6 flex justify-center sm:justify-start items-center gap-x-5">
                        {member.linkedin_url && (
                             <SocialLink href={member.linkedin_url}>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                             </SocialLink>
                        )}
                        {member.twitter_url && (
                            <SocialLink href={member.twitter_url}>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.616 1.911 2.396 3.227 4.534 3.266-1.79 1.487-4.075 2.305-6.527 2.305-1.35 0-2.457-.078-3.328-.198 2.287 1.532 4.965 2.407 7.795 2.407 9.172 0 14.34-7.854 13.921-14.771z"/></svg>
                             </SocialLink>
                        )}
                        {member.facebook_url && (
                            <SocialLink href={member.facebook_url}>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                            </SocialLink>
                )}
                        {/* Add other social icons (Facebook, Instagram) similarly if they exist */}
                    </div>
                </div>
            </div>
        </div>
    );
}