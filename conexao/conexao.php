<?php
  ini_set('display_errors', true);
  error_reporting(E_ALL);

  $hostname = "localhost";
  $database = "agenda";
  $username = "root";
  $password = "";

  if($conecta = mysqli_connect($hostname, $username, $password, $database)) {

  } else {

  }
?>
