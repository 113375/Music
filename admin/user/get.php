<?php
//нужно будет json с email

header('Content-Type: application/json');

function find($email, $pdo)
{
    $query = "SELECT * FROM user WHERE email = :email";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->execute();
    return $stmt->fetch();
}
$pdo = new PDO('mysql:host=localhost;dbname=music', "root", "root");
$data = json_decode(file_get_contents("php://input"));
echo json_encode(find($data->email, $pdo));
