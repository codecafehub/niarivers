<?php
namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TeamMember;

class TeamMemberSeeder extends Seeder
{
    public function run(): void
    {
        TeamMember::truncate();

        // --- Executives ---
        TeamMember::create([
            'title' => 'Dr.',
            'name' => 'Ogechi Okachi',
            'position' => 'Chairman',
            'bio' => 'Dr. Okachi founded Nia Rivers with a vision to integrate sustainable practices...',
            'photo_path' => 'images/cc1.jpg',
            'linkedin_url' => 'https://linkedin.com/in/ogechiokachi',
            'facebook_url' => 'https://facebook.com/ogechiokachi',
            'status' => 'active',
            'team_category' => 'executive',
        ]);
        TeamMember::create([
            'title' => 'Mr.',
            'name' => 'Chinedu Eze',
            'position' => 'Vice Chairman',
            'bio' => 'With a background in civil engineering...',
            'photo_path' => 'images/cc2.jpg',
            'linkedin_url' => 'https://linkedin.com/in/chinedueze',
            'facebook_url' => 'https://facebook.com/chinedueze',
            'twitter_url' => 'https://twitter.com/chinedueze',
            'status' => 'active',
            'team_category' => 'executive',
        ]);

        // --- Members ---
        TeamMember::create([
            'title' => 'Ms.',
            'name' => 'Amara Nwosu',
            'position' => 'General Secretary',
            'bio' => 'Amara brings a wealth of experience...',
            'photo_path' => 'images/about-hero.jpg',
            'linkedin_url' => 'https://linkedin.com/in/amaranwosu',
            'status' => 'active',
            'team_category' => 'executive',
        ]);
        TeamMember::create([
            'title' => 'Mr.',
            'name' => 'Tunde Adebayo',
            'position' => 'Treasurer',
            'bio' => 'Tunde is our on-the-ground expert, ensuring structural integrity and safety on all our major sites.',
            'photo_path' => 'images/cc2.jpg', // Placeholder image
            'linkedin_url' => 'https://linkedin.com/in/tundeadebayo',
            'twitter_url' => 'https://twitter.com/tundeadebayo',
            'status' => 'active',
            'team_category' => 'executive',
        ]);

         TeamMember::create([
            'title' => 'Dr',
            'name' => 'Tunde Bello',
            'position' => 'Member',
            'bio' => 'Idris was a founding partner of Nia Rivers and was instrumental in shaping the company\'s early success and core values.',
            'photo_path' => 'images/cc1.jpg', // Placeholder image
            'linkedin_url' => 'https://linkedin.com/in/idrisbello',
            'status' => 'active', // 'active' means visible on the site
            'team_category' => 'member',
        ]);

         // --- Past Executive ---
        TeamMember::create([
            'title' => 'Mr.',
            'name' => 'Idris Bello',
            'position' => 'Founding Partner (Retired)',
            'bio' => 'Idris was a founding partner of Nia Rivers and was instrumental in shaping the company\'s early success and core values.',
            'photo_path' => 'images/cc2.jpg', // Placeholder image
            'linkedin_url' => 'https://linkedin.com/in/idrisbello',
            'status' => 'active', // 'active' means visible on the site
            'team_category' => 'past_executive',
        ]);
    }
}