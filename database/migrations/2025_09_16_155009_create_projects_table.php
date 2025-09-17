<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id(); // Standard auto-incrementing primary key
            $table->string('title');
            $table->string('slug')->unique(); // For clean URLs, e.g., /projects/downtown-medical-center
            $table->text('description');
            $table->string('location')->nullable();
            $table->string('client_name')->nullable(); // Good to have, but not always required
            $table->date('completion_date')->nullable();
            $table->string('cover_image_path')->nullable(); // We store the file path, not the actual image
            $table->boolean('is_featured')->default(false); // Crucial for the home page!
            $table->timestamps(); // Adds created_at and updated_at columns
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};
