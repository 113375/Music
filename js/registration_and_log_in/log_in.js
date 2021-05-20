function logIn() {
    //срабатывает при нажатии на кнопку входа
    let form = document.querySelector(".log-in-button");
    form.submit = function (){
        alert("squirt");
    }
}

logIn()
