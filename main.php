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
    <link rel="stylesheet" href="css/registration_and_log_in/reg_and_log_in.css">
    <link rel="stylesheet" href="css/main/main.css">
</head>
<body>
<?php include "templates/parts/header.php" ?>
<div class="">

    <div class="tabs__content">
        <div class="tab is-active" block-content-name="main_page">

            <?php
            if (!$_COOKIE['name']) {
                include "templates/main/without_reg/main_without_reg.php";
            }else{
                include "templates/main/with_reg/main.php";
            }
            ?>

        </div>
        <div class="tab" block-content-name="profile">
            <?php if (!$_COOKIE['name']) {
                include "templates/main/without_reg/profile_without_reg.php";
            } else{
                include "templates/main/with_reg/profile.php";
            }?>
        </div>

        <div class="tab" block-content-name="log-in-and-registration">
            <?php
            include "templates/main/without_reg/reg_and_log_in.php";
            ?>
        </div>
    </div>

</div>
<script src="js/getCookie.js"></script>
<script src="js/navbar.js"></script>
<script src="js/registration_and_log_in/reg_and_log_in.js"></script>
<script src="js/registration_and_log_in/reg_and_log_in_header.js"></script>

</body>
</html>
