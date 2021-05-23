let activateButtonAddAlbum = function () {
    let button = document.querySelector(".button-album-add");
    button.addEventListener("click", addBlockAlbum);

    function addBlockAlbum() {
        //тут будет добавление блока с альбомом
        let block = document.querySelector(".form-add-album"); // куда добавлять потом блок с альбомом
        let blockAlbum = document.createElement("div")
        blockAlbum.classList.add("album_block")
        let all = {} // тут будут все музыканты


        let url = "http://localhost:8888/Music/admin/musician/get.php";
        fetch(url)
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                all["musician"] = data;
            }).then(fetchGenre)


        function fetchGenre() {
            let url = "http://localhost:8888/Music/admin/genre/get.php"
            fetch(url)
                .then(function (response) {
                    return response.json()
                })
                .then(function (data) {
                    all["genre"] = data;
                }).then(appendBlock)
        }

        function appendBlock() {

            let data = [[{name: "name", type: "text", teg: "input", place: "Имя"}, {
                name: "year",
                type: "number",
                teg: "input",
                place: "Год"
            }, {teg: "div", name: "but"}],
                [{name: "musician", type: "", teg: "select"},
                    {name: "genre", type: "", teg: "select"}]]; //словарь с будущими input

            data.forEach(arr => {
                let div = document.createElement("div");
                arr.forEach(dict => {
                    let elem = document.createElement(dict["teg"]);
                    elem.name = dict["name"];
                    if (dict["teg"] === "input") {
                        elem.type = dict["type"];
                        elem.placeholder = dict["place"];
                    } else if (dict["teg"] === "select") {
                        elem.style.marginBottom = "30px"
                        all[dict["name"]].forEach(array => {
                            let option = document.createElement("option");
                            option.value = array["id"];
                            if(array["genre_name"])
                                option.text = array["genre_name"];
                            else{
                                option.text = array["musician_name"];

                            }
                            elem.appendChild(option);
                        });
                    } else {
                        elem.classList = "button button-song-add btn-info button-custom";
                        elem.innerText = "Добавить песню";
                        elem.style.width = "40%";
                        elem.style.marginTop = "20px"
                        elem.style.textAlign = "center"
                        elem.addEventListener("click", AddBlockSong)
                    }
                    div.appendChild(elem);


                })
                blockAlbum.appendChild(div);
            });


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
            let div = document.createElement("div");
            div.appendChild(blockAlbum);

            block.appendChild(div);


            function AddBlockSong() {
                //тут будет добавление блока с добавлением песни
                //TODO надо сделать добавление блока с песней
                let block = this.parentElement.parentElement.parentElement; // сюда можно будет пихать песню
                console.log(block);

            }

            function delete_button_active() {
                this.parentElement.parentElement.remove();
            }
        }
    }

}

activateButtonAddAlbum();