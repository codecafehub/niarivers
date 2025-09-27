<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
 
        public function run(): void
        {
            Post::create([
                'user_id' => 1, // Assumes a user with ID 1 exists
                'title' => 'Groundbreaking Ceremony for the New Downtown Tower',
                'slug' => 'groundbreaking-ceremony-downtown-tower',
                'category' => 'Company News',
                'excerpt' => 'Join us as we celebrate the start of our most ambitious project yet...',
                'content' => 'Full text of the blog post goes here.',
                'cover_image_path' => 'images/hall.jpg', // Add image to public/images/posts/
                'published_at' => now()->subDays(2),
            ]);

            Post::creat([]);

            Post::create([
                'user_id' => 1,
                'title' => '5 Sustainable Building Practices We Follow',
                'slug' => '5-sustainable-building-practices',
                'category' => 'Sustainability',
                'excerpt' => 'At Nia Rivers Construction, we are committed to green building...',
                'content' => 'Full text of the blog post goes here.',
                'cover_image_path' => 'images/project.jpg', // Add image to public/images/posts/
                'published_at' => now()->subDays(5),
            ]); 

            Post::create([
                'user_id' => 1,
                'title' => 'Top 10 Construction Trends to Watch in 2024',
                'slug' => 'top-10-construction-trends-2024',
                'category' => 'Industry Insights',
                'excerpt' => 'Stay ahead of the curve with these emerging trends in construction...',
                'content' => 'Full text of the blog post goes here.',
                'cover_image_path' => 'images/fivefinger.jpg', // Add image to public/images/posts/
                'published_at' => now()->subDays(10),
            ]);

            Post::create([
                'user_id' => 1,
                'title' => 'How Technology is Revolutionizing Construction',
                'slug' => 'technology-revolutionizing-construction',
                'category' => 'Technology',
                'excerpt' => 'From drones to AI, explore how technology is changing the construction landscape...',
                'content' => 'Full text of the blog post goes here.',
                'cover_image_path' => 'images/stage.jpg', // Add image to public/images/posts/
                'published_at' => now()->subDays(15),
            ]); 
            // Add 2 more posts...
        }
  
}


