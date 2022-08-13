const { json } = require('sequelize');
const Sequelize = require('sequelize');
const config = require("../config/database")

const db = require('../models')
// const sequelize = db.sequelize
const User = db.User

const controller = {};
// OK
controller.register = (req, res) => {
  res.render('cadastro', {
      titulo: 'Formulário de Registro'
  })
};
// OK  - warning
controller.add = async (req, res) => {   
  const { nome, sobrenome, nascimento, email, senha, cpf, telefone } = req.body

  const emailVerified = User.findAll({ where: { email }})
    .then(async verified => {
      if(emailVerified) {
        const usuario = await User.create({ nome, sobrenome, nascimento, email, senha, cpf, telefone })
        if (usuario)
          res.render('login')
      }
    })
    .catch(error => {
      res.render("errorPage")
      console.log("Deu Erro Gente, Me Socorre !!!")
    })
};
// OK - warning
controller.login = (req, res) => {
  const usuario = User.findAll()
  res.render("login", {
    titulo: "Login",
    subtitulo: "Preencha os campos para acessar seu perfil!",
    usuario,
    usuarioLogado: req.cookies.usuario,
    usuarioAdmin: req.cookies.admin
  })
};
controller.autentication = (req, res) => {
  res.redirect('../')
};
controller.logout = (req, res) => {
  res.clearCookie('usuario').clearCookie('admin').redirect('../../')
};
// OK
controller.allUsers = async (req, res) => {
  const usuarios = await User.findAll();
  res.render('usuarios', {
    titulo: 'Usuários',
    subtitulo: 'Listagem de Usuários',
    usuarios,
  })
};
// OK
controller.userDetail = async (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(usuario => {
      res.render('usuario', {
        titulo: `Detalhes do usuario`,
        subtitulo: `Usuário id: ${id}`,
        usuario: usuario,
      })
    })
};
// OK
controller.destroy = async (req, res) => {
  const { id } = req.params
  const usuario = await User.destroy({ where: { id } })
  if (usuario) 
    res.redirect('/usuarios')
  else
    res.json({ status: 500, msg: 'Prepara o extintor!'})
};
// OK
controller.update = (req, res) => {
  const { id }= req.params
  User.findByPk(id)
    .then(usuario => {
      res.render('usuarioUpdate', {
        titulo: "Atualizar perfil",
        usuario
      })
    })
};
// OK
controller.edit = async (req, res) => {
  const { id } = req.params
  let { nome, sobrenome, nascimento, email, senha, cpf, telefone } = req.body
  // telefone = telefone.replace(/\D/g, '')
  const usuario = await User.update(
    { nome, sobrenome, nascimento, email, senha, cpf, telefone },
    { where: { id } }
  )
  res.redirect('../../usuarios')
};

module.exports = controller;