<?php
//TODO сделать добавление нового жанра в базу данных

header("Content-Type: application/json");
$data = json_decode(file_get_contents("php://input"));
include "dataBase.php"; // не менять эту строку, даже если очень хочется

try {
    if ($data->name && $data->text) {
        $pdo = pdo();
        $stmt = $pdo->prepare("INSERT INTO genre(name, description) VALUES (:name, :text)");
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

