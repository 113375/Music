<?php
echo "fdsaf \n";
$db = new Database();
echo "fdsaf\n";
$con = $db->getConnection();

$song = new Song();


$song->album_id = 1;
$song->conn = $con;
echo "fdsaf";
echo $song->album();
echo "faf";
?>