<?php

namespace App\Http\Controllers;

use App\Mail\ContactUsEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function send(Request $request)
    {
        // Validate the incoming request
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'required',
            'details' => 'required',
        ]);

        // Send the email with validated data
        Mail::to('info@lehub.dev')->send(new ContactUsEmail(
            $validated['name'],
            $validated['email'],
            $validated['phone'],
            $validated['details']
        ));

        // Return a response (this can also be a redirect or JSON response)
        // return response()->json(['message' => 'Message sent successfully']);
    }
}