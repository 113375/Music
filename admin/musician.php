<?php


// на какие данные рассчитан этот скрипт
header("Content-Type: application/json");
// разбираем JSON-строку на составляющие встроенной командой
$data = json_decode(file_get_contents("php://input"));
// отправляем в ответ строку с подтверждением
$user = "root";
$pass = "root";
try {
    $pdo = new PDO('mysql:host=localhost;dbname=music', $user, $pass);
    $stmt = $pdo->prepare("INSERT INTO musician(name, start, end, description) VALUES (:name,:start,:end,:text)");
    $stmt->bindParam(":name", $data->name);
    $stmt->bindParam(":start", $data->start);
    $stmt->bindParam(":end", $data->end);
    $stmt->bindParam(":text", $data->text);
    if ($data->end === "")
        $data->end = null;
    $stmt->execute();
    echo "Музыкант $data->name добавлен";


} catch (Exception $err) {
    print_r($err);
}