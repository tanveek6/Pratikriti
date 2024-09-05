<?php
session_start();
header('location:r.html');

$conn = mysqli_connect('localhost','root');

if($conn){
    echo" Connection Successful";
}else{
    echo" No connection";
}

mysqli_select_db($conn,'tanvi');

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['phone'];
$add = $_POST['coupon'];
$msg = $_POST['message'];

$qy = "INSERT INTO `regestration`(`name`, `email`, `number`,`address`, `msg`) VALUES ('$name','$email','$number','$add','$msg')";
    mysqli_query($conn,$qy);

?>
