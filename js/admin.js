let tab = function () {
    let tabNav = document.querySelectorAll(".tabs-nav__item"),
        tabContent = document.querySelectorAll('.admin'),
        tabName;
    tabNav.forEach(elem => {
        elem.addEventListener("click", selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(elem => {
            elem.classList.remove('is-active')
        });
        this.classList.add("is-active");
        tabName = this.getAttribute("data-admin-name")
        selectTabContent(tabName)
    }

    function selectTabContent(tabName) {
        tabContent.forEach(elem => {
            elem.getAttribute("block-content-name") === tabName ? elem.classList.add("is-active") : elem.classList.remove("is-active");
        })
    }
};
tab();

//кнопка добавления новой формы
let add_button = function () {
    //фукция добавления новой формы для отправки
    let button = document.querySelector(".button");
    button.addEventListener('click', after_click);

    function after_click() {
        let div = document.createElement("form");
        div.classList.add("musician_block");

        let div1 = document.createElement("div");
        let block = document.createElement("div");
        block.style = "display: flex; margin-bottom: 20px";
        let names = [{"type": "text", "placeholder": "Название", 'name': 'name'}, {
            "type": "number",
            "placeholder": "год начала",
            'name': 'start'
        }, {"type": "number", "placeholder": "год конца", 'name': 'end'}]
        names.forEach(dict => {
            let label = document.createElement("label");
            let input = document.createElement("input");
            input.style = "margin: 5px";
            input.type = dict['type'];
            input.placeholder = dict['placeholder'];
            input.name = dict['name'];
            label.appendChild(input);
            block.appendChild(label);
        });
        div1.appendChild(block);
        let input_file = document.createElement("input");
        let label_for_file = document.createElement("label");
        label_for_file.style = "padding: 5px;";
        label_for_file.textContent = "Загрузите фото";
        label_for_file.style = "padding: 5px";
        input_file.type = "file";
        input_file.name = 'photo';
        label_for_file.appendChild(input_file);
        div1.appendChild(label_for_file)

        div.appendChild(div1);

        let div_bottom = document.createElement("div");
        div_bottom.style = "display: block; width: 100%; margin-left: 5%";
        let text_div = document.createElement("div");
        text_div.style = "margin: 5px";
        text_div.textContent = "Описание музыканта";
        div_bottom.appendChild(text_div);
        let text_area_div = document.createElement("div");
        let textarea = document.createElement("textarea");
        textarea.name = "text"
        text_area_div.appendChild(textarea);
        div_bottom.appendChild(text_area_div)
        div.appendChild(div_bottom);


        let div_button = document.createElement("div")
        let button = document.createElement("div")
        button.textContent = "Удалить";
        // button.classList.add("button-custom");
        button.classList.add("btn-outline-danger");
        button.classList.add("button_type2");


        let button_save = document.createElement("div")
        button_save.textContent = "Добавить";
        // button_save.classList.add("button-custom");
        button_save.classList.add("btn-outline-success");
        button_save.classList.add("button_type2");

        button_save.addEventListener('click', make_single_insert)

        button.addEventListener("click", delete_button_active);

        div_button.appendChild(button);
        div_button.appendChild(button_save);

        div.appendChild(div_button);

        let add_musician = document.querySelector(".form-add-musician");
        add_musician.appendChild(div);

    }

    function delete_button_active() {
        //В общем надо как-то реализовать удаление элементов этого блока, но посмотрим
        this.parentElement.parentElement.remove();
    }
}


async function make_single_insert() {
    //функция для добавления одного музыканта
    let all_data = new Map;
    let parent = this.parentElement.parentElement;
    let children = parent.children;
    let labels_with_inputs = children[0];

    for (let i = 0; i < labels_with_inputs.children[0].children.length; i++) {
        let input = labels_with_inputs.children[0].children[i].children[0]
        all_data.set(input.name, input.value)
    }

    all_data.set("photo", labels_with_inputs.children[1].children[0].files[0]);

    let textArea = children[1].children[1].children[0].value;
    all_data.set("text", textArea);

    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8888/Music/admin/musician.php";

    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        // если запрос принят и сервер ответил, что всё в порядке
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert(this.responseText);
        }
    };

    var data = JSON.stringify({
        "name": all_data.get("name"),
        "start": all_data.get("start"),
        "end": all_data.get("end"),
        "text": all_data.get("text"),
        "photo": all_data.get("photo")
    });
    xhr.send(data);
}

add_button();


