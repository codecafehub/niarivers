// resources/js/Components/Auth/RegisterForm.jsx
import { useForm, Head } from "@inertiajs/react";
import { useEffect } from "react";
import { useModal } from '@/Context/ModalContext'; // <-- Import the modal hook
import PasswordInput from "@/Components/PasswordInput";

// We'll define the available tiers here to use in the dropdown.
const membershipTiers = [
    { value: 'student', label: 'Student - ₦3,000 / Year' },
    { value: 'graduate', label: 'Graduate - ₦7,500 / Year' },
    { value: 'associate', label: 'Associate - ₦10,000 / Year' },
    { value: 'full_membership', label: 'Full Membership - ₦20,000 / Year' },
    { value: 'fellow', label: 'Fellow - ₦30,000 / Year' },
    { value: 'architectural_technologist', label: 'Architectural Technologist - ₦3,000 / Year' },
];

export default function RegisterForm({ closeModal }) {
    const { modalData } = useModal(); // <-- Get the data from the context

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        // Initialize with the pre-selected tier, or empty if none.
        membership_tier: modalData.tier || '',
    });

    // If the modal data changes (e.g., opening from a different button), update the form.
    useEffect(() => {
        setData('membership_tier', modalData.tier || '');
    }, [modalData.tier]);


    const submit = (e) => {
        e.preventDefault();
        // The post URL is correct from Laravel Breeze
        post(route('register'), {
            onSuccess: () => closeModal(), // Close modal on success and let Laravel handle redirect
            onError: () => reset('password', 'password_confirmation'),
        });
    };

    const selectedTierLabel = membershipTiers.find(t => t.value === data.membership_tier)?.label;

    return (
        <div className="p-8">
            <Head title="Register" />
            <h2 className="text-2xl font-bold mb-4">Join Nia Rivers Co</h2>
            <form onSubmit={submit} className="space-y-4">

                 {/* Conditionally show the Tier selector */}
                 <div>
                    <label htmlFor="membership_tier">Membership Plan</label>
                     {modalData.tier ? (
                        <div className="mt-1 p-2 bg-gray-100 border border-gray-300 rounded-md text-gray-700">
                           {selectedTierLabel || data.membership_tier}
                        </div>
                     ) : (
                        <select
                            id="membership_tier"
                            value={data.membership_tier}
                            onChange={e => setData('membership_tier', e.target.value)}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                            required
                        >
                            <option value="" disabled>Please select a plan...</option>
                            {membershipTiers.map(tier => (
                                <option key={tier.value} value={tier.value}>{tier.label}</option>
                            ))}
                        </select>
                     )}
                     {errors.membership_tier && <div className="text-sm text-red-600 mt-1">{errors.membership_tier}</div>}
                 </div>

                 {/* The rest of the form */}
                 <div>
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" value={data.name} onChange={e => setData('name', e.target.value)} required autoFocus className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                    {errors.name && <div className="text-sm text-red-600 mt-1">{errors.name}</div>}
                </div>
                {/* ... email input ... */}
                 <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" value={data.email} onChange={e => setData('email', e.target.value)} required className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
                    {errors.email && <div className="text-sm text-red-600 mt-1">{errors.email}</div>}
                </div>
                {/* ... password inputs using our component ... */}
                <div>
                    <label htmlFor="password">Password</label>
                    <PasswordInput id="password" value={data.password} onChange={e => setData('password', e.target.value)} required className="mt-1" />
                    {errors.password && <div className="text-sm text-red-600 mt-1">{errors.password}</div>}
                </div>
                 <div>
                    <label htmlFor="password_confirmation">Confirm Password</label>
                     <PasswordInput id="password_confirmation" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} required className="mt-1" />
                     {errors.password_confirmation && <div className="text-sm text-red-600 mt-1">{errors.password_confirmation}</div>}
                </div>

                <button type="submit" disabled={processing} className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 disabled:bg-blue-300">
                    Create Account & Proceed
                </button>
            </form>
        </div>
    );
}