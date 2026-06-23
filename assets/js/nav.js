const btn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-lista');

// Abre e fecha o menu mobile ao clicar no hambúrguer
btn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Fecha o menu mobile automaticamente ao clicar em qualquer link dele
document.querySelectorAll('.menu-lista a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active'); // Corrigido de menuLista para menu
    });
});