window.onload = () => {
    // Função do menu hamburger do header
    const abrirMenu = () => {
        const nav = document.querySelector('.menu-mobile');
    
        return nav.classList.toggle('visivel')
    }
    document.querySelector('.abrir-menu').addEventListener('click', abrirMenu);
}