<div class="container-for-offers">
<!--    тут будет весь контент-->
    <div class="main-header-profile">
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
        <div class="songs-profile">
            <div class="profile-header">
                <input type="text" class="find-song-liked" placeholder="Поиск по сохраненным песням">
                <div class="button button-song-liked find-button">
                    Сбросить
                </div>
            </div>
            <div class="show-songs-liked">

            </div>
    </div>

</div>
<script src="js/main/with_reg/profile.js"></script>
