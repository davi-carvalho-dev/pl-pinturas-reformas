const btn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-lista');

btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

document.querySelectorAll('.menu-lista a').forEach(link => {
    link.addEventListener('click', () => {
        menuLista.classList.remove('active');
    });
});