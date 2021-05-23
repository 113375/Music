<?php
$pdo = new PDO('mysql:host=localhost;dbname=music', "root", "root");

$stmt = $pdo->prepare("SELECT * FROM album WHERE album_id = :albumId");
$stmt->bindParam(":albumId", $_GET["albumId"]);
$stmt->execute();
$about_album = $stmt->fetch();

$stmt = $pdo->prepare("SELECT * FROM song WHERE album_id = :albumId");
$stmt->bindParam(":albumId", $_GET["albumId"]);
$stmt->execute();
$songs = $stmt->fetchALL();
?>


<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?= $_GET["albumName"] ?></title>
    <link rel="stylesheet" href="/Music/css/base.css">
    <link rel="stylesheet" href="/Music/css/album/album.css">
</head>
<body>
<div class="container">
    <div class="header">
        <div class="button">
            Вернуться на главную
        </div>
        <div class="title">
            <?= $_GET["albumName"] ?>
        </div>
    </div>
    <div class="all-inf">
        <div class="spotify">
            <?= $songs[$_GET["song"]]["link"] ?>
            <div class="song-desc"><?= $songs[$_GET["song"]]["description"]?></div>
<!--            TODO надо будет сделать описание песни под самой песней-->
        </div>
        <div class="songs">
            <div class="text">Песни альбома </div>
            <?php foreach ($songs as $song):?>
                <div songId="<?= $song['id']?>" class="song"><?= $song["name"]?></div>
            <?php endforeach;?>
        </div>
    </div>
    <div class="description modal-footer">
        <?= $about_album["description"]?>
    </div>
</div>
<script src="/Music/js/album/album.js"></script>

</body>
</html>
