<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo; // For the author relationship
use Illuminate\Support\Facades\Storage; // For generating URLs to stored images





class Post extends Model
{
    use HasFactory; // Add the HasFactory trait

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'title',
        'slug',
        'category',
        'excerpt',
        'content',
        'cover_image_path',
        'published_at',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'published_at' => 'datetime',
    ];

    /**
     * Get the author (User) that the Post belongs to.
     */
    public function user(): BelongsTo
    {
        // A Post belongs to a User. The foreign key is 'user_id' by convention.
        return $this->belongsTo(User::class);
    }

    /**
     * Accessor for the full cover image URL.
     * This creates the "virtual" property: $post->cover_image_url
     */
   

     public function getCoverImageUrlAttribute()
    {
        // Check if the path is a full URL, if so, return it directly
        if (filter_var($this->cover_image_path, FILTER_VALIDATE_URL)) {
             return $this->cover_image_path;
        }

        return $this->cover_image_path ? asset($this->cover_image_path) : asset('images/default-avatar.png');
    }
}
