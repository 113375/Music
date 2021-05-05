<?php
include "admin/dataBase.php";
function query($query, $param, $all)
{
    $pdo = pdo();
    $stmt = $pdo->prepare($query);
    $stmt->execute($param);
    if ($all) {
        $row = $stmt->fetchAll();
    } else {
        $row = $stmt->fetch();
    }
    return $row;
}

$data = json_decode(file_get_contents("php://input"));

echo query($data->query, $data->params, $data->all);

