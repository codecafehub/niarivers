<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response; // Import Response type for clarity

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $posts = Post::whereNotNull('published_at')
            ->where('published_at', '<=', now())
            ->with('user') // Eager load the author relationship for performance
            ->latest('published_at')
            ->get()
            ->map(function ($post) {
                return [
                    'id' => $post->id,
                    'title' => $post->title,
                    'slug' => $post->slug,
                    'category' => $post->category,
                    'excerpt' => $post->excerpt,
                    // We send the full content because the modal will need it
                    'content' => $post->content,
                    'cover_image_url' => $post->cover_image_url,
                    
                    'published_at' => $post->published_at->format('M d, Y'), // Human-readable date
                    'author' => $post->user ? [ // Check if author exists
                        'name' => $post->user->name,
                        // Add author's photo if you have one on the User model
                        'photo_url' => $post->user->profile_photo_url,
                    ] : [ // Provide a fallback if no author is linked
                        'name' => 'Nia Rivers Co',
                        // 'photo_url' => null,
                    ]
                ];
            });

        return Inertia::render('Public/Blog/Index', [
            'posts' => $posts,
        ]);
    }
}