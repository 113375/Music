<?php
//тут будет обработка blob запроса, ну так, чтобы фотки качать отдельно, делаю свое rest api

$uploaddir = '/var/www/uploads/';
$uploadfile = $uploaddir . basename($_FILES['image']['name']);
include "dataBase.php";
echo '<pre>';
if (move_uploaded_file($_FILES['image']['tmp_name'], $uploadfile)) {
    $id = $_POST["id"];
    $pdo = pdo(); // подключаю базу данных
    $stmt = $pdo->prepare("UPDATE  musician SET photo = ? WHERE id = ?");
    $stmt->execute([$uploaddir . basename($_FILES['image']['name']), $id]);


    echo "Файл корректен и был успешно загружен.\n";
} else {
    echo "Возможная атака с помощью файловой загрузки!\n";
}

echo 'Некоторая отладочная информация:';
print_r($_FILES);

print "</pre>";

?>