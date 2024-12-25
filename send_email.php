<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $suggestion = $_POST["suggestion"];
    $to = "manalhawwash@gmail.com";
    $subject = "New Book Suggestion";
    $message = "New book suggestion: " . $suggestion;
    $headers = "From: your_email@example.com"; // Replace this with your email address

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200);
        echo "Email sent successfully";
    } else {
        http_response_code(500);
        echo "Failed to send email";
    }
} else {
    http_response_code(405); // Method Not Allowed
    echo "Method not allowed";
}
?>
