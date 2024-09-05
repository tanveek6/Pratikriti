<?php
session_start();

// Collect the form data
$name = $_POST['Name'];
$email = $_POST['Email'];
$number = $_POST['Number'];
$msg = $_POST['Message'];

// Prepare the email
$to = "pratikriti06@gmail.com";
$subject = "New Contact Form Submission";
$body = "Name: $name\nEmail: $email\nNumber: $number\nMessage: $msg";
$headers = "From: $email";

// Send the email
if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully.";
} else {
    echo "Message could not be sent.";
}

// // Redirect after sending the email
header('Location: index.html');
exit();
?>
