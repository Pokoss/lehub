<!DOCTYPE html>
<html>
<head>
    <title>Web submission from {{ $name }}</title>
</head>
<body>
    <h2>You have a new message from {{ $name }} </h2>
    <p><strong>Name:</strong> {{ $name }}</p>
    <p><strong>Email:</strong> {{ $email }}</p>
    <p><strong>Phone:</strong> {{ $phone }}</p>
    <p><strong>Message:</strong></p>
    <p>{{ $details }}</p>
</body>
</html>