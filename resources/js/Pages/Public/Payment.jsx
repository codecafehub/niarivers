// resources/js/Pages/Public/Payment.jsx

import { useForm, Head, usePage } from '@inertiajs/react';
import PublicLayout from '@/Layouts/PublicLayout';

// Data mapping for tier names and prices
const tiers = {
    student: { name: 'Student Membership', price: '3,000' },
    graduate: { name: 'Graduate Membership', price: '7,500' },
    associate: { name: 'Associate Membership', price: '10,000' },
    full_membership: { name: 'Full Membership', price: '20,000' },
    fellow: { name: 'Fellow Membership', price: '30,000' },
    architectural_technologist: { name: 'Architectural Technologist Membership', price: '3,000' },
};

export default function Payment({ membershipTier }) {
    const { props } = usePage();
    const user = props.auth.user;

    const { setData, post, processing, errors, progress } = useForm({
        payment_proof: null, // This will hold the file object
    });

    const tierDetails = tiers[membershipTier] || { name: 'Membership', price: 'N/A' };
    const userHasUploadedProof = !!user.payment_proof_path;

    const submit = (e) => {
        e.preventDefault();
        // The POST route we created in web.php
        post(route('payment.store'));
    };

    return (
        <PublicLayout>
            <Head title="Complete Your Payment" />
            <div className="py-24 bg-gray-100 py-20">
                <div className="container mx-auto px-6 max-w-3xl">

                     {/* Main Card */}
                    <div className="bg-white p-8 rounded-lg shadow-lg">

                         <div className="text-center mb-8">
                            <h1 className="text-3xl font-bold text-gray-800">Complete Your Membership</h1>
                            <p className="mt-2 text-lg text-gray-600">You're one step away from joining us!</p>
                        </div>
                        
                         {/* Dynamic Alert Message */}
                         {props.flash?.success && !userHasUploadedProof && (
                            <div className="mb-6 p-4 bg-green-100 border-l-4 border-green-500 text-green-700 rounded">
                                <p>{props.flash.success}</p>
                            </div>
                        )}
                         {userHasUploadedProof && (
                             <div className="mb-6 p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 rounded">
                                <p className="font-bold">Pending Review</p>
                                <p>We have received your proof of payment. Your account will be activated once our team has confirmed the transaction.</p>
                            </div>
                        )}
                        

                        {/* Payment Details Section */}
                        <div className="bg-gray-50 p-6 rounded-lg border mb-8">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Step 1: Make Payment</h2>
                            <p className="mb-4">
                                Please transfer a total of <strong className="text-2xl">₦{tierDetails.price}</strong> for your <strong className="text-blue-600">{tierDetails.name}</strong> to the account below:
                            </p>
                            <ul className="space-y-2 font-mono text-gray-800 bg-gray-200 p-4 rounded">
                                <li><strong>Bank Name:</strong> First Bank of Nigeria</li>
                                <li><strong>Account Name:</strong> Nia Rivers Co</li>
                                <li><strong>Account Number:</strong> 1234567890</li>
                            </ul>
                        </div>
                        
                        {/* File Upload Section */}
                        {!userHasUploadedProof && (
                            <div className="border p-6 rounded-lg">
                                <h2 className="text-xl font-semibold text-gray-800 mb-4">Step 2: Upload Proof of Payment</h2>
                                <form onSubmit={submit}>
                                    <div>
                                         <label htmlFor="payment_proof" className="block text-sm font-medium text-gray-700">Payment Screenshot or Receipt</label>
                                         <input
                                            id="payment_proof"
                                            type="file"
                                            className="mt-2 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                                            onChange={(e) => setData('payment_proof', e.target.files[0])}
                                            required
                                        />
                                         {progress && (
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress.percentage}%` }}></div>
                                            </div>
                                        )}
                                        {errors.payment_proof && <div className="text-sm text-red-600 mt-1">{errors.payment_proof}</div>}
                                    </div>
                                    <div className="mt-6">
                                        <button type="submit" disabled={processing} className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded hover:bg-blue-700 disabled:bg-blue-300">
                                            {processing ? 'Uploading...' : 'Submit for Review'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        <div className="text-center mt-6">
                             <p className="text-sm text-gray-500">
                                Need help? <a href={route('contact.show')} className="text-blue-600 underline">Contact our support team.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}