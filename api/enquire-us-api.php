<?php

// header("Access-Control-Allow-Origin: *");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require_once 'vendor/autoload.php';

$data = json_decode( file_get_contents('php://input'),true );
if($data){
    //PHPMailer Object
    $mail = new PHPMailer(true); //Argument true in constructor enables exceptions


    $mail->CharSet = 'UTF-8';
    $mail->Encoding = 'base64';
    $mail->IsSMTP(); // enable SMTP
    //$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
    $mail->SMTPAuth = true; // authentication enabled
    $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
    $mail->Host = "smtp.hostinger.com";
    $mail->Port = 465; // or 587
    $mail->IsHTML(true);
    $mail->Username = "shreyanshi@iosandweb.net";
    $mail->Password = "Strangerthings1@kgf";


    $mail->From = "shreyanshi@iosandweb.net";
    $mail->FromName = "Danube Properties";


    $mail->addAddress("shreyanshi@iosandweb.net");
    $mail->addAddress("shreyanshi@iosandweb.net");
    // $mail->addAddress("gaurav@iosandweb.net");

    //CC and BCC
    //$mail->addCC("blessingproperty007@gmail.com");
    //$mail->addBCC("bcc@example.com");

    $mail->Subject = "New Query From Website - Danube Properties";
    $mail->Body = "<p>Name: ".$data['name']."</p><p>Email: ".$data['email']."</p><p>Contact Detail: ".$data['mobileNumber']."</p>";

    try {
        $mail->send();
        echo json_encode(array("status" =>0, "msg" => "Mail send successfully."));
    } catch (Exception $e) {
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
}

?>