<?php

namespace App\Http\Controllers;



use App\Models\Donation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Inertia\Response; // Import Response type for clarity

class DonationController extends Controller
{
    // Show the main donation page/form
    public function create()
    {
        return Inertia::render('Public/Donation/Create');
    }

    // Handle the form submission
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'donor_name' => 'required|string|max:255',
            'donor_email' => 'required|email|max:255',
            'amount' => 'required|numeric|min:500', // Set a minimum donation amount
        ]);

        Donation::create([
            'user_id' => Auth::id(), // Will be null if the user is not logged in
            'donor_name' => $validatedData['donor_name'],
            'donor_email' => $validatedData['donor_email'],
            'amount' => $validatedData['amount'],
            'status' => 'pending', // Default status
        ]);
        
        // Redirect to a dedicated thank you page with the amount flashed to session
        return redirect()->route('donation.thankyou')->with([
            'success' => 'Your donation pledge has been recorded!',
            'donation_amount' => $validatedData['amount']
        ]);
    }
    
    // Show the "Thank You" page after submission
    public function thankYou()
    {
        if (!session()->has('success') || !session()->has('donation_amount')) {
            return redirect()->route('donation.create');
        }
        
        // The key is that we pass the data as regular props
        return Inertia::render('Public/Donation/ThankYou', [
            'successMessage' => session('success'),
            'donationAmount' => session('donation_amount'),
        ]);
    }


     // ADD THIS NEW METHOD
    public function submitPaymentProof(Request $request)
    {
        $request->validate([
            // Validate that the uploaded file is an image, and not too large (e.g., 5MB)
            'payment_proof' => 'required|image|mimes:jpg,jpeg,png|max:5120',
        ]);

        $user = Auth::user();

        // Store the file in `storage/app/public/payment_proofs`
        // The store() method automatically generates a unique, secure filename.
        $path = $request->file('payment_proof')->store('payment_proofs', 'public');

        // Save the file path to the user's record.
        $user->payment_proof_path = $path;
        $user->save();

        // Redirect back with a success message
        return back()->with('success', 'Thank you! Your proof of payment has been uploaded and is pending review.');
    }
}