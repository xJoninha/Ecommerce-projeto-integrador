const admin = async (req, res, next) => {
    
    let isAdmin = req.cookies.admin;
    let logado = JSON.stringify(req.cookies.usuario) 
    console.log(`Middleware admin ?: ${isAdmin}`)
    console.log(`Middleware Logado ?: ${logado}`)

    if (isAdmin === "false" || logado === "false") {
        return res.status(200).redirect("../")
    }

    // if (isAdmin === "false") {
    //     return res.render("login", {
    //         titulo: "Ops!",
    //         subtitulo: "Você não tem permissão para ver essa tela...",
    //         usuarioLogado: req.cookies.usuario,
    //         usuarioAdmin: req.cookies.admin
    //     })
    // }
    next()
}

module.exports = admin;