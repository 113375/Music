let addAlbums = function () {
    let data = {
        "query": "SELECT * FROM album a LEFT JOIN genre g ON a.genre_id = g.id " +
            "LEFT JOIN musician m ON a.musician_id = m.id", "all": true
    }
    request(data);

    function makePage(data) {
        let div = document.querySelector(".albums");
        console.log(data);
        data.forEach(album => {
            let block = document.createElement("div");
            block.classList.add("block-with-album");
            block.albumId = album["id"];
            block.albumName = album["name"]

            let name, musician, year, genre;
            name = document.createElement("div");
            name.innerText = album["name"];

            musician = document.createElement("div");
            musician.innerText = album["musician_name"];

            year = document.createElement("div");
            year.innerText = album["year"]

            genre = document.createElement("div");
            genre.innerText = album["genre_name"];


            //TODO сделать, чтобы по нажатию открывалась страница с альбомом
            block.appendChild(name);
            block.appendChild(genre)
            block.appendChild(musician);
            block.appendChild(year)

            block.addEventListener("click", openAlbumPage)
            div.appendChild(block)

        })
    }

    function openAlbumPage() {
        //TODO надо сделать открытие страницы альбома
        window.open(`http://localhost:8888/Music/templates/album/album.php?albumId=${this.albumId}&albumName=${this.albumName}`, '_blank');

    }


    function request(json) {
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
                makePage(data);
            })

    }
}

addAlbums();