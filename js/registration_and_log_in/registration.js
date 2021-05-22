let registrationButton = function () {
    let button = document.querySelector(".registration-button");
    button.addEventListener("click", checkForm);

    function checkForm() {
        let parent = this.parentElement.parentElement;
        let name = parent.children[1].children[0].value;
        let email = parent.children[2].children[0].value;
        let password = parent.children[3].children[0].value;
        let passwordRepeat = parent.children[4].children[0].value;
        if (!check(name, email, password, passwordRepeat)) {
            return false;
        }
        request({"name": name, "email": email, "password": password});
        // location.reload()


    }

    function check(name, email, password, passwordRepeat) {
        if (!name) {
            alert("Введите имя");
            return false
        }
        if (!email) {
            alert("Введите почту");
            return false
        }
        if (email.indexOf("@") === -1) {
            alert("Введите правильную почту")
            return false
        }
        if (!password) {
            alert("Введите пароль")
            return false
        }
        if (password.length < 8) {
            alert("Слишком короткий пароль")
            return false
        }
        if (!passwordRepeat) {
            alert("Введите повтор пароля")
            return false
        }
        if (password !== passwordRepeat) {
            alert("Неправильное повторение пароля")
            return false
        }
        return true;
    }

    function request(data) {
        let url = "http://localhost:8888/Music/admin/user/new.php";
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                if (data["error"] !== undefined) {
                    alert(data["error"])
                } else {
                    alert(data["log"]);
                    location.reload() // перезагружаю страницу
                }
            })
    }
}

registrationButton()