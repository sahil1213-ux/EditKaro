<?php
phpinfo();
error_reporting(E_ALL);
ini_set('display_errors', 1);
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = htmlspecialchars($_POST['first_name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $website = htmlspecialchars($_POST['website']);
    $message = htmlspecialchars($_POST['message']);

    // Check if data is coming through
    echo "Form submitted successfully!";
    echo "<br>First Name: " . $firstName;
    echo "<br>Email: " . $email;
    echo "<br>Phone: " . $phone;
    echo "<br>Website: " . $website;
    echo "<br>Message: " . $message;

    // Perform email validation or further processing here
    $to = "sahilanand00027@gmail.com";  // Replace with your email address
    $subject = "New Form Submission";
    $body = "First Name: $firstName\nEmail: $email\nPhone: $phone\nWebsite: $website\nMessage: $message";

    // Simple mail function
    if (mail($to, $subject, $body)) {
        echo "Email sent successfully!";
    } else {
        echo "Error sending email.";
    }
}
?>
