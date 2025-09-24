<?php
namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Display a listing of all projects.
     */
    public function index()
    {
        // We'll pass real data later
        return Inertia::render('Public/Projects/Index');
    }

    /**
     * Display the specified project.
     */
    public function show(Project $project) // <-- Laravel does the lookup for you!
    {
        // We'll pass real data later
        return Inertia::render('Public/Projects/Show');
    }
}