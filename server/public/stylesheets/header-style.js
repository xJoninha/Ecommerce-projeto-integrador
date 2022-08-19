window.onload = () => {
    // Função do menu hamburger do header
    const abrirMenu = () => {
        const nav = document.querySelector('.menu-mobile');
    
        return nav.classList.toggle('visivel');
    }
    //Função do menu cadastro do header
    const abrirUsuarioCadastro = () => {
        const usuario = document.querySelector('.nav-usuario-cadastro');

        return usuario.classList.toggle('visivel-usuario');

    }
    document.querySelector('.abrir-menu').addEventListener('click', abrirMenu);
    document.querySelector('.abrir-usuario-cadastro').addEventListener('click', abrirUsuarioCadastro);
}