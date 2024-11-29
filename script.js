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


var options1 = {
    strings: ["Reflakcija.", "Prelamanje svetlosti."],
    typeSpeed: 50, // Скорость печати
    backSpeed: 0, // Скорость удаления (0 - не удалять)
    loop: false, // Отключить цикличность
    cursorChar: '|',  // Символ курсора
    startDelay: 500,
    showCursor: true 
};

var typed2 = new Typed("#typed2", options1);


var options2 = {
    strings: ["Konstrukcija lika kod sabirnih sočiva."],
    typeSpeed: 50, // Скорость печати
    backSpeed: 0, // Скорость удаления (0 - не удалять)
    loop: false, // Отключить цикличность
    cursorChar: '|',  // Символ курсора
    startDelay: 500,
    showCursor: true 
};


var typed3 = new Typed("#typed3", options2);

var options3 = {
    strings: ["Konstrukcija lika kod rasipnih sočiva."],
    typeSpeed: 50, // Скорость печати
    backSpeed: 0, // Скорость удаления (0 - не удалять)
    loop: false, // Отключить цикличность
    cursorChar: '|',  // Символ курсора
    startDelay: 500,
    showCursor: true 
};


var typed4 = new Typed("#typed4", options3);

document.addEventListener('DOMContentLoaded', function() { const menuToggle = document.querySelector('.menu-toggle'); const navMenu = document.querySelector('menu'); menuToggle.addEventListener('click', function() { navMenu.classList.toggle('active'); }); });
