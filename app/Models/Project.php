<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Project extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'title',
        'slug',
        'description',
        'location',
        'client_name',
        'completion_date',
        'cover_image_path',
        'is_featured',
    ];

    /**
     * Get the full URL for the project's cover image.
     */
    public function getCoverImageUrlAttribute()
    {
        return $this->cover_image_path
                    ? Storage::url($this->cover_image_path)
                    : null;
    }
}