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
            .then(function (data) {
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
        } else {
            let text = document.createElement("div");
            block.innerHTML = ""
            text.textContent = "Ссылка на виджет отсутствует";
            text.style.fontSize = "20px"
            block.appendChild(text)
        }
    }
}

let likeButton = function () {
    let button = document.querySelectorAll(".button-like");
    button.forEach(elem => {
        elem.addEventListener("click", changeStatus)
    })

    function changeStatus() {
        let liked = this.getAttribute("isActive") === "true";
        let id = this.getAttribute("songId");
        if (liked) {
            this.setAttribute("isActive", "false")
            let data = {
                "query": `DELETE 
                          FROM saved 
                          WHERE song_id = ${id}
                            AND user_id = ${get_cookie("id")}`, "all": false, "fetch": 0
            }

            let img = this.children[0]
            img.src = "/Music/img/simple.png"
            makeRequest(data)

        } else {
            this.setAttribute("isActive", "true")
            let data = {
                "query": `INSERT INTO saved(user_id, song_id)
                          VALUES (${get_cookie("id")}, ${id})`, "all": false, "fetch": 0
            }
            let img = this.children[0]
            img.src = "/Music/img/like.png"
            makeRequest(data)
        }


        function makeRequest(data) {
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
        }

        function get_cookie(cookie_name) {
            let results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

            if (results)
                return (unescape(results[2]));
            else
                return null;
        }
    }
}
songs()
homeButton()
likeButton()
