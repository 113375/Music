<?php
include "dataBase.php";
function query($query, $param, $all){
    $pdo = pdo();
    $stmt =  $pdo -> prepare($query);
    $stmt -> execute($param);
    if($all) {
        $row = $stmt->fetchAll();
    }else{
        $row = $stmt->fetch();
    }
    return $row;
}


echo query($_POST["query"], $_POST["params"], $_POST["all"]);

?>