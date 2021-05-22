<?php
//TODO надо будет сделать страницу с профилем, там будет кнопка выйти, там будет ими с почтой + смена пароля
//TODO там будут все любимые песни + возможно все плейлисты
?>

<div class="container-for-offers">
<!--    тут будет весь контент-->
    <div class="main-header">
        <div class="button button-log-out">
            Выход
        </div>
        <div class="about-account">
            <div >
                <?= $_COOKIE["email"]?>
            </div>
            <div >
                <?= $_COOKIE["name"]?>
            </div>
        </div>
    </div>
</div>
<script src="js/main/with_reg/profile.js"></script>
