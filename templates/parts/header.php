<?php
//TODO надо доделать header
?>
<div>
    <nav class="navigation">

        <div class="left-side tabs__nav tabs-nav">
            <div class="tabs-nav__item is-active" data-tab-name="main_page">Главная</div>
            <div class="tabs-nav__item" data-tab-name="profile">Профиль</div>
        </div>
        <div class="find">
<!--            <input id="find" type="text" placeholder="Поиск">-->
        </div>

        <div class="name-photo">
            <div id="name">
                <?php if($_COOKIE["name"]):?>
                <?= $_COOKIE["name"]?>
                <?php else:?>
                неизвестный
                <?php endif;?>
            </div>
            <div id="photo"></div>
        </div>

    </nav>
</div>