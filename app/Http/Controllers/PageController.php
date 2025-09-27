<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Project;
use App\Models\Post;
use App\Models\TeamMember;
use App\Services\YouTubeService;
use Illuminate\Support\Facades\Auth;

class PageController extends Controller
{
    public function home( )
    {
        // Fetch the team members and map all necessary data
        $teamMembers = TeamMember::latest()->take(4)->get()->map(fn($member) => [
            'id' => $member->id,
            'title' => $member->title,
            'name' => $member->name,
            'bio' => $member->bio,
            'position' => $member->position,
            'photo_url' => $member->photo_url,
            // Add all the social media links here
            'linkedin_url' => $member->linkedin_url,
            'twitter_url' => $member->twitter_url,
            'facebook_url' => $member->facebook_url,
            'instagram_url' => $member->instagram_url,
        ]);
        

          // --- Fetch Latest Posts ---
        $latestPosts = Post::whereNotNull('published_at')
            ->where('published_at', '<=', now())
            ->with('user') // Eager load the author relationship for efficiency
            ->latest('published_at')
            ->take(3)
            ->get()
            ->map(function ($post) {
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'slug' => $post->slug,
                    'excerpt' => $post->excerpt,
                    'cover_image_url' => $post->cover_image_url, // Assumes you have an accessor on the Post model
                    'published_at' => $post->published_at->format('M d, Y'), // Format the date nicely
                    'author' => [
                        'name' => $post->user ? $post->user->name : 'Nia Rivers Co', // Fallback author name
                        'photo_url' => $post->user ? $post->user->profile_photo_url : null, // Assuming User model has this accessor
                    ]
                ];
            });


        // This is a placeholder for the Project mapping logic you already have.
        // I've simplified it here to keep the example focused.
        $featuredProjects = Project::where('is_featured', true)
                ->latest()
                ->take(3)
                ->get(); // You would normally map this as well.

        return Inertia::render('Public/Home', [
            'featuredProjects' => $featuredProjects,
            // 'videos' => $youtubeService->getLatestVideos(),
            'teamMembers' => $teamMembers,
            'latestPosts' => $latestPosts,
        ]);
    }

    public function about()
    {
        // Fetch all ACTIVE team members, ordering by name.
        $teamMembers = TeamMember::where('status', 'active')->get()->map(fn($member) => [
            'id' => $member->id,
            'title' => $member->title,
            'name' => $member->name,
            'position' => $member->position,
            'photo_url' => $member->photo_url,
            'linkedin_url' => $member->linkedin_url,
            'twitter_url' => $member->twitter_url,
            'facebook_url' => $member->facebook_url,
            'instagram_url' => $member->instagram_url,
            'bio' => $member->bio,
            'team_category' => $member->team_category, // <-- Crucial: pass the category
        ]);

        return Inertia::render('Public/About', [
            'teamMembers' => $teamMembers,
        ]);
    }


    public function contact()
    {
        return Inertia::render('Public/Contact');
    }


    // New method for payment page
    
    public function payment()
    {
        // We can pass the currently logged-in user's data to the page
        $user = Auth::user();

        return Inertia::render('Public/Payment', [
            'membershipTier' => $user->membership_tier,
            'paymentStatus' => $user->payment_status,
        ]);
    }
}