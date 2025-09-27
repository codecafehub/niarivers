<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // 1. Create a default Admin User if the users table is empty.
        // This ensures you always have at least one user, and it will have ID=1,
        // which is what your PostSeeder expects.
        if (User::count() === 0) {
            User::factory()->create([
                'name' => 'Admin User',
                'email' => 'admin@niarivers.com',
            ]);
        }

        // // 2. Call all the other seeder classes you want to run.
        // // This is Laravel's way of organizing your seeding process.
        $this->call([
            TeamMemberSeeder::class,
            PostSeeder::class,
            // You can add more seeders to this array in the future.
        ]);
    }
}