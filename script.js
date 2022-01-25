function initTabNav(){
const tabMenu = document.querySelectorAll(".js-tabmenu li");
const tabContent = document.querySelectorAll(".js-tabcontent section");
const activeClass = "ativo";
if(tabMenu.length && tabContent.length){
tabContent[0].classList.add(activeClass);

function activetab(index){
    tabContent.forEach((section) => {
        section.classList.remove(activeClass)
    });
    tabContent[index].classList.add(activeClass);
}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener("click", () => {
        activetab(index);
            });
        });
    }
}

initTabNav();

function accordionAnimation(){
const accordionList = document.querySelectorAll(".js-accordion dt");

if(accordionList.length){
    const activeClass = "ativo"
    accordionList[0].nextElementSibling.classList.add(activeClass);
    accordionList[0].classList.add(activeClass);

    function activeAccordion(event){
        this.classList.toggle(activeClass);
        this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
        item.addEventListener("click", activeAccordion);
        });
    }
}

accordionAnimation();