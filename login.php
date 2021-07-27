
<?php
$servername = "localhost";
$username = "manish";
$password = "kumar1111";

session_start();
// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

mysqli_select_db($conn,'users');
$name=$_post['username'];
$paswd=$_post['password'];
$q="select * from users where name='$username' && paswd='$password'";
$result=mysqli_query($con, $q);
$num=mysqli_num_rows($result);
if ($num==1)
 {
    $_SESSION['username']==$name;
    header('location':home.php);
}
else{
	echo "username/password not matched.";
}

?>
<!DOCTYPE html>
<html>
<head>
	<title>login page</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
<div class="for-all">
<h1 id="h">Login</h1>
<div id="x">
<form action="#" method="post" id="yy">
username:<input type="text" name="ussername" value="" id="y"><br>
password:<input type="password" name="password" value="" id="z"> <br>
<input type="submit" name="submit" value="login" id="xx"><br>
<p>new user?<a href="a.html"><u>register here</u></a></p>	
</div>	
</form>
</div>
</body>
</html>