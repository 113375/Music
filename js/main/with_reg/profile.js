//TODO надо сделать логику профиля

let activateButton = function () {
    let button = document.querySelector(".button-log-out");
    button.addEventListener("click", conf)

    function conf() {
        let result = confirm("Вы точно хотите выйти?");
        if (result) {
            makeLogOut()
        }

    }

    function makeLogOut() {
        let url = "http://localhost:8888/Music/admin/log/out.php"
        fetch(url)
            .then(function (response) {
                location.reload();
            })
    }
}

activateButton()