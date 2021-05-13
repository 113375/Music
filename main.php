<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Главная</title>

    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/main/main_without_reg.css">
</head>
<body>
<?php include "templates/header.php" ?>
<div class="">

    <div class="tabs__content">
        <div class="tab is-active" block-content-name="main_page">

            <?php
            if (!$_COOKIE['user']) {
                include "templates/main/main_without_reg.php";
            } ?>

        </div>
        <div class="tab" block-content-name="profile">
            <?php if (!$_COOKIE['user']) {
                include "templates/main/profile_without_reg.php";
            } ?>
        </div>
    </div>

</div>
<script src="js/navbar.js"></script>

</body>
</html>
