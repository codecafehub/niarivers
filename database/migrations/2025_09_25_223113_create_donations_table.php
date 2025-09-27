<?php
// In database/migrations/..._create_donations_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('donations', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null'); // Optional link to a registered user
            $table->string('donor_name');
            $table->string('donor_email');
            $table->decimal('amount', 10, 2); // Best practice for storing money
            $table->string('status')->default('pending'); // e.g., pending, completed, failed
            $table->string('proof_of_payment_path')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void { Schema::dropIfExists('donations'); }
};