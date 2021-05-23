<?php

header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));

try {
    if ($data->name && $data->text) {
        $pdo = new PDO('mysql:host=localhost;dbname=music', "root", "root");
        $stmt = $pdo->prepare("INSERT INTO genre(genre_name, description) VALUES (:name, :text)");
        $stmt->bindParam(":name", $data->name);
        $stmt->bindParam(":text", $data->text);
        $stmt->execute();
        echo "жанр $data->name добавлен";

        header("Content-Type: application/json");
    } else {
        echo "Не заполнены обязательные поля (название и описание)";
    }


} catch (Exception $err) {
    print_r($err);
}

