<?php

header('Content-Type: application/json');

function check($data)
{
    $pdo = new PDO('mysql:host=localhost;dbname=music', "root", "root");
    $query = "SELECT * FROM user WHERE email = :email";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $data->email);
    $stmt->execute();
    $row = $stmt->fetch();
    if (!$row) {
        return json_encode(["error" => "Несуществующий пользователь"]);

    }
    if ($row["hash_password"] == $data->password) {
        setcookie("name", $row["username"], time() + 3600, "/", "", 0);
        setcookie("email", $row["email"], time() + 3600, "/", "", 0);
        setcookie("id", $row["id"], time() + 3600, "/", "", 0);
        return json_encode($row);
    }
    else {
        return json_encode(["error" => "Неправильный пароль"]);
    }
}

$data = json_decode(file_get_contents("php://input"));
echo check($data);