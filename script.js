const botaoMenu = document.querySelector('.header__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', ()=>{
    menu.classList.toggle('menu-lateral--ativo');
});

function ativa(){
    document.querySelector('.menu-lateral__link').classList.toggle('menu-lateral__link--ativo');
}