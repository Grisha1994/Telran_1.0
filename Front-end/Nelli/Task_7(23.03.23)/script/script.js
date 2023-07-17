// 1. При клике на кнопку меню, у элемента ul появляется класс active
// (если его нет), а если есть класс active - удалять его

const menu_icon = document.querySelector('.menu_icon')
const nav_menu = document.querySelector('.header ul')
const popup = document.querySelector('.popup')
const account = document.querySelector('.account')
const cross_icon = document.querySelector('.cross_icon')

menu_icon.addEventListener('click', function(){
    nav_menu.classList.toggle('active')
})

// 2. При клике на account к .popup добавлять класс,
// который содержит visibility: visible;

account.addEventListener('click', function(){
    popup.style.visibility = 'visible'
})

cross_icon.addEventListener('click', function(){
    popup.style.visibility = 'hidden'
})

// popup.addEventListener('click', function(){
//     popup.style.visibility = 'hidden'
// })