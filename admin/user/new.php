<?php
header('Content-Type: application/json');

function patchUser($email, $pdo)
{
    $query = "SELECT * FROM user WHERE email = :email";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->execute();
    return $stmt->fetch();
}

function addUser($data)
{
    $pdo = new PDO('mysql:host=localhost;dbname=music', "root", "root");
    if (!empty(patchUser($data->email, $pdo))) {
        return json_encode(["error" => "Существующий email"]);
    }
    $query = "INSERT INTO user(username, email, hash_password) VALUES (:username, :email, :password)";
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":username", $data->name);
    $stmt->bindParam(":email", $data->email);
    $stmt->bindParam(":password", $data->password);
    $stmt->execute();

    $user = patchUser($data->email, $pdo);

    setcookie("name", $data->name, time() + 3600, "/", "", 0);
    setcookie("email", $data->email, time() + 3600, "/", "", 0);
    setcookie("id", $user["id"], time() + 3600, "/", "", 0);
    return json_encode(["log" => "Пользователь создан"]);
}

$data = json_decode(file_get_contents("php://input"));
echo addUser($data);

