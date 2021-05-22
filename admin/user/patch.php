<?php
header('Content-Type: application/json');

function patchUser($data, $pdo)
{
    $query = "UPDATE user SET username=:name,email=:email,hash_password=:password WHERE email = :where_email";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $data->email);
    $stmt->bindParam(":name", $data->name);
    $stmt->bindParam(":password", $data->password);
    $stmt->execute();
    return $stmt->fetch();
}
$pdo = new PDO('mysql:host=localhost;dbname=music', "root", "root");
$data = json_decode(file_get_contents("php://input"));
echo json_encode(patchUser($data, $pdo));
