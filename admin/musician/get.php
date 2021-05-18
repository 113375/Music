<?php
header('Content-Type: application/json');
include " admin/dataBase.php";
function get($all, $query)
{
    //сделать запрос пользователя по параметрам
    $pdo = new PDO('mysql:host=localhost;dbname=music', "root", "root");
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    if ($all) {
        $row = $stmt->fetchAll();
    } else {
        $row = $stmt->fetch();
    }
    return json_encode($row);
}


if (empty($_POST)) {
    //если это get запрос
    echo get(1, "SELECT * FROM musician");
}