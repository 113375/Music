let command = function (){
    let input = document.querySelector(".input-command");
    input.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            makeRequest({"query":this.value, "all": true});
        }
    })
    function makeRequest(json) {
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
                alert("Запрос выполнен")
                let div = document.querySelector(".answer")
                div.innerHTML = ""
                data.forEach(elem => {
                    let block = document.createElement("div");
                    block.style.display = "flex";
                    block.style.marginTop = "20px"
                    Object.keys(elem).forEach(key => {
                        let block_key = document.createElement("div");
                        block_key.textContent = `${key} : ${elem[key]}`;
                        block_key.style.marginRight = "10px";
                        block.appendChild(block_key)
                    })
                    div.appendChild(block)
                })
            })

    }
}

command()