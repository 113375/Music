<?php


$user = "root";
$pass = "root";
try {
    $dbh = new PDO('mysql:host=localhost;dbname=music', $user, $pass);
    f($dbh);

} catch (PDOException $e) {
    die();
}

function f($pdo)
{
    $name = $_POST['name'];
    $start_year = $_POST['start'];
    $_POST['end'] ? $end_year = $_POST['end'] : $end_year = null;
    $photo = $_POST['photo'];
    $text = $_POST['text'];
    echo $name . "<br>";
    echo $start_year . "<br>";
    echo $end_year . "<br>";
    echo $photo . "<br>";
    echo $text;
    // надо будет сделать через json добавление нового музыканта и вообще сделать сервер через json

    if(!$name or !$start_year or !$photo or !$text){
        var_dump(http_response_code(400));
        return ;
    }
    $stmt = $pdo->prepare("INSERT INTO 'musician'('name', 'start', 'end', 'photo', 'description') VALUES (:name,:start,:end,:photo,:text)");
    $stmt->execute(['name' => $name, 'start' => $start_year, 'end' => $end_year, 'photo' => $photo, 'text' => $text]);

    var_dump(http_response_code(400));
}

?>
