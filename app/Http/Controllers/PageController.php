<?php

namespace App\Http\Controllers;

use App\Models\Project; // <-- Add this
use Illuminate\Http\Request;
use Inertia\Inertia; // <-- Add this

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('Public/Home', [ 
            'featuredProjects' => Project::where('is_featured', true)
                ->latest()
                ->take(3)
                ->get()
                // You might want to format the data here
                ->map(fn($project) => [
                    'id' => $project->id,
                    'slug' => $project->slug,
                    'title' => $project->title,
                    'location' => $project->location,
                    'cover_image_url' => $project->cover_image_url, // Assumes you have an accessor on your model
                ]),
        ]);
    }
}