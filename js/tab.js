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