<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Include PHPMailer library
require 'vendor/autoload.php'; // If using Composer
// require 'path/to/PHPMailer/src/PHPMailer.php'; // If downloaded manually
// require 'path/to/PHPMailer/src/SMTP.php';
// require 'path/to/PHPMailer/src/Exception.php';

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();                                         // Set mailer to use SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Specify Gmail SMTP servers
    $mail->SMTPAuth   = true;                                // Enable SMTP authentication
    $mail->Username   = 'skumar10031993@gmail.com';          // Your Gmail address
    $mail->Password   = 'xwxfkddskohulnnm';                 // Your Gmail App Password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;      // Enable TLS encryption
    $mail->Port       = 587;                                 // TCP port to connect to

    // Check if the form was submitted using POST
    if ($_SERVER['REQUEST_METHOD'] == "POST"){
        $user_name = htmlspecialchars($_POST['name']);
        $user_email = htmlspecialchars($_POST['email']);
        $user_subject = htmlspecialchars($_POST['subject']);
        $user_msg = htmlspecialchars($_POST['message']);

        // Recipients
        $mail->setFrom('skumar10031993@gmail.com', 'Sachin Kumar B'); // Sender email and name
        $mail->addAddress($user_email, $user_name); // Add a recipient

        // Content
        $mail->isHTML(true);                                    // Set email format to HTML
        $mail->Subject = $user_subject;
        $mail->Body    = '<h1>Hello Sachin!</h1><br><br><p>'. $user_msg .'</p>';
        $mail->AltBody = '<br><br><h5>'. $user_name .'</h5>,<br><p>'. $user_email .'</p>';
    }    

    // Send email
    $mail->send();
    echo 'Email has been sent successfully!';
} catch (Exception $e) {
    echo "Email could not be sent. Error: {$mail->ErrorInfo}";
}
?>
