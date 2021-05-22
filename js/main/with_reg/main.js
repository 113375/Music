let addAlbums = function (){
    let data = {"query": "SELECT * FROM album", "all": true}
    request(data);

    function makePage(data) {
        let div = document.querySelector(".albums-and-songs");
        console.log(data);
        data.forEach(song => {
            console.log(song)
        })
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