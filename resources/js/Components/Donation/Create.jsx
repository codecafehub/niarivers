// resources/js/Pages/Public/Donation/Create.jsx
import { useState } from 'react';
import { useForm, Head, usePage } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

const AmountButton = ({ amount, onClick, isSelected }) => (
    <button
        type="button"
        onClick={() => onClick(amount)}
        className={`w-full p-4 rounded-lg text-xl font-bold border-2 transition-colors ${
            isSelected ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
        }`}
    >
        ₦{amount.toLocaleString()}
    </button>
);

export default function Create() {
    const { auth } = usePage().props;
    const { data, setData, post, processing, errors } = useForm({
        donor_name: auth.user?.name || '',
        donor_email: auth.user?.email || '',
        amount: '',
    });
    
    const [customAmount, setCustomAmount] = useState('');

    const selectAmount = (amount) => {
        setData('amount', amount);
        setCustomAmount(''); // Clear custom amount input
    };

    const handleCustomAmountChange = (e) => {
        const value = e.target.value.replace(/[^0-9]/g, ''); // Allow only numbers
        setCustomAmount(value);
        setData('amount', value);
    };

    const submit = (e) => {
        e.preventDefault();
        post(route('donation.store'));
    };

    return (
        <PublicLayout>
            <Head title="Donate | Nia Rivers Co" />

            {/* Hero */}
            <div className="bg-gray-800 py-20 text-center text-white">
                <h1 className="text-5xl font-extrabold">Support Our Mission</h1>
                <p className="mt-2 text-lg text-gray-300">Your contribution helps us build a stronger community.</p>
            </div>
            
            {/* Form Section */}
            <div className="py-16 bg-gray-100">
                <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-6">
                    {/* Left Side: The Appeal */}
                    <div className="text-lg text-gray-700 leading-relaxed">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Your Donation Matters</h2>
                        <p className="mb-4">
                           Every contribution, no matter the size, fuels our initiatives to provide training, support community projects, and advocate for sustainable building practices. Your donation is an investment in the next generation of architects, engineers, and builders.
                        </p>
                        <p>
                           Join us in building a legacy of excellence, integrity, and community empowerment.
                        </p>
                    </div>

                    {/* Right Side: The Donation Form */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Make a Donation</h3>
                        <form onSubmit={submit} className="space-y-6">
                            {/* Amount Selector */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Choose an amount</label>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    <AmountButton amount={5000} onClick={selectAmount} isSelected={data.amount === 5000} />
                                    <AmountButton amount={10000} onClick={selectAmount} isSelected={data.amount === 10000} />
                                    <AmountButton amount={25000} onClick={selectAmount} isSelected={data.amount === 25000} />
                                </div>
                                 <input
                                    type="text"
                                    placeholder="Or enter a custom amount"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className="mt-4 block w-full border-gray-300 rounded-md shadow-sm"
                                />
                                {errors.amount && <div className="text-sm text-red-600 mt-1">{errors.amount}</div>}
                            </div>
                            
                            {/* Donor Info */}
                            <div>
                                <label htmlFor="donor_name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" id="donor_name" value={data.donor_name} onChange={e => setData('donor_name', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
                                 {errors.donor_name && <div className="text-sm text-red-600 mt-1">{errors.donor_name}</div>}
                            </div>
                            <div>
                                <label htmlFor="donor_email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="donor_email" value={data.donor_email} onChange={e => setData('donor_email', e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" required />
                                 {errors.donor_email && <div className="text-sm text-red-600 mt-1">{errors.donor_email}</div>}
                            </div>
                             <button type="submit" disabled={processing} className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 disabled:bg-blue-300 text-lg">
                                {processing ? 'Processing...' : 'Proceed to Instructions'}
                             </button>
                        </form>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}