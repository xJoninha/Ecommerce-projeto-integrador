const db = require('../models')
const User = db.User

const autentication = async (req, res, next) => {
    // LIMPEZA DE COOKIES
    res.clearCookie('usuario')
    res.clearCookie('admin')

    // CAPTURA DO EMAIL E SENHA ENVIADOS
    const { email, senha } = await req.body

    // BUSCA POR USUÁRIO RELACIONADO AOS DADOS ENVIADOS
    const usuarioLogado = User.findAll({ where: { email, senha }})
    usuario2 => {
        if (usuarioLogado.email === email && usuarioLogado.senha === senha) {
            return usuario2
        }
    }
    if (!usuarioLogado) {
        res.render('errorPage', {
            title: 'Solicitação negada!',
            message: 'Usuario não cadastrado | email e/ou senha incorretos!',
        })
        console.log('Apenas admin !!')
    }




    // if (!usuarioLogado) {
    //     res.redirect('../../')
    //     return usuarioLogado
    // } else {
    //     res.render('errorPage', {
    //         title: 'Solicitação negada!',
    //         message: 'Usuario não cadastrado | email e/ou senha incorretos!',
    //     })
    //     console.log('Apenas admin !!')
    // }

    // CASO NÃO ENCONTREMOS UM USUÁRIO COM ESSES DADOS
    // if (!usuarioLogado) {
    //     res.render('errorPage', {
    //         title: 'Solicitação negada!',
    //         message: 'Usuario não cadastrado | email e/ou senha incorretos!',
    //     })
    //     console.log('Apenas admin !!')
    // }

    let usuario = usuarioLogado;
    console.log(`Resultado console usuario: ${usuario}`)

    // DEFINIMOS OS COOKIES USUÁRIO (OBJETO) E ADMIN (BOOLEANO)
    res.cookie('usuario', usuario)
    res.cookie('admin', `${(usuarioLogado.userAdmin === 1)}`)

    next()

    return
}

module.exports = autentication;