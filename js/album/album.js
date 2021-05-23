let homeButton = function () {
    let button = document.querySelector(".button");
    button.addEventListener("click", toHome);

    function toHome() {
        window.open(`http://localhost:8888/Music/main.php`, '_self');

    }
}

let songs = function () {
    let songs = document.querySelectorAll(".song");
    songs.forEach(song => {
        song.addEventListener("click", changeSong)
    })

    function changeSong() {
        let id = this.getAttribute("songid");
        fetchSong({
            "query": `SELECT *
                      FROM song
                      WHERE id = ${id}`, "all": false
        });
    }

    function fetchSong(data) {
        let url = "http://localhost:8888/Music/admin/query.php";
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
            .then(function (data){
                change(data)
            })
    }

    function change(data) {
        let block = document.querySelector(".spotify");
        console.log(data["link"])
        if (data["link"]) {
            block.innerHTML = data["link"]
            let desc = document.createElement("div");
            desc.classList.add("song-desc");
            desc.textContent = data["description"];
            block.appendChild(desc)
        }else{
            let text = document.createElement("div");
            block.innerHTML = ""
            text.textContent = "Ссылка на виджет отсутствует";
            text.style.fontSize = "20px"
            block.appendChild(text)
        }
    }
}
songs()
homeButton()