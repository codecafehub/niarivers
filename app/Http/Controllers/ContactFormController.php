<?php

namespace App\Http\Controllers;

use App\Models\ContactSubmission;
use Illuminate\Http\Request;

class ContactFormController extends Controller
{
    public function store(Request $request)
    {
        // 1. Validate the incoming data
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'message' => 'required|string|max:5000',
        ]);

        // 2. Create and save the submission
        ContactSubmission::create($validatedData);

        // 3. Redirect back with a success message
        return back()->with('success', 'Thank you for your message! We will get back to you shortly.');
    }
}