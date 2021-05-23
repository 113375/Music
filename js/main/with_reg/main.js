let addAlbums = function () {
    let data = {
        "query": "SELECT * FROM album a LEFT JOIN genre g ON a.genre_id = g.id " +
            "LEFT JOIN musician m ON a.musician_id = m.id", "all": true
    }
    request(data);

    function makePage(data) {
        let div = document.querySelector(".albums");
        data.forEach(album => {
            let block = document.createElement("div");
            block.classList.add("block-with-album");
            block.albumId = album["album_id"];
            block.albumName = album["name"]
            block.genreId = album["genre_id"]
            block.musicianId = album["musician_id"];

            let name, musician, year, genre;
            name = document.createElement("div");
            name.innerText = album["name"];

            musician = document.createElement("div");
            musician.innerText = album["musician_name"];

            year = document.createElement("div");
            year.innerText = album["year"]

            genre = document.createElement("div");
            genre.innerText = album["genre_name"];


            block.appendChild(name);
            block.appendChild(genre)
            block.appendChild(musician);
            block.appendChild(year)

            block.addEventListener("click", openAlbumPage)
            div.appendChild(block)

        })
    }

    function openAlbumPage() {
        window.open(`http://localhost:8888/Music/templates/album/album.php?albumId=
        ${this.albumId}&albumName=${this.albumName}&genreId=${this.genreId}
        &musicianId=${this.musicianId}&song=0`, '_blank');

    }


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
                makePage(data);
            })

    }
}

let addSongs = function () {
    let data = {
        "query": "SELECT * FROM song s LEFT JOIN album a ON s.album_id = a.album_id " +
            "LEFT JOIN musician m ON a.musician_id = m.id", "all": true
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
                console.log(data)
            })

    }

    function makeSongs(data) {
        let div = document.querySelector(".songs");
        data.forEach(song => {
            let block = document.createElement("div");
            block.classList.add("block-with-song");
            block.albumId = song["album_id"];
            block.songName = song[1]
            block.albumName = song["name"]
            block.musicianId = song["musician_id"]
            block.songId = song[0]
            block.genreId = song["genre_id"]

            let name, album, year, genre, musician;

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

            block.addEventListener("click", openAlbum)

            div.appendChild(block)
        })
        function openAlbum() {
            window.open(`http://localhost:8888/Music/templates/album/album.php?albumId=
        ${this.albumId}&albumName=${this.albumName}&genreId=${this.genreId}
        &musicianId=${this.musicianId}&song=0`, '_blank');
        }
    }

}
addSongs()
addAlbums();