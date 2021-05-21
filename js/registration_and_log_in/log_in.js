function addLogInButton() {
    //срабатывает при нажатии на кнопку входа
    let button = document.querySelector(".log-in-button")
    button.addEventListener("click", logIn)

    function logIn() {
        let parent =  this.parentElement.parentElement;
        console.log(parent )
        let email = parent.children[1].children[0].value
        let password = parent.children[2].children[0].value
        if(!email){
            alert("Введите почту")
            return
        }
        if(!password){
            alert("Введите пароль")
            return
        }
        if(email.indexOf("@") === -1){
            alert("введите правильную почту")
            return false
        }
        //TODO надо сделать проверку пользователя

        let user = {email: email,
                    password: password}

        let url = "http://localhost:8888/Music/admin/log/in.php";
        fetch(url, {method: "POST",
                        headers: {
                                'Content-Type': 'application/json;charset=utf-8'
                                },
                        body: JSON.stringify(user)})
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                if(data["error"] !== undefined){
                    alert(data["error"])
                }else{
                   let name = document.querySelector("#name");
                   name.textContent = get_cookie("name");
                }
            })



    }
}

addLogInButton()
