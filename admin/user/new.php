<?php
header('Content-Type: application/json');

function find($email, $pdo){
    $query = "SELECT * FROM user WHERE email = :email";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->execute();
    $res = $stmt->fetch();
    return $res;
}
function addUser($data)
{
    $pdo = new PDO('mysql:host=localhost;dbname=music', "root", "root");
    if(!empty(find($data->email, $pdo))){
        return json_encode(["error" => "Существующий email"]);
    }
    $query = "INSERT INTO user(username, email, hash_password) VALUES (:username, :email, :password)";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":username", $data->name);
    $stmt->bindParam(":email", $data->email);
    $stmt->bindParam(":password", $data->password);

    $stmt->execute();
    $user = find($data->email, $pdo);

    setcookie("name", $data->name, time() + 3600, "/", "", 0);
    setcookie("email", $data->email, time() + 3600, "/", "", 0);
    setcookie("id", $user["id"], time() + 3600, "/", "", 0);
    return json_encode(["log" =>"Пользователь добавлен"]);
}

$data = json_decode(file_get_contents("php://input"));
echo addUser($data);


