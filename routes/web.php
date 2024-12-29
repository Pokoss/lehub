<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return Inertia::render('HomeScreen');
});

Route::get('/', function () {
    return Inertia::render('HomeScreen');
});

Route::get('/', function () {
    return Inertia::render('HomeScreen');
});

Route::get('/', function () {
    return Inertia::render('HomeScreen');
});

Route::get('/', function () {
    return Inertia::render('HomeScreen');
});

Route::get('/aboutus', function () {
    return Inertia::render('AboutUsScreen');
});

Route::get('/hosting-plan', function () {
    return Inertia::render('HostingPlanScreen');
});

Route::get('/hostpro360', function () {
    return Inertia::render('HostPro360Screen');
});

Route::get('/gallery', function () {
    return Inertia::render('GalleryScreen');
});

Route::get('/mobile-app-development', function () {
    return Inertia::render('MobileAppDevelopmentScreen');
});

Route::get('/website-design', function () {
    return Inertia::render('WebDesignScreen');
});

Route::get('/graphics-design', function () {
    return Inertia::render('GraphicsDesignScreen');
});

Route::get('/contact-us', function () {
    return Inertia::render('ContactUsScreen');
});

Route::get('/projects', function () {
    return Inertia::render('ProjectsScreen');
});

Route::post('/contact-us', [ContactController::class, 'send']);
