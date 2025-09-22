// resources/js/Components/Contact/ContactForm.jsx
import { useForm } from "@inertiajs/react";

export default function ContactForm() {
    const { data, setData, post, processing, errors, recentlySuccessful } = useForm({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/contact', {
            // This tells Inertia to keep the user on the same scroll position after submission
            preserveScroll: true,
            onSuccess: () => {
                // You can clear the form on success if you want, but Inertia's success message is often enough
                // reset();
            },
        });
    };

    return (
        <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Send Us a Message</h2>
            <form onSubmit={submit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input type="text" id="name" value={data.name} onChange={e => setData('name', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                    {errors.name && <div className="text-sm text-red-600 mt-1">{errors.name}</div>}
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input type="email" id="email" value={data.email} onChange={e => setData('email', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required />
                     {errors.email && <div className="text-sm text-red-600 mt-1">{errors.email}</div>}
                </div>
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Optional)</label>
                    <input type="tel" id="phone" value={data.phone} onChange={e => setData('phone', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                     {errors.phone && <div className="text-sm text-red-600 mt-1">{errors.phone}</div>}
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea id="message" value={data.message} onChange={e => setData('message', e.target.value)} rows="5" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" required></textarea>
                    {errors.message && <div className="text-sm text-red-600 mt-1">{errors.message}</div>}
                </div>
                <div>
                    <button type="submit" disabled={processing} className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 transition duration-300 disabled:bg-blue-300">
                        {processing ? 'Sending...' : 'Send Message'}
                    </button>
                </div>
            </form>
        </div>
    );
}