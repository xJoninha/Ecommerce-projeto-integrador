const db = require('../models')
const User = db.User

const autentication = async (req, res, next) => {
    // LIMPEZA DE COOKIES
    res.clearCookie('usuario')
    res.clearCookie('admin')

    // CAPTURA DO EMAIL E SENHA ENVIADOS
    const { email, senha } = await req.body

    // BUSCA POR USUÁRIO RELACIONADO AOS DADOS ENVIADOS
    const usuarioLogado = await User.findOne({ where: { email, senha}})
    // console.log(usuarioLogado)

    if(usuarioLogado) {
        res.cookie('usuario', usuarioLogado)
        res.cookie('admin', usuarioLogado.userAdmin === 1)
        
        next()
    } else {
        res.render('errorPage', {
            title: 'Solicitação negada!',
            message: 'Usuario não cadastrado | email e/ou senha incorretos!',
        })
    }
}

module.exports = autentication;