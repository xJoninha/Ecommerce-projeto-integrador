window.onload = () => {
    // Função do menu hamburger do header mobile
    const abrirMenu = () => {
        const nav = document.querySelector('.menu-mobile');
    
        return nav.classList.toggle('visivel');
    }
    //Função do usuario do header mobile
    const abrirUsuarioCadastro = () => {
        const usuario = document.querySelector('.nav-usuario-cadastro');

        return usuario.classList.toggle('visivel-usuario');
    }
    //Função do menu usuario desktop
    const abrirUsuarioDesktop = () => {
        const usuarioDesktop = document.querySelector('.nav-abrir-usuario-desktop');

        return usuarioDesktop.classList.toggle('visivel-usuario-desktop')
    }
    document.querySelector('.abrir-menu').addEventListener('click', abrirMenu);
    document.querySelector('.abrir-usuario-cadastro').addEventListener('click', abrirUsuarioCadastro);
    document.querySelector('.abrir-usuario-desktop').addEventListener('click', abrirUsuarioDesktop);
}