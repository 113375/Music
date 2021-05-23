<?php
//TODO сделать отображение альбома
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
    </div>
    <div>
        <div class="spotify">

        </div>
        <div class="songs">

        </div>
    </div>
    <div class="description">
        Тут вот просто текст будет
    </div>
</div>
<script src="/Music/js/album/album.js"></script>

</body>
</html>
