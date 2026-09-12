<?php

use App\Http\Controllers\SitemapController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');
Route::inertia('pixel-perfect-empresarial', 'empresarial')->name('empresarial');
Route::inertia('plantillas', 'templates')->name('templates');

Route::prefix('demos/restaurante')->name('restaurant.')->group(function () {
    Route::inertia('/', 'restaurant', ['view' => 'home'])->name('home');
    Route::inertia('menu', 'restaurant', ['view' => 'menu'])->name('menu');
    Route::inertia('galeria', 'restaurant', ['view' => 'gallery'])->name('gallery');
});

Route::get('sitemap.xml', SitemapController::class)->name('sitemap');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::inertia('dashboard', 'dashboard')->name('dashboard');
});

require __DIR__.'/settings.php';
