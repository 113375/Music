<?php
header('Content-Type: application/json');
function queryAll($query, $all)
{
    $pdo = new PDO('mysql:host=localhost;dbname=music', "root", "root");

    $stmt = $pdo->prepare($query);
    $stmt->execute();
    if ($all) {
        $row = $stmt->fetchAll();
    } else {
        $row = $stmt->fetch();
    }
    return $row;
}

$data = json_decode(file_get_contents("php://input"));
echo json_encode(queryAll($data->query, $data->all));

