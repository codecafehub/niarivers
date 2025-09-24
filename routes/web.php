<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\PageController;
use App\Http\Controllers\CareerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ContactFormController;

// Route::get('/', function () {
//     return Inertia::render('Home', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/', [PageController::class, 'home'])->name('home'); 
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/contact', [PageController::class, 'contact'])->name('contact.show');
Route::post('/contact', [ContactFormController::class, 'store'])->name('contact.store');
Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
Route::get('/projects/{project:slug}', [ProjectController::class, 'show'])->name('projects.show');
Route::get('/services', [ServiceController::class, 'index'])->name('services.index');
Route::get('/services/{service:slug}', [ServiceController::class, 'show'])->name('services.show');
Route::get('/careers', [CareerController::class, 'index'])->name('careers.index');
Route::get('/careers/{jobOpening:slug}', [CareerController::class, 'show'])->name('careers.show');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/payment', [PageController::class, 'payment'])->name('payment.show');
});

// Admin section for managing content
// Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
//     Route::get('/dashboard', fn() => inertia('Admin/Dashboard'))->name('dashboard');
//     // We would put our Project management routes here (create, edit, delete)
// });


require __DIR__.'/auth.php';


