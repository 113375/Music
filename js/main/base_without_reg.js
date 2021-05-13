
let buttons = function () {
    let button_reg = document.querySelectorAll(".registration");

    button_reg.forEach(button => {
        button.addEventListener("click", open_registration);
    })

    let button_log_in = document.querySelectorAll(".log-in");
    button_log_in.forEach(button => {
        button.addEventListener("click", openLogInForm);
    })


    function open_registration() {
        //TODO делать вкладку с регистрацией активной
        alert("reg")
    }

    function openLogInForm() {
        //TODO делать вкладку с входом активной (либо сделать через другую страницу, но так себе идея
        alert("xxx")
    }

}


buttons()