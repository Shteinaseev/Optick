const headerEl = document.querySelector(".header")

window.addEventListener("scroll", function(){
    const scrollPos = window.scrollY

    if(scrollPos > 100) {
        headerEl.classList.add("header__scroll")
    }else{
        headerEl.classList.remove("header__scroll")
    }
})

var options = {
    strings: ["Šta su sočiva?"],
    typeSpeed: 50, // Скорость печати
    backSpeed: 0, // Скорость удаления (0 - не удалять)
    loop: false, // Отключить цикличность
    cursorChar: '|',  // Символ курсора
    startDelay: 500,
    showCursor: true 
};

var typed = new Typed("#typed", options);
