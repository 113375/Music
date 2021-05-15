//TODO тут будет работа вкладок на сайте с регистрацией и входом to-reg-and-lig-in


let addButtonsToRegAndLogIn = function (){
    let buttons = document.querySelectorAll(".to-reg-and-lig-in");
    buttons.forEach(button => {
        button.addEventListener("click", toRegOrLogIn);
    })

    function toRegOrLogIn() {
        let tabNav = document.querySelectorAll(".tabs-nav__item"),
            tabContent = document.querySelectorAll('.tab');
        tabNav.forEach(elem => {
            elem.classList.remove('is-active')
        });
        let tabName = this.getAttribute("tab-name");
        tabContent.forEach(elem => {
            if(elem.getAttribute("block-content-name") === "log-in-and-registration"){
                elem.classList.add("is-active");
            }else{
                elem.classList.remove("is-active");
            }
        });
        openTab(tabName);

    }
    function openTab(name) {
        let buttons = document.querySelectorAll(".two_buttons");
        buttons.forEach(elem =>{
            if(elem.getAttribute("data-tab-name") === name){
                elem.classList.add("is-active");
            }else{
                elem.classList.remove("is-active");
            }
        })
        let content = document.querySelectorAll(".tab");
        console.log(content);
        content.forEach(elem =>{
            if( elem.getAttribute("block-content-name") === name){
                elem.classList.add("is-active");
            }
        })
    }


}

addButtonsToRegAndLogIn();

