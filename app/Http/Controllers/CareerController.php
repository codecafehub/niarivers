<?php

namespace App\Http\Controllers;

use App\Models\JobOpening;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // Later, we will pass the real data:
        // 'jobs' => JobOpening::where('is_active', true)->latest()->get()
        return Inertia::render('Public/Careers/Index');
    }

    /**
     * Display the specified resource.
     */
    public function show(JobOpening $jobOpening)
    {
        // This will be for the detail page.
        return Inertia::render('Public/Careers/Show', [
            'job' => $jobOpening,
        ]);
    }
}