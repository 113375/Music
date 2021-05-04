<?php
function pdo()
{
    $user = "root";
    $pass = "root";
    return new PDO('mysql:host=localhost;dbname=music', $user, $pass);
}
?>