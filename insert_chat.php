<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "chat-example";// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$msg=$_POST['msg'];  
     
   echo $sqli = "INSERT  INTO chat( messages )
                VALUES ('$msg')"; 
	  $result = mysqli_query($conn, $sqli);

?>