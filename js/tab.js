let tab = function () {
    let tabNav = document.querySelectorAll(".tabs-nav__item"),
        tabContent = document.querySelectorAll('.tab'),
        tabName;
    tabNav.forEach(elem => {
        elem.addEventListener("click", selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(elem => {
            elem.classList.remove('is-active')
        });
        this.classList.add("is-active");
        tabName = this.getAttribute("data-tab-name")
        selectTabContent(tabName)
    }

    function selectTabContent(tabName) {
        tabContent.forEach(elem => {
            elem.getAttribute("block-content-name") === tabName ? elem.classList.add("is-active") : elem.classList.remove("is-active");
        })
    }
};
tab();

let add_button = function () {
    let button = document.querySelector(".button");
    button.addEventListener('click', after_click);

    function after_click() {
        let div = document.createElement("div");
        div.classList.add("musician_block");
        div.innerHTML = "    <div >\n" +
            "        <div style=\"display: flex; margin-bottom: 20px\">\n" +
            "            <label>\n" +
            "                <input style='margin: 5px' type=\"text\" placeholder=\"Название\">\n" +
            "            </label>\n" +
            "            <label>\n" +
            "                <input style='margin: 5px' type=\"number\" placeholder=\"год начала\">\n" +
            "            </label>\n" +
            "            <label>\n" +
            "                <input style='margin: 5px' type=\"number\" placeholder=\"год конца\">\n" +
            "            </label>\n" +
            "        </div>\n" +
            "\n" +
            "        <div>\n" +
            "            <label style='margin: 5px' for=\"photo\" style=\"cursor: pointer\"> Загрузите фото\n" +
            "                <input style='margin: 5px' id=\"photo\" type=\"file\" >\n" +
            "            </label>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "    <div style=\"display: block; width: 100%; margin-left: 5%\">\n" +
            "        <div style='margin: 5px'>Описание музыканта</div>\n" +
            "        <div>\n" +
            "            <textarea style='margin: 5px' style=\"width: 75%\">\n" +
            "\n" +
            "            </textarea>\n" +
            "        </div>\n" +
            "\n" +
            "    </div>\n" +
            "\n";
        let add_musician = document.querySelector(".form-add-musician");
        add_musician.appendChild(div);

    }
}

add_button();

