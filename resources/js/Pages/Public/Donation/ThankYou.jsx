// resources/js/Pages/Public/Donation/ThankYou.jsx
import PublicLayout from '@/Layouts/PublicLayout';
import { Head, Link } from '@inertiajs/react'; // No usePage needed here

// 1. The component now accepts the props from the controller.
export default function ThankYou({ successMessage, donationAmount }) {

    // 2. A safety check for the case where a user lands here directly.
    if (!successMessage || !donationAmount) {
        return (
            <PublicLayout>
                <Head title="Donation Instructions" />
                <div className="container mx-auto px-6 py-20 text-center">
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                        <h1 className="text-4xl font-bold text-gray-800">Donation Instructions</h1>
                        <div className="mt-8 text-left bg-gray-50 p-6 rounded-lg border">
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">How to Donate</h2>
                            <p className="mb-4">Please complete the donation form to proceed.</p>
                        </div>
                        <Link href={route('donation.create')} className="inline-block mt-8 text-blue-600 font-semibold hover:underline">
                            &larr; Go to Donation Form
                        </Link>
                    </div>
                </div>
            </PublicLayout>
        );
    }

    // 3. This code only runs if the props were received successfully.
    const formattedAmount = Number(donationAmount).toLocaleString();

    return (
        <PublicLayout>
            <Head title="Thank You for Your Donation" />

            <div className="container mx-auto px-6 py-20 text-center">
                 <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                    
                    {/* 4. Use the props directly. */}
                    <h1 className="text-4xl font-bold text-gray-800 mt-4">{successMessage}</h1>
                    <p className="text-lg text-gray-600 mt-2">
                        Your pledge of <strong>₦{formattedAmount}</strong> has been successfully recorded.
                    </p>
                    
                    <div className="mt-8 text-left bg-gray-50 p-6 rounded-lg border">
                         <h2 className="text-xl font-semibold text-gray-800 mb-2">Next Steps: Complete Your Donation</h2>
                        <p className="mb-4">To finalize your contribution, please make a bank transfer to the following account:</p>
                         <ul className="space-y-2 font-mono">
                            <li><strong>Bank Name:</strong> First Bank of Nigeria</li>
                            <li><strong>Account Name:</strong> Nia Rivers Co - Donations</li>
                            <li><strong>Account Number:</strong> 1234567890</li>
                        </ul>
                         <p className="mt-4 text-sm text-gray-500">
                           After payment, please email your proof of payment to <a href="mailto:donations@niarivers.com" className="text-blue-600 font-semibold">donations@niarivers.com</a> with your name in the subject line.
                        </p>
                    </div>

                    <Link href="/" className="inline-block mt-8 text-blue-600 font-semibold hover:underline">
                        &larr; Back to Homepage
                    </Link>
                 </div>
            </div>
        </PublicLayout>
    );
}