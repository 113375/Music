let activateButtonAdd = function () {
    let button = document.querySelector(".button-genre-add");
    button.addEventListener("click", addBlock);

    function addBlock() {
        let container = document.querySelector(".form-add-genre") // куда потом запихну блок
        let block = document.createElement("div");
        block.classList.add("genre_block");

        let divForInput = document.createElement("div");
        let input = document.createElement("input");
        input.style.margin = "5px";
        input.placeholder = "Название";
        input.type = "text";
        input.name = "name";
        divForInput.style.marginRight = "80px";
        divForInput.style.marginLeft = "80px";


        let textArea = document.createElement("div");
        let text_div = document.createElement("div");
        text_div.style = "margin: 5px";
        text_div.textContent = "Описание жанра";
        textArea.appendChild(text_div);
        let textAreaDiv = document.createElement("div");
        let textarea = document.createElement("textarea");
        textarea.name = "text"

        textArea.style.marginLeft = "80px";
        textArea.style.marginRight = "80px";

        divForInput.appendChild(input)
        textAreaDiv.appendChild(textarea);
        textArea.appendChild(textAreaDiv);

        //блок с кнопкой

        let divWithButtons = document.createElement("div")
        divWithButtons.style.width = "17%"
        let button = document.createElement("div")
        button.textContent = "Удалить";
        button.classList.add("btn-outline-danger");
        button.classList.add("button_type2");


        let button_save = document.createElement("div")
        button_save.textContent = "Добавить";
        button_save.classList.add("btn-outline-success");
        button_save.classList.add("button_type2");

        button_save.addEventListener('click', make_single_insert)

        button.addEventListener("click", delete_button_active);

        divWithButtons.appendChild(button);
        divWithButtons.appendChild(button_save);
        block.appendChild(divForInput);

        block.appendChild(textArea);
        block.appendChild(divWithButtons);
        //добавляем
        container.appendChild(block)


    }

    function make_single_insert() {
        //тут будет добавление нового жанра
        let parent = this.parentElement.parentElement;

        let children = parent.children;
        let text = children[0].children[0].value; //достаем название
        let description = children[1].children[1].children[0].value; //достаем описание


        //делаем запрос на сервер
        let xhr = new XMLHttpRequest();
        let url = "http://localhost:8888/Music/admin/genre/append.php";
        xhr.open("POST", url, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        let par = this;

        xhr.onreadystatechange = function () {
            // если запрос принят и сервер ответил, что всё в порядке
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(this.responseText);
                if(this.responseText !== "Не заполнены обязательные поля (название и описание)"){
                    par.parentElement.parentElement.remove();
                }
            }
        };

        let data = JSON.stringify({
            "name": text,
            "text": description
        });
        xhr.send(data);

    }


    function delete_button_active() {
        this.parentElement.parentElement.remove();
    }
}

activateButtonAdd();