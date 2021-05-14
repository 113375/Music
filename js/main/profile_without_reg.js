let add_button_main = function (){
    let button = document.querySelector(".to-main-button");
    button.addEventListener("click", toMainWindow)

    function toMainWindow() {
        let tabNav = document.querySelectorAll(".tabs-nav__item"),
            tabContent = document.querySelectorAll('.tab');
        tabNav.forEach(elem => {
            elem.classList.remove('is-active')
        });

        tabNav.forEach(button => {
            if(button.getAttribute("data-tab-name") === "main_page"){
                button.classList.add("is-active");
            }
        });
        tabContent.forEach(content => {
            if(content.getAttribute("block-content-name") === "main_page"){
                content.classList.add("is-active");
            }else{
                content.classList.remove("is-active")
            }
        })
    }
}

add_button_main()