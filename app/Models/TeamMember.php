<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage; 

class TeamMember extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     * This array MUST be inside the Model, not the Seeder.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'title',          
        'name',
        'position',      
        'bio',
        'gender', 
        'team_category', 
        'linkedin_url',
        'twitter_url',
        'facebook_url',
        'instagram_url',
        'phone',
        'photo_path',
        'status',
    ];

    /**
     * Get the full public URL for the team member's photo.
     */
    public function getPhotoUrlAttribute()
    {
        // Check if the path is a full URL, if so, return it directly
        if (filter_var($this->photo_path, FILTER_VALIDATE_URL)) {
             return $this->photo_path;
        }

        return $this->photo_path ? asset($this->photo_path) : asset('images/default-avatar.png');
    }
}