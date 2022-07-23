const Sequelize = require('sequelize');
const config = require("../config/database")
const db = new Sequelize(config)

const autentication = async (req, res, next) => {
    // LIMPEZA DE COOKIES
    res.clearCookie('usuario')
    res.clearCookie('admin')

    // CAPTURA DO EMAIL E SENHA ENVIADOS
    const { email, senha } = await req.body

    // BUSCA POR USUÁRIO RELACIONADO AOS DADOS ENVIADOS
    const usuarioLogado = await db.query('SELECT * FROM usuarios', {
        type: Sequelize.QueryTypes.SELECT
    })
    if (usuarioLogado.email === email) {
        if (usuarioLogado.senha === senha) {
            return usuarioLogado
        }
    }

    if (!usuarioLogado.length) {
        res.render('login', {
            titulo: 'Ops!',
            subtitulo: 'Algo deu errado...!',
        })
    }

    let usuario = await db.query('SELECT * FROM usuarios')

    // DEFINIMOS OS COOKIES USUÁRIO (OBJETO) E ADMIN (BOOLEANO)
    res.cookie('usuario', usuario)
    res.cookie('admin', `${(usuarioLogado[0]["userAdmin"] === 1)}`)

    next()

    return
}

module.exports = autentication