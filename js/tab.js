let tab = function () {
    let tabNav = document.querySelectorAll(".tabs-nav__item"),
        tabContent = document.querySelectorAll('.tab'),
        tabName;
    tabNav.forEach(elem => {
        elem.addEventListener("click", selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(elem => {
            elem.classList.remove('is-active')
        });
        this.classList.add("is-active");
        tabName = this.getAttribute("data-tab-name")
        selectTabContent(tabName)
    }

    function selectTabContent(tabName) {
        tabContent.forEach(elem => {
            elem.getAttribute("block-content-name") === tabName ? elem.classList.add("is-active") : elem.classList.remove("is-active");
        })
    }
};
tab();

let add_button = function (){
    let button = document.querySelector(".button");
    button.addEventListener('click', after_click);

    function after_click(){
        // // будет добавление добавления нового музыканта
        // let musician_block = document.createElement("div");
        // musician_block.style.display = display.flex;

    }
}

add_button();

//
// <div class="musician_block" style="display: flex">
//     <div >
//         <div style="display: flex; margin-bottom: 20px">
//             <label>
//                 <input type="text" placeholder="Название">
//             </label>
//             <label>
//                 <input type="number" placeholder="год начала">
//             </label>
//             <label>
//                 <input type="number" placeholder="год конца">
//             </label>
//         </div>
//
//         <div>
//             <label for="photo" style="cursor: pointer"> Загрузите фото
//                 <input id="photo" type="file" >
//             </label>
//         </div>
//     </div>
//     <div style="display: block; width: 100%; margin-left: 5%">
//         <div>Описание музыканта</div>
//         <div>
//             <textarea style="width: 75%">
//
//             </textarea>
//         </div>
//
//     </div>
//
// </div>