const header = document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-items');
let navlist = document.querySelector('.navlist');

menu.onClick = () => {
    menu.classList.toggle('bx-x');
    
    menu.classList.toggle('open')
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    
    menu.classList.remove('open')
}

