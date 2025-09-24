<?php

namespace App\Http\Controllers;

use App\Models\Service;
use Inertia\Inertia;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    /**
     * Display a listing of the services.
     */
    public function index()
    {
        // For now, we'll just render the page.
        // Later, we will fetch all services from the database and pass them as a prop.
        // Example: 'services' => Service::all()
        return Inertia::render('Public/Services/Index');
    }

    /**
     * Display the specified service.
     */
    public function show(Service $service)
    {
        // This will be for the detail page later.
        return Inertia::render('Public/Services/Show', [
            'service' => $service
        ]);
    }
}