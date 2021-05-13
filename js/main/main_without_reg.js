let description = function () {
    let texts = {
        "left": "Боитесь зарегистрироваться? \n" +
            "Зарегистрировавшись, вы сможете получить максимум из всех возможностей сайта. \n" +
            "Вы сможете сохранять музыку, смотреть музыкантов, возможно найдете ту музыку, которая по вкусу именно вам",
        "right": "Войти будет очень просто, так что, действуйте! \n" +
            "У нас нет платного контента, так что, пользуйтесь на максимум сайтом!\n" +
            "В будущем появятся больше функций, так что, все появится со временем)"
    }
    let buttons = document.querySelectorAll(".description-btn");
    buttons.forEach(button => {
        button.addEventListener("click", printText);
    })


    function printText() {
        let descriptions = document.querySelectorAll(".description")
        let div = ""
        descriptions.forEach(elem => {
            if (elem.getAttribute("name") === this.getAttribute("name")) {
                div = elem
            }
        })
        if (this.getAttribute("active") === "false") {

            let text = texts[this.getAttribute("name")];
            let to = text.length
            let from = 0;
            animate({
                duration: 2500,
                timing: bounce,
                draw: function (progress) {
                    let result = (to - from) * progress + from;
                    div.innerText = text.substr(0, Math.ceil(result))
                }
            });
            this.style.color = "#105964";
            this.setAttribute("active", "true")
            this.innerText = "Свернуть"


        } else {
            let text = texts[this.getAttribute("name")];
            let to = text.length
            animate({
                duration: 2500,
                timing: bounce,
                draw: function (progress) {
                    let result = to * (1 - progress);
                    div.innerText = text.substr(0, Math.ceil(result))
                }
            });
            this.style.color = "#000000";
            this.setAttribute("active", "false")
            this.innerText = "Описание"
        }

        function bounce(timeFraction) {
            return timeFraction
        }

    }
}

description()