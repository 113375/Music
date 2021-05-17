let activateButtonAddAlbum = function () {
    let button = document.querySelector(".button-album-add");
    button.addEventListener("click", addBlockAlbum);

    function addBlockAlbum() {
        //тут будет добавление блока с альбомом
        //TODO надо будет сделать блок с добавлением нового альбома, а там уже добавление песен
        let block = document.querySelector(".form-add-album"); // куда добавлять потом блок с альбомом
        let blockAlbum = document.createElement("div")
        blockAlbum.classList.add("album_block")

        let data = [[{name: "name", type: "text", teg: "input"}, {name: "name", type: "text", teg: "input"}], [{}, {}]]; //словарь с будущими input
        

        // блок с textarea для описания
        let textArea = document.createElement("div");
        let text_div = document.createElement("div");
        text_div.style = "margin: 5px";
        text_div.textContent = "Описание альбома";
        textArea.appendChild(text_div);
        let textAreaDiv = document.createElement("div");
        let textarea = document.createElement("textarea");
        textarea.name = "text"

        textArea.style.marginLeft = "80px";
        textArea.style.marginRight = "80px";

        textAreaDiv.appendChild(textarea);
        textArea.appendChild(textAreaDiv);

        //блок с кнопками
        let buttons = document.createElement("div")
        buttons.style.width = "17%"
        let button = document.createElement("div")
        button.textContent = "Удалить";
        button.classList.add("btn-outline-danger");
        button.classList.add("button_type2");


        let button_save = document.createElement("div")
        button_save.textContent = "Добавить";
        button_save.classList.add("btn-outline-success");
        button_save.classList.add("button_type2");

        // button_save.addEventListener('click', make_single_insert)

        button.addEventListener("click", delete_button_active);
        buttons.appendChild(button);
        buttons.appendChild(button_save);


        //добавление всех элементов
        blockAlbum.appendChild(textArea)
        blockAlbum.appendChild(buttons);

        block.appendChild(blockAlbum);



        function AddBlockSong() {
            //тут будет добавление блока с добавлением песни
        }

        function delete_button_active() {
            this.parentElement.parentElement.remove();
        }
    }

}

activateButtonAddAlbum();