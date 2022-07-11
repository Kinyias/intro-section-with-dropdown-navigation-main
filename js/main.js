const icon_menu = document.querySelector('.icon-menu');
const group_menu = document.querySelector('.group-header');
const nav_close = document.querySelector('.nav-close');
const overlay = document.querySelector('.overlay');
const dropdown = document.querySelectorAll('.dropdown');
const dropdown_content = document.querySelectorAll('.dropdown-content');
const arrow = document.querySelectorAll('.arrow');
icon_menu.addEventListener('click',function(){
    group_menu.classList.add('active');
    overlay.classList.add('active');
})
nav_close.addEventListener('click',function () {
    group_menu.classList.remove('active');    
    overlay.classList.remove('active');    
})
//toggle menu
dropdown.forEach((e,i) => { 
    e.addEventListener('click', function(){
        dropdown_content[i].classList.toggle('active');
        arrow[i].classList.toggle('rotate');
    })
 })