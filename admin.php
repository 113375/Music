<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Админка</title>
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/admin/style_admin.css">
</head>
<body>

<div class="container">
    <h2>Самая удобная админ панель, которой вы только пользовались</h2>
    <div class="tabs">
        <div class="tabs__nav tabs-nav">
            <div class="tabs-nav__item is-active" data-tab-name="new_musician">Новый музыкант</div>
            <div class="tabs-nav__item" data-tab-name="new_genre">Новый жанр</div>
            <div class="tabs-nav__item" data-tab-name="new_album">Новый альбом</div>
            <div class="tabs-nav__item" data-tab-name="users">Ввод sql</div>
        </div>
        <div class="tabs__content">
            <div class="tab is-active" block-content-name="new_musician">
                <!--                тут будет содержимое первого таба-->
               <?php require "templates/admin/addMusician.php"?>
            </div>
            <div class="tab " block-content-name="new_genre">
                <?php require "templates/admin/addGenre.php"?>
            </div>
            <div class="tab " block-content-name="new_album">
                <?php require "templates/admin/addAlbum.php"?>
            </div>
            <div class="tab " block-content-name="users">
                <?php require "templates/admin/sql.php" ?>
            </div>
        </div>

    </div>


</div>
</body>
<script src="js/navbar.js"></script>
</html>


