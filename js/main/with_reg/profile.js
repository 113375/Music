let activateButton = function () {
    let button = document.querySelector(".button-log-out");
    button.addEventListener("click", conf)

    function conf() {
        let result = confirm("Вы точно хотите выйти?");
        if (result) {
            makeLogOut()
        }

    }

    function makeLogOut() {
        let url = "http://localhost:8888/Music/admin/log/out.php"
        fetch(url)
            .then(function (response) {
                location.reload();
            })
    }
}

function get_cookie(cookie_name) {
    let results = document.cookie.match('(^|;) ?' + cookie_name + '=([^;]*)(;|$)');

    if (results)
        return (unescape(results[2]));
    else
        return null;
}

let showLikedSongs = function () {
    let data = {
        "query": ` SELECT *
                   FROM song s
                            LEFT JOIN album a ON s.album_id = a.album_id
                            LEFT JOIN musician m ON a.musician_id = m.id
                   WHERE s.id in (SELECT song_id FROM saved WHERE user_id = ${get_cookie("id")})`, "all": true
    }
    request(data)

    function request(json) {
        let url = "http://localhost:8888/Music/admin/query.php";
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(json)
        })
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                makeSongs(data)
            })

    }

    function makeSongs(data) {

        let div = document.querySelector(".show-songs-liked");
        div.innerHTML = ""
        if (data.length !== 0) {
            data.forEach(song => {
                let block = document.createElement("div");
                block.classList.add("block-with-song");
                block.albumId = song["album_id"];
                block.songName = song[1]
                block.albumName = song["name"]
                block.musicianId = song["musician_id"]
                block.songId = song[0]
                block.genreId = song["genre_id"]

                let name, album, year, musician;

                name = document.createElement("div")
                name.innerText = block.songName

                album = document.createElement("div")
                album.innerText = block.albumName

                year = document.createElement("div")
                year.innerText = song["year"];

                musician = document.createElement("div");
                musician.innerText = song["musician_name"]

                block.appendChild(name);
                block.appendChild(album)
                block.appendChild(musician);
                block.appendChild(year)

                block.addEventListener("click", openSong)

                div.appendChild(block)
            })
        } else {
            let block = document.createElement("div");
            block.innerText = "Ничего не найдено";
            block.style.marginLeft = "30px"
            block.style.fontSize = "20px"
            div.appendChild(block)
        }

        function openSong() {
            window.open(`http://localhost:8888/Music/templates/album/album.php?albumId=
        ${this.albumId}&albumName=${this.albumName}&genreId=${this.genreId}
        &musicianId=${this.musicianId}&song=0`, '_blank');
        }

    }

    let findSongsLiked = function () {
        let find = document.querySelector(".find-song-liked");
        find.addEventListener('keydown', function (e) {
            if (e.keyCode === 13) {
                allSongs(this.value);
            }
        });

        function allSongs(value) {
            let data = {
                "query": `SELECT *
                          FROM song s
                                   LEFT JOIN album a ON s.album_id = a.album_id
                                   LEFT JOIN musician m ON a.musician_id = m.id
                          WHERE s.name LIKE "%${value}%"
                            AND s.id in (SELECT song_id FROM saved WHERE user_id = ${get_cookie("id")})`, "all": true
            }
            request(data);
        }

        function resetButton() {
            let button = document.querySelector(".button-song-liked");
            button.addEventListener("click", filterOff)
        }

        function filterOff() {
            allSongs("");
        }

        resetButton();
    }
    findSongsLiked();
}
showLikedSongs()


activateButton()