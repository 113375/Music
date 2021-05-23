<?php
header('Content-Type: application/json');
function queryAll($query, $all, $fetch=1)
{
    $pdo = new PDO('mysql:host=localhost;dbname=music', "root", "root");

    $stmt = $pdo->prepare($query);
    $stmt->execute();
    if($fetch) {
        if ($all) {
            $row = $stmt->fetchAll();
        } else {
            $row = $stmt->fetch();
        }
        return $row;
    }
    return ["title" => "Успех"];
}

$data = json_decode(file_get_contents("php://input"));
if(array_key_exists("fetch", $data)){
    echo json_encode(queryAll($data->query, $data->all, $data->fetch));
}else{
    echo json_encode(queryAll($data->query, $data->all));
}



